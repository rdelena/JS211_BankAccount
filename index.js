class BankAccount {
  constructor(accountNumber, owner) {
    this.accountNumber = accountNumber;
    this.owner = owner;
    this.transactions = [];
  }
  balance() {
    return this.transactions.reduce(
      (acc, transaction) => acc + transaction.amount,
      0
    );
  }
  deposit(amt) {
    if (amt <= 0) {
      console.log("error");
    } else this.transactions.push(new Transaction(amt, "Deposit"));
  }
  charge(payee, amt) {
    if (amt <= this.balance()) {
      this.transactions.push(new Transaction(-amt, payee));
    } else {
      console.log("Cannot do transaction");
    }
  }
}

class Transaction {
  constructor(amount, payee) {
    this.amount = amount;
    this.payee = payee;
    this.date = new Date();
  }
}

const account = new BankAccount(123456, "Jordan");

// logs initial balance (0)
console.log(account.balance());
// adds 500 to balance
account.deposit(500);
console.log(account.balance());
// charge -$50 from balance
account.charge("Walmart", 50);
console.log(account.balance());
// charge -$500 from balance. Should Log error
account.charge("Target", 500);
console.log(account.balance());
