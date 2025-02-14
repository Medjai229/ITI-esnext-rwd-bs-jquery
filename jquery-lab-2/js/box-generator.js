let colors = ['red', 'blue', 'orange', 'green'];
let colorIndex = 0;

function getNextColor(color) {
  let index = colors.indexOf(color);
  if (index == 3) {
    return 'red';
  }
  return colors[index + 1];
}

$('body').on(
  {
    mouseenter: function () {
      let color = $(this).attr('class').split(' ')[0];
      let nextColor = getNextColor(color);
      $(this).css('background', nextColor);
    },
    mouseout: function () {
      let color = $(this).attr('class').split(' ')[0];
      $(this).css('background', color);
    },
  },
  'div'
);

$('body').on('click', 'div', function () {
  let boxClass = $(this).attr('class').split(' ');
  if (!boxClass[1]) {
    let color = boxClass[0];
    let nextColor = getNextColor(color);
    $(this).after(`<div class="${nextColor}"></div>`);
    $(this).addClass('clicked');
  }
});
