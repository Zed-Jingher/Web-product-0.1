const PRODUCTS = [
  {
    id: 'wireless-mouse',
    name: 'Wireless Mouse',
    price: 29,
    category: 'Input',
    popularity: 98,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=900&q=80',
    description: 'Precise movement and silent clicks for office or gaming setups.',
    featured: true,
  },
  {
    id: 'keyboard',
    name: 'Keyboard',
    price: 45,
    category: 'Input',
    popularity: 95,
    image: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&w=900&q=80',
    description: 'A clean, dependable keyboard for productivity and daily typing.',
    featured: true,
  },
  {
    id: 'webcam',
    name: 'Webcam',
    price: 59,
    category: 'Video',
    popularity: 92,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=80',
    description: 'Sharp video quality for meetings, streaming, and content creation.',
    featured: true,
  },
  {
    id: 'external-hard-drive',
    name: 'External Hard Drive',
    price: 89,
    category: 'Storage',
    popularity: 97,
    image: 'https://images.unsplash.com/photo-1516245834210-c4c142787335?auto=format&fit=crop&w=900&q=80',
    description: 'Portable storage for backups, files, and large media libraries.',
    featured: true,
  },
  {
    id: 'graphics-tablet',
    name: 'Graphics Tablet',
    price: 119,
    category: 'Creative',
    popularity: 88,
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
    description: 'A smooth drawing surface for digital art and design work.',
  },
  {
    id: 'lan-cable',
    name: 'LAN Cable',
    price: 12,
    category: 'Network',
    popularity: 81,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80',
    description: 'Reliable wired internet connection for stable performance.',
  },
  {
    id: 'vga-cable',
    name: 'VGA Cable',
    price: 10,
    category: 'Display',
    popularity: 70,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
    description: 'Classic display cable for monitors, projectors, and older systems.',
  },
  {
    id: 'projector',
    name: 'Projector',
    price: 349,
    category: 'Display',
    popularity: 93,
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80',
    description: 'Bright projection for presentations, lessons, and entertainment.',
  },
  {
    id: 'ethernet-adapter',
    name: 'Ethernet',
    price: 18,
    category: 'Network',
    popularity: 84,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=900&q=80',
    description: 'Add wired networking to modern laptops and compact devices.',
  },
  {
    id: 'bluetooth-dongle',
    name: 'Bluetooth Dongle',
    price: 16,
    category: 'Wireless',
    popularity: 78,
    image: 'https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=900&q=80',
    description: 'Quick wireless connectivity for audio and peripherals.',
  },
  {
    id: 'wifi-modem',
    name: 'WiFi Modem',
    price: 79,
    category: 'Network',
    popularity: 90,
    image: 'https://images.unsplash.com/photo-1545249390-6bdfa286032f?auto=format&fit=crop&w=900&q=80',
    description: 'Fast, dependable internet access for home and office use.',
  },
  {
    id: 'dvi-cable',
    name: 'DVI Cable',
    price: 14,
    category: 'Display',
    popularity: 67,
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=900&q=80',
    description: 'Display connection for compatible monitors and systems.',
  },
  {
    id: 'ram',
    name: 'RAM',
    price: 69,
    category: 'Performance',
    popularity: 99,
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=900&q=80',
    description: 'Memory upgrade for smoother multitasking and faster performance.',
  },
  {
    id: 'serial-cable',
    name: 'Serial Cable',
    price: 11,
    category: 'Legacy',
    popularity: 52,
    image: 'https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=900&q=80',
    description: 'Useful for legacy equipment and specialty hardware connections.',
  },
  {
    id: 'card-reader',
    name: 'Card Reader',
    price: 24,
    category: 'Storage',
    popularity: 83,
    image: 'https://images.unsplash.com/photo-1625794213270-9a5d4f8b20bd?auto=format&fit=crop&w=900&q=80',
    description: 'Transfer photos and files quickly from memory cards to devices.',
  },
  {
    id: 'display-port',
    name: 'Display Port',
    price: 19,
    category: 'Display',
    popularity: 86,
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=80',
    description: 'High-quality video output for modern monitors and graphics work.',
  },
];

const CATEGORY_META = {
  All: { icon: '✦' },
  Input: { icon: '⌘' },
  Video: { icon: '◉' },
  Storage: { icon: '▣' },
  Creative: { icon: '✎' },
  Network: { icon: '⌁' },
  Display: { icon: '▭' },
  Wireless: { icon: '◌' },
  Performance: { icon: '⚡' },
  Legacy: { icon: '⟲' },
};

