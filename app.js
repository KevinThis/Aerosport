// AeroSport Application JavaScript

// --- PRODUCTS MOCK DATABASE ---
const PRODUCTS = [
    {
        id: 1,
        name: "Zapatillas Running Aero-Grip X",
        category: "calzado",
        price: 149.99,
        badge: "Nuevo",
        rating: 4.8,
        reviewsCount: 124,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
        description: "Diseñadas para corredores de larga distancia. Cuentan con una entresuela de fibra de carbono que proporciona un retorno de energía superior, y una malla transpirable de alta tecnología que mantiene el pie fresco.",
        sizes: [38, 39, 40, 41, 42, 43, 44],
        colors: ["#ff3b30", "#007aff", "#000000"]
    },
    {
        id: 2,
        name: "Camiseta Compresión Iso-Vent",
        category: "ropa",
        price: 45.00,
        badge: "Más Vendido",
        rating: 4.6,
        reviewsCount: 88,
        image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=600&q=80",
        description: "Optimiza tu rendimiento muscular y reduce la fatiga con nuestra camiseta de compresión. Fabricada con fibras elásticas recicladas e hilos de plata que repelen los olores corporales.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["#1c1c1e", "#3a3a3c", "#007aff"]
    },
    {
        id: 3,
        name: "Mochila Hidratación TrailMax",
        category: "equipamiento",
        price: 89.00,
        badge: "",
        rating: 4.7,
        reviewsCount: 42,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80",
        description: "Ligera y ergonómica, ideal para trail running y ciclismo de montaña. Incluye depósito de agua libre de BPA de 2 litros, bolsillos laterales elásticos y silbato de seguridad integrado.",
        sizes: ["Única"],
        colors: ["#34c759", "#1c1c1e"]
    },
    {
        id: 4,
        name: "Reloj Inteligente FitPulse Pro",
        category: "equipamiento",
        price: 199.99,
        badge: "Eco",
        rating: 4.9,
        reviewsCount: 206,
        image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?auto=format&fit=crop&w=600&q=80",
        description: "Monitoriza tus constantes vitales 24/7. Integra GPS de doble banda, sensor de oxígeno en sangre SpO2, entrenador virtual de intervalos y batería con duración de hasta 10 días.",
        sizes: ["Estándar"],
        colors: ["#000000", "#5856d6", "#ff9500"]
    },
    {
        id: 5,
        name: "Shorts de Atletismo Aero-Dry",
        category: "ropa",
        price: 35.00,
        badge: "",
        rating: 4.5,
        reviewsCount: 65,
        image: "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=600&q=80",
        description: "Shorts ligeros con forro interior para máxima comodidad. Su tecnología Aero-Dry absorbe el sudor de la piel para mantenerte seco durante tus sesiones de velocidad.",
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["#1c1c1e", "#ff2d55"]
    },
    {
        id: 6,
        name: "Zapatillas Training Neon-Pulse",
        category: "calzado",
        price: 125.00,
        badge: "Nuevo",
        rating: 4.7,
        reviewsCount: 54,
        image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=600&q=80",
        description: "Versatilidad e impacto visual en tus sesiones de gimnasio. Su suela plana antideslizante proporciona máxima estabilidad en ejercicios de levantamiento de pesas y HIIT.",
        sizes: [38, 39, 40, 41, 42, 43, 44],
        colors: ["#34c759", "#ff9500", "#1c1c1e"]
    },
    {
        id: 7,
        name: "Balón Fútbol Termosellado MatchPro",
        category: "equipamiento",
        price: 59.99,
        badge: "Oficial",
        rating: 4.8,
        reviewsCount: 93,
        image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=600&q=80",
        description: "Aprobado por la FIFA para partidos profesionales. Construcción termosellada que evita la absorción de agua, manteniendo su forma esférica perfecta y su aerodinámica óptima.",
        sizes: [4, 5],
        colors: ["#ffffff", "#000000"]
    },
    {
        id: 8,
        name: "Chaqueta Cortavientos Hydro-Shield",
        category: "ropa",
        price: 95.00,
        badge: "Impermeable",
        rating: 4.6,
        reviewsCount: 71,
        image: "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=600&q=80",
        description: "Protégete del viento y la lluvia ligera con esta chaqueta ultraligera. Se pliega en su propio bolsillo trasero, permitiendo guardarla de forma compacta cuando sale el sol.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["#007aff", "#30d158", "#1c1c1e"]
    },
    {
        id: 9,
        name: "Botella Térmica Aero-Flask",
        category: "equipamiento",
        price: 28.00,
        badge: "",
        rating: 4.8,
        reviewsCount: 112,
        image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=600&q=80",
        description: "Mantiene tus bebidas heladas por 24 horas o calientes por 12. Fabricada con acero inoxidable de grado alimenticio 18/8 y tapón a prueba de fugas con recubrimiento de silicona.",
        sizes: ["500ml", "750ml"],
        colors: ["#8e8e93", "#007aff", "#ff3b30", "#30d158"]
    }
];

