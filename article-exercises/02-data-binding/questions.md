* What does `ng-model` do?
- ng-model ties/binds the value of the text input to a property called "name". Technically, ng-model tries to bind "name" by evaluating the expression on the current $scope, and since the property "name" doesn't already exist on the $scope, it will be created implicitly and added to the $scope.


* [What is "dirty checking"?](http://stackoverflow.com/questions/24698620/dirty-checking-on-angular)
- dirty checking comes from the angular concept of the digest cycle. This cycle is essentially a loop where Angular checks if there are any changes to all the variables watched by all the $scopes. So if you have $scope.myVar defined in your controller and this variable was marked for being watched, then you are explicitly telling Angular to monitor the changes on my Var in each iteration of the loop.
tl:dr dirty checking scans the scope for changes.


* Find a way to set the initial value of "name" as "BoJack" (without writing a controller).
<input type="text" placeholder="What is your name?" ng-model="name">
<h1>My name is: {{name}}</h1>



* What are those `{{ }}` expressions? Are they Handlebars?
- they are not Handlebars (yuck). Angular expressions are JavaScript-like code snippets that are mainly placed in interpolation bindings like {{ ScottyIsSoCool }}


* Explain what two-way data binding is.
- Data-binding in Angular is the automatic synchronization of data between the model and view components. The view will project the model at all times. When the model changes, the view reflects the change, and vice versa.

* BONUS: Research the `$digest` loop
- Events are fired when the page loads, and when an $http request comes back (ex. when the mouse moves or a button is clicked)
- When an event is fired/triggered, JavaScript creates an event object and executes any functions listening for the specific events with this event object. This callback method then runs inside the JavaScript function, which returns to the browser, potentially updating the DOM.
- No two events can run at the same time. The browser waits until one event handler finishes before the next handler is called.
- in regular JavaScript, a function callback can be attached to a click event on a div. Any time that click event is found on an elelment the function callback runs:
```
var div = document.getElementById("clickDiv");
div.addEventListener("click",
  function(evt) {
    console.log("evt", evt);
  });
```
