// * Task 1

let arr = [];

for (let i = 0; i < 20; i++) {
  arr.push(i);
}

console.log(arr);

// * Task 1 a

let oddArr = arr.filter((x) => x % 2 != 0);

console.log(oddArr);

// * Task 1 b

let evenArr = [];
arr.forEach((x) => {
  if (x % 2 == 0) {
    evenArr.push(x);
  }
});

console.log(evenArr);

// * Task 1 c

let sqrArr = arr.map((x) => x ** 2);

console.log(sqrArr);

// * Task 1 d

let obj = {
  name: 'Malik',
  keyFunction: function () {
    console.log(`testFunction: ${this.name}`); // * Malik

    function nestedFunction() {
      console.log(`nestedFunction: ${this.name}`); // * window.name = ''
    }

    const nestedArrow = () => {
      console.log(`nestedArrow: ${this.name}`); // * Malik
    };

    nestedFunction();
    nestedArrow();
  },
};

obj.keyFunction();

// ? Output
// ! keyFunction creates a new this context as the obj
// ! nestedFunction creates a new this context inside the function
// ! nestedArrow inherits the this context from its parent

// * Task 2

class Vechile {
  constructor(brand, year) {
    this.brand = brand;
    this.year = year;
  }

  getDetails() {
    return `Brand: ${this.brand}, Year: ${this.year}`;
  }
}

// let vechile1 = new Vechile('Toyota', 2002);
// console.log(vechile1.getDetails());

class Car extends Vechile {
  constructor(brand, year, model) {
    super(brand, year);
    this.model = model;
  }

  getDetails() {
    return `Brand: ${this.brand}, Year: ${this.year}, Model: ${this.model}`;
  }
}

let car1 = new Car('Benz', 2010, 'G-class');
console.log(car1.getDetails());

// * Task 3

const nameArr = [
  'malik',
  'mahmoud',
  'mohamed',
  'malik',
  'mahmoud',
  'mohamed',
  'ahmed',
  'hamza',
  'hamza',
  'malik',
];

const nameSet = new Set(nameArr);
// ! Set accepts the repeated name but it will display it in the set only once

console.log(...nameSet);

for (const name of nameSet) {
  console.log(name);
}

// * Task 4

let gradesObj = [
  [
    'ahmed',
    {
      Grades: [
        { Coursename: 'JavaScript', Grade: 'V.Good' },
        { Coursename: 'Jquery', Grade: 'Good' },
        { Coursename: 'CSS', Grade: 'Fair' },
      ],
    },
  ],
  [
    'mahmoud',
    {
      Grades: [
        { Coursename: 'JavaScript', Grade: 'Good' },
        { Coursename: 'Jquery', Grade: 'Excellent' },
        { Coursename: 'CSS', Grade: 'V.Good' },
      ],
    },
  ],
  [
    'mohamed',
    {
      Grades: [
        { Coursename: 'JavaScript', Grade: 'Excellent' },
        { Coursename: 'Jquery', Grade: 'Good' },
        { Coursename: 'CSS', Grade: 'V.Good' },
      ],
    },
  ],
];

const gradesMap = new Map(gradesObj);

// Iterate over the map
for (const [key, value] of gradesMap) {
  let grades = JSON.stringify(value);
  console.log(`Student:${key}, Grades:${grades}`);
}

// Creating the dropdown tag and adding it to the body
const dropdownList = document.createElement('select');
dropdownList.setAttribute('id', 'dropdownList');
dropdownList.setAttribute('name', 'students');
document.body.appendChild(dropdownList);

// Appending all the options in the map to the dropdown list
for (const [key] of gradesMap) {
  let option = document.createElement('option');
  option.setAttribute('value', key);
  option.textContent = key;
  dropdownList.appendChild(option);
}

// Create a div to display the grades in
const gradesDiv = document.createElement('div');
gradesDiv.setAttribute('id', 'gradesDiv');
gradesDiv.textContent = JSON.stringify(gradesMap.get('ahmed'));
document.body.appendChild(gradesDiv);

dropdownList.addEventListener('change', (e) => {
  for (const [key, value] of gradesMap) {
    let grades = JSON.stringify(value);
    if (e.target.value == key) {
      gradesDiv.textContent = grades;
    }
  }
});