// --- APP STATE ---
let cart = JSON.parse(localStorage.getItem('aerosport_cart')) || [];
let activeCategory = 'todos';
let searchQuery = '';

// --- DOM ELEMENTS ---
const productsGrid = document.getElementById('products-grid');
const searchInput = document.getElementById('search-input');
const filterButtons = document.querySelectorAll('.filter-btn');
const cartToggleBtn = document.getElementById('cart-toggle-btn');
const cartCloseBtn = document.getElementById('cart-close-btn');
const cartDrawer = document.getElementById('cart-drawer');
const cartOverlay = document.getElementById('cart-drawer-overlay');
const cartItemsContainer = document.getElementById('cart-items-container');
const cartEmptyMessage = document.getElementById('cart-empty-message');
const cartCount = document.getElementById('cart-count');
const cartSubtotal = document.getElementById('cart-subtotal');
const cartTotal = document.getElementById('cart-total');
const cartDrawerFooter = document.getElementById('cart-drawer-footer');
const cartBackToShop = document.getElementById('cart-back-to-shop');

// Modals
const productModal = document.getElementById('product-modal');
const productModalClose = document.getElementById('product-modal-close');
const productDetailContent = document.getElementById('product-detail-content');

const privacyModal = document.getElementById('privacy-modal');
const privacyModalClose = document.getElementById('privacy-modal-close');
const privacyModalAccept = document.getElementById('privacy-modal-accept');

const cookiesModal = document.getElementById('cookies-modal');
const cookiesModalClose = document.getElementById('cookies-modal-close');
const cookiesModalAccept = document.getElementById('cookies-modal-accept');

const justificacionModal = document.getElementById('justificacion-modal');
const justificacionModalClose = document.getElementById('justificacion-modal-close');
const justificacionModalAccept = document.getElementById('justificacion-modal-accept');

const checkoutModal = document.getElementById('checkout-modal');
const checkoutModalCancel = document.getElementById('checkout-modal-cancel');
const checkoutForm = document.getElementById('checkout-form');
const checkoutTotalPrice = document.getElementById('checkout-total-price');
const paymentProcessing = document.getElementById('payment-processing');
const paymentSuccess = document.getElementById('payment-success');
const btnSubmitPay = document.getElementById('btn-submit-pay');
const btnSuccessClose = document.getElementById('btn-success-close');

// Cookie Banner
const cookieBanner = document.getElementById('cookie-consent-banner');
const btnCookieAccept = document.getElementById('btn-cookie-accept');
const btnCookieReject = document.getElementById('btn-cookie-reject');

// Nav Bar links for modals
const btnJustificacionNav = document.getElementById('btn-justificacion-nav');
const btnJustificacionHero = document.getElementById('btn-justificacion-hero');
const btnJustificacionFooter = document.getElementById('btn-justificacion-footer');

const btnPrivacidadNav = document.getElementById('btn-privacidad-nav');
const btnPrivacidadFooter = document.getElementById('btn-privacidad-footer');
const linkPrivacyInCheckout = document.getElementById('link-privacy-in-checkout');

const btnCookiesNav = document.getElementById('btn-cookies-nav');
const btnCookiesFooter = document.getElementById('btn-cookies-footer');
const btnCookiesBanner = document.getElementById('btn-cookies-banner');

// Mobile Menu
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const navMenu = document.getElementById('navMenu');


// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    updateCartUI();
    checkCookieConsent();
    setupEventListeners();
});

