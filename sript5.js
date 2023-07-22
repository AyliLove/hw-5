// Задание 1

function minNumber(a, b) {
    let min = a;
    if (b < a) {
        min = b;
    }
    return min;
}

console.log(minNumber(8, 4));
console.log(minNumber(6, 6));
console.log(minNumber(-2, -40));

// Задание 2

function evenNumber(a) {
    let noText;
    a % 2 ? (noText = "не") : (noText = "");
    return `${a} - число ${noText} чётное`;
}

console.log(evenNumber(8));
console.log(evenNumber(11));

// Задание 3

function printSquare(a) {
    console.log(a ** 2);
}

function returnSquare(a) {
    return a ** 2;
}

printSquare(5);
console.log(returnSquare(4));

// Задание 4

function outAge() {
    const age = Number(prompt("Сколько вам лет?"));
    if (age < 0) console.log("Вы ввели неправильное значение");
    else if (age < 13) console.log("Привет, друг!");
    else console.log("Добро пожаловать!");
  }
  
  outAge();

  // Задание 5 

  function outMult(a, b) {
    if (isNaN(Number(a)) || isNaN(Number(b)) || a === "" || b === "") {
      return "Одно или оба значения не являются числом";
    }
    return a * b;
  }
  
  console.log(outMult("", NaN));

  // Зпадание 6

  function getCube(a) {
    if (isNaN(a) || a === "") {
      return "Переданный параметр не является числом";
    }
    return a ** 3;
  }
  
  console.log(getCube(""));
  console.log(getCube("dfg"));
  for (let i = 0; i <= 10; i++) {
    console.log(getCube(i));
  }

  // Задание 7

  const Pi = 3.14159;

function getCircleArea() {
  return (Pi * this.radius ** 2) / 2;
}

function getCirclePerimeter(radius) {
  return Pi * this.radius * 2;
}

const circle1 = {
  radius: 3,
  getArea: getCircleArea,
  getPerimeter: getCirclePerimeter,
};

const circle2 = {
  radius: 2,
  getArea: getCircleArea,
  getPerimeter: getCirclePerimeter,
};

console.log(circle1.getArea().toFixed(2));
console.log(circle1.getPerimeter().toFixed(2));

console.log(circle2.getArea().toFixed(2));
console.log(circle2.getPerimeter().toFixed(2));

