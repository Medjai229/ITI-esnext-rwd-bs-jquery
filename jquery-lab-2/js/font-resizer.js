$('#increase').click(function (e) {
  let fontSize = parseInt($('.content').css('font-size'));
  if (fontSize > 24) {
    $('.error').text("You've reached the maximum value");
  } else {
    $('.content').css('font-size', fontSize + 2 + 'px');
    $('.error').text('');
  }
});

$('#decrease').click(function (e) {
  let fontSize = parseInt($('.content').css('font-size'));
  if (fontSize < 8) {
    $('.error').text("You've reached the minimum value");
  } else {
    $('.content').css('font-size', fontSize - 2 + 'px');
    $('.error').text('');
  }
});