// --- RENDER PRODUCTS ---
function renderProducts() {
    productsGrid.innerHTML = '';
    
    const filteredProducts = PRODUCTS.filter(product => {
        const matchesCategory = activeCategory === 'todos' || product.category === activeCategory;
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                              product.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = `
            <div class="no-products-message">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="48" height="48">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="8" y1="12" x2="16" y2="12"></line>
                </svg>
                <p>No se encontraron productos que coincidan con la búsqueda.</p>
            </div>
        `;
        return;
    }

    filteredProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.setAttribute('data-id', product.id);
        
        let badgeHtml = '';
        if (product.badge) {
            badgeHtml = `<span class="product-badge">${product.badge}</span>`;
        }

        // Ratings stars
        let starsHtml = '';
        const roundedRating = Math.floor(product.rating);
        for (let i = 1; i <= 5; i++) {
            if (i <= roundedRating) {
                starsHtml += '★';
            } else {
                starsHtml += '☆';
            }
        }

        card.innerHTML = `
            ${badgeHtml}
            <div class="product-img-wrapper">
                <img src="${product.image}" alt="${product.name}" class="product-img" loading="lazy">
                <div class="product-actions-overlay">
                    <button class="action-btn btn-quick-view" title="Vista Rápida" aria-label="Vista Rápida">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                    </button>
                </div>
            </div>
            <div class="product-info">
                <span class="product-cat">${product.category}</span>
                <h3 class="product-title">${product.name}</h3>
                <div class="product-rating">
                    <span>${starsHtml}</span>
                    <span>(${product.reviewsCount})</span>
                </div>
                <div class="product-price-row">
                    <span class="product-price">$${product.price.toFixed(2)}</span>
                    <button class="btn-add-cart-card" aria-label="Añadir al carrito">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="9" cy="21" r="1"></circle>
                            <circle cx="20" cy="21" r="1"></circle>
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                        </svg>
                        Añadir
                    </button>
                </div>
            </div>
        `;

        // Card event listeners
        card.querySelector('.btn-add-cart-card').addEventListener('click', (e) => {
            e.stopPropagation();
            addToCart(product.id, product.sizes[0], product.colors[0]);
            showToast(`¡${product.name} añadido al carrito!`);
        });

        card.querySelector('.product-img-wrapper').addEventListener('click', () => {
            openProductDetailModal(product.id);
        });

        card.querySelector('.btn-quick-view').addEventListener('click', (e) => {
            e.stopPropagation();
            openProductDetailModal(product.id);
        });

        productsGrid.appendChild(card);
    });
}

// --- CART FUNCTIONALITY ---
function addToCart(productId, size, color, quantity = 1) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    // Check if item already exists in cart with same size and color
    const existingIndex = cart.findIndex(item => item.id === productId && item.size === size && item.color === color);

    if (existingIndex > -1) {
        cart[existingIndex].quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            size: size,
            color: color,
            quantity: quantity
        });
    }

    saveCart();
    updateCartUI();
}

function updateCartQty(index, change) {
    cart[index].quantity += change;
    
    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }
    
    saveCart();
    updateCartUI();
}

function removeCartItem(index) {
    cart.splice(index, 1);
    saveCart();
    updateCartUI();
}

function saveCart() {
    localStorage.setItem('aerosport_cart', JSON.stringify(cart));
}

