* What does `ng-model` do?
- ng-model ties/binds the value of the text input to a property called "name". Technically, ng-model tries to bind "name" by evaluating the expression on the current $scope, and since the property "name" doesn't already exist on the $scope, it will be created implicitly and added to the $scope.


* [What is "dirty checking"?](http://stackoverflow.com/questions/24698620/dirty-checking-on-angular)
- dirty checking comes from the angular concept of the digest cycle. This cycle is essentially a loop where Angular checks if there are any changes to all the variables watched by all the $scopes. So if you have $scope.myVar defined in your controller and this variable was marked for being watched, then you are explicitly telling Angular to monitor the changes on my Var in each iteration of the loop.
tl:dr dirty checking scans the scope for changes.


* Find a way to set the initial value of "name" as "BoJack" (without writing a controller).



* What are those `{{ }}` expressions? Are they Handlebars?
- they are not Handlebars (yuck). Angular expressions are JavaScript-like code snippets that are mainly placed in interpolation bindings like {{ ScottyIsSoCool }}


* Explain what two-way data binding is.


* BONUS: Research the `$digest` loop
