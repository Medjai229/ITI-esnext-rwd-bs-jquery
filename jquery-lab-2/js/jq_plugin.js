$.fn.addText = function (text, color) {
  $(this).text(text);
  $(this).css('color', color);
  return this;
};

$('.box').addText('Hello from plugin', 'white');
