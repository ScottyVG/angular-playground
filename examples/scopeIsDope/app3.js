var app = angular.module("myApp", [])
app.controller("Controller1", function($scope) {
  this.message = 'outter'
});
app.controller("Controller2", function($scope) {
  this.message = 'middle'
});
app.controller("Controller3", function($scope) {
  this.message = 'inner'
});
