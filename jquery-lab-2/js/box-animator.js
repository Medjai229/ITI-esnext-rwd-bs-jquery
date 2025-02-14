$('.box').animate(
  {
    width: '+=150px',
    height: '+=150px',
    left: '+=1200px',
  },
  2000,
  function () {
    $(this).css('background-color', 'blue');
  }
);

$('.box').animate(
  {
    width: '-=150px',
    height: '-=150px',
    top: '+=800px',
  },
  2000,
  function () {
    $(this).css('background-color', 'orange');
  }
);

$('.box').animate(
  {
    width: '+=150px',
    height: '+=150px',
    left: '-=1200px',
  },
  2000,
  function () {
    $(this).css('background-color', 'green');
  }
);

$('.box').animate(
  {
    width: '-=150px',
    height: '-=150px',
    top: '-=800px',
  },
  2000,
  function () {
    $(this).css('background-color', 'red');
  }
);
