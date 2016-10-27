angular.module("myApp", [])
  .controller("ShoppingController", function($scope) {
    // "public" data to be accessed from the view
    $scope.availableItems = [{
      title: 'Nikon D3100 DSLR',
      image: 'http://ecx.images-amazon.com/images/I/713u2gDQqML._SX522_.jpg',
      rating: 3.4,
      price: 36999,
      onSale: true
    }, {
      title: 'Canon EOS 70D',
      image: 'http://ecx.images-amazon.com/images/I/81U00AkAUWL._SX522_.jpg',
      rating: 2.0,
      price: 10990,
      onSale: false
    }, {
      title: 'Nikon D810A',
      image: 'http://ecx.images-amazon.com/images/I/91wtXIfLl2L._SX522_.jpg',
      rating: 4.2,
      price: 379695,
      onSale: true
    }]

    $scope.totalCost = 0
    $scope.currentItems = []

    // "private" data that is not able to be accessed by the view

    var taxRate = .29

    // "public" function accessible from the view
    $scope.addItem = function(item) {
      $scope.currentItems.push(item)
      updatePrice()
    }

    // "private" function not accessible from the view
    function updatePrice() {
      var sum = 0
      for (var i = 0; i < $scope.currentItems.length; i++) {
        sum += $scope.currentItems[i].price
      }
      $scope.totalCost = sum + (sum * taxRate)
      $scope.totalCost = Math.Floor($scope.totalCost)
      console.log($scope.totalCost);
    }
  })
