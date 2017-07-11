function myFunction()
{
var no1 = document.getElementById("no1").value;
var no2 = document.getElementById("no2").value;

if(no1<no2)
{
	n=no1;
while(n<no2)
{
	flag=0;
	

	for ( i=2; i<=n/2; i++){
		if ( n%i == 0 )
		{
		flag=1;
		break;
		
		}

	}
if(flag==0)
{
	document.write(n);
	document.write("<br>");
}
	n++;
}
}

else{
n=no2;
while(n<no1)
{
flag=0;
for (var c=2; c<=n/2; c++){
	if ( n%c == 0 )
		{
			flag=1;
		break;
		
		}



}
if(flag==0)
{
	document.write(n);
	document.write("<br>");
}
	n++;

}

}
}