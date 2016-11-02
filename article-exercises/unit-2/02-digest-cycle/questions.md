# Answer the following questions

### What is the difference between $scope.apply and $scope.digest?
- When you call $scope.digest it only runs the digest loop from that particular scope, but when you call $apply, that uses the $rootScope and goes through all scopes in the application.
- If you have a lot of watches and scopes, and you know that you only need to modify a single scope it is best to use $digest, otherwise you can just use $apply

### What is the digest cycle?
- The digest cycle or loop is a what runs after the $apply function brings a callback into the angular context. The digest loop has two sub-loops in it, one is the $watch list and the other is the $evalAsync
- $watch list - This is where angular implements dirty checking. $digest runs iteratively until DOM is stable (it is not dirty).

### What is the scope life cycle? (this will require some additional reading)
- Basically watches the flow of events that are rendered within the browser's DOM and returns waiting for more events. If $apply isn't used then angular scope life cycle won't identify that anything has changed.

### What does "bootstrapping an angular app" mean?
- the ability to manually initialize Angular if necessary.