function updateCartUI() {
    cartItemsContainer.innerHTML = '';
    
    let totalItems = 0;
    let subtotal = 0;

    if (cart.length === 0) {
        cartEmptyMessage.style.display = 'flex';
        cartDrawerFooter.style.display = 'none';
        cartCount.style.display = 'none';
    } else {
        cartEmptyMessage.style.display = 'none';
        cartDrawerFooter.style.display = 'block';
        cartCount.style.display = 'flex';

        cart.forEach((item, index) => {
            totalItems += item.quantity;
            const itemCost = item.price * item.quantity;
            subtotal += itemCost;

            const row = document.createElement('div');
            row.className = 'cart-item';
            row.innerHTML = `
                <div class="cart-item-img-wrapper">
                    <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                </div>
                <div class="cart-item-details">
                    <h4 class="cart-item-title">${item.name}</h4>
                    <p class="cart-item-option">Talla: ${item.size} | Color: <span class="cart-item-color-dot" style="display:inline-block; width:10px; height:10px; border-radius:50%; background-color:${item.color}; border:1px solid #fff; vertical-align:middle; margin-left:3px;"></span></p>
                    <p class="cart-item-price">$${item.price.toFixed(2)}</p>
                </div>
                <div class="cart-item-actions">
                    <button class="btn-delete-item" aria-label="Eliminar artículo" data-index="${index}">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="3 6 5 6 21 6"></polyline>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                            <line x1="10" y1="11" x2="10" y2="17"></line>
                            <line x1="14" y1="11" x2="14" y2="17"></line>
                        </svg>
                    </button>
                    <div class="qty-counter">
                        <button class="qty-btn qty-minus" data-index="${index}">-</button>
                        <span class="qty-val">${item.quantity}</span>
                        <button class="qty-btn qty-plus" data-index="${index}">+</button>
                    </div>
                </div>
            `;

            // Event listeners
            row.querySelector('.btn-delete-item').addEventListener('click', () => removeCartItem(index));
            row.querySelector('.qty-minus').addEventListener('click', () => updateCartQty(index, -1));
            row.querySelector('.qty-plus').addEventListener('click', () => updateCartQty(index, 1));

            cartItemsContainer.appendChild(row);
        });
    }

    cartCount.innerText = totalItems;
    cartSubtotal.innerText = `$${subtotal.toFixed(2)}`;
    cartTotal.innerText = `$${subtotal.toFixed(2)}`;
    checkoutTotalPrice.innerText = `$${subtotal.toFixed(2)}`;
}

