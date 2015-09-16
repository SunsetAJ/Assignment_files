//Tool Tip JS
var info_object;

function Show_information(id, info){
	info_object = document.getElementById(id);
	info_object.innerHTML = "<p>"+info+"</p>";
}