const CART_KEY = 'stanb_cart_v1';
const WISHLIST_KEY = 'stanb_wishlist_v1';

const FILTER_STATE = {
  search: '',
  category: 'All',
  sort: 'featured',
  favoritesOnly: false,
};

const normalize = (value) => value.trim().toLowerCase();

function safeParse(key, fallback) {
  try {
    const parsed = JSON.parse(localStorage.getItem(key));
    return parsed ?? fallback;
  } catch {
    return fallback;
  }
}

const getCart = () => safeParse(CART_KEY, {});
const setCart = (cart) => localStorage.setItem(CART_KEY, JSON.stringify(cart));
const getWishlist = () => safeParse(WISHLIST_KEY, []);
const setWishlist = (list) => localStorage.setItem(WISHLIST_KEY, JSON.stringify(list));
const money = (value) => `$${value.toFixed(2)}`;
const getProduct = (id) => PRODUCTS.find((product) => product.id === id);
const isWishlisted = (id) => getWishlist().includes(id);

const cartCount = () => Object.values(getCart()).reduce((sum, qty) => sum + qty, 0);
const favCount = () => getWishlist().length;

const cartItems = () => {
  const cart = getCart();
  return Object.entries(cart)
    .map(([id, qty]) => ({ ...getProduct(id), qty }))
    .filter(Boolean);
};

const cartTotal = () => cartItems().reduce((sum, item) => sum + item.price * item.qty, 0);

const categories = () => ['All', ...new Set(PRODUCTS.map((product) => product.category))];

const sortProducts = (items) => {
  const list = [...items];
  switch (FILTER_STATE.sort) {
    case 'price-asc':
      return list.sort((a, b) => a.price - b.price);
    case 'price-desc':
      return list.sort((a, b) => b.price - a.price);
    case 'featured':
    default:
      return list.sort((a, b) => b.popularity - a.popularity);
  }
};

const filteredProducts = () => {
  const query = normalize(FILTER_STATE.search);
  return sortProducts(
    PRODUCTS.filter((product) => {
      const matchesCategory = FILTER_STATE.category === 'All' || product.category === FILTER_STATE.category;
      const haystack = `${product.name} ${product.category} ${product.description}`.toLowerCase();
      const matchesSearch = !query || haystack.includes(query);
      const matchesFavorites = !FILTER_STATE.favoritesOnly || isWishlisted(product.id);
      return matchesCategory && matchesSearch && matchesFavorites;
    })
  );
};

const featuredProducts = () => sortProducts(PRODUCTS.filter((product) => product.featured));

function addToCart(id, amount = 1) {
  const cart = getCart();
  cart[id] = (cart[id] || 0) + amount;
  setCart(cart);
  syncCartUI();
  openCart();
}

function updateQty(id, amount) {
  const cart = getCart();
  const nextQty = (cart[id] || 0) + amount;
  if (nextQty <= 0) {
    delete cart[id];
  } else {
    cart[id] = nextQty;
  }
  setCart(cart);
  syncCartUI();
}

function removeItem(id) {
  const cart = getCart();
  delete cart[id];
  setCart(cart);
  syncCartUI();
}

function toggleWishlist(id) {
  const list = getWishlist();
  const index = list.indexOf(id);
  if (index >= 0) {
    list.splice(index, 1);
  } else {
    list.push(id);
  }
  setWishlist(list);
  syncCartUI();
}

function renderProductCard(product) {
  const saved = isWishlisted(product.id);
  return `
    <article class="product-card" data-product-id="${product.id}">
      <button class="wishlist-btn ${saved ? 'saved' : ''}" type="button" data-toggle-wishlist="${product.id}" aria-label="Toggle wishlist">
        ${saved ? '♥' : '♡'}
      </button>
      <img src="${product.image}" alt="${product.name}">
      <div class="product-content">
        <span class="eyebrow">${product.category}</span>
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <div class="product-meta">
          <strong>${money(product.price)}</strong>
          <span class="meta-popularity">Popularity ${product.popularity}</span>
        </div>
        <div class="card-actions">
          <button class="ghost-btn" type="button" data-open-product="${product.id}">Details</button>
          <button class="ghost-btn" type="button" data-add-to-cart="${product.id}">Add to Cart</button>
        </div>
      </div>
    </article>
  `;
}

