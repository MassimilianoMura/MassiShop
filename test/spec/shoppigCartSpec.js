(function () {
  'use strict';

  describe('ShoppingCart', function() {

    var shoppingCart;
    beforeEach(function() {
      shoppingCart = new ShoppingCart();
    });

    describe('has shopping cart', function() {

      it('can add an item in the cart', function() {
        shoppingCart.addItem(list[0].name)
        expect(shoppingCart.cart[0]).toEqual(list[0].name)
      });
    });

  });
})();