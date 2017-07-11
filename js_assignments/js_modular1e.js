function Bank(accNo, accBal, accName) {

this.accNo=accNo,
	this.accBal=accBal,
	this.accName=accName

};


Bank.prototype.fill=  function(_accNo, _accBal, _accName) {
accNo = _accNo;
 accBal = _accBal;
accName = _accName;
};


Bank.prototype.getAmount= function() {
return this.amount;
};
Bank.prototype.getContents= function() {
return this.contains;
};

var Bankobj = new Bank(567,2000,"richard");

function testFunction(){
	
	Bankobj.fill(987,2678,"foodpanda");
	console.log("balance",Bankobj.accBal);
	console.log("acc_no",Bankobj.accNo);
	console.log("acc_no",Bankobj.accBal);
}