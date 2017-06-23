$(document).ready(function(){
	$(".button").click(function(){
		$(".overlay").fadeToggle(200);
		$(".button a").toggleClass('btn-open').toggleClass('btn-close');
	});
	$(".overlay").click(function(){
		$(".overlay").fadeToggle(200);   
		$(".button a").toggleClass('btn-open').toggleClass('btn-close');
	});
});

