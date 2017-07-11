var trial=3;
function myFunction()
{
var uid=2;
var pass=2;
var no1 = document.getElementById("no1").value;
var no2 = document.getElementById("no2").value;
if(trial>0)
{
	if(uid==no1 && pass==no2)
	{
		alert("Authenticated!");
		trial=3;
	}
	else
	{
		trial--;
		alert("Denied! only "+trial+" attempts left");
		
	}

}
else
{
	alert("No attempts left");
}


}


