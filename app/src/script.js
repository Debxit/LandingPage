$(document).ready(function () {

    var headerHeight = $('.header').height();


    $('.toggle-button').click(function () {
        $(this).toggleClass("is-active");
        $(".header .nav").toggleClass("open");
    });

    $('.team-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        // variableWidth: true,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('#scene').parallax({
        calibrateX: false,
        calibrateY: true,
        invertX: false,
        invertY: true,
        limitX: false,
        limitY: 50,
        scalarX: 6,
        scalarY: 6,
        frictionX: 0.2,
        frictionY: 0.8,
        originX: 0.0,
        originY: 1.0
    });

    $("#parallax").parallax({
        calibrateX: false,
        calibrateY: true,
        invertX: false,
        invertY: true,
        limitX: false,
        limitY: false,
        scalarX: 7,
        scalarY: 8,
        frictionX: 0.2,
        frictionY: 0.3,
        originX: 0.0,
        originY: 0.0
    });
/* menu scrolling */

    $('.nav__item a').click(function(){
        $('.nav__item').removeClass("active");
        $(this).parent().addClass("active");
        var hashVal = $(this).attr("href");
        var scrollToPosition = $(hashVal).offset().top - headerHeight;
        // perform animated scrolling by getting top-position of target-element and set it  as scroll target
        $('html, body').stop().animate({ scrollTop: scrollToPosition}, 600,  function() {
            location.hash = target;
        });

        return false;
    });

$(window).scroll(function(){

var windowPos = $(window).scrollTop();

    if (( windowPos > ($("#about").offset().top - headerHeight))&&( windowPos < $("#prices").offset().top)){
        $('.floor3').addClass("visible");

        $('.floor2').delay("1200").addClass("visible");

        $('.floor1').delay("1500").addClass("visible");
 } else {
        $('.floor1').removeClass("visible");

        $('.floor2').delay("1200").removeClass("visible");
           // setTimeout("", 1000);
        $('.floor3').delay("2000").removeClass("visible");

    }


});


});