class Bank{

    accountDetails = {

        1000: {acno:1000, username:"userone",password:"userone", balance:50000},

        1001: {acno:1001, username:"usertwo",password:"usertwo", balance:5000},

        1002: {acno:1002, username:"userthree",password:"userthree", balance:10000},

        1003: {acno:1003, username:"userfour",password:"userfour", balance:6000},

    }

    // validate account number function returns true/false
           validateAccount(acno) { 
        return this.accountDetails.hasOwnProperty(acno);
    }
    // authenticate account(acno,password)
       authenticateAcc(acno,password){
        if(this.validateAccount(acno)){
            if(password1 == this.accountDetails[acno].password){
                console.log("Authentication Successful")
            }else{
                console.log("Authentication Failed...")
            }

            } else {
                console.log("Invalid Account ...")
            }
            }
        
       
    

    // balance enquiry function

       balanceEnquiry(acno){
        if(this.validateAccount(acno)){
            console.log(`Current balance of ${acno} is ${this.accountDetails[acno].balance}`);
        } else{
            console.log("Invalid Account...")
        }
       }

    

    // function for fund transfer(fromAcno, toAcno, amount)
         fundtransfer(fromAcno, toAcno, amount){
            if(this.validateAccount(fromAcno) && this.validateAccount(toAcno) ){
                if(this.accountDetails[fromAcno].balance >= amount){
                    console.log(`Before transfer balance of ${fromAcno} : ${this.accountDetails[fromAcno].balance}
                        ${toAcno} : ${this.accountDetails[toAcno].balance}`);
                        this.accountDetails[fromAcno].balance  -= amount;
                                                this.accountDetails[fromAcno].balance  += amount;
                                                console.log(`Before transfer balance of ${fromAcno} : ${this.accountDetails[fromAcno].balance}
                        ${toAcno} : ${this.accountDetails[toAcno].balance}`);

                                                }else{
                                                    console.log("Insufficent balance");

                                                }
                                            }else{
                                                console.log("Invalid Account..");
                                            }

                                        }

            }
        


    

const user = new Bank()
console.log(user.validateAccount(1002)? "Account is valid" : "Account is invalid");

user.authenticateAcc(100, "userone");
user.balanceEnquiry(1001);
user.fundtransfer(1000,1003,5000)