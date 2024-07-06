// 1. What is a block?
// 1A. A block is defined by the curly braces {}

{

    // a block is also known as 'Compound Statement'

    // a block is used to combine multiple statements into one group

    // we use blocks so we can use multiple statements together in a place where the JS engine or any other language compiler expects only a single statement

    // example: functions, if, else if, else, for, while, switch, etc.
}


// 2. What is a block scope?
// 2A. Whichever variables or functions we can access inside a block 

{

    // variables and functions in the block scope are hoisted in a different memory space (not global object); they are stored in the block scope object

    // only let and const are stored in the block scope object

    // "let and const are block scoped"

}

{

    var a = 10;
    let b = 100;
    const c = 1000;
}

console.log(a);

// we can only access var a outside of the block because the var declarations are stored in global scope
// let b and const c is inaccessible outside of the block because they are stored in the block scope object and once the execution of the block is complete it is removed from the execution context or call stack



// 3. Shadowing in JavaScript
// 3A. Let's do it with an example: 

var a = 100;
{

    var a = 10;
    let b = 100;
    const c = 1000;

    console.log(a); // output: 10
}

console.log(a); // output: 10

// so basically the 'var a' inside the block is shadowing the 'var a' outside the block

// the variable 'a' was pointing to an object which held the value 10, but as the var declaration is stored in global object, when another var declaration with the same identifier 'a' was declared inside the block, it changed its reference to another object which stored 100

// so a different object was created in the global scope using the var declaration inside the block, but as the reference variable of both the objects was same, the variable shifted its reference to the newer object

var a = 11;
console.log(a); // output: 11 (as expected)

// which means that the var declaration is mutable


// butt... that is not the case with let declarations

let x = 100;
{

    var a = 10;
    let x = 20; // here this 'b' inside the block is shadowing the 'b' outside the block
    const c = 30;

    console.log(x); // output: 20
}

console.log(x); // output: 100

// this happened because the let declaration outside the block is stored in some other scope object while the let declaration inside the block is stored in the block scope object

// const work the same way as let here


// 'Illegal Shadowing'

let m = 18;

{
    // var m = 17; // this is invalid as 'm' has already been declared
}

// butt.. the var declaration is function scoped

function y () {

    var m = 17; // so this is valid, because we cannot access the 'var m' outside of this function
}

// also...

var h = 5;

{
    let h = 7;
    console.log(h); // output: 7
}

console.log(h); // output: 5

// that happened because let is inside the block scope object


// lexical scope works the same way inside block scope 

const q = 1;

{
    const w = 2;
    console.log(q); // output: 1

    {
        console.log(w); // output: 2
    }
}