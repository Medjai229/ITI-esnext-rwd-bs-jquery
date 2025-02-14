// // The name to guess
// const nameToGuess = 'Malik';

// // Initialize counter
// let attemptCounter = 0;

// // Event listener for input
// $('#my-name').on('input', function () {
//   let userInput = $(this).val();
//   let correctName = '';

//   debugger;
//   // Compare each character to the correct name
//   for (let i = 0; i < userInput.length; i++) {
//     if (userInput[i] === nameToGuess[i]) {
//       correctName += userInput[i];
//     } else {
//       // Increment the counter if the character is incorrect
//       attemptCounter++;
//       $('.counter').text(attemptCounter);

//       // Remove the incorrect character after a brief delay
//       setTimeout(() => {
//         $(this).val(correctName);
//       }, 300);

//       return; // Stop checking after the first incorrect character
//     }
//   }

//   // Update the input field with the correct part
//   $(this).val(correctName);

//   // Check if the name is guessed correctly
//   if (correctName === nameToGuess) {
//     $('.result').text(`You guessed the name in ${attemptCounter} attempts!`);
//   } else {
//     $('.result').text('');
//   }
// });

const nameGuess = 'ahmed';

let counter = 0;

$('#my-name').on('input', function () {
  let input = $(this).val();
  let correct = '';
});
