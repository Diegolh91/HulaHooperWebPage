$(document).ready(function() {

  $("#navigation-bar ul li a").click(function(){
    var page = $(this).attr("href");
    if ( page == "home"){
      $('html,body').animate({
        scrollTop: $('#home').offset().top
      },500);
      console.log($(window).height());
    }else if ( page == "about"){
      $('html,body').animate({
        scrollTop: $('#about').offset().top - 70
      },500);
    }else if ( page == "images"){
      $('html,body').animate({
        scrollTop: $('#images').offset().top- 70
      },500);
    }else if ( page == "youtube"){
      $('html,body').animate({
        scrollTop: $('#youtube').offset().top- 70
      },500);
    }else if ( page == "social"){
      $('html,body').animate({
        scrollTop: $('#social').offset().top- 70
      },500);
    }else if ( page == "contact"){
      $('html,body').animate({
        scrollTop: $(document).height()
      },500);
    }
    return false;
  })

  $("#home").css({
    "height": $(window).height() + "px"
  });

  var flag = false;
  var wScroll;

  $(window).resize(function(){
    if ($(window).width() <= 768 && $(window).scrollTop() < 173 ) {
      $("#logo").css({
        "margin-top":"-5px",
        "width": "50px",
        "height":"50px"
      })
    }
    if ($(window).width() > 768 && $(window).scrollTop() < 173 ) {
      $("#logo").css({
        "margin-top":"200px",
        "width": "220px",
        "height":"220px"
      })
    }
  })

  $(window).scroll(function(){

    wScroll = $(this).scrollTop();
    if ($(window).width() >= 768) {
      if (wScroll > 173) {
        $("#logo").css({
          "margin-top":"-5px",
          "width": "50px",
          "height":"50px"
        })
      }else{
        $("#logo").css({
          "margin-top":"200px",
          "width": "220px",
          "height":"220px"
        })
      }
    }
  });

});
