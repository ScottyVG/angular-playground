/* global app */
'use strict';

app.controller(`searchAppController`, [`$scope`, `$location`, `MovieList`,
  function($scope, $location, MovieList) {
    $scope.vm = {};
    $scope.vm.loading = false;
    $scope.go = function() {
      $scope.vm.loading = true;
      MovieList.getMovies($scope, $scope.vm.search);
    };
  },
]);

app.controller(`ListController`, [`$scope`, `$location`, `MovieList`, `MovieDetails`,
  function($scope, $location, MovieList, MovieDetails) {
    $scope.vm = {};
    $scope.vm.loading = false;
    $scope.vm.movies = MovieList.movies;
    $scope.show = function() {
      $scope.vm.loading = true;
      MovieDetails.getMovie($scope, this.movie.imdbID);
    };
  },
]);


app.controller(`DetailsController`, [`$scope`, `MovieDetails`,
  function($scope, MovieDetails) {
    $scope.vm = {};
    $scope.vm.movie = MovieDetails.movie;
  },
]);
