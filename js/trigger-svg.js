var $btnTrigger = $('.btn-trigger');
var $word = $('.word');
var count = 0;

$btnTrigger.on('click', function () {
  $word.addClass('js-animate');
});

$word.on('animationend', '.st0', function () {
  if (count >= 4) {
    $word.removeClass('js-animate');
    count = 0;
  }

  count++;
});