// --- MODAL UTILITIES ---
function openModal(modal) {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeModal(modal) {
    modal.classList.remove('open');
    // Check if other modal is open before unlocking scroll
    const anyModalOpen = document.querySelector('.modal-overlay.open') || document.getElementById('cart-drawer').classList.contains('open');
    if (!anyModalOpen) {
        document.body.style.overflow = 'auto';
    }
}

// --- PRODUCT DETAIL MODAL ---
function openProductDetailModal(id) {
    const product = PRODUCTS.find(p => p.id === id);
    if (!product) return;

    let sizeSelectorHtml = '';
    if (product.sizes.length > 0) {
        sizeSelectorHtml = `
            <div class="product-option-section">
                <span class="option-title">Seleccionar Talla</span>
                <div class="size-selector">
                    ${product.sizes.map((s, idx) => `
                        <button class="size-chip ${idx === 0 ? 'selected' : ''}" data-size="${s}">${s}</button>
                    `).join('')}
                </div>
            </div>
        `;
    }

    let colorSelectorHtml = '';
    if (product.colors.length > 0) {
        colorSelectorHtml = `
            <div class="product-option-section">
                <span class="option-title">Seleccionar Color</span>
                <div class="color-selector">
                    ${product.colors.map((c, idx) => `
                        <button class="color-chip ${idx === 0 ? 'selected' : ''}" data-color="${c}" style="background-color: ${c}"></button>
                    `).join('')}
                </div>
            </div>
        `;
    }

    productDetailContent.innerHTML = `
        <div class="product-detail-visual">
            <img src="${product.image}" alt="${product.name}" id="detail-product-img">
        </div>
        <div class="product-detail-info">
            <span class="product-cat">${product.category}</span>
            <h2 class="product-detail-title">${product.name}</h2>
            <div class="product-rating">
                <span>★★★★★</span>
                <span>(${product.reviewsCount} opiniones verificadas)</span>
            </div>
            <div class="product-detail-price">$${product.price.toFixed(2)}</div>
            <p class="product-detail-desc">${product.description}</p>
            
            ${sizeSelectorHtml}
            ${colorSelectorHtml}
            
            <div class="detail-actions-row">
                <div class="qty-counter">
                    <button class="qty-btn" id="modal-qty-minus">-</button>
                    <span class="qty-val" id="modal-qty-val">1</span>
                    <button class="qty-btn" id="modal-qty-plus">+</button>
                </div>
                <button class="btn btn-primary" id="btn-add-cart-detail" style="flex:1">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="btn-icon">
                        <circle cx="9" cy="21" r="1"></circle>
                        <circle cx="20" cy="21" r="1"></circle>
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                    Añadir al Carrito
                </button>
            </div>
        </div>
    `;

    // Modal state elements
    let selectedSize = product.sizes[0];
    let selectedColor = product.colors[0];
    let detailQty = 1;

    // Size chips events
    const sizeChips = productDetailContent.querySelectorAll('.size-chip');
    sizeChips.forEach(chip => {
        chip.addEventListener('click', () => {
            sizeChips.forEach(c => c.classList.remove('selected'));
            chip.classList.add('selected');
            selectedSize = chip.getAttribute('data-size');
        });
    });

    // Color chips events
    const colorChips = productDetailContent.querySelectorAll('.color-chip');
    colorChips.forEach(chip => {
        chip.addEventListener('click', () => {
            colorChips.forEach(c => c.classList.remove('selected'));
            chip.classList.add('selected');
            selectedColor = chip.getAttribute('data-color');
        });
    });

    // Qty events
    const modalQtyMinus = productDetailContent.querySelector('#modal-qty-minus');
    const modalQtyPlus = productDetailContent.querySelector('#modal-qty-plus');
    const modalQtyVal = productDetailContent.querySelector('#modal-qty-val');

    modalQtyMinus.addEventListener('click', () => {
        if (detailQty > 1) {
            detailQty--;
            modalQtyVal.innerText = detailQty;
        }
    });

    modalQtyPlus.addEventListener('click', () => {
        detailQty++;
        modalQtyVal.innerText = detailQty;
    });

    // Add to cart button event
    productDetailContent.querySelector('#btn-add-cart-detail').addEventListener('click', () => {
        addToCart(product.id, selectedSize, selectedColor, detailQty);
        closeModal(productModal);
        showToast(`¡${product.name} (${selectedSize}) añadido al carrito!`);
    });

    openModal(productModal);
}

// --- SECURE PAYMENT SIMULATION ---
function handleCheckoutSubmit(e) {
    e.preventDefault();
    
    // Check privacy consent
    const privacyConsent = document.getElementById('privacy-consent');
    if (!privacyConsent.checked) {
        alert('Debe aceptar la política de privacidad y confidencialidad para continuar.');
        return;
    }

    // Hide payment form
    checkoutForm.style.display = 'none';
    
    // Show spinner processing screen
    paymentProcessing.style.display = 'flex';
    
    // Simulate encryption & payment transaction security logic
    setTimeout(() => {
        // Ciphers input conceptually, logs secure transaction token
        console.log("🔒 SECURE SEC-PAYMENT PROTOCOL: Tokenizing client credentials...");
        console.log("🔒 SECURE SEC-PAYMENT PROTOCOL: Form validation successfully validated.");
        console.log("🔒 SECURE SEC-PAYMENT PROTOCOL: Data ciphered with AES-256 GCM.");
        
        // Update states
        paymentProcessing.style.display = 'none';
        paymentSuccess.style.display = 'flex';
        
        // Empty Cart
        cart = [];
        saveCart();
        updateCartUI();
    }, 3000);
}

// --- CARD FORMATTING IN CHECKOUT ---
function setupCardFormatting() {
    const cardNumberInput = document.getElementById('checkout-card-number');
    const cardExpiryInput = document.getElementById('checkout-expiry');
    const cardCvvInput = document.getElementById('checkout-cvv');
    const cardBrandIcon = document.getElementById('card-brand-icon');

    // Auto format Card Numbers with spaces (0000 0000 0000 0000) & detect brand
    cardNumberInput.addEventListener('input', (e) => {
        let val = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
        let formatted = '';
        
        // Detect brand (Visa: starts with 4, Mastercard: starts with 51-55, Amex: starts with 34, 37)
        if (val.length > 0) {
            if (val.startsWith('4')) {
                // Visa
                cardBrandIcon.innerHTML = `
                    <svg viewBox="0 0 24 15" width="30" fill="currentColor" style="color:#1A1F71">
                        <rect width="24" height="15" rx="2" fill="#1A1F71"/>
                        <path d="M4 11l.8-4.5h1.2L5.2 11H4zm4.5 0L8.2 6.5h1.1l.6 3.5.7-3.5h1.1L10 11H8.5zm5.5-2.2l.6-2.3h1.2l-.7 2.3c-.2.5-.5.7-.9.7h-.8V8.8zm3.2 2.2l1.1-4.5H24L23.2 11h-1.1z" fill="#FFF"/>
                    </svg>
                `;
            } else if (val.startsWith('5')) {
                // Mastercard
                cardBrandIcon.innerHTML = `
                    <svg viewBox="0 0 24 15" width="30">
                        <rect width="24" height="15" rx="2" fill="#1A1A1A"/>
                        <circle cx="9" cy="7.5" r="4.5" fill="#EB001B"/>
                        <circle cx="15" cy="7.5" r="4.5" fill="#F79E1B" fill-opacity="0.8"/>
                    </svg>
                `;
            } else if (val.startsWith('3')) {
                // Amex
                cardBrandIcon.innerHTML = `
                    <svg viewBox="0 0 24 15" width="30" fill="currentColor" style="color:#0070d2">
                        <rect width="24" height="15" rx="2" fill="#0070d2"/>
                        <path d="M3 11l2-7h2.5L9.5 11H7.5l-.5-2H4.5l-.5 2H3.1zm12.5 0V4H17v7h-1.5z" fill="#FFF"/>
                    </svg>
                `;
            } else {
                cardBrandIcon.innerHTML = '';
            }
        } else {
            cardBrandIcon.innerHTML = '';
        }

        for (let i = 0; i < val.length; i++) {
            if (i > 0 && i % 4 === 0) {
                formatted += ' ';
            }
            formatted += val[i];
        }
        e.target.value = formatted;
    });

    // Auto format Expiration Date (MM/YY)
    cardExpiryInput.addEventListener('input', (e) => {
        let val = e.target.value.replace(/\D/g, '');
        if (val.length > 2) {
            e.target.value = val.slice(0, 2) + '/' + val.slice(2, 4);
        } else {
            e.target.value = val;
        }
    });

    // Block non-numbers in CVV
    cardCvvInput.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/\D/g, '');
    });
}