function renderProductLists() {
  document.querySelectorAll('[data-product-list]').forEach((container) => {
    const mode = container.dataset.productList;
    const list = mode === 'featured' ? featuredProducts() : filteredProducts();
    container.innerHTML = list.length
      ? list.map(renderProductCard).join('')
      : '<div class="empty-state">No products match your filters. Try another search or category.</div>';
  });
}

function renderCategoryFilters() {
  const container = document.querySelector('[data-category-filters]');
  if (!container) return;
  container.innerHTML = categories()
    .map((category) => {
      const meta = CATEGORY_META[category] || { icon: '•' };
      return `
        <button
          type="button"
          class="sidebar-chip ${FILTER_STATE.category === category ? 'active' : ''}"
          data-category-choice="${category}"
        >
          <span class="chip-icon">${meta.icon}</span>
          <span>${category}</span>
        </button>
      `;
    })
    .join('');
}

function renderSearchSuggestions() {
  const container = document.querySelector('[data-search-suggestions]');
  if (!container) return;
  const query = normalize(FILTER_STATE.search);
  if (!query) {
    container.innerHTML = '';
    container.classList.remove('open');
    return;
  }

  const matches = PRODUCTS.filter((product) => {
    const haystack = `${product.name} ${product.category} ${product.description}`.toLowerCase();
    return haystack.includes(query);
  })
    .slice(0, 5);

  if (!matches.length) {
    container.innerHTML = '<div class="suggestion-empty">No instant matches found.</div>';
    container.classList.add('open');
    return;
  }

  container.innerHTML = matches
    .map(
      (product) => `
        <button class="suggestion-item" type="button" data-suggestion-id="${product.id}">
          <img src="${product.image}" alt="${product.name}">
          <span>
            <strong>${product.name}</strong>
            <small>${product.category} - ${money(product.price)}</small>
          </span>
        </button>
      `
    )
    .join('');
  container.classList.add('open');
}

function syncResultsNote() {
  const note = document.querySelector('[data-results-note]');
  if (!note) return;
  const count = filteredProducts().length;
  const categoryLabel = FILTER_STATE.category === 'All' ? 'all categories' : FILTER_STATE.category;
  const sortLabel =
    FILTER_STATE.sort === 'featured'
      ? 'sorted by popularity'
      : FILTER_STATE.sort === 'price-asc'
        ? 'sorted by lowest price'
        : 'sorted by highest price';
  const favText = FILTER_STATE.favoritesOnly ? 'favorites only' : 'all items';
  note.textContent = `${count} result${count === 1 ? '' : 's'} in ${categoryLabel}, ${sortLabel}, ${favText}`;
}

function renderDrawerItems() {
  const container = document.querySelector('[data-cart-items]');
  if (!container) return;
  const items = cartItems();
  if (!items.length) {
    container.innerHTML = '<div class="empty-state">Your cart is empty. Add accessories to start checkout.</div>';
    return;
  }
  container.innerHTML = items
    .map(
      (item) => `
        <div class="drawer-item">
          <img src="${item.image}" alt="${item.name}">
          <div>
            <strong>${item.name}</strong>
            <div class="summary-row"><span>${item.qty} x ${money(item.price)}</span><strong>${money(item.price * item.qty)}</strong></div>
            <div class="item-controls">
              <button class="qty-btn" type="button" data-qty-dec="${item.id}">-</button>
              <button class="qty-btn" type="button" data-qty-inc="${item.id}">+</button>
              <button class="remove-btn" type="button" data-remove-item="${item.id}">Remove</button>
            </div>
          </div>
        </div>
      `
    )
    .join('');
}

function renderCartPageItems() {
  const container = document.querySelector('[data-cart-page-items]');
  if (!container) return;
  const items = cartItems();
  if (!items.length) {
    container.innerHTML = '<div class="empty-state">No items in your cart yet. Browse the catalog to add products.</div>';
    return;
  }
  container.innerHTML = items
    .map(
      (item) => `
        <article class="cart-item">
          <img src="${item.image}" alt="${item.name}">
          <div>
            <strong>${item.name}</strong>
            <p>${item.description}</p>
            <div class="item-controls">
              <button class="qty-btn" type="button" data-qty-dec="${item.id}">-</button>
              <span>${item.qty}</span>
              <button class="qty-btn" type="button" data-qty-inc="${item.id}">+</button>
              <button class="remove-btn" type="button" data-remove-item="${item.id}">Remove</button>
            </div>
          </div>
          <strong>${money(item.price * item.qty)}</strong>
        </article>
      `
    )
    .join('');
}

