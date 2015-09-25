var list = [
              {
                index: 1,
                name: 'Almond Toe Court Shoes, PatentBlack',
                category: 'Women\'s footwear',
                price: 42,
                quantity: 5
              },
              {
                index: 2,
                name: 'Bla bla bla',
                category: 'Women\'s footwear',
                price: 66,
                quantity: 5
              }
            ];

 var theTemplateScript = $("#list-items").html();  
 var theTemplate = Handlebars.compile(theTemplateScript);  

$('#list-wrap').append(theTemplate ({
    productList: list
}));
