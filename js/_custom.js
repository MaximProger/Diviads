$(function() {

    // Slider

    $('#partners__slider').slick({
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
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

      $('.social__inner').slick({
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
          {
            breakpoint: 720,
            settings: {
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2
            }
          }
        ]
      });

      // Burger

      $("#nav__toggle").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("show");
        $("#nav").toggleClass("show");
    });

    // Inner HTML

    let online = 5;
    $("#online").html(online);

    let money = 50000;
    $("#money").html(money);

    function addMoney() {
      money += 2000;
      $("#money").html(money);
    }

    setInterval(addMoney, 3000);

    // Loading

    function loadInfo() {
      for (let i = 0; i < 10; i++) {
        $('#load').animate({  borderSpacing: -360 }, {
          step: function(now,fx) {
            $(this).css('-webkit-transform','rotate('+now+'deg)'); 
            $(this).css('-moz-transform','rotate('+now+'deg)');
            $(this).css('transform','rotate('+now+'deg)');
          },
          duration:'slow'
      },'linear');
      };
      
      function changeInfo() {
        $("#infoBody").css('display', 'block');
        $("#load").css('display', 'none');
      }

      setTimeout(changeInfo, 3000);
    }

    loadInfo();

    // Auth Btn

    function heartBtn() {
      $('#authBtn').addClass('animation');
    }

    function remHearBtn() {
      $('#authBtn').removeClass('animation');
    }

    setInterval(remHearBtn, 100);
    setInterval(heartBtn, 500);

    // Table

    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    let hour = date.getHours();
    let minutes = date.getMinutes(); 

    $(".date").html(day + '.' + month + '.' + year + ' ' + hour + ':' + minutes);

    function addPayItem() {
      $('.payout__item:first-child').css('display', 'flex');
      $('.payout__item:last-child').css('display', 'none');
    }

    setInterval(addPayItem, 2000);

});