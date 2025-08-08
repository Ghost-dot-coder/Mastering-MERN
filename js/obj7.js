accounts = [
  {
    acno: 1000,
    ac_type: "savings",
    balance: 45000,
    transaction: [
      {
        to: 1001,
        amount: 5000,
        msg: "ebill",
        mode: "gpay",
      },
      {
        to: 1002,
        amount: 2000,
        msg: "emi",
        mode: "neft",
      },
      {
        to: 1003,
        amount: 1000,
        msg: "recharge",
        mode: "phonePay",
      },
    ],
  },
  {
    acno: 1001,
    ac_type: "current",
    balance: 30000,
    transaction: [
      {
        to: 1000,
        amount: 1000,
        msg: "grossery",
        mode: "gpay",
      },
      {
        to: 1002,
        amount: 7000,
        msg: "gift",
        mode: "phonePay",
      },
      {
        to: 1003,
        amount: 10000,
        msg: "emi",
        mode: "neft",
      },
    ],
  },
  {
    acno: 1002,
    ac_type: "fixed",
    balance: 100000,
    transaction: [
      {
        to: 1000,
        amount: 5000,
        msg: "ebill",
        mode: "gpay",
      },
      {
        to: 1001,
        amount: 2000,
        msg: "emi",
        mode: "neft",
      },
      {
        to: 1003,
        amount: 1000,
        msg: "recharge",
        mode: "phonePay",
      },
    ],
  },
  {
    acno: 1003,
    ac_type: "savings",
    balance: 30000,
    transaction: [
      {
        to: 1001,
        amount: 5000,
        msg: "ebill",
        mode: "gpay",
      },
      {
        to: 1002,
        amount: 2000,
        msg: "emi",
        mode: "neft",
      },
      {
        to: 1000,
        amount: 1000,
        msg: "recharge",
        mode: "phonePay",
      },
    ],
  },
];

// 1. total number of accounts-
console.log("--------Total number of accounts:  ----------------");
console.log(`${accounts.length}`);

// 2. print account number whose ac_type is savings-
console.log("--------Account number whose ac_type is savings----------------");

accounts
  .filter((acc) => acc.ac_type == "savings")
  .forEach((ac) => console.log(ac.acno));

// 3. print the balance of account number 1000-
console.log(
  "--------print the balance of account number 1000 :  -----------------"
);
acco = accounts
  .filter((acc) => acc.acno == 1000)
  .forEach((element) => {
    console.log(element.acno);
  });
console.log();
// 4. print all gpay transactions-
console.log("--------All gpay transactions------------------");
console.log(
  accounts
    .map((accDetails) => accDetails.transaction)
    .flat(Infinity)
    .filter((accDetails) => accDetails.mode == "gpay")
);

// 5. print all transactions whose amount  > 5000-
console.log("--------All transactions whose amount  > 5000------------------");
console.log(
  accounts
    .map((accountDetails) => accountDetails.transaction)
    .flat(Infinity)
    .filter((accDetails) => accDetails.amount > 5000)
);

// 6. print credit transaction of account 1002 -
console.log("--------credit transaction of account 1002-----------------");
acc1002 = accounts
  .map((accDetail) => accDetail.transaction)
  .flat(Infinity)
  .filter((acc) => acc.to == 1002);
console.log(acc1002);

// 7. print total credited amount to 1002 -
console.log("-------total credited amount to 1002 : -------------");
totalCredited = acc1002.map((amt) => amt.amount).reduce((a, b) => a + b);
console.log(totalCredited);

// 8. print debit transaction of account 1002 -
console.log("-------debit transaction of account 1002-------------");
debitedAmount = accounts.find((acc) => acc.acno == 1002).transaction;
console.log(debitedAmount);

// 9. print total debited amount from 1002 -
totalDebited = debitedAmount.map((amt) => amt.amount).reduce((a, b) => a + b);
console.log(
  `-------total debited amount from 1002: ${totalDebited}-------------`
);

// 10. print transaction history of 1002 -
console.log("-------Transaction history of 1002-------------");
transactionHistory = [...acc1002, ...debitedAmount];
console.log(transactionHistory);

// 11. print current balance (balance+credit amount) of 1002
console.log(
  `current balance (balance+credit amount) of 1002: ${
    accounts.find((a) => a.acno == 1002).balance + totalCredited
  }`
);

// 12. print highest balance account details
highestBalance = accounts.reduce((a, b) => (a.balance > b.balance ? a : b));
console.log(
  `-------highest balance account details: ${highestBalance.acno}- with balanace: ${highestBalance.balance}-----------`
);
