	var BankAccount = {
	accNo: 0.0,
	accBal: 0.0,
	accName: "NULL",
	deposit: function(amt){
					this.accBal+=amt;
	
						},
	withdraw: function(amt){
	this.accBal-=amt;
						}
	};
	
	function testFunction(){
	var BankAccountobj= Object.create(BankAccount);
	BankAccountobj.accNo=345;
	document.write(BankAccountobj.accNo);
	}
	
	
	
