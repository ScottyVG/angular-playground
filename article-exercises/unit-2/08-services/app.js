// angular
//   .module("learnServices", [])
//   .factory('personFactory', function() {
//     return {
//       name: "Matt",
//       job: "Instructor",
//       sayHi: function() {
//         return "Hello!"
//       }
//     }
//   }).controller('personController', function(personFactory) {
//     // I now have access to all the methods/properties returned from the personFactory!
//   })

angular
  .module("learnServices", [])
  .service('personService', function() {
    this.name = "Matt";
    this.job = "Instructor";
    this.sayHi = function() {
      return "Hello!"
    }
  }).controller('personController', function(personService) {
    // I now have access to the personService!
  });
