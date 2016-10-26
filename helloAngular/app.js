const app = angular.module("firstApp", [])

app.controller("MyFirstController", function($scope) {
  $scope.name = "Severus Snape";
})

function getTimeStamp() {
  var now = new Date();
  return ((now.getMonth() + 1) + '/' +
    (now.getDate()) + '/' +
    now.getFullYear() + " " +
    now.getHours() + ':' +
    ((now.getMinutes() < 10) ?
      ("0" + now.getMinutes()) :
      (now.getMinutes())) + ':' +
    ((now.getSeconds() < 10) ?
      ("0" + now.getSeconds()) :
      (now.getSeconds())));
}

app.controller("ExercisesController", function($scope) {
  // let d = new Date()
  $scope.FavColor = "Green"
  $scope.secondsInACentury = 60 * 60 * 24 * 365 * 100
    // TODO: put in date format...
  $scope.rightMeow = getTimeStamp()
})
