//version 2: create an object with properties



function bank(accNo, accBal, accName ) {
	this.accNo=accNo,
	this.accBal=accBal,
	this.accName=accName,
	this.deposit=function(amt){
					this.accBal+=amt;
	
						},
	this.withdraw= function(amt){
	this.accBal-=amt;
						}
}



var Accbank = new bank(123,100,"sneha");

function testFunction(){
	
	
	console.log("balance",Accbank.accBal);
	console.log("acc_no",Accbank.accNo);
	Accbank.deposit(6000);
	console.log("acc_no",Accbank.accBal);
}