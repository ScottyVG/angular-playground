var parentScope = function() {
  this.aString = "parent string"
  this.aNumber = 100
  this.anArray = [10, 20, 30]
  this.anObject = {
    property1: "parent prop1"
  }
  this.aFunction = function() {
    return 'parent output'
  }
}

// let's create a new instance of the parentScope
var parent = new parentScope

var childScope = function() {}

// let's set the prototype of the childScope to be the parent instance
// we have normally not seen this, because we have inherited from another constructors prototype and the properties/methods of an instance
childScope.prototype = parent

var child = new childScope;

console.log('child', child);
console.log(child.aString);
