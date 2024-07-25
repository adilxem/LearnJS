// What is a Callback Function?

// A callback function is a function that is passed as an argument to another function, to be “called back” at a later time.

// JavaScript is a synchronous single-threaded language; butt w/ callbacks, we can do asynchronous things in JS

function x (y) {

    // execution of y() now depends on x(); y() can/will be called by/within x() at a later time, whenever y() is needed
    y();
}

x (function y () {

    console.log("y() is called inside x()");
});

// y() is a callback function; it is passed as an argument to x() to be called later by/within x()

setTimeout(function () {

    console.log("i waited 5 seconds :(");
}, 5000);

// the setTimeout function takes a function as an argument and the time (in milliseconds) after that the argument function will be executed; meanwhile any other code will continue executing simultaneously without waiting for the setTimeout's complete execution, which makes JavaScript asynchronous now :/

console.log("i'm here before that setTimeout function");




// What does "Blocking the Main Thread" means? 

// all these functions x(), y(), the callback function inside setTimeout() are all executed through the 'call stack'
// JavaScript has only one Call Stack and it is also called as the 'Main Thread'

// If any operation blocks the call stack, that is known as "Blocking the Main Thread"

// If a piece of code takes a long time to execute, it will block the main thread and prevent other code from running. This can lead to a poor user experience, as the UI may become unresponsive while executing the code.

// suppose x() has some very heavy operations to do which takes around 15-20 seconds to complete, the operations after x() will be on hold till x() is completely executed (because JavaScript is a single-threaded language, it has only one call stack/main thread)

// that is the reason why asycn operations should be used for the things which takes time and can potentially block the main thread and prevent other code/statements from executing

