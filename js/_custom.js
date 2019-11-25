$(function() {

    $('#partners__slider').slick({
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
              breakpoint: 975,
              settings: {
                slidesToShow: 3
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2
              }
              },
            {
              breakpoint: 410,
              settings: {
                slidesToShow: 1
              }
            }
          ]
      });
});