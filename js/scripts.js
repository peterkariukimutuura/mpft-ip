$(document).ready(function(){
	var showmylinks=  $(".showmylinks");
	var mylinks =$(".mylinks");
	showmylinks.click(function(){
		mylinks.fadeToggle("slow","linear");
	});

});