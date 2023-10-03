function createAccount(pin, initialDeposit) {
    let balance = initialDeposit;
    let accountPin = pin;
  
    return {
      checkBalance: function (enteredPin) {
        if (enteredPin === accountPin) {
          return `Current balance: $${balance}.`;
        } else {
          return "Invalid PIN.";
        }
      },
      deposit: function (enteredPin, amount) {
        if (enteredPin === accountPin) {
          balance += amount;
          return `Successfully deposited $${amount}. Current balance: $${balance}.`;
        } else {
          return "Invalid PIN.";
        }
      },
      withdraw: function (enteredPin, amount) {
        if (enteredPin === accountPin) {
          if (amount <= balance) {
            balance -= amount;
            return `Successfully withdrew $${amount}. Current balance: $${balance}.`;
          } else {
            return "Withdrawal amount exceeds account balance. Transaction cancelled.";
          }
        } else {
          return "Invalid PIN.";
        }
      },
      changePin: function (oldPin, newPin) {
        if (oldPin === accountPin) {
          accountPin = newPin;
          return "PIN successfully changed!";
        } else {
          return "Invalid PIN.";
        }
      },
    };
  }
  
  module.exports = { createAccount };

  
let account = createAccount("1234", 100);

console.log(account.checkBalance("oops"));
// Output: "Invalid PIN."

console.log(account.deposit("1234", 250));
// Output: "Successfully deposited $250. Current balance: $350."

console.log(account.withdraw("1234", 300));
// Output: "Successfully withdrew $300. Current balance: $50."

console.log(account.withdraw("1234", 10));
// Output: "Withdrawal amount exceeds account balance. Transaction cancelled."

console.log(account.changePin("1234", "5678"));
// Output: "PIN successfully changed!"
