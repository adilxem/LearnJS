// 1. What is temporal dead zone?
// 2. Are let and const declarations hoisted in JS? 
// 3. Difference b/w SyntaxError, ReferenceError and TypeError?

// 2A. Yes, let and const declarations are hoisted in JS but differently than var declarations. Let and const declarations are in the temporal dead zone until they are initialized.

console.log(x);
var x;

// the above code gives the output 'undefined' as the var declaration x is hoisted

console.log(a);
let a;

// output: ReferenceError: Cannot access 'a' before initialization

// a var declaration is allocated memory (aka hoisting) and is stored in the global memory space, that is why we can access it even before it is initialized (bc the window ~ global object is created along w/ execution context)
// a let declaration is also allocated memory and is assigned 'undefined' (hoisting) but it is not stored in the global memory space, that is why we cannot access it before it is initialized (we can access the variables of the window ~ global object but the variable with let declaration is not stored in the global memory space)
// a let declaration can be accessed only after it is assigned some value, but it is still hoisted 


// 1A. The Temporal Dead Zone refers to the period in the execution of a JS program where a variable exists but cannot be accessed

// so a let declared variable is in the temporal dead zone until it is assigned some value
// trying to access a variable in the temporal dead zone will result in a ReferenceError
// so anything before line 13 is temporal dead zone for the variable a

// butt...

console.log(a); // now this will give 'a' as undefined

// 3A. The ReferenceError object represents an error when a variable that doesn't exist (or hasn't yet been initialized) in the current scope is being accessed.



// 3A. SyntaxError: wrong JS syntax...

// example 1:

// let m = 10; 
// let m = 100; 
// var m = 1000;

// example 2:

// const x;
// x = 18;



// 3A. The TypeError object represents an error when an operation could not be performed, typically (but not exclusively) when a value is not of the expected type.

// A TypeError may be thrown when:

// an operand or argument passed to a function is incompatible with the type expected by that operator or function; or
// when attempting to modify a value that cannot be changed; or
// when attempting to use a value in an inappropriate way.

// example: 

// const x = 11;
// x = 12;


// the const declared variable is stricter than let declared variable
// the const declared variable cannot be changed later on (same with let) and it has to be initialized when it is declared