# Exercises

# Answer the following questions

## What is $rootScope?

- Every application has a single root scope. All other scopes descend from $rootScope which we can inject into our controllers (by adding $rootScope as a parameter to the callback function on the .controller method)

## Explain how $scope is passed from a parent to child controller

- normal protoypal scope inheritance -- ng-include, ng-switch, ng-controller, directive with scope: true
- normal prototypal scope inheritance with a copy/assignment -- ng-repeat. Each iteration of ng-repeat creates a new child scope, and that new child scope always gets a new property.

## List five built in directives that create their own scope

- ng-include
- ng-controller
- ng-switch
- ng-repeat
- ng-if
- ng-view

### "Scope becomes tricky when you try to 2 way data bind to a primitive defined on the parent scope from inside the child scope" - what does this mean?

- because depending on the scope that we are using the scope that gets created may not be associated with the original scope and can cause errors in your code.
