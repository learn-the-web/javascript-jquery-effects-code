var $start = $('.start');
var $stop = $('.stop');
var $box = $('.box');

$start.on('click', function () {
  $box.addClass('js-box-animate');
});

$stop.on('click', function () {
  $box.removeClass('js-box-animate');
});

$box.on('webkitAnimationEnd animationend', function () {
  $box.removeClass('js-box-animate');
});
