/*
 ===========================================================
 Table of Contents
 -----------------------------------------------------------
 ---------------------------------------------
 ** Window Load Fucntion
 ---------------------------------------------
// Preloader
 ---------------------------------------------
 ** On Document Ready
 ---------------------------------------------
// Preloader
// Bootstrap Essentials
// Smooth Scrolling Effect
// Adjust Header Menu On Scroll Down
// Scroll top 
// On click hide collapse menu
// On click hide collapse spiceal menu
// Counter Js
// Hero Section Parellx
// Typed Js For Home 1 Hero Section
// Hero Section Slider
// Typed Js For Home 3 Hero Section
// Typed Js For Home 4 Hero Section
// Typed Js For Home 5 Hero Section
// Typed Js For Home 6 Hero Section
// Typed Js For Home 7 Hero Section
// Special Menu Section Slider
// Team Carousel Slider
// countdown
// Testimonial Carousel
// Footer Carousel
// Cart Plus Minus Button 
// product Carousel
// Check Out
// Check Out 2 Page
//scrollReveal js Init
 ===========================================================
 ===========================================================
 */
// Window Load Fucntion
jQuery(window).load(function() {

    // Preloader
    $('.preloader-wrap').fadeOut('slow', function() { $(this).remove(); });


});

// Document Ready Function
(function($) {
    "use strict";

    // Bootstrap Essentials
    $(".embed-responsive iframe").addClass("embed-responsive-item");
    $(".carousel-inner .item:first-child").addClass("active");
    $('[data-toggle="tooltip"]').tooltip();


    // Smooth Scrolling Effect
    $('.smoothscroll').on('click', function(e) {
        e.preventDefault();
        var target = this.hash;

        $('html, body').stop().animate({
            'scrollTop': $(target).offset().top - 50
        }, 1200);
    });


    $(window).scroll(function() {
        var wScroll = $(this).scrollTop();
        var wh = $(window).height();
        var header_ht = $('.navbar-top').height();

        // Adjust Header Menu On Scroll Down
        if (wScroll > header_ht) {
            $(".nav-area").addClass('sticky');
            $('.navbar-top').css({ marginTop: -header_ht + 'px' });

        } else {
            $(".nav-area").removeClass('sticky');
            $('.navbar-top').css({ marginTop: 0 + 'px' });

        }


        // Scroll top 
        if (wScroll > 800) {
            $('.scroll-top').css('display', 'block');
            $('.scroll-top2').css('display', 'block');
        } else {
            $('.scroll-top').css('display', 'none');
            $('.scroll-top2').css('display', 'none');

        }
    });


    // On click hide collapse menu
    $(".navbar-nav li a").on('click', function(event) {
        $(".navbar-collapse").removeClass("collapse in").addClass("collapse").removeClass('open');
        $(".navbar-toggle").removeClass('open');

    });
    $(".dropdown-toggle").on('click', function(event) {
        $(".navbar-collapse").addClass("collapse in").removeClass("collapse");
        $(".navbar-toggle").addClass('open');
    });
    $('.navbar-toggle').on('click', function() {
        $(this).toggleClass('open');
    });

    // On click hide collapse spiceal menu
    $('.bubbles-toggle').on('click', function() {
        $(this).toggleClass('open');
    });

    // Counter Js
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    // Hero Section Parellx
    $(window).scroll(function() {
        var scrollPx = $(this).scrollTop();
        //console.log(scrollPx);
        $('.bg-left').css({ 'transform': 'translateY(-' + scrollPx * 1.5 + 'px)translateX(-' + scrollPx * 1.5 + 'px)' });
        $('.bg-right').css({ 'transform': 'translateY(-' + scrollPx * 1.5 + 'px)translateX(' + scrollPx / 1.5 + 'px)' });
        $('.bg-right2').css({ 'transform': 'translateY(' + scrollPx * .3 + 'px)translateX(' + scrollPx * .05 + 'px)' });
        $('.sugar-1').css({ 'transform': 'translateY(' + scrollPx / 5 + 'px)' });
        $('.sugar-2').css({ 'transform': 'translateY(' + scrollPx / 5 + 'px)' });
        $('.sugar-4').css({ 'transform': 'translateY(' + scrollPx / 4 + 'px)translateX(-' + scrollPx / 4 + 'px)' });
        $('.coffee-1').css({ 'transform': 'translateX(-' + scrollPx / 6 + 'px)' });
        $('.coffee-3').css({ 'transform': 'translateY(' + scrollPx / 5 + 'px)translateX(-' + scrollPx / 5 + 'px)rotate(-' + scrollPx / 5 + 'deg)' });
        $('.coffee-4').css({ 'transform': 'translateY(' + scrollPx / 7 + 'px)translateX(-' + scrollPx / 6 + 'px)' });
        $('.water-1').css({ 'transform': 'translateY(-' + scrollPx / 6 + 'px)' });
        $('.water-2').css({ 'transform': 'translateY(' + scrollPx / 5 + 'px)' });
        $('.water-3').css({ 'transform': 'translateY(-' + scrollPx / 7 + 'px)translateX(-' + scrollPx / 7 + 'px)' });
        $('.water-4').css({ 'transform': 'translateY(-' + scrollPx / 4 + 'px)translateX(-' + scrollPx / 4 + 'px)' });
    });

    // Typed Js For Home 1 Hero Section
    $(".lead").typed({
        strings: ["Ripe Life With Coffee"],
        typeSpeed: 50,
        backDelay: 600,
    });


    // Hero Section Slider
    function hero_slider_carousel() {
        var owl = $("#hero-slider-screen");
        owl.owlCarousel({
            loop: true,
            margin: 0,
            smartSpeed: 1000,
            responsiveClass: true,
            navigation: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            nav: true,
            items: 1,
            addClassActive: true,
            dots: true,
            autoplay: false,
            autoplayTimeout: 5000,
            responsive: {
                0: {
                    dots: true,
                    nav: false,
                },

                768: {
                    dots: false,
                    nav: true,
                }
            }
        });

        owl.on('changed.owl.carousel', function(event) {
            $('.hero-caption-holder').addClass('animated').addClass('zoomIn')
                .delay(500)
                .fadeIn(900);
        });
        owl.on('change.owl.carousel', function(event) {
            $('.hero-caption-holder')
                .fadeOut(0);
        });

    }
    hero_slider_carousel();


    // Typed Js For Home 3 Hero Section
    $(".lead3").typed({
        strings: ["MEXICAN FRESH QUALITY"],
        typeSpeed: 50,
        backDelay: 600,
    });


    // Typed Js For Home 4 Hero Section
    $(".lead4").typed({
        strings: ["BBQ TIME FRESH QUALITY"],
        typeSpeed: 50,
        backDelay: 600,
    });

    // Typed Js For Home 5 Hero Section
    $(".lead5").typed({
        strings: ["Ripe Life With Tea"],
        typeSpeed: 50,
        backDelay: 600,
    });

    // Typed Js For Home 6 Hero Section
    $(".lead6").typed({
        strings: ["DRINK BEVERAGE FRESH QUALITY"],
        typeSpeed: 50,
        backDelay: 600,
    });

    // Typed Js For Home 7 Hero Section
    $(".lead7").typed({
        strings: ["COOL LIFE FRESH QUALITY"],
        typeSpeed: 50,
        backDelay: 600,
    });

    // Typed Js For Home 7 Hero Section
    $(".lead9").typed({
        strings: ["Touch life With Cool & Fresh"],
        typeSpeed: 50,
        backDelay: 600,
    });


    // Special Menu Section Slider
    function menu_slider_carousel() {
        var owl = $("#menu-slider-screen");
        owl.owlCarousel({
            loop: true,
            margin: 0,
            smartSpeed: 1000,
            responsiveClass: true,
            navigation: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            nav: true,
            items: 1,
            addClassActive: true,
            dots: false,
            autoplay: false,
            autoplayTimeout: 5000,
            responsive: {}
        });


        owl.on('changed.owl.carousel', function(event) {
            $('.recipe-info').addClass('animated').addClass('fadeIn')
                .delay(500)
                .fadeIn(900);
        });
        owl.on('change.owl.carousel', function(event) {
            $('.recipe-info')
                .fadeOut(0);
        });
    }
    menu_slider_carousel();

    // Team Carousel Slider
    function team_carousel() {
        var owl = $("#team-carousel");
        owl.owlCarousel({
            loop: true,
            margin: 10,
            smartSpeed: 2000,
            responsiveClass: true,
            navigation: true,
            nav: false,
            center: true,
            addClassActive: true,
            dots: false,
            autoplay: false,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 3
                }
            }
        });
    }
    team_carousel();

    // countdown
    $('[data-countdown]').each(function() {
        var $this = $(this),
            finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function(event) {
            $this.html(event.strftime('<span class="cdown days"><span class="time-count">%-D</span> <p>Days</p></span> <span class="cdown hour"><span class="time-count">%-H</span> <p>Hour</p></span> <span class="cdown minutes"><span class="time-count">%M</span> <p>Min</p></span> '));
        });
    });


    // Testimonial Carousel
    function testimonial_carousel() {
        var owl = $("#testimonial");
        owl.owlCarousel({
            loop: true,
            margin: 10,
            responsiveClass: true,
            navigation: true,
            nav: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            items: 1,
            smartSpeed: 2000,
            addClassActive: true,
            dots: false,
            autoplay: false,
            autoplayTimeout: 5000,
            responsive: {
                0: {
                    nav: false
                },
                480: {
                    nav: true,
                }
            }
        });
    }
    testimonial_carousel();

    // Footer Carousel
    function instragram_carousel() {
        var owl = $("#instragram-slider");
        owl.owlCarousel({
            loop: true,
            margin: 0,
            responsiveClass: true,
            navigation: false,
            items: 1,
            smartSpeed: 2000,
            addClassActive: true,
            dots: true,
            autoplay: false,
            autoplayTimeout: 7000,
            responsive: {}
        });
    }
    instragram_carousel();

    // Cart Plus Minus Button 

    $(".cart-plus-min").append('<div class="dec qtybutton">-</div><div class="inc qtybutton">+</div>');
    $(".qtybutton").on("click", function() {
        var $button = $(this);
        var oldValue = $button.parent().find("input").val();
        if ($button.text() == "+") {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        $button.parent().find("input").val(newVal);
    });

    // product Carousel
    function product_carousel() {
        var owl = $("#product-slider");
        owl.owlCarousel({
            loop: true,
            margin: 25,
            responsiveClass: true,
            navigation: true,
            nav: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            items: 3,
            smartSpeed: 2000,
            addClassActive: true,
            dots: false,
            autoplay: false,
            autoplayTimeout: 5000,
            responsive: {}
        });
    }
    product_carousel();

    // Check Out
    $(".panel-default:last-child .collapse").addClass("in");
    $(".panel-default:last-child .panel-title a").removeClass("collapsed").addClass('active');

    $('.panel:last-child .panel-title a i').removeClass('fa-plus').addClass('fa-minus');
    $('.panel-title a').on('click', function() {

        $('.panel-title a').removeClass('active');
        $(this).addClass('active');

        if ($(this).find('i').hasClass('fa-plus')) {
            $('.panel-title a').find('i').removeClass('fa-minus').addClass('fa-plus');
            $(this).find('i').removeClass('fa-plus').addClass('fa-minus');
        } else {
            $(this).find('i').removeClass('fa-minus').addClass('fa-plus');
        }
    });

    // Check Out 2 Page
    $(".panel-default:last-child .collapse").addClass("in");
    $(".panel-default:last-child .panel-title2 a").removeClass("collapsed").addClass('active');

    $('.panel:last-child .panel-title2 a i').removeClass('fa-plus').addClass('fa-minus');
    $('.panel-title2 a').on('click', function() {

        $('.panel-title2 a').removeClass('active');
        $(this).addClass('active');

        if ($(this).find('i').hasClass('fa-plus')) {
            $('.panel-title2 a').find('i').removeClass('fa-minus').addClass('fa-plus');
            $(this).find('i').removeClass('fa-plus').addClass('fa-minus');
        } else {
            $(this).find('i').removeClass('fa-minus').addClass('fa-plus');
        }
    });



    //scrollReveal js Init
    window.sr = ScrollReveal({ duration: 800 });
    sr.reveal('.foo');

    // All coustom Js
}(jQuery));