// --- COOKIE CONSENT BANNER WORKFLOW ---
function checkCookieConsent() {
    const consent = localStorage.getItem('aerosport_cookies_consent');
    if (!consent) {
        setTimeout(() => {
            cookieBanner.classList.add('show');
        }, 1500);
    }
}

function handleCookieAccept() {
    localStorage.setItem('aerosport_cookies_consent', 'accepted');
    cookieBanner.classList.remove('show');
    showToast("Preferencias de cookies guardadas.");
}

function handleCookieReject() {
    localStorage.setItem('aerosport_cookies_consent', 'rejected');
    cookieBanner.classList.remove('show');
    showToast("Cookies no esenciales rechazadas.");
}

// --- EVENT LISTENERS setup ---
function setupEventListeners() {
    
    // --- NAV LINK SWITCHING (FOR DYNAMIC ACTIVE LOOK) ---
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Only toggle active if not opening modal
            if (link.id.includes('nav')) return;
            navLinks.forEach(n => n.classList.remove('active'));
            link.classList.add('active');
            
            // Close mobile menu if open
            mobileMenuBtn.classList.remove('open');
            navMenu.classList.remove('open');
        });
    });

    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('open');
        navMenu.classList.toggle('open');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !mobileMenuBtn.contains(e.target) && navMenu.classList.contains('open')) {
            mobileMenuBtn.classList.remove('open');
            navMenu.classList.remove('open');
        }
    });

    // --- SEARCH EVENTS ---
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        renderProducts();
    });

    // --- CATEGORY FILTER EVENTS ---
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeCategory = btn.getAttribute('data-category');
            renderProducts();
        });
    });

    // Footer categories quick filters
    document.querySelectorAll('.catalog-link-filter').forEach(link => {
        link.addEventListener('click', (e) => {
            const cat = link.getAttribute('data-category');
            const targetPill = document.querySelector(`.filter-btn[data-category="${cat}"]`);
            if (targetPill) {
                targetPill.click();
            }
        });
    });

    // --- CART TOGGLES ---
    cartToggleBtn.addEventListener('click', () => {
        cartDrawer.classList.add('open');
        cartOverlay.classList.add('open');
        document.body.style.overflow = 'hidden';
    });

    cartCloseBtn.addEventListener('click', () => {
        cartDrawer.classList.remove('open');
        cartOverlay.classList.remove('open');
        document.body.style.overflow = 'auto';
    });

    cartOverlay.addEventListener('click', () => {
        cartDrawer.classList.remove('open');
        cartOverlay.classList.remove('open');
        document.body.style.overflow = 'auto';
    });

    cartBackToShop.addEventListener('click', () => {
        cartDrawer.classList.remove('open');
        cartOverlay.classList.remove('open');
        document.body.style.overflow = 'auto';
    });

    // --- CHECKOUT TRIGGERS ---
    document.getElementById('checkout-btn').addEventListener('click', () => {
        cartDrawer.classList.remove('open');
        cartOverlay.classList.remove('open');
        
        // Reset form
        checkoutForm.reset();
        document.getElementById('card-brand-icon').innerHTML = '';
        checkoutForm.style.display = 'block';
        paymentProcessing.style.display = 'none';
        paymentSuccess.style.display = 'none';
        
        openModal(checkoutModal);
    });

    checkoutModalCancel.addEventListener('click', () => closeModal(checkoutModal));
    checkoutForm.addEventListener('submit', handleCheckoutSubmit);
    btnSuccessClose.addEventListener('click', () => closeModal(checkoutModal));
    
    // Enable checkout validation formatting
    setupCardFormatting();

    // Link in checkout to open privacy modal
    linkPrivacyInCheckout.addEventListener('click', (e) => {
        e.preventDefault();
        openModal(privacyModal);
    });

    // --- MODALS TOGGLES ---
    
    // Product Detail modal close
    productModalClose.addEventListener('click', () => closeModal(productModal));
    productModal.addEventListener('click', (e) => {
        if (e.target === productModal) closeModal(productModal);
    });

    // Justification Modal triggers
    const toggleJustification = (e) => {
        e.preventDefault();
        openModal(justificacionModal);
    };
    btnJustificacionNav.addEventListener('click', toggleJustification);
    btnJustificacionHero.addEventListener('click', toggleJustification);
    btnJustificacionFooter.addEventListener('click', toggleJustification);
    justificacionModalClose.addEventListener('click', () => closeModal(justificacionModal));
    justificacionModalAccept.addEventListener('click', () => closeModal(justificacionModal));
    justificacionModal.addEventListener('click', (e) => {
        if (e.target === justificacionModal) closeModal(justificacionModal);
    });

    // Privacy Modal triggers
    const togglePrivacy = (e) => {
        e.preventDefault();
        openModal(privacyModal);
    };
    btnPrivacidadNav.addEventListener('click', togglePrivacy);
    btnPrivacidadFooter.addEventListener('click', togglePrivacy);
    privacyModalClose.addEventListener('click', () => closeModal(privacyModal));
    privacyModalAccept.addEventListener('click', () => closeModal(privacyModal));
    privacyModal.addEventListener('click', (e) => {
        if (e.target === privacyModal) closeModal(privacyModal);
    });

    // Cookies Modal triggers
    const toggleCookies = (e) => {
        e.preventDefault();
        openModal(cookiesModal);
    };
    btnCookiesNav.addEventListener('click', toggleCookies);
    btnCookiesFooter.addEventListener('click', toggleCookies);
    btnCookiesBanner.addEventListener('click', toggleCookies);
    cookiesModalClose.addEventListener('click', () => closeModal(cookiesModal));
    cookiesModalAccept.addEventListener('click', () => closeModal(cookiesModal));
    cookiesModal.addEventListener('click', (e) => {
        if (e.target === cookiesModal) closeModal(cookiesModal);
    });

    // --- COOKIE BANNER ACTION BUTTONS ---
    btnCookieAccept.addEventListener('click', handleCookieAccept);
    btnCookieReject.addEventListener('click', handleCookieReject);

    // --- NAVBAR COLOR ON SCROLL ---
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            header.classList.add('navbar-scrolled');
        } else {
            header.classList.remove('navbar-scrolled');
        }
    });
}

// --- HELPER: SHOW TOAST ---
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16" style="color:var(--accent-green)">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 8 12 12 16 14"></polyline>
        </svg>
        <span>${message}</span>
    `;
    
    // Style toast programmatically
    toast.style.position = 'fixed';
    toast.style.bottom = '30px';
    toast.style.right = '30px';
    toast.style.background = 'var(--bg-tertiary)';
    toast.style.border = '1px solid var(--glass-border)';
    toast.style.borderRadius = 'var(--border-radius-md)';
    toast.style.padding = '12px 24px';
    toast.style.display = 'flex';
    toast.style.alignItems = 'center';
    toast.style.gap = '10px';
    toast.style.boxShadow = 'var(--shadow-lg)';
    toast.style.zIndex = '2000';
    toast.style.animation = 'slideInLeft 0.3s cubic-bezier(0.165, 0.84, 0.44, 1)';
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transition = 'opacity 0.4s';
        setTimeout(() => toast.remove(), 400);
    }, 3000);
}
