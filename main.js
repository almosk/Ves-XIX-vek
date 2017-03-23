$(function() {
  var counter = 0;

  $('.scrollPlus').click(function() {
    if (counter < 6) {
      $('.mainSection').css({"margin-left": "-=1280px"});
      $('.scrollMinus').removeClass('hidden');
      if (counter == 5) {
        $('.scrollPlus').addClass('hidden');
      }
      counter += 1;
    }
  });

  $('.scrollMinus').click(function() {
    if (counter > 0) {
      $('.mainSection').css({"margin-left": "+=1280px"});
      $('.scrollPlus').removeClass('hidden');
      if (counter == 1) {
        $('.scrollMinus').addClass('hidden');
      }
      counter -= 1;
    }
  });
});
