//Topic: Random User ID Generator
//4. Create a tool that generates a 4-digit 'Guest ID' (e.g., 1000 to 9999) for a login system.
function generateGuestID() {
    return Math.round(Math.random() * 9000) + 1000;
}

console.log("Guest ID: " + generateGuestID());
console.log("Guest ID: " + generateGuestID());
console.log("Guest ID: " + generateGuestID());
console.log("Guest ID: " + generateGuestID());
console.log("Guest ID: " + generateGuestID());