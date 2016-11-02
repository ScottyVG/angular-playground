// var app = angular.module('mouseOverDirectiveApp', [])
//
// app.directive('gsChangeBackground', function() {
//   return {
//     link: function(scope, element, attrs) {
//
//       var oldColor = element.css('background-color');
//
//       element.on('mouseenter', function(event) {
//         element.css('background-color', 'yellow');
//       });
//
//       element.on('mouseleave', function(event) {
//         element.css('background-color', oldColor);
//       })
//     }
//   };
// });


var app = angular.module('circleApp', []);

app.directive('gsBigRedCircle', function() {
  return {
    controller: function($scope) {
      $scope.view = {};
      $scope.view.sayHi = function() {
        alert("Hi! Thanks for clicking on me!");
      };
    },
    template: '<div class="circle">Click me!</div>',
    link: function(scope, element, attrs) {

      element.on('click', function() {
        scope.view.sayHi();
      });

    }
  };
});
