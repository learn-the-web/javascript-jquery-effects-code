var $dipper = $('.dipper');

$dipper.waypoint(function (direction) {
  if (direction == 'down') {
    $dipper.addClass('js-dipper-animate');
  } else {
    $dipper.removeClass('js-dipper-animate');
  }
}, { offset: '50%' });
