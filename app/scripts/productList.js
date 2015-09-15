var list = [
              {
                name: 'Almond Toe Court Shoes, PatentBlack',
                category: 'Women\'s footwear',
                price: 42,
                quantity: 5
              },
              {
                name: 'Bla bla bla',
                category: 'Women\'s footwear',
                price: 66,
                quantity: 5
              }
            ];

 var theTemplateScript = $("#list-items").html();  
 var theTemplate = Handlebars.compile (theTemplateScript);  

$(document.body).append (theTemplate ({
    list: list
}));