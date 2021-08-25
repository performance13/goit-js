//1.1
let elementWidth1 = '50.9px';
const result1 = Number.parseInt(elementWidth1);
console.log(result1);
console.log(typeof result1);

Number.parseInt(elementWidth1);
console.log(elementWidth1);

elementWidth1 = Number.parseInt(elementWidth1);
console.log('Element Width 1: ', elementWidth1);

//1.2
let elementWidth2 = '5r89.9px';
elementWidth2 = Number.parseInt(elementWidth2);
console.log('Element Width 2: ', elementWidth2);

//2
let elementHeight = '200.74px';
elementHeight = Number.parseFloat(elementHeight);
console.log('Element Height 2: ', elementHeight);

//3.1
// Метод toFixed - отсекает
// const salary = 1300.16472;
// console.log(salary.toFixed());
// console.log(typeof salary);
// console.log(salary);
// toFixed - не деструктивный метод
// поэтому для преобразования в число делаем так:

let salary = 1300.16472;
salary = salary.toFixed(2);
console.log(salary);
//но возвращается строка (string)
console.log(typeof salary);
// для преобразования к числу выполняем:
salary = Number(salary);
// выводим
console.log(salary);
//возвращается число (number)
console.log(typeof salary);

//3.2
// для короткой записи используем "матрешку"
let salaryNew = 1300.16472;
salaryNew = Number(salaryNew.toFixed(2));
// выводим
console.log(salaryNew);

//3.3
//если не нужно записывать в новую переменную,- просто выводим в консоль
let salaryNewNew = 1300.16472;
// выводим
console.log(Number(salaryNewNew.toFixed(2)));

// 4.1
// Преобразование или приведение к числу
// в консоли значение окрашенное в синий цвет - это число
console.log(Number(1234567890)); //1234567890
console.log(Number(true)); //1
console.log(Number(false)); //0
console.log(Number('qwer')); //NaN - привести к числу не получилось
console.log(5 / 0); //Infinity

// 4.2 
let quantity = '30';
let value = '1111 Эту строку невозможно привести к числу';

console.log(Number(quantity));
console.log(Number(value));
