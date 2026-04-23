# StanB Store — Backend Setup & Deployment Guide

## Project Structure
```
stanb-store/
├── server.js          ← Express backend (API + static file server)
├── package.json
├── orders.db          ← SQLite database (auto-created on first run)
├── public/            ← All your HTML, CSS, JS, logo files
│   ├── index.html
│   ├── products.html
│   ├── cart.html
│   ├── checkout.html
│   ├── contact.html
│   ├── styles.css
│   ├── script.js
│   └── logo.svg
└── README.md
```

---

## API Endpoints

| Method | Path              | Description                       |
|--------|-------------------|-----------------------------------|
| GET    | /api/products     | List all products (supports ?category=, ?featured=true, ?q=) |
| GET    | /api/products/:id | Single product                    |
| POST   | /api/orders       | Place an order (prices validated server-side) |
| GET    | /api/orders       | List all orders (for admin use)   |
| GET    | /api/orders/:id   | Single order by ID                |

### POST /api/orders — Request Body
```json
{
  "name": "Sambath Chun",
  "phone": "0715239670",
  "email": "you@example.com",
  "address": "Street, city, Cambodia",
  "payment": "Cash on delivery",
  "items": [
    { "id": "wireless-mouse", "qty": 2 },
    { "id": "keyboard", "qty": 1 }
  ]
}
```

---

## Run Locally

```bash
npm install
npm start
# → http://localhost:3000
```

---

## Deploy to Render (Free Tier — Recommended)

1. Push this folder to a GitHub repo:
   ```bash
   git init
   git add .
   git commit -m "Initial StanB Store backend"
   git remote add origin https://github.com/YOUR_USER/stanb-store.git
   git push -u origin main
   ```

2. Go to **https://render.com** → New → Web Service
3. Connect your GitHub repo
4. Settings:
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Environment:** Node
5. Click **Deploy** — your store will be live at `https://stanb-store.onrender.com`

> ⚠️ Render's free tier spins down after inactivity. Upgrade to Starter ($7/mo) for always-on.

---

## Deploy to Railway (Easiest)

1. Go to **https://railway.app** → New Project → Deploy from GitHub
2. Select your repo
3. Railway auto-detects Node.js and runs `npm start`
4. Your site is live in ~2 minutes at a `*.up.railway.app` URL

---

## Deploy to a VPS (DigitalOcean / Hetzner)

```bash
# On your server:
git clone https://github.com/YOUR_USER/stanb-store.git
cd stanb-store
npm install
npm install -g pm2

# Start with PM2 (keeps it running after logout)
pm2 start server.js --name stanb-store
pm2 save
pm2 startup

# Point Nginx to port 3000:
# /etc/nginx/sites-available/stanb
# server {
#   listen 80;
#   server_name yourdomain.com;
#   location / { proxy_pass http://localhost:3000; }
# }
```

---

## View Orders (Admin)

After deployment, visit:
```
https://your-domain.com/api/orders
```
This returns all orders as JSON. To protect it in the future, add an API key check in `server.js`.

---

## SQLite Persistence on Render/Railway

Cloud platforms use ephemeral disks — `orders.db` resets on redeploy.
To persist orders permanently, replace SQLite with a free hosted database:

- **Turso** (SQLite-compatible, free) — https://turso.tech
- **Neon** (PostgreSQL, free) — https://neon.tech
- **PlanetScale** (MySQL, free) — https://planetscale.com

Contact chunsambath071@gmail.com or Telegram @shienshivora for help with this upgrade.
