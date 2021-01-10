$(document).ready(function () {

    // For opening and closing of menu toggle
    $('.menu-toggler').on('click', function() 
    {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });

    // Once Element in menu toggle has been clicked - we close menu-toggler and navigate to id.
    $('.top-nav .nav-link').on('click', function() 
    {
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    });

    $('nav a[href*="#"]').on('click', function () {
        $('html, body').animate({
            scrollTop:$($(this).attr('href')).offset().top
        }, 2000);
      
    });

    $('#up').on('click', function() 
    {
        $('html, body').animate({
            scrollTop:0 //scrolls to top of page
        }, 2000);
    });
    

    AOS.init({
        easing: 'ease',
        duration: 1800, 
        // once : true
    });
});
