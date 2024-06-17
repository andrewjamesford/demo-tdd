let cart = [];

function addToCart(item) {
  cart.push(item);
}

function showCart() {
  return cart;
}

function removeFromCart(item) {
  const index = cart.indexOf(item);
  if (index > -1) {
    cart.splice(index, 1);
  }
}

function getTotalPrice() {
  const total = cart.reduce((total, item) => total + item.price, 0);

  return total;
}

function clearCart() {
  cart = [];
}
