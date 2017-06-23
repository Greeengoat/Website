$(window).scroll(function() {
    var top_of_element = $(".single-post").offset().top;
    var bottom_of_element = $(".single-post").offset().top + $(".single-post").outerHeight();
    var bottom_of_screen = $(window).scrollTop() + $(window).height();
    var top_of_screen = $(window).scrollTop();

    if((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
        $('.single-post').addClass('animated bounceInUp');
    }
});