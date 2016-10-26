### Unit-1/05-built-in-directives

* What is the purpose of ng-init?

- ng-init allows an expression to be evaluated in the current scope

* Why use ng-src and ng-href?

- ng-src allows you to us angular in a src link to change a specific part of the query/link using the angular notation.

- ng-href allows you to us angular in an href link to change a specific part of the query/link using the angular notation.

* What are directives?

- Directives are Angular's way of extending HTML. It adds functionality to HTML elements and attributes. When coupled with angular templating, directives create dynamic components that re-rendered when the underlying data is changed.
- FROM THE DOCS - At a high level, directives are markers on a DOM element (such as an attribute, element name, comment or CSS class) that tell AngularJS's HTML compiler to attach a specified behavior to that DOM element or even transform the DOM element and its children.

* Does ng-class require an object to be passed in?
- No, but depending on how the expression evaluates the output will very based on expression it was passed.

* What order does an ng-repeat display items in?
- Angular relies on the order returned by the browser when running {for key in myObj}

* How does ng-repeat handle duplicate data?
- ng-repeat uses$watchCollection to detect changes in the collection. When a change happens, ng-repeat then makes the corresponding changes to the DOM:
- when an item is added, a new instance of the template is added to the DOM
- When an item is removed, its template instance is removed from the DOM
- When items are reordered, their respective templates are reordered in the DOM.
