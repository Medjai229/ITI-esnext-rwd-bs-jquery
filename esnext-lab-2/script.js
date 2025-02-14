// * Task 1

const dropdownList = document.createElement('select');
dropdownList.setAttribute('id', 'dropdownList');
dropdownList.setAttribute('name', 'user');
document.body.appendChild(dropdownList);

const bttn = document.createElement('button');
bttn.setAttribute('disabled', '');
bttn.textContent = 'Show details';
document.body.appendChild(bttn);

const detailsDiv = document.createElement('div');
detailsDiv.setAttribute('id', 'detailsDiv');
document.body.appendChild(detailsDiv);

let url = 'https://jsonplaceholder.typicode.com/users';
let usersData;

// fetch(url)
//   .then((response) => response.json())
//   .then((data) => {
//     usersData = data;
//     console.log(usersData);
//     usersData.forEach((user) => {
//       addOption(user);
//     });
//     // Enable the button after the data is retrieved
//     bttn.removeAttribute('disabled');
//   });

bttn.addEventListener('click', () => {
  let userDetails = usersData.filter((user) => user.name == dropdownList.value);
  detailsDiv.textContent = JSON.stringify(userDetails[0]);
});

function addOption(user) {
  const option = document.createElement('option');
  option.setAttribute('value', user.name);
  option.textContent = user.name;
  dropdownList.appendChild(option);
}

// * Task 2

addUsers();

async function getUsers(url) {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  // Enable the button after the data is retrieved
  bttn.removeAttribute('disabled');
  return data;
}

async function addUsers() {
  usersData = await getUsers(url);
  usersData.forEach((user) => {
    addOption(user);
  });
}

// * Task 2.1
let objData = {
  title: 'foo',
  body: 'bar',
  userId: 1,
};

postPost(objData);

async function postPost(objData) {
  const urlPost = 'https://jsonplaceholder.typicode.com/posts';
  const response = await fetch(urlPost, {
    method: 'POST',
    body: JSON.stringify(objData),
    headers: {
      'Content-type': 'application/json',
    },
  });
  const data = await response.json();
  console.log(data);
}

// * Task 4

let tips = [
  'tip1',
  'tip2',
  'tip3',
  'tip4',
  'tip5',
  'tip6',
  'tip7',
  'tip8',
  'tip9',
  'tip10',
];

document.body.appendChild(document.createElement('br'));

const tipBttn = document.createElement('button');
tipBttn.textContent = 'Show a tip';
document.body.appendChild(tipBttn);
const allTipsBttn = document.createElement('button');
allTipsBttn.textContent = 'Show all tips';
document.body.appendChild(allTipsBttn);
const loopBttn = document.createElement('button');
loopBttn.textContent = 'Loop all the tips';
document.body.appendChild(loopBttn);

const tipDiv = document.createElement('div');
document.body.appendChild(tipDiv);

function* showTip() {
  let index = 0;
  while (index < tips.length) {
    yield tips[index++];
    if (index >= 10) {
      index = 0;
    }
  }
}

let tipGenerator = showTip();
let tipInterval;

tipBttn.addEventListener('click', () => {
  clearInterval(tipInterval);
  tipDiv.textContent = tipGenerator.next().value;
});

allTipsBttn.addEventListener('click', () => {
  clearInterval(tipInterval);
  let allTips = '';
  for (const tip of showTip()) {
    allTips += `${tip} `;
    if (allTips.includes('tip10')) break;
  }
  tipDiv.textContent = allTips;
});

loopBttn.addEventListener('click', () => {
  tipDiv.textContent = tipGenerator.next().value;
  tipInterval = setInterval(() => {
    tipDiv.textContent = tipGenerator.next().value;
  }, 3000);
});
