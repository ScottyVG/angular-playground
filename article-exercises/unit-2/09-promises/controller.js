app.controller('OmdbController', function($scope, omdbapi) {
  $scope.view = {};
  $scope.view.term = '';

  $scope.view.queryOmdb = function() {
    omdbapi.search($scope.view.term).then(function(data) {
      $scope.view.results = data;
    })
  }
});

app.factory('omdbapi', function($http, $q) {
  var omdbservice = {};
  var baseUrl = "http://www.omdbapi.com/?r=json&plot=long&s=";

  var cachedMovies = {};

  omdbservice.search = function(term) {
    var url = baseUrl + encodeURIComponent(term);

    return $q(function(resolve, reject) {
      if (cachedMovies[term]) {
        resolve(cachedMovies[term]);
      } else {
        $http.get(url).success(function(data) {
          cachedMovies[term] = data.Search;
          resolve(cachedMovies[term]);
        }).error(function(error) {
          reject(error)
        });
      }
    })
  }

  return omdbservice;
});
