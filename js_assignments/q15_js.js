function myfunction()
{
var str = document.getElementById("eid").value;

str = str.split(" ").join("");
var countA=0;
var countE=0;

var countI=0;

var countO=0;

var countU=0;

var len=str.length;

for(i=0;i<len;i++)
{
if(str[i]=='a' || str[i]=='A')
{
countA++;
}


if(str[i]=='e' || str[i]=='E')
{
countE++;
}


if(str[i]=='i' || str[i]=='I')
{
countI++;
}

if(str[i]=='o' || str[i]=='O')
{
countO++;
}

if(str[i]=='u' || str[i]=='U')
{
countU++;
}
}
document.write("a:"+countA);
document.write("<br>");
document.write("e:"+countE);
document.write("<br>");
document.write("i:"+countI);
document.write("<br>");
document.write("o:"+countO);
document.write("<br>");
document.write("u:"+countU);








}
