class Bank {
  accountDetails = {
    1000: {
      acno: 1000,
      username: "userone",
      password: "userone",
      balance: 50000,
    },
    1001: {
      acno: 1001,
      username: "usertwo",
      password: "usertwo",
      balance: 5000,
    },
    1002: {
      acno: 1002,
      username: "userthree",
      password: "userthree",
      balance: 10000,
    },
    1003: {
      acno: 1003,
      username: "userfour",
      password: "userfour",
      balance: 6000,
    },
  };
  // validate account number function returns true/false
  validateAccount(acno) {
    return this.accountDetails.hasOwnProperty(acno);
  }
  // authenticate account(acno,password)

  // balance enquiry function

  // function for fund transfer(fromAcno, toAcno, amount)
}
const validate = new accountDetails()