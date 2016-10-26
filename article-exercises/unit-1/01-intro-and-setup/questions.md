## Questions

* Why learn Angular JS over other frameworks like Ember, Backbone, Knockout, etc?
- Angular is more of an industry standard than Ember, Backbone or Knockout currently.

* People have some very strong opinions about Angular. What are 3 common complaints people have about Angular?
- Client Side Rendering: This is not the best model for websites that primarily present static content.
- $scope issues: DirtyChecking triggers a recursive check of all scope properties. This causes issues if you bind too much data and your app can start slowing down.
- Complexity: can be hard to learn
- Dependency Injection is not Minification Friendly without using work arounds.
- Angular JS 2.0 is out and is more module dependent and relies less on client side rendering.

* Is Angular an MVC framework?
- MVC means having clear separation in your code between the data (model), the application logic (controller), and presenting the data to the user (view). In angular apps, the view is the Document Object Model (DOM), the controllers are JavaScript classes, and the model data is stored in object properties.
tl:dr yes

* Turn to the Angular docs. Find `ng-app`. What is it and what does it do? What does `ng` stand for?
- ng (core module): the ng module is loaded by default when an AngularJS application is started. The model itself contains the essential components for an AngularJS application to function.
