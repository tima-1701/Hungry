$(document).ready(function(){
    $('.desert__inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
    });

    var  Mixer  =  mixitup ( '.price__menu', {
        load: {
            filter: '.category-a'
        }
    });
    });

