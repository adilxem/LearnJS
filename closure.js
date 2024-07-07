// closure is a function bundled together with its lexical environment


// A closure in JavaScript is a function that has access to the variables in its parent scope, even after the parent function has completed execution. This allows for data to be "closed over" or remembered by the inner function, even after the outer function has returned.


function x () {

    var a = 2;

    function y () {

        console.log(a);
    }

    y();
}

x();


// here, y() forms a closure with the variables which are inside x(), so whenever y() will be returned it will remember its parent's lexical scope as well


// function x () {

//     var a = 2;

//     function y () {

//         console.log(a);
//     }

//     return y(); // we can also return a function in JS
// }

// x();


function x () {

    var a = 2;

    function y () {

        console.log(a);
    }

    return y();
}

console.log(x); // outputs the whole function y()

var f = x; // we can assign a function to variable in JS

// now this 'var f' has the whole function x() inside it, and the function x() was vanished from the call stack after its execution; still f holds the reference to the function x()

f();

// when the function y() was returned in line 45, it returned with it's lexical environment (the variables and functions that were present in y()'s parent)



// more pointers:

// 1. An inner function can be directly called using two parenthesis ()().
// 2. Even parameters can be passed this way (Remember that the function needs to be returned to do this)
// 3. Closures can also be used for data hiding and encapsulation. So other code cannot access this value.
// 4. Unused variables are automatically deleted in High Level Programming language by garbage collector. Closures allocate a lot of memory which cannot be deleted so this acts as a disadvantage.
// 5. Some browsers now have smart garbage collectors that automatically deletes variables that are not used outside closures.


// the closure is formed only because the inner function is returned by the outer function