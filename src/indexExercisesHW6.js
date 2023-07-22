// // Задание 1

let arr1 = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[i]);
  if (arr1[i] === 10) break;
}

for (let i in arr1) {
  console.log(arr1[i]);
  if (arr1[i] === 10) break;
}

for (const item of arr1) {
  console.log(item);
  if (item === 10) break;
}

// // Задание 2

let arr2 = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] === 4) {
    console.log(i);
    break;
  }
}

for (let i in arr2) {
  if (arr2[i] === 4) {
    console.log(i);
    break;
  }
}

console.log(arr2.indexOf(4));

// // Задание 3

arr3 = [1, 3, 5, 10, 20];
// С помощью метода join выведите элементы массива через пробел (пустую строку '').
// так через пробел ' ' или через пустую строку ''?
console.log(arr3.join(" "));
console.log(arr3.join(""));

// Задание 4

// let table = new Array(3);
// for (let i = 0; i < table.length; i++) {
//     table[i] = new Array(3);
//     for (let j = 0; j < 3; j++) {
//       table[i][j] = 1;
//     };
// };

let table = [];
for (let i = 0; i < 3; i++) {
  table[i] = [];
  for (let j = 0; j < 3; j++) {
    table[i][j] = 1;
  };
};
console.log(table);

// Задание 5

let arr5 = [1, 1, 1];

for (let i = 0; i < 3; i++) {
  arr5.push(2);
};
arr5.push(3, 3, 3);

console.log(arr5);

// Задание 6
let arr6 = [9, 8, 7, 'a', 6, 5];
arr6.sort();
arr6.pop();
console.log(arr6);

// Задание 7

let arr7 = [9, 8, 7, 6, 5];
const userAnswer = Number(prompt(`Enter any digit from 0 to 9`));
arr7.includes(userAnswer) ? console.log(`Right`) : console.log(`Wrong`);

// Задание 8

let string8 = "abcdef";
let reverse1 = '';
for (let i = string8.length - 1; i >= 0; i--) {
  reverse1 += string8[i];
}
console.log(reverse1);

const reverse2 = string8.split("").reverse().join("");
console.log(reverse2);

// Задание 9

const arr9 = [
  [1, 2, 3],
  [4, 5, 6],
];

let resultArr = arr9[0].concat(arr9[1]);
console.log(resultArr);

// Задание 10
let arr10 = [9, 8, 1, 7, 2, 6, 5, 4, 3, 10];

let sum10_1;
for (let i = 0; i < arr10.length - 1; i++) {
  console.log((sum10_1 = arr10[i] + arr10[i + 1]));
}

const sum10_2 = (a, b) => {
  let result = a + b;
  return result;
};

const lengthArr10 = arr10.length;
for (let i = 0; i < lengthArr10 - 1; i++) {
  console.log(sum10_2(...arr10));
  arr10.shift();
};

// Задание 11
let arr11 = [9, 8, 1, 7, 2, 6, 5, 4, 3, 10];
let arr11Square = arr11.map((num) => num ** 2);
console.log(arr11Square);

// Задание 12

const arr12 = ["слово", "", "слог", "длинное предложение", "буква"];

const getLengthWords = function (arr) {
  let lengthArr = arr.map(el => el.length);
  return lengthArr;
};

console.log(getLengthWords(arr12));

// Задание 13

function filterPositive(array) {
  let negativeArr = [];
  for (const value of array) {
    if (value < 0) negativeArr.push(value);
  };
  return negativeArr;
}

console.log(filterPositive([-1, 0, 5, -10, 56]));
console.log(filterPositive([-25, 25, 0, -1000, -2]));

// Задание 14

let arr14 = [];
for (let i = 0; i < 10; i++) {
  arr14[i] = Math.ceil(Math.random() * 10);
}

function filterEven(array) {
  let evenArr = [];
  for (const value of array) {
    if (value % 2) continue;
    evenArr.push(value);
  };
  return evenArr;
}

console.log(arr14);
console.log(filterEven(arr14));


// Задание 15
let arr15 = [];
for (let i = 0; i < 6; i++) {
  arr15[i] = Math.ceil(Math.random() * 10);
}

const getAverage = (numbers) => {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
};

console.log(arr15);
console.log(getAverage(arr15));
