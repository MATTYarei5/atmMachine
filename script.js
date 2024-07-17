class BankAccount {
  constructor() {
    this.balance = 0.0;
  }

  printBalance() {
    alert(`Your balance is: $${this.balance.toFixed(2)}`);
  }

  deposit() {
    let userDeposit = prompt("Enter the amount to deposit:");
    if (userDeposit === null) return;

    userDeposit = parseFloat(userDeposit);
    if (isNaN(userDeposit) || userDeposit <= 0) {
      alert("Please enter a valid positive number for deposit.");
      return;
    }

    this.balance += userDeposit;
    alert(`You have deposited: $${userDeposit.toFixed(2)}`);
  }

  withdraw() {
    let userWithdraw = prompt("Enter the amount to withdraw:");
    if (userWithdraw === null) return;

    userWithdraw = parseFloat(userWithdraw);
    if (isNaN(userWithdraw) || userWithdraw <= 0) {
      alert("Please enter a valid positive number for withdrawal.");
      return;
    }

    if (userWithdraw > this.balance) {
      alert(
        `Insufficient funds. Your current balance is: $${this.balance.toFixed(
          2
        )}`
      );
      return;
    }

    this.balance -= userWithdraw;
    alert(`You have withdrawn: $${userWithdraw.toFixed(2)}`);
  }
}

const bankAccount = new BankAccount();

while (true) {
  let userResponse = prompt(
    `Welcome to the Bank\n\nPlease select an option:\n\nB - View Balance\nD - Deposit\nW - Withdraw\nQ - Quit`
  );

  if (userResponse === null || userResponse.trim() === "") {
    continue;
  }

  switch (userResponse.toUpperCase()) {
    case "B":
      bankAccount.printBalance();
      break;
    case "D":
      bankAccount.deposit();
      break;
    case "W":
      bankAccount.withdraw();
      break;
    case "Q":
      alert("Goodbye! Please come again.");
      throw new Error("User chose to quit.");
    default:
      alert("Invalid option. Please try again.");
      break;
  }
}
