var ShoppingCart = function () {
  this.cart = [];
};

ShoppingCart.prototype.addItem = function(item) {
  this.cart.push(item);
};


