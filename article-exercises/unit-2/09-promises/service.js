app.service("Pokemon", function($http) {

  var baseUrl = 'http://pokeapi.co/';

  // A number for the pokemon id needs to be added to the
  // this path.
  var pokemonInfoPath = 'api/v1/pokemon/';
  return {
    catchEm: function(pokemonId) {
      var pokeData;
      var fullUrl = baseUrl + pokemonInfoPath + pokemonId + '/';
      $http.get(fullUrl).then(function(baseData) {
        pokeData = baseData.data;
        var uri = pokeData.abilities[0].resource_uri;
        $http.get(baseUrl + uri).then(function(abilityData) {
          pokeData.abilities[0] = abilityData.data;
          // Notice that this get request doesn't depend on the
          // get request it is nested inside of.

          var uri = pokeData.moves[0].resource_uri;
          $http.get(baseUrl + uri).then(function(moveData) {
            pokeData.moves[0] = moveData.data;

            // Now we have a problem.  How do we signal that this
            // data is done?
          })
        });
      });
    }
  };
});
