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
//
// $(function() {
//   $('.nav').click(function() {
//     $('.picture2').addClass('gifpause');
//   })
// })
