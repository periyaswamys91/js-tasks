//Topic: Private Bank Account Simulator
//5. Implement a simple bank account system where the 'balance' cannot be accessed or modified directly from outside. Only 'deposit' and 'withdraw' methods should be exposed.

function createBankAccount(initialBalance) {
    let balance = initialBalance;

    return {
        deposit(amount) {
            if (amount > 0) {
                balance += amount;
                console.log("Deposited: " + amount);
                console.log("Current balance: " + balance);
            } else {
                console.log("Invalid deposit amount");
            }
        },

        withdraw(amount) {
            if (amount <= 0) {
                console.log("Invalid withdrawal amount");
            } else if (amount > balance) {
                console.log("Insufficient balance");
            } else {
                balance -= amount;
                console.log("Withdrawn: " + amount);
                console.log("Current balance: " + balance);
            }
        }
    };
}

const account = createBankAccount(1000);

account.deposit(500);
account.withdraw(200);
account.withdraw(2000);

console.log("Balance property:", account.balance);
