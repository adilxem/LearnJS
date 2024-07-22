// hoisting general meaning: to lift or pull something up

getName();
console.log(x);
console.log(getName);

console.log(hi); //output: undefined

hi();

var x = 7;

function getName() {
    console.log("hello");
}

// when the execution context is created, it allocates memory to the variables and functions first and then assignes the values in the code section of the execution context. that is why while executing the above code, getName() shows the output because it is completely stored in the memory; but the value of x is 'undefined' because it has been allocated space in the memory but the value '7' is not yet assigned to the variable 'x'

var hi = () => {

    console.log("hi");
}

// assigning a function to a variable makes the function acts like a value; the way we assing values to variables - here a function is assigned to a variable which makes the function acts like a value

console.log(hi);
hi();

// try executing...
