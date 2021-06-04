$(function(){
    $('.fairy-tail__slider, .our-trip__slider').slick({
        prevArrow: '<button type="button" class=slick-prev slick-btn"><img src="images/arrow-prev.svg" alt=""></button>',
        nextArrow: '<button type="button" class=slick-next slick-btn"><img src="images/arrow-next.svg" alt=""></button>',
        autoplay: true,
        fade: true,
        responsive:[
            {
                breakpoint: 601,
                setting:{
                    arrows: false
                }
            },
        ]
    });
    $(".menu").on("click","a", function (event) {
        
    })
});