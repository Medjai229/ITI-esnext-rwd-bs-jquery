const nameGuess = 'Ahmed'.toLowerCase();

let counter = 0;

$('#my-name').on('input', function () {
  $('.result').text('');
  let guess = $(this).val();
  let correctGuess = '';
  counter++;
  $('.counter').text(counter);

  for (let i = 0; i < guess.length; i++) {
    if (guess[i] === nameGuess[i]) {
      correctGuess += guess[i];
    } else {
      setTimeout(() => {
        $(this).val(correctGuess);
      }, 50);
    }
    $('.my-name').text(correctGuess.toUpperCase());
  }
  // $(this).val(correctGuess);
  if (correctGuess === nameGuess) {
    $('.result').text(`Good job, You did it in ${counter} times`);
    counter = 0;
    $('.counter').text(0);
    $('#my-name').val('');
  }
});
