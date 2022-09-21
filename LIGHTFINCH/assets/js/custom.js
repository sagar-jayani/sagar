$(window).resize(function () {
    //Function

});

$(document).ready(function () {
    //Function

    // wow
     new WOW().init();

    //Menu Js
    $('.menu_toggle_btn').click(function () {
        $('.header_wrapper').toggleClass('menu_open');
        $('html').toggleClass('cm-overflow');
    });
    $('.close_menu, .menu_block ul li a').click(function () {
        $('.header_wrapper').removeClass('menu_open');
        $('html').removeClass('cm-overflow');
    });


    // logo slider
    $('#compnay_logo_wrap').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        autoplaySpeed: 3000,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        slideTransition: 'linear',
        responsive: {
            0: {
                items: 4
            },
            767: {
                items: 6
            },
            992: {
                items: 6

            }
        }
    });


    //   video Play
        $(".play_video").click(function () {
            $(this).prev('.gr_1').find('video').get(0).play();
            $(this).hide();
        });
        $(".gr_1").click(function () {
            $(this).find('video').get(0).pause();
            $("#play_1").show();
        });


        $(window).scroll(function(){
            if ($(this).scrollTop() > 2000) {
            $('.the_shortest_wrapper').addClass('newClass');
            } else {
            //    $('.the_shortest_wrapper').removeClass('newClass');
            }
        });
        $(window).scroll(function(){
            if ($(this).scrollTop() < 900) {
            $('.the_shortest_wrapper').removeClass('newClass');
            } else {
            //    $('.the_shortest_wrapper').removeClass('newClass');
            }
        });


        window.onscroll = function () {
            var sectionbgSelector = document.querySelector('.energy_solution_wrapper');
            var secpostion = sectionbgSelector.offsetTop;
            var  sectionHeight = sectionbgSelector.clientHeight;
            var win = window.innerHeight + window.scrollY;
            var endDistance = secpostion +  sectionHeight


            console.log(win);
            var patiyu = sectionbgSelector.offsetTop + 1000;

            // console.log(win  + " window and window scroll px");
            // console.log(secpostion  + " tARGET SECTION");

            if ( win >= patiyu) {
                $('.energy_solution_wrap').addClass('solution_img_active');
            }


            if (win >= endDistance) {
                $('.energy_solution_wrap').removeClass('solution_img_active');
            }

            if (win <= patiyu) {
            $('.energy_solution_wrap').removeClass('solution_img_active');
            }
        };

});