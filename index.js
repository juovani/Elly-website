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
            <div class="product-card">
                <p class="product-name">${product.name}</p>
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
            const countDisplay = card.querySelector('.count');
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
});8

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
            cartBody.innerHTML += `
                <div class="drawer-item">
                    <img src="${item.img}" alt="${item.name}">
                    <div class="drawer-item-info">
                        <p class="drawer-item-name">${item.name}</p>
                        <div class="buttons">
                            <button class="sub-btn" data-name="${item.name}" data-img="${item.img}">-</button>
                            <span class="count">${item.qty}</span>
                            <button class="add-btn" data-name="${item.name}" data-img="${item.img}">+</button>
                        </div>
                    </div>
                </div>
            `;
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
        const productName = card.querySelector('.product-name').textContent;
        const existingItem = cart.find(item => item.name === productName);
        countDisplay.textContent = existingItem ? existingItem.qty : 0;
    });

    renderCart();
}

refreshCartUI();