var app = angular.module("myApp", [])
app.controller("ScopeController", function($scope, $rootScope, $log) {
  $scope.name = "matthew";
  $scope.logName = () => {
    console.log($scope.name);
  }
  console.log('scope', $scope);
  console.log('rootScope', $rootScope);
  console.log('log', $log);
});
