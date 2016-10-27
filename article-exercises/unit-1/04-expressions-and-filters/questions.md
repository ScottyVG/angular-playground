# Questions

### What are Angular expressions? How do they compare to tags from templating engines you've used before?
- Angular expressions are - javascript like snippets that are usually placed in bindings like "{{ expression }}"
- compaired to templating engines before these use custom attributes which are called directives in angular

### What happens when you write invalid code in an expression? What type of error do you get?
- All Angular coded on the page fails to render

### What are Angular filters? Describe what a filter does and then name four built-in filters, including one that we haven't used yet.
- Filters are bits of code that format data before displaying it. Angular comes with a few built-in filters, but you can also create custom filters

### What's the syntax for filters?

- {{ expression | filter }}

### Can you use more than one filter?
- yes
- <tr ng-repeat="player in players | filter:{id: player_id, name:player_name} | filter:ageFilter">

$scope.ageFilter = function (player) {
    return (player.age > $scope.min_age && player.age < $scope.max_age);
}

### We'll soon see how to create custom filters. What is a use case for a custom filter?
- When filtering an expression that doesn't fit the model of the built in filters in Angular
