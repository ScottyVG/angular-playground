app.controller('someControllerName', function($scope, $http) {
  $http.get('https://api.github.com/zen').then(function(data) {
    $scope.view.zenData = data.data;
  });
});
