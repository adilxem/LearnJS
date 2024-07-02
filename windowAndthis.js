// an empty JS file is the shortest JS program 

// if we run an empty JS program with no code, the JS engine of a browser (this concept only applies to browsers) stil creates the Global Execution Context

// along with the Global Execution Context, the browser JS engine creates a global object called 'window' which has lots of functions and variables - these functions and variables are created by the JS engine into the global space 

// the JS engine always creates the Global Execution Context and the global object when the program is run, even if the program is empty (zero lines of code)

// The 'window' object represents a window (like a tab) in browser 
// An object of window is created automatically by the browser

// 'window' is the object of browser, it is not the object of javascript 
// the javascript objects are string, array, date etc.

// note: if html document contains frame or iframe, browser creates additional window objects for each frame

// JS engine also creates a 'this' keyword (a special identifier/reference variable that refers to the object that is executing the current piece of code), just like the 'window' object 

// the JavaScript engine creates and manages the 'this' keyword. It determines the value of 'this' based on the context in which a function is executed. The value of 'this' is not set until a function is called, and it can change depending on how and where the function is invoked

// 1. Global Context: when code is executed in the global scope, 'this' refers to the global object. In browsers, this is the 'window' object, and in Node.js, it's the 'global' object.

console.log(this); // In a browser, logs the window object

// 2. Function Context: when a function is called, the JavaScript engine sets 'this' to the object that called the function. If the function is not called on an object, 'this' defaults to the global object (or undefined in strict mode).

function showThis() {

    console.log(this);
  }

  showThis(); // In non-strict mode, logs the global object ('window' in browsers)
  