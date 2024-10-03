let cart = [];

// Function to add items to the cart
function addToCart(productName, price) {
    let product = cart.find(p => p.name === productName);
    
    // If the product is already in the cart, increase the quantity
    if (product) {
        product.quantity += 1;
    } else {
        // Add new product to the cart
        cart.push({ name: productName, price: price, quantity: 1 });
    }
    
    alert(productName + " has been added to your cart.");
    updateCart();
}

// Function to update the cart display
function updateCart() {
    let cartItemsContainer = document.getElementById("cart-items");
    let totalPriceElement = document.getElementById("total-price");
    let totalPrice = 0;

    // Clear the cart display
    cartItemsContainer.innerHTML = "";

    // Loop through each item in the cart and display it
    cart.forEach((item) => {
        let itemTotal = (item.price * item.quantity).toFixed(2);
        cartItemsContainer.innerHTML += `<p>${item.name} (x${item.quantity}): $${itemTotal}</p>`;
        totalPrice += item.price * item.quantity;
    });

    // Update the total price in the cart
    totalPriceElement.innerText = totalPrice.toFixed(2);
}

// Function to proceed to checkout
function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty.");
    } else {
        alert("Proceeding to checkout. Total amount: $" + document.getElementById("total-price").innerText);
        // Here you would trigger further actions, like redirecting to payment or generating an invoice
    }
}
