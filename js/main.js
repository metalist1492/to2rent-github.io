$(function(){
    $('.slider').slick({
        nextArrow:'<button class="slick-arrow slick__next"><img src="images/next.svg" alt="#"></button>',
        prevArrow:'<button class="slick-arrow slick__prev"><img src="images/prev.svg" alt="#"></button>',
        responsive: [
            {
              breakpoint: 441,
              settings: {
                arrows: false
              }
            }
            
          ]
    });
});







