#!/usr/bin/env bash
set -Eeuo pipefail

# Deploy pre-built Chiklati app to EC2 — no npm install or build on the server.
# Chiklati is a static Vite/React app served directly by nginx.
# Usage: ./deploy-prebuilt.sh <ec2-host> [ssh-key-path]
# Example: ./deploy-prebuilt.sh 13.127.227.61 ~/Downloads/ChiklatiEC2.pem

HOST="${1:-}"
KEY="${2:-}"
REMOTE_USER="ec2-user"
REMOTE_DIR="/home/ec2-user/chiklati"
DOMAIN="${3:-chiklati.in}"

if [[ -z "$HOST" ]]; then
  echo "Usage: $0 <ec2-host> [ssh-key-path] [domain]"
  echo "Example: $0 13.127.227.61 ~/Downloads/ChiklatiEC2.pem chiklati.in"
  exit 1
fi

SSH_OPTS=""
if [[ -n "$KEY" ]]; then
  SSH_OPTS="-i $KEY"
fi

echo "==> Building locally..."
npm run build

echo "==> Creating deployment tarball..."
TARBALL="/tmp/chiklati-deploy.tar.gz"
tar -czf "$TARBALL" dist/

SIZE=$(du -sh "$TARBALL" | cut -f1)
echo "==> Tarball size: $SIZE"

echo "==> Uploading to $HOST..."
scp $SSH_OPTS "$TARBALL" "$REMOTE_USER@$HOST:/tmp/chiklati-deploy.tar.gz"

echo "==> Extracting and configuring nginx on server..."
ssh $SSH_OPTS "$REMOTE_USER@$HOST" bash -s <<EOF
set -e

echo "  Backing up current deployment..."
mv $REMOTE_DIR/dist ${REMOTE_DIR}/dist.backup.\$(date +%s) 2>/dev/null || true

echo "  Extracting..."
mkdir -p $REMOTE_DIR
tar -xzf /tmp/chiklati-deploy.tar.gz -C $REMOTE_DIR
rm /tmp/chiklati-deploy.tar.gz

echo "  Fixing SELinux context..."
sudo chcon -Rt httpd_sys_content_t $REMOTE_DIR/dist 2>/dev/null || true

echo "  Ensuring home directory is traversable by nginx..."
sudo chmod 755 /home/ec2-user 2>/dev/null || true

echo "  Rewriting nginx config..."
sudo tee /etc/nginx/conf.d/chiklati.conf >/dev/null <<NGINX
server {
    listen 80;
    listen [::]:80;
    server_name $DOMAIN www.$DOMAIN;
    root $REMOTE_DIR/dist;
    index index.html;

    location / {
        try_files \\\$uri \\\$uri/ /index.html;
    }

    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
NGINX

echo "  Testing and reloading nginx..."
sudo nginx -t
sudo systemctl reload nginx

echo "  Waiting for site to respond..."
for i in \$(seq 1 10); do
  HTTP_CODE=\$(curl -s -o /dev/null -w "%{http_code}" -H "Host: $DOMAIN" http://127.0.0.1/ 2>/dev/null || echo "000")
  if [[ "\$HTTP_CODE" != "000" ]]; then
    echo "  Chiklati is running! HTTP status: \$HTTP_CODE"
    exit 0
  fi
  sleep 1
done

echo "  Site did not respond in 10 seconds."
sudo journalctl -u nginx -n 20 --no-pager
exit 1
EOF

echo "==> Done!"
