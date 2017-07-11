function myFunction()
{
	
var word = document.getElementById("int").value;
var len= word.length;
var  len_index=len--;

//document.write(len);
for(i=0,j=len;i<=word.length/2;i++,j--)
{	flag=1;
	if(word[i]!=word[j])
	{
	flag=0;
	break;
	}
}

if(flag==1)
alert("Palindrome");
else
alert("Consonant");
}