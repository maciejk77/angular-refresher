(function() {
  var app = angular.module('store', []);  

app.controller('StoreController', function() {
  this.products = gems;
});

var gems = [
  {
    name: "Dodecahedron",
    price: "2.95",
    description: "Some gems have hidden qualities beyond their luster....",
    canPurchase: true,
    images: [
      {
        full: 'public/gem1.jpeg',
        thumb: 'gem1.jpeg'
      },
      {
        full: 'public/gem2.jpeg',
        thumb: 'gem2.jpeg'
      }
    ]
  }, 
  {
    name: "Pentagonal Gem",
    price: "5.95",
    description: "Some gems have hidden qualities beyond their luster....",
    canPurchase: true
  }
];


})();