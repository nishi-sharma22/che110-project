let cart = [];
let totalAmount = 0;

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    totalAmount += price;
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";

    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(li);
    });

    document.getElementById("total").textContent = `Total: $${totalAmount}`;
}

function checkout() {
    alert(`Thank you for your purchase! Your total is $${totalAmount}.`);
    cart = [];
    totalAmount = 0;
    updateCart();
}
