//Topic: The Counter Closure Challenge
//3. Create a function 'createCounter' that returns a function. Every time the returned function is called, it increments and logs a count.
function createCounter() {
    let count = 0;
    return function() {
        count++;
        console.log(count);
    };
}

const counter = createCounter();

counter(); 
counter(); 
counter(); 
counter(); 
counter(); 