/* global angular */
'use strict';

const app = angular.module(`movieApp`, [`ngRoute`]);

app.factory(`MovieList`, ($http, $location) => {
  const backendUrl = `http://localhost:8080`;
  const service = {
    movies: [],
    getMovies: (scope, search) => {
      $http({
          method: `GET`,
          url: `http://www.omdbapi.com/?s=${search}&type=movie`,
        })
        .then((data) => {
          service.movies = data.data.Search;
          scope.vm.loading = false;
          $location.url(`/list`);
        });
    },
  };

  return service;
});

app.factory(`MovieDetails`, ($http, $location) => {
  const backendUrl = `http://localhost:3000`;
  const service = {
    movie: {},
    getMovie: (scope, imdbID) => {
      $http({
          method: `GET`,
          url: `http://www.omdbapi.com/?i=${imdbID}&plot=full&r=json`,
        })
        .then((data) => {
          service.movie = data.data;
          scope.vm.loading = false;
          $location.path(`/details`);
        });
    },
  };

  return service;
});

app.config(($routeProvider) => {
  $routeProvider
    .when(`/list`, {
      templateUrl: `partials/list.html`,
      controller: `ListController`,
    })
    .when(`/details`, {
      templateUrl: `partials/details.html`,
      controller: `DetailsController`,
    });
});
