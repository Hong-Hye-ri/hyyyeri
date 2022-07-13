$(document).ready(function () {
    $(".submenu").hide();
    $(".mainmenu~div").hide();
    $(".mainmenu").hover(function () {
        $(".mainmenu ul").stop().slideToggle();
        $(".mainmenu~div").stop().slideToggle();
    });
    $(".button").hide()
    $(".button").delay(300).fadeIn(600)
});



