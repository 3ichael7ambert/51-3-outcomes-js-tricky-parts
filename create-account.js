// create-account.js
function createAccount(initialPin, initialBalance = 0) {
  let pin = initialPin;
  let balance = initialBalance;

  function checkBalance(enteredPin) {
    if (enteredPin !== pin) {
      return 'Invalid PIN.';
    }
    return `$${balance}`;
  }

  function deposit(enteredPin, amount) {
    if (enteredPin !== pin) {
      return 'Invalid PIN.';
    }
    balance += amount;
    return `Succesfully deposited $${amount}. Current balance: $${balance}.`;
  }

  function withdraw(enteredPin, amount) {
    if (enteredPin !== pin) {
      return 'Invalid PIN.';
    }
    if (amount > balance) {
      return 'Withdrawal amount exceeds account balance. Transaction cancelled.';
    }
    balance -= amount;
    return `Succesfully withdrew $${amount}. Current balance: $${balance}.`;
  }

  function changePin(enteredPin, newPin) {
    if (enteredPin !== pin) {
      return 'Invalid PIN.';
    }
    pin = newPin;
    return 'PIN successfully changed!';
  }

  return { checkBalance, deposit, withdraw, changePin };
}

module.exports = { createAccount };
