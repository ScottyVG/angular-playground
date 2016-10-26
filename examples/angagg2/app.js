const app = angular.module('angApp', []);

app.controller('mainController', ['$scope', function($scope) {

  $scope.addItem = function() {
    $scope.foodArray.push({
      name: $scope.input,
      price: $scope.price
    })
  }

  $scope.foodArray = [{
    name: 'Tacos',
    price: 1.99
  }, {
    name: 'Cookies',
    price: 0.99
  }, {
    name: 'Egg Salad',
    price: 2.99
  }]

}])
