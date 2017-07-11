function Bank(_accNo, _accBal, _accName) {
// private members
var accNo = _accNo;
var accBal = _accBal;
var accName = _accName;
// public methods
return{
fill : function(_accNo, _accBal, _accName) {
accNo = _accNo;
 accBal = _accBal;
accName = _accName;
},

getAccountNo:function() {
return accBal;
},
getAccountName: function() {
return accName;
}


}
}

var Bankobj = new Bank(567,2000,"richard");

function testFunction(){
	Bankobj.fill(987,2678,"foodpanda");
	var accBal= Bankobj.getAccountNo();
	document.write(accBal);
	
	
	
	}