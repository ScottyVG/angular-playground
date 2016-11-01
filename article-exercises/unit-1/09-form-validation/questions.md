# Questions

## Exercise - questions + building your own form and validations

## First, answer the following questions

### When does a form/input have a property of $valid? What class accompanies this property?
- boolean that indicates whether an item is currently valid based on the rules you placed.
- ng-valid

### When does a form/input have a property of $invalid? What class accompanies this property?
- boolean that indicates whether an item is currently invalid based on the rules you placed.
- ng-invalid

### When does a form/input have a property of $pristine? What class accompanies this property?
- Boolean that's true if the form/input has not been used yet.
- ng-pristine

### When does a form/input have a property of $dirty? What class accompanies this property?
- Boolean that's true if the form/input has been used.
- ng-dirty

### When does a form/input have a property of $touched? What class accompanies this property?
- Boolean that's true if the input has been blurred.
- ng-touched

### What does blurred mean? (research the blur event)
- the blur event occurs when an element loses focus. The blur() method triggers the blur event, or attaches a function to run when a blur event occurs. Tip: this method is often used together with the focus() method.


# For the next set of questions, assume that you have a form with a name="quizForm"

### Create a text input with a name of "question" and give it a validation of "required". If it is $valid add a class of "valid"
### For your text input with a name of question, add a paragraph tag with the text "please enter a valid question" if the input is not valid
### Create a text input with a name of "answer" and give it a validation of "required" and a minimum length of 4 characters. If it is $valid and not $pristine add a class of "correct".
### How would you access all of the errors (in an object) for an input with a name of quizForm.username
### What validations would you add in an input to make sure that there is a minimum length of 4 and a maximum length of 20
### What validation would you add in an input to make sure that only numbers between 1 and 5 are a valid input (use regular expressions for this!)
