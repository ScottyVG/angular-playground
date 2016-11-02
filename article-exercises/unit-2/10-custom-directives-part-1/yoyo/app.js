var app = angular.module('yoyoDirectiveApp', [])

app.controller('YoyoController', ['$scope', function($scope) {
  $scope.yoyo = {
    name: 'Duncan Metal Drifter',
    img: "http://www.toysrus.com/graphics/tru_prod_images/Duncan-Metal-Drifter-Pro-Yo-Yo--pTRU1-8444206dt.jpg",
    message: 'Yo Fuckin Yo Motha Fucka'
  };
}]);

app.directive('gsYoyoDetails', function() {
  return {
    templateUrl: '../yoyo-details.html',
    scope: {
      yoyoInDirective: '=yoyoAttribue'
    }
  }
})
