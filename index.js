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
    const products = [
        { name: 'El Arosa Tea', img: 'Products/El_Arosa_Tea.jpeg', category: 'grid-groceries'},
        { name: 'Egyptian Rice', img: 'Products/Rise_Egyptian.jpeg', category: 'grid-snacks' },
        { name: 'Halva', img: 'Products/halva.jpg', category: 'grid-groceries' },
        { name: 'Tahini', img: 'Products/tahini.jpg', category: 'grid-groceries' },

        { name: 'Katakito Wafers', img: 'Products/katakito-wafers.jpg', category: 'grid-snacks' },
        { name: 'Molto Croissants', img: 'Products/molto-croissants.jpg', category: 'grid-snacks' },
        { name: 'Chipsy', img: 'Products/chipsy.jpg', category: 'grid-snacks' },

        { name: 'Cigarettes', img: 'Products/cigarettes.jpg', category: 'grid-smoke' },
        { name: 'Hookah Tobacco', img: 'Products/hookah-tobacco.jpg', category: 'grid-smoke' },
        { name: 'Accessories', img: 'Products/accessories.jpg', category: 'grid-smoke' },
    ];

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
                <button class="add-to-cart">Add to cart</button>
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

        const cart = getCart();
        const existingItem = cart.find(item => item.name === productName);
        let count;

        if(existingItem){
            count = existingItem.qty;
            countDisplay.textContent = count;
        } else{
            count = 0;
        }
        

        addBtn.addEventListener('click', () => {
            count++;
            countDisplay.textContent = count;
            updateCart(productName, 1, productImage);
        });
        
        subBtn.addEventListener('click', () => {
            if(count > 0){
                count--;
                countDisplay.textContent = count;
                updateCart(productName, -1, productImage);
            }
        });
    });
}

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open');
})

const cartMain = document.getElementById('cart-main');

if(cartMain){
    const cart = getCart();

    if(cart.length === 0){
        // cartMain.innerHTML = 'Cart Is Empty';
        cartMain.innerHTML = `
            <div class="empty-cart">
                <h4>Your cart is empty</h4>
                <p>Browse our products and add something you'd like.</p>
                <a href="products.html" class="add-to-cart">Browse Products</a>
            </div>
        `;
    } else{
        cart.forEach(item => {
            cartMain.innerHTML += `
                <div class="cart-item">
                    <p>${item.name}</p>
                    <img src="${item.img}" alt="${item.name}">
                    <p>Qty: ${item.qty}</p>
                </div>
            `;
                
        });
    }
}