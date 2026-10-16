//Topic: Boundary Value Inspector
//2. Create a discount validator for a store. Customers get a 10% discount if they spend between $50 and $100 (inclusive).
let amount = 68;

if (amount >= 50 && amount <= 100) {
    let discount = amount * 0.10;
    let finalAmount = amount - discount;

    console.log("Discount Eligible");
    console.log("Discount: $" + discount.toFixed(2));
    console.log("Final Amount: $" + finalAmount.toFixed(2));
} else {
    console.log("Discount Not Eligible");
    console.log("Final Amount: $" + amount.toFixed(2));
}