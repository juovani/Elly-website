function getCart() {
    const data = localStorage.getItem('cart');
    return data ? JSON.parse(data) : [];
}

function updateCart(name, change, image){
    const cart = getCart();
    const existingItem = cart.find(item => item.name === name);

    if(existingItem){
        existingItem.qty += change;
    } else if(change > 0){
        cart.push({name: name, qty: change, img: image });
    }
    const filteredCart = cart.filter(item => item.qty > 0);
    localStorage.setItem('cart', JSON.stringify(filteredCart));
}


const groceriesGrid = document.getElementById('grid-groceries');

if(groceriesGrid){
    // 1. Build every card's HTML and drop it into its category grid
    products.forEach((product) => {
        const grid = document.getElementById(product.category);

        grid.innerHTML += `
            <div class="product-card" data-id="${product.name}">
                <p class="product-name" data-en="${product.name}" data-ar="${product.name_ar || product.name}">${product.name}</p>
                <img src="${product.img}" alt="${product.name}">
                <div class="buttons">
                    <button class="sub-btn">-</button>
                    <span class="count">0</span>
                    <button class="add-btn">+</button>
                </div>
            </div>
        `;
    });

    // 2. Now that the cards exist in the page, wire up every button
    const cards = document.querySelectorAll('.product-card');

    cards.forEach((card) => {
            const addBtn = card.querySelector('.add-btn');
            const subBtn = card.querySelector('.sub-btn');
            // const countDisplay = card.querySelector('.count');
            const productName = card.querySelector('.product-name').textContent;
            const productImage = card.querySelector('img').getAttribute('src');

            addBtn.addEventListener('click', () => {
                updateCart(productName, 1, productImage);
                refreshCartUI();
            });

            subBtn.addEventListener('click', () => {
                updateCart(productName, -1, productImage);
                refreshCartUI();
            });
    });
}

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open');
})

const cartToggle = document.getElementById('cartToggle');
const cartDrawer = document.getElementById('cartDrawer');
const cartOverlay = document.getElementById('cartOverlay');
cartToggle.addEventListener('click', () => {
    renderCart();
    cartDrawer.classList.toggle('open');
    cartOverlay.classList.toggle('open');
});
cartOverlay.addEventListener('click', () => {
    cartDrawer.classList.remove('open');
    cartOverlay.classList.remove('open');
});

const closeCart = document.getElementById('closeCart');
closeCart.addEventListener('click', () => {
    cartDrawer.classList.remove('open');
    cartOverlay.classList.remove('open');
});

function renderCart(){
    const cart = getCart();
    const cartBody = document.getElementById('cartBody');
    const cartCount = document.getElementById('cartCount');

    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    cartCount.textContent = totalItems;

    cartBody.innerHTML = '';
    if(cart.length === 0){
        cartBody.innerHTML += `
            <h4>Cart Is Empty</h4>
        `;
    } else{
        cart.forEach(item => {
            const currentLang = localStorage.getItem('lang') || 'en';
            const product = (typeof products !== 'undefined') ? products.find(p => p.name === item.name) : null;
            const displayName = (currentLang === 'ar' && product && product.name_ar) ? product.name_ar : item.name;

            cartBody.innerHTML += `
                <div class="drawer-item">
                    <img src="${item.img}" alt="${displayName}">
                    <div class="drawer-item-info">
                        <p class="drawer-item-name">${displayName}</p>
                        <div class="buttons">
                            <button class="sub-btn" data-name="${item.name}" data-img="${item.img}">-</button>
                            <span class="count">${item.qty}</span>
                            <button class="add-btn" data-name="${item.name}" data-img="${item.img}">+</button>
                        </div>
                        <button class="remove-item" data-name="${item.name}">Remove</button>
                    </div>
                </div>
            `;
        });
        const removeBtns = cartBody.querySelectorAll('.remove-item');

        removeBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                removeFromCart(btn.dataset.name);
                refreshCartUI();
            });
        });

        const subBtns = cartBody.querySelectorAll('.sub-btn');
        const addBtns = cartBody.querySelectorAll('.add-btn');

        subBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                updateCart(btn.dataset.name, -1, btn.dataset.img);
                refreshCartUI();
            });
        });

        addBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                updateCart(btn.dataset.name, 1, btn.dataset.img);
                refreshCartUI();
            });
        });
    }
}
function refreshCartUI() {
    const cart = getCart();
    const cards = document.querySelectorAll('.product-card');

    cards.forEach(card => {
        const countDisplay = card.querySelector('.count');
        const productName = card.dataset.id;
        const existingItem = cart.find(item => item.name === productName);
        countDisplay.textContent = existingItem ? existingItem.qty : 0;
    });

    renderCart();
}
function removeFromCart(name){
    const cart = getCart();
    const filteredCart = cart.filter(item => item.name !== name);
    localStorage.setItem('cart', JSON.stringify(filteredCart));
}

function updateProductNames(lang) {
    document.querySelectorAll('.product-name').forEach(el => {
        const value = lang === 'ar' ? el.dataset.ar : el.dataset.en;
        if (value) el.textContent = value;
    });
}

// testing the translations
function applyLanguage(lang) {
    document.querySelectorAll('[data-str]').forEach(el => {
        const key = el.dataset.str;
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    updateProductNames(lang);   // ← new line

    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    localStorage.setItem('lang', lang);

    const langToggle = document.getElementById('langToggle');
    if (langToggle) langToggle.textContent = lang === 'ar' ? 'EN' : 'AR';
}

const langToggle = document.getElementById('langToggle');
if (langToggle) {
    langToggle.addEventListener('click', () => {
        const current = localStorage.getItem('lang') || 'en';
        const next = current === 'en' ? 'ar' : 'en';
        applyLanguage(next);
    });
}
const sendOrderBtn = document.getElementById('sendOrderBtn');

if (sendOrderBtn) {
    sendOrderBtn.addEventListener('click', (e) => {
        e.preventDefault();

        const cart = getCart();
        if (cart.length === 0) {
            alert('Your cart is empty.');
            return;
        }

        let message = 'Order from Elly Convenience website:%0A%0A';
        cart.forEach(item => {
            message += `${item.qty}x ${item.name}%0A`;
        });

        const storePhone = '17743812740';
        window.location.href = `sms:${storePhone}?&body=${message}`;
    });
}

applyLanguage(localStorage.getItem('lang') || 'en');
refreshCartUI();