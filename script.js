const menu = [
    { name: 'Grilled Chicken', price: 15 },
    { name: 'Margherita Pizza', price: 12 },
    { name: 'Caesar Salad', price: 9 },
    { name: 'Beef Burger', price: 13 },
    { name: 'Pasta Alfredo', price: 14 },
    { name: 'Tiramisu', price: 6 },
    { name: 'Fresh Juice', price: 4 },
];

const menuList = document.getElementById('menu-list');
const orderList = document.getElementById('order-list');
const totalDisplay = document.getElementById('total');
let total = 0;

// Load menu items dynamically
menu.forEach(item => {
    const menuItem = document.createElement('div');
    menuItem.className = 'menu-item';
    menuItem.innerHTML = `<h4>${item.name}</h4><p>$${item.price}</p><button class="btn add-btn">Add to Cart</button>`;
    menuItem.querySelector('.add-btn').addEventListener('click', () => addToOrder(item));
    menuList.appendChild(menuItem);
});

function addToOrder(item) {
    const orderItem = document.createElement('li');
    orderItem.innerHTML = `${item.name} - $${item.price}`;
    orderList.appendChild(orderItem);

    total += item.price;
    totalDisplay.textContent = total.toFixed(2);
}

document.getElementById('place-order').addEventListener('click', () => {
    if (total > 0) {
        alert('Order placed successfully!');
        orderList.innerHTML = '';
        total = 0;
        totalDisplay.textContent = total;
    } else {
        alert('Your order is empty!');
    }
});
