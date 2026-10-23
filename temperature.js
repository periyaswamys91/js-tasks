//Topic: Temperature Range Generator
//3. Create a weather simulator that generates a random temperature for a city between 15°C and 30°C.

function generateTemperature() {
    let temperature = Math.floor(Math.random() * 16) + 15;
    return temperature;
}

let city = "Chennai";
let temperature = generateTemperature();

console.log("City:", city);
console.log("Temperature:", temperature + "°C");

let city1 = "Madurai";
let temperature1 = generateTemperature();

console.log("City:", city1);
console.log("Temperature:", temperature1 + "°C");
