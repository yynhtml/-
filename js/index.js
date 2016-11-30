$(function(){
	$("#content dt").click(function(){
		var floor = $(this).parent().parent().attr("class");
		console.log(floor);
		window.location = "floor.html";
		window.localStorage["floor"] = floor;
	})
})
