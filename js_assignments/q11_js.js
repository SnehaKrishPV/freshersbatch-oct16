function myFunction()
{
	var user_input=prompt("Hello !! Please Enter a word)");
	var str=user_input.replace(/\s+/g, ' ');
	document.write(str);
}