function renderCheckoutSummary() {
  const container = document.querySelector('[data-checkout-items]');
  if (!container) return;
  const items = cartItems();
  if (!items.length) {
    container.innerHTML = '<div class="empty-state">Your checkout summary will appear here once items are added.</div>';
    return;
  }
  container.innerHTML = items
    .map(
      (item) => `
        <div class="summary-item">
          <img src="${item.image}" alt="${item.name}">
          <div>
            <strong>${item.name}</strong>
            <div class="summary-row"><span>${item.qty} item(s)</span><strong>${money(item.price * item.qty)}</strong></div>
          </div>
        </div>
      `
    )
    .join('');
}

function renderModal() {
  const modal = document.querySelector('[data-product-modal]');
  if (!modal) return;
  const product = getProduct(modal.dataset.productId);
  if (!product) return;

  const image = modal.querySelector('[data-modal-image]');
  const category = modal.querySelector('[data-modal-category]');
  const title = modal.querySelector('[data-modal-title]');
  const description = modal.querySelector('[data-modal-description]');
  const price = modal.querySelector('[data-modal-price]');
  const popularity = modal.querySelector('[data-modal-popularity]');
  const wishlistBtn = modal.querySelector('[data-modal-wishlist]');
  const cartBtn = modal.querySelector('[data-modal-cart]');

  if (image) {
    image.src = product.image;
    image.alt = product.name;
  }
  if (category) category.textContent = product.category;
  if (title) title.textContent = product.name;
  if (description) description.textContent = product.description;
  if (price) price.textContent = money(product.price);
  if (popularity) popularity.textContent = `Popularity ${product.popularity}`;
  if (wishlistBtn) {
    const saved = isWishlisted(product.id);
    wishlistBtn.textContent = saved ? 'Remove from Favorites' : 'Add to Favorites';
    wishlistBtn.dataset.modalWishlistId = product.id;
  }
  if (cartBtn) {
    cartBtn.textContent = 'Add to Cart';
    cartBtn.dataset.modalCartId = product.id;
  }
}

function openModal(productId) {
  const modal = document.querySelector('[data-product-modal]');
  const backdrop = document.querySelector('[data-product-modal-backdrop]');
  if (!modal || !backdrop) return;
  modal.dataset.productId = productId;
  renderModal();
  backdrop.classList.remove('hidden');
  modal.classList.remove('hidden');
  document.body.classList.add('modal-open');
}

function closeModal() {
  const modal = document.querySelector('[data-product-modal]');
  const backdrop = document.querySelector('[data-product-modal-backdrop]');
  if (!modal || !backdrop) return;
  modal.classList.add('hidden');
  backdrop.classList.add('hidden');
  document.body.classList.remove('modal-open');
}

function syncTotals() {
  document.querySelectorAll('[data-cart-total]').forEach((el) => {
    el.textContent = money(cartTotal());
  });
  document.querySelectorAll('[data-cart-count]').forEach((el) => {
    el.textContent = String(cartCount());
  });
  document.querySelectorAll('[data-fav-count]').forEach((el) => {
    el.textContent = String(favCount());
  });
}

function syncControls() {
  const sortSelect = document.querySelector('[data-sort-select]');
  if (sortSelect) sortSelect.value = FILTER_STATE.sort;

  document.querySelectorAll('[data-toggle-favorites-only]').forEach((button) => {
    button.classList.toggle('active', FILTER_STATE.favoritesOnly);
  });

  const searchInput = document.querySelector('[data-product-search]');
  if (searchInput && searchInput.value !== FILTER_STATE.search) {
    searchInput.value = FILTER_STATE.search;
  }
}

function syncCartUI() {
  renderDrawerItems();
  renderCartPageItems();
  renderCheckoutSummary();
  renderProductLists();
  renderCategoryFilters();
  renderSearchSuggestions();
  syncResultsNote();
  syncTotals();
  syncControls();
  renderModal();
}

const overlay = document.querySelector('[data-cart-overlay]');
const drawer = document.querySelector('[data-cart-drawer]');

function openCart() {
  if (!overlay || !drawer) return;
  overlay.classList.add('open');
  drawer.classList.add('open');
}

function closeCart() {
  if (!overlay || !drawer) return;
  overlay.classList.remove('open');
  drawer.classList.remove('open');
}

