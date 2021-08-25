
// Task:
/* Напиши скрипт, который просит пользователя ввести число и степень. Возводит число в эту степень. Выводит результат в консоль */

// Task solving algorithm:
// 1. попросить ввести число и сохранить в переменную
let base = prompt('Enter a number');
base = Number(base);

console.log(base);
// 2. попросить ввести степень и сохранить в переменную
let power = prompt('Enter a power');
base = Number(power);

console.log(power);
// 3. возвести введенные данные  в степень и вывести в консоль
const result = base ** power;
console.log(result);
