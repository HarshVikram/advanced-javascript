// # SCOPE 

// Scope in JavaScript refers to the current context of code, which
// determines the accessibility of variables to JavaScript. The two
// types of scope are local and global:

//   Global variables: are those declared outside of a block
//   Local variables: are those declared inside of a block

// The accesibility in scope works downwards, so you can access 
// global variables from a local variable but you can't access local
// variables from a global variable, or you can't access a local
// variable outside of a block. Basically, a child component can
// access a parent component from anywhere in it's block but a parent
// component can't access a child outside of its block.


// 1. Using 'var' for variables: 

//   Variables declared with the var keyword are always function-scoped,
//   meaning they recognize functions as having a separate scope. This
//   locally-scoped variable is therefore not accessible from the global
//   scope.

// Initialize a global variable
var species = "human";

function transform() {
  // Initialize a local, function-scoped variable
  var species = "werewolf";
  console.log(species);
}

// Log the global and local variable
console.log(species);
transform();
console.log(species);

// OUTPUT
human
werewolf
human


// 2. Using 'let' for variables:

//   The new keywords let and const, however, are block-scoped. This means
//   that a new, local scope is created from any kind of block, including
//   function blocks, if statements, and for and while loops.
//   To illustrate the difference between function- and block-scoped variables,
//   we will assign a new variable in an if block using let.


var fullMoon = true;

// Initialize a global variable
let species = "human";

if (fullMoon) {
  // Initialize a block-scoped variable
  let species = "werewolf";
  console.log(`It is a full moon. Lupin is currently a ${species}.`);
}

console.log(`It is not a full moon. Lupin is currently a ${species}.`);
 
// OUTPUT
It is a full moon. Lupin is currently a werewolf.
It is not a full moon. Lupin is currently a human.

// If we were to use var, however, there would be a different result.

var fullMoon = true;

// Initialize a global variable
var species = "human";

if (fullMoon) {
  // Initialize a block-scoped variable
  var species = "werewolf";
  console.log(`It is a full moon. Lupin is currently a ${species}.`);
}

console.log(`It is not a full moon. Lupin is currently a ${species}.`);
 
// OUTPUT
It is a full moon. Lupin is currently a werewolf.
It is not a full moon. Lupin is currently a werewolf.


// In the result of this example, both the global variable and the block-scoped
// variable end up with the same value, werewolf. This is because instead of
// creating a new local variable with var, you are reassigning the same variable
// in the same scope. var does not recognize if to be part of a different,
// new scope. 

// It is generally recommended that you declare variables that are
// block-scoped, as they produce code that is less likely to unintentionally
// override variable values.


