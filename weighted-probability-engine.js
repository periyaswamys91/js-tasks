//Topic: The Weighted Probability Engine
//5. Simulate a loot box drop rate. A 'Common' item should have an 80% chance, and a 'Rare' item should have a 20% chance.
function simulateLootBox() {
    let randomNum = Math.random();
    if (randomNum < 0.8) {
        return 'Common';
    } else {
        return 'Rare';
    }
}

console.log("Loot Box Drop Result: " + simulateLootBox());
console.log("Loot Box Drop Result: " + simulateLootBox());
console.log("Loot Box Drop Result: " + simulateLootBox());
console.log("Loot Box Drop Result: " + simulateLootBox());
console.log("Loot Box Drop Result: " + simulateLootBox());
