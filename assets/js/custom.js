(function($) {
    $(document).ready(function() {
        // for sticky navbar
        $(window).scroll(function() {
            if ($(window).scrollTop() > 0) {
                $(".topbar-menu").addClass("sticky");
            } else {
                $(".topbar-menu").removeClass("sticky");
            }
        });
    });
    $(document).ready(function() {
        // for sticky navbar
        $(window).scroll(function() {
            if ($(window).scrollTop() > 0) {
                $(".gototop").addClass("gotobtn");
            } else {
                $(".gototop").removeClass("gotobtn");
            }
        });
    });


    // banner slider
    $(document).ready(function() {
        $('.slider-area').owlCarousel({
            loop: true,
            items: 1,
            autoplay: false,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,

        });
    });

    // counter up

    jQuery(document).ready(function($) {
        $('.counter').counterUp({
            delay: 50,
            time: 2000.
        });
    });
    // init Isotope
    $(document).ready(function() {
        var $grid = $('.grid').isotope({
            // options
        });
    });
    // testimonial slider
    $(document).ready(function() {
        $('.testimonial-contents .owl-carousel').owlCarousel({
            loop: true,
            autoplay: true,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
            responsive:{
                0:{
                    items: 1
                },
                768:{
                    items:1
                },
                992:{
                    items:2
                }
            }

        });
    });

    // venobox
    $(document).ready(function(){
        $('.venobox').venobox(); 
    });
})(jQuery)