//Topic: Return Value vs. Return Function
//2. Compare two functions: one that returns the result of an addition, and one that returns a new function that performs the addition.

function addReturnValues(a, b) {
    return a + b;
}

let addResult = addReturnValues(5, 10);
console.log("Result of addReturnValues:", addResult); // Output: 15

function addReturnFunction(x) {
    return function(y) {
        return x + y;
    };
}

let addNumbers = addReturnFunction(5);
let addReturnFunctionResult = addNumbers(10);
console.log("Result of addReturnFunction:", addReturnFunctionResult); // Output: 15
