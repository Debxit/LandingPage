$(document).ready(function () {

    $('.toggle-button').click(function () {
        $(this).toggleClass("is-active");
        $(".header .nav").toggleClass("open");
    });

    $('.team-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
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
                breakpoint: 1200,
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
        limitX: 50,
        limitY: 30,
        scalarX: 2,
        scalarY: 8,
        frictionX: 0.2,
        frictionY: 0.8,
        originX: 0.0,
        originY: 1.0
    });


    /******************** MAP ******************/

//map  initialization


});