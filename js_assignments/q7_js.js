function myFunction()
{
	 var factorial=1;
var no1 = document.getElementById("int").value;

if (no1 < 0)
{ alert("Error! Factorial of a negative number doesn't exist.");
}
    else
    {
        for(var i=1; i<=no1; ++i)
        {
            factorial *= i;              
        }
        alert("Factorial of "+no1+ "= "+factorial);
    }


}