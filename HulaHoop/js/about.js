$(document).ready(function() {

  var wScroll;
  $(window).scroll(function(){
    wScroll = $(this).scrollTop();

    $("#married-div").css({
      "-webkit-transform":"translate("+wScroll/20 +"%,0px)"
    })

  })

});
