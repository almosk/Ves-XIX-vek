$(function() {
  $('.scrollPlus').click(function() {
    $('.mainSection').css({"margin-left": "-=1280px"});
  });

  $('.scrollMinus').click(function() {
    $('.mainSection').css({"margin-left": "+=1280px"});
  });
});
