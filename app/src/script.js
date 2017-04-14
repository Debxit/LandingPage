$(document).ready(function () {

    var headerHeight = $('.header').height();

    $('.toggle-button').click(function () {
        $(this).toggleClass("is-active");
        $(".header .nav").toggleClass("open");
    });

//close mobile menu on body click
    $(document).on('click', function(e) {
        var target = e.target;
        if ($(target).hasClass('toggle-button')||$(target).hasClass("icon-bar")||$(target).hasClass("nav__item")){

            return false;
        }

        $('.toggle-button').removeClass("is-active");
        $(".header .nav").removeClass("open");
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
            scalarX: 12,
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



    $('a.buy').click( function(event){ // лoвим клик пo ссылки с id="go"
        event.preventDefault(); // выключaем стaндaртную рoль элементa
        $('#overlay').fadeIn(400, // снaчaлa плaвнo пoкaзывaем темную пoдлoжку
            function(){ // пoсле выпoлнения предъидущей aнимaции
                $('#modal_form')
                    .css('display', 'block') // убирaем у мoдaльнoгo oкнa display: none;
                    .animate({opacity: 1, top: '50%'}, 200); // плaвнo прибaвляем прoзрaчнoсть oднoвременнo сo съезжaнием вниз
            });
    });
    /* Зaкрытие мoдaльнoгo oкнa, тут делaем тo же сaмoе нo в oбрaтнoм пoрядке */
    $('#modal_close, #overlay').click( function(){ // лoвим клик пo крестику или пoдлoжке
        $('#modal_form')
            .animate({opacity: 0, top: '45%'}, 200,  // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
                function(){ // пoсле aнимaции
                    $(this).css('display', 'none'); // делaем ему display: none;
                    $('#overlay').fadeOut(400); // скрывaем пoдлoжку
                }
            );
    });


    /**************** Валидация формы **********************/

    // Устанавливаем обработчик потери фокуса для всех полей ввода текста
    $('input#Name, input#Phone, textarea#Message').unbind().blur( function(){

        // Для удобства записываем обращения к атрибуту и значению каждого поля в переменные
        var id = $(this).attr('id');
        var val = $(this).val();

        // После того, как поле потеряло фокус, перебираем значения id, совпадающие с id данного поля
        switch(id)
        {
            // Проверка поля "Имя"
            case 'Name':
                var rv_name = /^[a-zA-Zа-яА-Я]+$/; // используем регулярное выражение

                console.log('name form');
                // Eсли длина имени больше 2 символов, оно не пустое и удовлетворяет рег. выражению,
                // то добавляем этому полю класс .not_error,
                // и ниже в контейнер для ошибок выводим слово " Принято", т.е. валидация для этого поля пройдена успешно

                if(val.length > 2 && val != '' && rv_name.test(val))
                {
                    $(this).removeClass('error').addClass('not_error');
                }

                // Иначе, мы удаляем класс not-error и заменяем его на класс error, говоря о том что поле содержит ошибку валидации,
                // и ниже в наш контейнер выводим сообщение об ошибке и параметры для верной валидации

                else
                {
                    $(this).removeClass('not_error').addClass('error');
                    $(this).next('.error-box').html('поле "Имя" обязательно для заполнения<br>, длина имени должна составлять не менее 2 символов<br>, поле должно содержать только русские или латинские буквы')
                        .css('color','red')
                        .animate({'paddingLeft':'10px'},400)
                        .animate({'paddingLeft':'5px'},400);
                }
                break;

            // Проверка email
           /* case 'email':
                var rv_email = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
                if(val != '' && rv_email.test(val))
                {
                    $(this).addClass('not_error');
                    $(this).next('.error-box').text('Принято')
                        .css('color','green')
                        .animate({'paddingLeft':'10px'},400)
                        .animate({'paddingLeft':'5px'},400);
                }
                else
                {
                    $(this).removeClass('not_error').addClass('error');
                    $(this).next('.error-box').html('поле "Email" обязательно для заполнения<br>, поле должно содержать правильный email-адрес<br>')
                        .css('color','red')
                        .animate({'paddingLeft':'10px'},400)
                        .animate({'paddingLeft':'5px'},400);
                }
                break;
            */
            // Проверка телефона
            case 'Phone':
             var rv_phone = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}/;


                console.log('phone form');

             if(val != '' && rv_phone.test(val))
             {
             $(this).removeClass('error').addClass('not_error');
             }
             else
             {
             $(this).removeClass('not_error').addClass('error');
             $(this).next('.error-box').html('поле "Телефон" обязательно для заполнения<br>, поле должно содержать правильный номер телефона<br>')
             .css('color','red')
             .animate({'paddingLeft':'10px'},400)
             .animate({'paddingLeft':'5px'},400);
             }
             break;

            // Проверка поля "Сообщение"
            case 'Message':
                if(val != '' && val.length < 5000)
                {
                    $(this).removeClass('error').addClass('not_error');
                }
                else
                {
                    $(this).removeClass('not_error').addClass('error');
                    $(this).next('.error-box').html('поле "Сообщение" обязательно для заполнения')
                        .css('color','red')
                        .animate({'paddingLeft':'10px'},400)
                        .animate({'paddingLeft':'5px'},400);
                }
                break;

        } // end switch(...)

    }); // end blur()

    // Теперь отправим наше письмо с помощью AJAX
    $('form#application').submit(function(e){

        // Запрещаем стандартное поведение для кнопки submit
        e.preventDefault();

        // После того, как мы нажали кнопку "Отправить", делаем проверку,
        // если кол-во полей с классом .not_error равно 3 (так как у нас всего 3 поля), то есть все поля заполнены верно,
        // выполняем наш Ajax сценарий и отправляем письмо адресату

        if($('.not_error').length == 3)
        {
            // Eще одним моментом является то, что в качестве указания данных для передачи обработчику send.php, мы обращаемся $(this) к нашей форме,
            // и вызываем метод .serialize().
            // Это очень удобно, т.к. он сразу возвращает сгенерированную строку с именами и значениями выбранных элементов формы.

            $.ajax({
                url: 'application.php',
                type: 'post',
                data: $(this).serialize(),

                beforeSend: function(xhr, textStatus){
                    $('form#feedback-form :input').attr('disabled','disabled');
                },

                success: function(response){
                    $('form#application :input').removeAttr('disabled');
                    $('form#application :text, textarea').val('').removeClass().next('.error-box').text('');
                    alert(response);
                }
            }); // end ajax({...})
        }

        // Иначе, если количество полей с данным классом не равно значению 3, мы возвращаем false,
        // останавливая отправку сообщения в невалидной форме
        else
        {
            return false;
        }

    }); // end submit()



});