document.addEventListener('click', (event) => {
  const addBtn = event.target.closest('[data-add-to-cart]');
  const incBtn = event.target.closest('[data-qty-inc]');
  const decBtn = event.target.closest('[data-qty-dec]');
  const removeBtn = event.target.closest('[data-remove-item]');
  const categoryBtn = event.target.closest('[data-category-choice]');
  const openBtn = event.target.closest('[data-open-cart]');
  const closeBtn = event.target.closest('[data-close-cart]');
  const openProductBtn = event.target.closest('[data-open-product]');
  const toggleWishlistBtn = event.target.closest('[data-toggle-wishlist]');
  const suggestionBtn = event.target.closest('[data-suggestion-id]');
  const modalCloseBtn = event.target.closest('[data-close-product-modal], [data-modal-close-primary]');
  const modalWishlistBtn = event.target.closest('[data-modal-wishlist]');
  const modalCartBtn = event.target.closest('[data-modal-cart]');
  const favoritesOnlyBtn = event.target.closest('[data-toggle-favorites-only]');
  const resetBtn = event.target.closest('[data-reset-filters]');
  const modalBackdrop = event.target.closest('[data-product-modal-backdrop]');

  if (addBtn) {
    addToCart(addBtn.dataset.addToCart);
    return;
  }

  if (incBtn) {
    updateQty(incBtn.dataset.qtyInc, 1);
    return;
  }

  if (decBtn) {
    updateQty(decBtn.dataset.qtyDec, -1);
    return;
  }

  if (removeBtn) {
    removeItem(removeBtn.dataset.removeItem);
    return;
  }

  if (categoryBtn) {
    FILTER_STATE.category = categoryBtn.dataset.categoryChoice;
    renderCategoryFilters();
    renderProductLists();
    renderSearchSuggestions();
    syncResultsNote();
    return;
  }

  if (openBtn) {
    openCart();
    return;
  }

  if (closeBtn || event.target === overlay) {
    closeCart();
    return;
  }

  if (openProductBtn) {
    openModal(openProductBtn.dataset.openProduct);
    return;
  }

  if (toggleWishlistBtn) {
    toggleWishlist(toggleWishlistBtn.dataset.toggleWishlist);
    return;
  }

  if (suggestionBtn) {
    const productId = suggestionBtn.dataset.suggestionId;
    const product = getProduct(productId);
    FILTER_STATE.search = product ? product.name : FILTER_STATE.search;
    syncControls();
    renderProductLists();
    renderSearchSuggestions();
    syncResultsNote();
    openModal(productId);
    return;
  }

  if (favoritesOnlyBtn) {
    FILTER_STATE.favoritesOnly = !FILTER_STATE.favoritesOnly;
    syncCartUI();
    return;
  }

  if (resetBtn) {
    FILTER_STATE.search = '';
    FILTER_STATE.category = 'All';
    FILTER_STATE.sort = 'featured';
    FILTER_STATE.favoritesOnly = false;
    syncCartUI();
    return;
  }

  if (modalCloseBtn || modalBackdrop) {
    closeModal();
    return;
  }

  if (modalWishlistBtn) {
    toggleWishlist(modalWishlistBtn.dataset.modalWishlistId);
    return;
  }

  if (modalCartBtn) {
    addToCart(modalCartBtn.dataset.modalCartId);
    return;
  }
});

document.addEventListener('input', (event) => {
  const searchInput = event.target.closest('[data-product-search]');
  if (!searchInput) return;
  FILTER_STATE.search = searchInput.value;
  renderProductLists();
  renderSearchSuggestions();
  syncResultsNote();
});

document.addEventListener('change', (event) => {
  const sortSelect = event.target.closest('[data-sort-select]');
  if (!sortSelect) return;
  FILTER_STATE.sort = sortSelect.value;
  renderProductLists();
  syncResultsNote();
});

document.addEventListener('submit', (event) => {
  const form = event.target.closest('[data-checkout-form]');
  if (!form) return;
  event.preventDefault();
  if (!cartItems().length) {
    const message = form.querySelector('[data-order-message]');
    if (message) message.textContent = 'Add products to the cart before placing an order.';
    return;
  }
  setCart({});
  syncCartUI();
  const message = form.querySelector('[data-order-message]');
  if (message) {
    message.textContent = 'Order placed successfully. We will contact you soon.';
  }
  form.reset();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeCart();
    closeModal();
  }
});

renderProductLists();
syncCartUI();
