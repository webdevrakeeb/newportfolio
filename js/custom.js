$(document).ready(function(){
    $(".carousel").owlCarousel({
        items: 2,
        margin: 30,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 1000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items:1,
            },
            992: {
                items:2,
            },
        },
    });

    $(".mobile-menu").click(function(){
        $(".menu-area").toggle();
    });

    $('body').materialScrollTop();




  });