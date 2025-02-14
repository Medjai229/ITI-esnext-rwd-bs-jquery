function checkScore(score) {
  return new Promise((resolve, reject) => {
    if (score >= 50) {
      resolve(`You passed with ${score}`);
    } else {
      reject(`Failed with ${score}`);
    }
  });
}

checkScore(75)
  .then((message) => console.log(message))
  .catch((error) => console.log(error));

async function checkGrade(score) {
  try {
    const result = await checkScore(score);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

checkGrade(45);
