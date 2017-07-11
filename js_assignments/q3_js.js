function myFunction()
{
var no1 = document.getElementById("no1").value;
var no2 = document.getElementById("no2").value;

if(no2==0)
	{
	alert("Second No is zero!");

	}
	
	else
	{
	
	var div = no1/no2; 
	document.write(div);
	}
}