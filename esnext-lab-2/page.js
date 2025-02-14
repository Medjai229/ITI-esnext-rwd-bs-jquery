// * Task 3

const divs = document.getElementsByTagName('div');
const img = document.createElement('img');
img.setAttribute('src', './images/images.jpg');
img.setAttribute('width', '100px');
img.setAttribute('height', '100px');

function welcomePromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      divs[0].textContent = 'Welcome';
      resolve();
    }, 3000);
  });
}

function imgPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      divs[1].appendChild(img);
      resolve();
    }, 3000);
  });
}
function thankPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      divs[2].textContent = 'Thanks';
      resolve();
    }, 3000);
  });
}

function redirectPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      window.location.href = 'index.html';
      resolve();
    }, 3000);
  });
}

welcomePromise().then(imgPromise).then(thankPromise).then(redirectPromise);
