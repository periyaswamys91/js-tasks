//Topic: The Six-Sided Die Roller
//2. Develop a script that generates a random integer between 1 and 6, simulating a standard die roll.
function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
}

console.log("Die Roll: " + rollDie());
console.log("Die Roll: " + rollDie());
console.log("Die Roll: " + rollDie());
console.log("Die Roll: " + rollDie());
console.log("Die Roll: " + rollDie());