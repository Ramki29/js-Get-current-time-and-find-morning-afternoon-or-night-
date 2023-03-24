var today=new Date();
var hour=today.getHours();;
console.log(hour);


if(hour<12)
	{
		document.write("Morning");
		document.write("<br>");
	}
	else if(12<=hour && 17>hour)
	{
		document.write("Afternoon");
		document.write("<br>");
	}
	else if(hour>=17 && 20>hour)
	{
		document.write("Evening");
		document.write("<br>");
	}
	else
	{
		document.write("Night");
		document.write("<br>");
	}
	