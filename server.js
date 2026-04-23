const express = require('express');
const cors = require('cors');
const path = require('path');
const Database = require('better-sqlite3');

const app = express();
const PORT = process.env.PORT || 3000;

// ── Database ─────────────────────────────────────────────────────────────────
const db = new Database(path.join(__dirname, 'orders.db'));

db.exec(`
  CREATE TABLE IF NOT EXISTS orders (
    id        INTEGER PRIMARY KEY AUTOINCREMENT,
    name      TEXT    NOT NULL,
    phone     TEXT    NOT NULL,
    email     TEXT    NOT NULL,
    address   TEXT    NOT NULL,
    payment   TEXT    NOT NULL,
    items     TEXT    NOT NULL,   -- JSON
    subtotal  REAL    NOT NULL,
    status    TEXT    NOT NULL DEFAULT 'pending',
    created_at TEXT   NOT NULL DEFAULT (datetime('now'))
  );
`);

// ── Products data (single source of truth) ────────────────────────────────────
const PRODUCTS = [
  { id: 'wireless-mouse',   name: 'Wireless Mouse',      price: 29,  category: 'Input',       popularity: 98, featured: true,  image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=900&q=80', description: 'Precise movement and silent clicks for office or gaming setups.' },
  { id: 'keyboard',         name: 'Keyboard',             price: 45,  category: 'Input',       popularity: 95, featured: true,  image: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&w=900&q=80', description: 'A clean, dependable keyboard for productivity and daily typing.' },
  { id: 'webcam',           name: 'Webcam',               price: 59,  category: 'Video',       popularity: 92, featured: true,  image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=80', description: 'Sharp video quality for meetings, streaming, and content creation.' },
  { id: 'external-hard-drive', name: 'External Hard Drive', price: 89, category: 'Storage',   popularity: 97, featured: true,  image: 'https://images.unsplash.com/photo-1516245834210-c4c142787335?auto=format&fit=crop&w=900&q=80', description: 'Portable storage for backups, files, and large media libraries.' },
  { id: 'graphics-tablet',  name: 'Graphics Tablet',     price: 119, category: 'Creative',    popularity: 88, featured: false, image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80', description: 'A smooth drawing surface for digital art and design work.' },
  { id: 'lan-cable',        name: 'LAN Cable',            price: 12,  category: 'Network',     popularity: 81, featured: false, image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80', description: 'Reliable wired internet connection for stable performance.' },
  { id: 'vga-cable',        name: 'VGA Cable',            price: 10,  category: 'Display',     popularity: 70, featured: false, image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80', description: 'Classic display cable for monitors, projectors, and older systems.' },
  { id: 'projector',        name: 'Projector',            price: 349, category: 'Display',     popularity: 93, featured: false, image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80', description: 'Bright projection for presentations, lessons, and entertainment.' },
  { id: 'ethernet-adapter', name: 'Ethernet',             price: 18,  category: 'Network',     popularity: 84, featured: false, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=900&q=80', description: 'Add wired networking to modern laptops and compact devices.' },
  { id: 'bluetooth-dongle', name: 'Bluetooth Dongle',     price: 16,  category: 'Wireless',    popularity: 78, featured: false, image: 'https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=900&q=80', description: 'Quick wireless connectivity for audio and peripherals.' },
  { id: 'wifi-modem',       name: 'WiFi Modem',           price: 79,  category: 'Network',     popularity: 90, featured: false, image: 'https://images.unsplash.com/photo-1545249390-6bdfa286032f?auto=format&fit=crop&w=900&q=80', description: 'Fast, dependable internet access for home and office use.' },
  { id: 'dvi-cable',        name: 'DVI Cable',            price: 14,  category: 'Display',     popularity: 67, featured: false, image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=900&q=80', description: 'Display connection for compatible monitors and systems.' },
  { id: 'ram',              name: 'RAM',                  price: 69,  category: 'Performance', popularity: 99, featured: false, image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=900&q=80', description: 'Memory upgrade for smoother multitasking and faster performance.' },
  { id: 'serial-cable',     name: 'Serial Cable',         price: 11,  category: 'Legacy',      popularity: 52, featured: false, image: 'https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=900&q=80', description: 'Useful for legacy equipment and specialty hardware connections.' },
  { id: 'card-reader',      name: 'Card Reader',          price: 24,  category: 'Storage',     popularity: 83, featured: false, image: 'https://images.unsplash.com/photo-1625794213270-9a5d4f8b20bd?auto=format&fit=crop&w=900&q=80', description: 'Transfer photos and files quickly from memory cards to devices.' },
  { id: 'display-port',     name: 'Display Port',         price: 19,  category: 'Display',     popularity: 86, featured: false, image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=80', description: 'High-quality video output for modern monitors and graphics work.' },
];

// ── Middleware ────────────────────────────────────────────────────────────────
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// ── API: Products ─────────────────────────────────────────────────────────────
app.get('/api/products', (req, res) => {
  const { category, featured, q } = req.query;
  let result = [...PRODUCTS];

  if (category && category !== 'All') {
    result = result.filter(p => p.category === category);
  }
  if (featured === 'true') {
    result = result.filter(p => p.featured);
  }
  if (q) {
    const query = q.toLowerCase();
    result = result.filter(p =>
      `${p.name} ${p.category} ${p.description}`.toLowerCase().includes(query)
    );
  }

  res.json({ products: result, total: result.length });
});

app.get('/api/products/:id', (req, res) => {
  const product = PRODUCTS.find(p => p.id === req.params.id);
  if (!product) return res.status(404).json({ error: 'Product not found' });
  res.json(product);
});

// ── API: Orders ───────────────────────────────────────────────────────────────
app.post('/api/orders', (req, res) => {
  const { name, phone, email, address, payment, items } = req.body;

  // Validation
  if (!name || !phone || !email || !address || !payment) {
    return res.status(400).json({ error: 'All shipping fields are required.' });
  }
  if (!Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ error: 'Cart is empty.' });
  }

  // Validate & price items server-side (never trust client prices)
  let subtotal = 0;
  const resolvedItems = [];
  for (const item of items) {
    const product = PRODUCTS.find(p => p.id === item.id);
    if (!product) return res.status(400).json({ error: `Unknown product: ${item.id}` });
    const qty = Math.max(1, parseInt(item.qty) || 1);
    subtotal += product.price * qty;
    resolvedItems.push({ id: product.id, name: product.name, price: product.price, qty });
  }

  const stmt = db.prepare(`
    INSERT INTO orders (name, phone, email, address, payment, items, subtotal)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `);
  const result = stmt.run(name, phone, email, address, payment, JSON.stringify(resolvedItems), subtotal);

  console.log(`📦 New order #${result.lastInsertRowid} from ${name} — $${subtotal.toFixed(2)}`);

  res.status(201).json({
    success: true,
    orderId: result.lastInsertRowid,
    subtotal,
    message: 'Order placed successfully. We will contact you soon.'
  });
});

// ── API: Admin — list orders (simple, no auth for now) ────────────────────────
app.get('/api/orders', (req, res) => {
  const orders = db.prepare('SELECT * FROM orders ORDER BY created_at DESC').all();
  const parsed = orders.map(o => ({ ...o, items: JSON.parse(o.items) }));
  res.json({ orders: parsed, total: parsed.length });
});

app.get('/api/orders/:id', (req, res) => {
  const order = db.prepare('SELECT * FROM orders WHERE id = ?').get(req.params.id);
  if (!order) return res.status(404).json({ error: 'Order not found' });
  res.json({ ...order, items: JSON.parse(order.items) });
});

// ── Catch-all: serve index.html for any unknown route ─────────────────────────
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// ── Start ─────────────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`✅  StanB Store running at http://localhost:${PORT}`);
  console.log(`📦  Orders DB: ${path.join(__dirname, 'orders.db')}`);
  console.log(`📡  API endpoints:`);
  console.log(`     GET  /api/products`);
  console.log(`     GET  /api/products/:id`);
  console.log(`     POST /api/orders`);
  console.log(`     GET  /api/orders`);
  console.log(`     GET  /api/orders/:id`);
});
