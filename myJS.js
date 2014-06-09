function load_content(url)
{
	console.log("Loading content of " + url + " page");
	var xhr = new XMLHttpRequest();
	xhr.open("GET",url,false);
	xhr.send();
	console.log("Receive: ");
	console.log(xhr.responseText);
	console.log("End");
	return xhr.responseText;
}
function load_index()
{
	//this function will load the content of the index page
	var content = load_content("home.html");
	var div = document.getElementById("content");
	div.innerHTML = content;
}

function load_course()
{
	//this function will load the content of the course page
	var content = load_content("course.html");
	var div = document.getElementById("content");
	div.innerHTML = content;
}

function load_project()
{
	//this function will load the content of the project page
	var content = load_content("project.html");
	var div = document.getElementById("content");
	div.innerHTML = content;
}

function load_contact()
{
	//this function will load the content of the contact page
	var content = load_content("contact.html");
	var div = document.getElementById("content");
	div.innerHTML = content;
}
