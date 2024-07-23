// Function Statement/Declaration

function a () {

    console.log("this way of creating a function is called Function Statement!");
}

// Function Expression

var b = function () {

    console.log("in JS, functions can be assingned to variables which makes them act like a value");
    console.log("this way of creating a function is called Function Expression!");
}

// Difference b/w Function Statement and Expression: is 'hoisting' 

// function a is stored in the memory section of the execution context like a function where the whole function is stored as it is; but when a function is assigned to variable, it is stored in the execution context like a variable which is assigned 'undefined' in the memory section. 

// so the function b() can be called only after the execution of line 10, that's when it becomes becomes a function b() from variable var b.



// Anonymous Function

// A function w/out a name is Anonymous Function. It does not have it's own identity.
// Anonymous Functions are used in place where a function is used a value (assigning a function to variable; ref: Function Expression).


// Named Function Expression

var c = function xyz () {

    console.log("Named Function Expression is exactly like a Function Expression but instead of Anonymous Function, a function w/ a name is used");
}

// xyz(); // this throws a ReferenceError: xyz is not defined; that is because the function xyz() is not defined in the global scope, it is created as a local variable

// the named function xyz() can be used inside that local scope:

var c = function xyz () {

    console.log("Named Function Expression is exactly like a Function Expression but instead of Anonymous Function, a function w/ a name is used");

    console.log(xyz); // the function xyz() is accessible inside this scope
}

c();


// First Class Functions: The ability to use functions as values is known as First Class Functions.

// For example, a function can be assigned as a value to a variable, can be passed as an argument to other functions and can be returned by another function.


// Functions can be passed inside another function as arguments.
// Functions can be returned from a function.

function main (param1, param2) {

    param1();
    param2();

    return function () {

        return "a function returned from a function";
    }
}

function arg1 () {

    console.log("a function as an argument");
}

function arg2 () {

    console.log("another function as an argument");
}

var acceptReturnFunction = main (arg1, arg2);

console.log(acceptReturnFunction()); 


// another way of passing a function as an argument: 

function main2 (param) {

    param();
}

main2 (function () {

    console.log("this function is declared as an ARGUMENT!!!");
});

// First Class Citizens = First Class Functions

// the let and const declarations behave like the var declarations; but they are in the temporal dead zone until they are initialized (revise if needed)