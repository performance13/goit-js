//Math - встроенный объект, который имеет свойства и методы для математических констант и функций.
console.log(Math);

console.log(Math.PI);

// 1.1
// Возведение в степень
// Метод Math.pow() — возводит значение первого аргумента в степень второго аргумента, тем самым позволяет осуществить быстрое возведение в степень любых значений.
console.log(Math.pow(2, 3));

//1.2
const base = 2;
const power = 5;

const result = Math.pow(base, power);

console.log(result);

//1.3
// оператор экспоненты (современный синтаксис, который заменяет метод Math.pow())
console.log(2 ** 4);
console.log(base ** power);

//1.4
// Квадратный корень
console.log(Math.sqrt(144));

