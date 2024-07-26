
var product_cakes = [
    { id: 1, name: 'Bolo 1', price: 200.00, image: 'img/products/bolosp/flower.jpg' },
    { id: 2, name: 'Bolo 2', price: 310.00, image: 'img/products/bolosp/BoloBoborleta.jpg' },
    { id: 3, name: 'Bolo 3', price: 220.00, image: 'img/products/bolosp/other4.jpeg' },
    { id: 4, name: 'Bolo 4', price: 230.00, image: 'img/products/bolosp/wedd5.jpeg' },
    { id: 5, name: 'Bolo 5', price: 225.00, image: 'img/products/bolosp/wedd6.jpeg' },
    { id: 6, name: 'Bolo 6', price: 250.00, image: 'img/products/bolosp/wedd7.jpeg' },
    { id: 7, name: 'Bolo 7', price: 300.00, image: 'img/products/bolosp/wedd8.jpeg' },
    { id: 8, name: 'Bolo 8', price: 350.00, image: 'img/products/bolosp/weddc1.jpg' },
    { id: 9, name: 'Bolo 9', price: 400.00, image: 'img/products/bolosp/weddc2.jpg' }
];

//create cart
var cart = [];

//function to deal with cart
function renderProducts() {
    var productGrid = document.querySelector('.product-grid');
    productGrid.innerHTML = '';
    product_cakes.forEach((product) => {
        var productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>€${product.price}</p>
            <button id="buttonCart">Add to Cart</button>        
        `;
        productDiv.querySelector('button').addEventListener('click', () => addToCart(product.id));
        productGrid.appendChild(productDiv);
    });
}
function addToCart(productId) {
    var product = product_cakes.find((product) => product.id === productId);
    cart.push(product);
    renderCart();
}

function renderCart() {
    var cartTable = document.querySelector('.cart table, tbody');
    cartTable.innerHTML = '';
    cart.forEach((product) => {
        var cartRow = document.createElement('tr');
        cartRow.innerHTML = `
        <td>${product.name}</td>
        <td>1</td>
        <td>${product.price}</td>
        <td>€${product.price}</td>
        `;
        cartTable.appendChild(cartRow);
    });
    updateTotal();
}

function updateTotal() {
    var total = cart.reduce((acc, product) => acc + product.price, 0);
    document.getElementById('total').textContent = `€${total.toFixed(2)}`;

}

var currentProduct = 0;
var prev = document.querySelector('.prev');
var next = document.querySelector('.next');

document.getElementById('checkout').addEventListener('click', () => {
    if (cart.length === 0) {
        alert('Your cart has no product yet!');
    } else {
        alert('Your order is successfully placed!');
        cart = [];
        renderCart();
    }
});
renderProducts();