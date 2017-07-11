function myFunction()
{
var no1 = document.getElementById("int").value;

do{

for(i=1;i<10;i++)
	{
	document.write(  no1 + " x " + i + " = " + no1*i );
	document.write("<br>")
	}
	no1++;
}while(confirm("Next Table?"))
}