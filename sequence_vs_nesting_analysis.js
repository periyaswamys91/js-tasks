//Topic: Sequence vs. Nesting Analysis	
//3. Write a program that classifies a number: 'Small' (0-10), 'Medium' (11-20), 'Large' (21-30).
let number = 15; // Example number

if (number >= 0 && number <= 10) {
    console.log('Small');
} else if (number >= 11 && number <= 20) {
    console.log('Medium');
} else if (number >= 21 && number <= 30) {
    console.log('Large');
} else {
    console.log('Number is outside the defined ranges.');
}