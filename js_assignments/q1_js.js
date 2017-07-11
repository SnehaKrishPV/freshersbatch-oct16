function myFunction() {
var age = document.getElementById("frm1").value;
	var d = new Date();
    var n = d.getFullYear();
    var year= n-age;
    
    document.write(year);
}