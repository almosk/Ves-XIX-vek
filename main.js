$(function() {
  var counter = 0;

  $('.scrollPlus').click(function() {
    if (counter < 7) {
      $('.mainSection').css({"margin-left": "-=100vw"});
      $('.scrollMinus').removeClass('hidden');
      if (counter == 6) {
        $('.scrollPlus').addClass('hidden');
      }
      counter += 1;

      if (counter == 1) {
        document.images["img1"].src = "animation.gif";
      }
      if (counter == 2) {
        document.images["img2"].src = "animation3.gif";
      }
      if (counter == 3) {
        document.images["img3"].src = "animation4.gif";
      }
      if (counter == 4) {
        document.images["img4"].src = "animation5.gif";
      }
      if (counter == 5) {
        document.images["img5"].src = "animation6.gif";
      }
      if (counter == 6) {
        document.images["img6"].src = "animation7.gif";
      }
    }
  });

  $('.scrollMinus').click(function() {
    if (counter > 0) {
      $('.mainSection').css({"margin-left": "+=100vw"});
      $('.scrollPlus').removeClass('hidden');
      if (counter == 1) {
        $('.scrollMinus').addClass('hidden');
      }
      counter -= 1;
    }
  });

});
