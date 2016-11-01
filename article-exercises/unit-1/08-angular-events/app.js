var app = angular.module("myApp", [])

app.controller('MainController', function($scope) {
  $scope.view = {};
  $scope.pickRandomNumber = function() {
    $scope.view.number = Math.floor(Math.random() * 10) + 1;
  }
  $scope.reverseWord = function(s) {
    $scope.view.word = s.split("").reverse().join("");
  }
  $scope.view.enterCount = 0
});
