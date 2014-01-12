	var count = 0;
	function myFunction()
	{
		while(1)
		alert("Don't press whatever button you saw!!!");
	}

	function VariableTime()
	{
		document.getElementById("time1").innerHTML=Date();
	}

	function OpenWindow(txt)
	{
		window.open(txt);
	}
	var k = 0;
	function LoadPic()
	{
		if(k == 0)
		{
			var data = document.getElementById("p1");
			var ele = document.createElement("img");
			ele.id = "p1_child";
			ele.height = 200;
			ele.width = 200;
			ele.src = "./pic/kuroneko.jpg";
			data.appendChild(ele);
			k = 1;
		}
		else if(k == 1)
		{
			var data = document.getElementById("p1");
			var ele  = document.getElementById("p1_child");
			data.removeChild(ele);
			k = 0;

		}
	}
	
	
function toggleCourseContent()
{
	var source = event.srcElement;
	$(source).siblings(".courseContent").slideToggle();
}	
