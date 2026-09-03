# Chiklati — Tech Consulting Website

React + Vite + TailwindCSS static website.

## Local development

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Deploying to Amazon EC2

This is a static site — no backend or database. The deploy script builds
the project and serves the static files directly with nginx (no systemd
service or running Node process needed).

### Prerequisites

- Amazon Linux 2023 EC2 instance
- Security group: TCP 22 (from your IP), TCP 80 + 443 (from anywhere)
- Domain pointing to the EC2 public IP (A record)

### Deploy

```bash
cd ~/chiklati
chmod +x deploy-ec2.sh
./deploy-ec2.sh chiklati.example.com
```

The domain is **required** — the script creates an nginx config in
`/etc/nginx/conf.d/chiklati.conf` scoped to that domain. It does **not**
overwrite the main `nginx.conf`, so it is safe to run alongside other
projects on the same server.

### Add HTTPS

```bash
sudo dnf install -y certbot python3-certbot-nginx
sudo certbot --nginx -d chiklati.example.com -d www.chiklati.example.com
```

Choose option **2** (redirect HTTP to HTTPS) when prompted.

```bash
sudo systemctl enable --now certbot-renew.timer
```

### Updating later

First copy the updated code to the server (from your local machine):

```bash
scp -r /path/to/chiklati ec2-user@EC2_PUBLIC_IP:~/
```

Then SSH in and re-run the deploy script:

```bash
cd ~/chiklati
./deploy-ec2.sh chiklati.com
```

It will `npm ci`, rebuild, fix SELinux/permissions, and reload nginx.
The `chmod 755` and `chcon` fixes are persistent on the server, so they
won't need to be redone — but the script applies them automatically
anyway in case of a fresh server.

### SELinux and permission notes (Amazon Linux 2023)

Amazon Linux 2023 enforces SELinux by default. Two issues can prevent
nginx from serving the static files:

1. **Home directory permissions** — `/home/ec2-user` defaults to `700`
   (drwx------), which blocks nginx from traversing to the `dist/`
   directory. The deploy script fixes this with `chmod 755`.

2. **SELinux context** — Files in `/home/ec2-user/` get the
   `user_home_t` context, which nginx cannot read. The deploy script
   fixes this with `chcon -Rt httpd_sys_content_t`.

If you ever see `500 Internal Server Error` with `Permission denied` in
the nginx error log, run these manually:

```bash
sudo chmod 755 /home/ec2-user
sudo chcon -Rt httpd_sys_content_t /home/ec2-user/chiklati/dist
sudo systemctl reload nginx
```

## Setting up multiple projects on the same EC2 instance

See the DPS or Skyline Empire README for a full guide on deploying
multiple projects on a single EC2 server. Summary:

1. Deploy DPS first (installs nginx + nvm/Node)
2. Clean up nginx default config (remove `default_server` block)
3. Deploy Skyline Empire: `sudo ./deploy/deploy.sh skyline-empire.duckdns.org`
4. Deploy Chiklati: `./deploy-ec2.sh chiklati.example.com`
5. Add HTTPS for each domain with certbot

```
Internet → :80/:443 nginx
               ├── dreamhighpublicschool.in    → 127.0.0.1:3000  (dreamhigh, Next.js)
               ├── skyline-empire.duckdns.org  → 127.0.0.1:4173  (myairline, Node.js)
               └── chiklati.example.com        → /home/ec2-user/chiklati/dist (static files)

SSL: Let's Encrypt (auto-renewing via certbot-renew.timer)
```
