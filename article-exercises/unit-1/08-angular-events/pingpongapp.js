var app = angular.module("pingpong", []);

app.controller("playerController", function($scope) {
  $scope.player1 = {
      name: "Player 1",
      score: 0,
      serving: true
    },
    $scope.player2 = {
      name: "Player 2",
      score: 0,
      serving: false
    },

    $scope.total = 0,
    $scope.whoseServe = function() {
      if ($scope.total % 2 == 0) {
        $scope.player1.serving = true;
        $scope.player2.serving = false;
      } else {
        $scope.player2.serving = true;
        $scope.player1.serving = false;
      }
    },

    $scope.addPoint = function(player) {
      player.score += 1;
      $scope.total += 1;
      $scope.whoseServe();
    },


    $scope.reset = function() {
      $scope.player1 = {
          name: "Player 1",
          score: 0,
          serving: true
        },
        $scope.player2 = {
          name: "Player 2",
          score: 0,
          serving: false
        },
        $scope.total = 0
    };

})
