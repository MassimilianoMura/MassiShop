(function () {
  // 'use strict';

  describe('It has a list of product', function () {

      it('should have a name for every product', function () {
        expect(list[0].name).toEqual('Almond Toe Court Shoes, PatentBlack');
      });

      it('should have a category for every product', function () {
        expect(list[0].category).toEqual('Women\'s footwear');
      });

      it('should have a price for every product', function () {
        expect(list[0].price).toEqual(42);
      });

      it('should have a price for every product', function () {
        expect(list[0].quantity).toEqual(5);
      });

  });
})();
