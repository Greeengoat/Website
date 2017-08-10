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

jQuery(document).ready(function ($) {
    $(window).load(function () {
        setTimeout(function(){
            $(".se-pre-con").fadeOut('slow', function () {
            });
        },700); // set the time here
    });  
});