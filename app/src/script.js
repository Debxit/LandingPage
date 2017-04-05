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

    if ($(window).width() > 768) {

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
    }

    /* menu scrolling */

    $('.nav__item a').click(function () {
        $('.nav__item').removeClass("active");

        if (!$(this).parent().hasClass("logo")) {
            $(this).parent().addClass("active");
        }
        var hashVal = $(this).attr("href");
        var scrollToPosition = $(hashVal).offset().top - headerHeight + 2;
        // perform animated scrolling by getting top-position of target-element and set it  as scroll target
        $('html, body').stop().animate({scrollTop: scrollToPosition}, 600);
        return false;
    });

    $("#connect").click(function () {
        var scrollToPosition = $('#contacts').offset().top - headerHeight + 2;
        $('html, body').stop().animate({scrollTop: scrollToPosition}, 600);
    });

    if ($("#about").length) {
        $(window).scroll(function () {
            var windowPos = $(window).scrollTop();
            if (( windowPos > ($("#about").offset().top - headerHeight)) && ( windowPos < $("#prices").offset().top)) {
                $('.floor3,.floor2,.floor1').addClass("visible").removeClass("not-visible");

            } else {
                $('.floor3,.floor2,.floor1').removeClass("visible").addClass("not-visible");

            }
        });
    }


});