angular
  .module("learningServices")
  .factory("firstService", function() {
    // outside of the return block, we can declare private variables and functions

    // we must return an object, everything we return can be accessed externally
    return {
      sayHi: function() {
        return "Hello!"
      },
      sayGoodbye: function() {
        return "Goodbye!"
      },
      getAllUsers: function() {
        // some AJAX call to our database to get all the users
      },
      addUser: function(user) {
        // another AJAX call to our database to add a user
      }
    }
  });
