#!/usr/bin/env bash
set -Eeuo pipefail

# Amazon Linux usage:
#   chmod +x deploy-ec2.sh
#   ./deploy-ec2.sh chiklati.example.com

DOMAIN="${1:-}"
if [[ -z "$DOMAIN" ]]; then
  echo "Usage: $0 <domain>  (e.g. ./deploy-ec2.sh chiklati.example.com)" >&2
  exit 1
fi
if [[ ! "$DOMAIN" =~ ^[A-Za-z0-9.-]+$ ]]; then
  echo "Invalid domain: $DOMAIN" >&2
  exit 1
fi

APP_DIR="${APP_DIR:-/home/ec2-user/chiklati}"
APP_USER="${APP_USER:-ec2-user}"
SERVICE_NAME="chiklati"
NODE_MAJOR="22"
NVM_VERSION="v0.40.3"

log() {
  printf '\n\033[1;36m==> %s\033[0m\n' "$1"
}

if [[ ! -f "$APP_DIR/package.json" ]]; then
  echo "package.json was not found in $APP_DIR" >&2
  exit 1
fi

if ! command -v sudo >/dev/null 2>&1; then
  echo "sudo is required." >&2
  exit 1
fi

log "Installing operating-system packages"
if command -v dnf >/dev/null 2>&1; then
  sudo dnf install -y git tar gzip xz nginx
elif command -v yum >/dev/null 2>&1; then
  sudo yum install -y git tar gzip xz nginx
else
  echo "This script expects Amazon Linux with dnf or yum." >&2
  exit 1
fi

if ! command -v curl >/dev/null 2>&1; then
  echo "curl is required but was not provided by the operating system." >&2
  exit 1
fi

export NVM_DIR="/home/$APP_USER/.nvm"

if [[ ! -s "$NVM_DIR/nvm.sh" ]]; then
  log "Installing NVM for $APP_USER"
  sudo -u "$APP_USER" env HOME="/home/$APP_USER" bash -c \
    "curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/$NVM_VERSION/install.sh | bash"
fi

# shellcheck source=/dev/null
source "$NVM_DIR/nvm.sh"

log "Installing and selecting Node.js $NODE_MAJOR"
nvm install "$NODE_MAJOR"
nvm alias default "$NODE_MAJOR"
nvm use "$NODE_MAJOR"

NODE_BIN="$(dirname "$(command -v node)")"
NPM_BIN="$(command -v npm)"

log "Installing project dependencies"
sudo chown -R "$APP_USER:$APP_USER" "$APP_DIR"
cd "$APP_DIR"
sudo -u "$APP_USER" env \
  HOME="/home/$APP_USER" \
  PATH="$NODE_BIN:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin" \
  "$NPM_BIN" ci

log "Building the production application"
sudo -u "$APP_USER" env \
  HOME="/home/$APP_USER" \
  NODE_ENV=production \
  PATH="$NODE_BIN:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin" \
  "$NPM_BIN" run build

BUILD_DIR="$APP_DIR/dist"
if [[ ! -d "$BUILD_DIR" ]]; then
  echo "Build output directory $BUILD_DIR was not found. Check vite.config.js for a custom build path." >&2
  exit 1
fi

log "Configuring Nginx"
sudo tee /etc/nginx/conf.d/chiklati.conf >/dev/null <<EOF
server {
    listen 80;
    listen [::]:80;
    server_name $DOMAIN www.$DOMAIN;
    root $BUILD_DIR;
    index index.html;

    location / {
        try_files \$uri \$uri/ /index.html;
    }

    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
EOF

if command -v setsebool >/dev/null 2>&1; then
  sudo setsebool -P httpd_can_network_connect 1 || true
  sudo setsebool -P httpd_read_user_content 1 || true
fi

# Fix SELinux context so nginx can read the build output
if command -v chcon >/dev/null 2>&1; then
  sudo chcon -Rt httpd_sys_content_t "$BUILD_DIR" 2>/dev/null || true
fi

# Ensure the home directory is traversable by nginx (Amazon Linux defaults to 700)
if [[ -d "/home/$APP_USER" ]]; then
  sudo chmod 755 "/home/$APP_USER"
fi

sudo nginx -t

log "Reloading Nginx"
sudo systemctl enable --now nginx
sudo systemctl reload nginx

log "Checking the local website response"
for attempt in {1..15}; do
  if curl -fsS -H "Host: $DOMAIN" http://127.0.0.1/ >/dev/null 2>&1; then
    echo "Chiklati is running successfully."
    echo "Open: http://$DOMAIN"
    echo "Add HTTPS with: sudo certbot --nginx -d $DOMAIN -d www.$DOMAIN"
    exit 0
  fi
  sleep 2
done

echo "The site did not respond within 30 seconds." >&2
sudo journalctl -u nginx -n 80 --no-pager || true
exit 1
