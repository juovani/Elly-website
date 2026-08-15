const products = [
    { name: 'El Arosa Tea', img: 'Products/El_Arosa_Tea.jpeg', category: 'grid-groceries' },
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
    let count = 0;


    const addBtn = card.querySelector('.add-btn');
    const subBtn = card.querySelector('.sub-btn');

    const countDisplay = card.querySelector('.count');

    addBtn.addEventListener('click', () => {
        count++;
        countDisplay.textContent = count;
    });
    
    subBtn.addEventListener('click', () => {
        if(count > 0){
            count--;
            countDisplay.textContent = count;
        }
    });
});