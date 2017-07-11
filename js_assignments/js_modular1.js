	
	//version 1: create an object with properties

	var BankAccount = {
	accNo: 123456789,
	accBal: 100000,
	accName: "xoriant",
	deposit: function(amt){
					this.accBal+=amt;
	
						},
	withdraw: function(amt){
	this.accBal-=amt;
						}
	};


function testFunction(){
	BankAccount.deposit(2000);
	console.log("balance:",BankAccount.accBal)
	console.log("account no:",BankAccount.accNo)
}