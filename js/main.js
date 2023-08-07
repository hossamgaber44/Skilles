const navLink = document.querySelector(".all-links");
function toggleNavbar() {
    navLink.classList.toggle('mobile-menu');
};
$(document).ready(function () {

    $("#Find-possion .banner-image div").hover(function () {
        $(this).siblings().animate({
            width: "17%",
            position: "relative",
        }, 300,)
        $(this).animate({
            width: "62%",
            position: "relative",
        }, 300,)
        $(this).find('.img-cours').fadeIn();
        $(this).find('.img-info').fadeIn();
        $(this).siblings().find('.img-cours').fadeOut();
        $(this).siblings().find('.img-info').fadeOut();
    });

    /*  popup log-in */
    $(".log-in").click(function () {
        $(".createAccount-page").fadeOut();
        $(".popup").fadeIn();
    });
    /* sign-up */
    $(".sign-up").click(function () {
        $(".popup").fadeOut();
        $(".createAccount-page").fadeIn();
    });

    $(".popup-login").click(function(e){
        e.preventDefault();
        $(".log-in-bg").fadeIn();
    });
    $(".log-in-bg").click(function(){
        $(".log-in-bg").fadeOut();
    });
    $(".log-in-bg .popup .log").click(function(e){
        e.stopPropagation();
    });
    $(".log-in-bg .createAccount-page .log").click(function(e){
        e.stopPropagation();
    });
    $(".close_popup").click(function(e){
       e.preventDefault();
        $(".log-in-bg").fadeOut();
    });

});