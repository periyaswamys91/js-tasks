//Topic: The Fair Coin Flip Simulator
//1. Create a function that simulates flipping a fair coin. It should return either 'Heads' or 'Tails' based on a random calculation.
//function flipCoin() {
  //  return Math.random() < 0.5 ? 'Heads' : 'Tails';
//}
function flipCoin() {
    
    let randomNum = Math.random();
    console.log("Random Number: " + randomNum);
    // If the random number is less than 0.5, return 'Heads', otherwise return 'Tails'
    if (randomNum < 0.5) {
        return 'Heads';
    } else {
        return 'Tails';
    }
}

console.log("Result: " + flipCoin());
console.log("Result: " + flipCoin());
console.log("Result: " + flipCoin());
console.log("Result: " + flipCoin());
console.log("Result: " + flipCoin());


