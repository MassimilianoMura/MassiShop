var cartList = shoppingCart.cart;

 var theTemplateScriptCart = $("#shoppingCartList-items").html();  
 var theTemplateCart = Handlebars.compile(theTemplateScriptCart);  

$('#shoppingCartList-wrap').append(theTemplateCart ({
    buyList: cartList
}));

