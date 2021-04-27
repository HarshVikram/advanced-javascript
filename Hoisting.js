// # HOISTING

// If we attempt to use a variable before it has been declared and initialized,
// it will return undefined.

// Attempt to use a variable before declaring it
console.log(x);

// Variable assignment
var x = 100;
 
// OUTPUT
undefined

// However, if we omit the var keyword, we are no longer declaring the variable,
// only initializing it. It will return a ReferenceError and halt the execution of
// the script.

// Attempt to use a variable before declaring it
console.log(x);

// Variable assignment without var
x = 100;
 
// OUTPUT
ReferenceError: x is not defined

// The reason for this is due to hoisting, a behavior of JavaScript in which variable
// and function declarations are moved to the top of their scope. Since only the actual
// declaration is hoisted, not the initialization, the value in the first example
// returns undefined.

// The code we wrote
console.log(x);
var x = 100;

// How JavaScript interpreted it
var x;
console.log(x);
x = 100;

// JavaScript saved x to memory as a variable before the execution of the script. Since it
// was still called before it was defined, the result is undefined and not 100. However, it
// does not cause a ReferenceError and halt the script. Although the var keyword did not
// actually change location of the var, this is a helpful representation of how hoisting works.
// This behavior can cause issues, though, because the programmer who wrote this code likely
// expects the output of x to be true, when it is instead undefined.

// Initialize x in the global scope
var x = 100;

function hoist() {
  // A condition that should not affect the outcome of the code
  if (false) {
    var x = 200;
  }
  console.log(x);
}

hoist();
 
// OUTPUT
undefined

// In this example, we declared x to be 100 globally. Depending on an if statement, x could change
// to 200, but since the condition was false it should not have affected the value of x. Instead,
// x was hoisted to the top of the hoist() function, and the value became undefined.

// This type of unpredictable behavior can potentially cause bugs in a program. Since let and const
// are block-scoped, they will not hoist in this manner, as seen below.

// Initialize x in the global scope
let x = true;

function hoist() {
  // Initialize x in the function scope
  if (3 === 4) {
    let x = false;
  }
  console.log(x);
}

hoist();
 
// OUTPUT
true

// Duplicate declaration of variables, which is possible with var, will throw an error with let
// and const.

// Attempt to overwrite a variable declared with var
var x = 1;
var x = 2;

console.log(x);
 
// OUTPUT
2
// Attempt to overwrite a variable declared with let
let y = 1;
let y = 2;

console.log(y);
 
// OUTPUT
Uncaught SyntaxError: Identifier 'y' has already been declared

// To summarize, variables introduced with var have the potential of being affected by hoisting, a
// mechanism in JavaScript in which variable declarations are saved to memory. This may result in
// undefined variables in one’s code. The introduction of let and const resolves this issue by
// throwing an error when attempting to use a variable before declaring it or attempting to declare
// a variable more than once.