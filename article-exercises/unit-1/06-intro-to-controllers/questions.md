# What is $scope?

- Scope is an object that refers to the application model. It is an execution context for expressions. Scopes are arranged in hierarchical structure which mimic the DOM structure of the application. Scopes can watch expressions and propagate events.

# What are Angular modules? What's the syntax for defining a module?

- A module can be thout of as a container for the different parts of your app - controllers, services, filters, directives, etc

- HTML

  ```
  <div ng-controller="XmplController">
  {{ greeting }}
  </div>
  ```

- JavaScript ```

angular.module('xmpl.service', [])

.value('greeter', { salutation: 'Hello', localize: function(localization) {

this.salutation = localization.salutation;

}, greet: function(name) {

return this.salutation + ' ' + name + '!'; } })

.value('user', { load: function(name) this.name = name; } });

angular.module('xmpl.directive', []);

angular.module('xmpl.filter', []);

angular.module('xmpl', ['xmpl.service', 'xmpl.directive', 'xmpl.filter'])

.run(function(greeter, user) { // This is effectively part of the main method initialization code greeter.localize({ salutation: 'Bonjour' }); user.load('World'); })

.controller('XmplController', function($scope, greeter, user) { $scope.greeting = greeter.greet(user.name); }); ```

# Why do we pass in $scope as an argument to controller functions?

- $scope is the object in JavaScript that glues together the controllers and views. Properties that are on the $scope object are available to both the view and the controller.

# In Express, what are Angular controllers most analogous to?

- the app.js
