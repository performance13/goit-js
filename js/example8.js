// Функция- это абстракция, обертка для решения одной задачи



// Псевдомассив arguments

//* Task: Перевести данные с псевдомассива в массив

// 1 способ (oldschool)

// const fn = function () {
//     console.log(arguments);

//     const args = Array.from(arguments);

//     console.log(args);
// };

// fn(1, 2, 3);
// fn(1, 2, 3, 4, 5);
// fn(1, 2, 3, 4, 5, 6, 7);

// 2 способ (современный синтаксис)
// Если нужно получить доступ к массиву аргументов - делаем следующее: при объявлении параметров используем специальную операцию rest (тоесть остаток) и произвольное имя. И это будет настоящий массив из аргументов которые мы получим

// const fn = function (...args) {
//     console.log(args);
// };

// fn(1, 2, 3);
// fn(1, 2, 3, 4, 5);
// fn(1, 2, 3, 4, 5, 6, 7);

// ф-я берет все аргументы и запихивает в переменную args как массив

//* Task: Перевести данные кроме первого и второго параметра

// const fn = function (a, b, ...args) {
//     console.log(`${a} ${b}`);
//     console.log(args);
// };

// fn('hello', 'world', 1, 2, 3);
// fn('aloha', 1, 2, 3, 4, 5);
// fn('buongiorno', 1, 2, 3, 4, 5, 6, 7);

// * Task: Перевести данные если к-во аргументов не будет соответствовать к-ву параметров

// const fn = function (a, b, c, ...args) {
//     console.log(a, b, c);
//     console.log(args);
// };

// console.log(fn(1, 2));


// * Task: Напиши ф-ю add для сложения произвольного к-ва аргументов(чисел). Ф-я которая принимает произвольное к-во аргументов и возвращает их общую сумму

// const add = function (...args) {
//     console.log(args);
//     let total = 0;

//     for (const arg of args) {
//         total += arg;
//     }

//     return total;
// };

// console.log(add(1, 2, 3));
// console.log(add(1, 2, 3, 4, 5, 6));

// * Task: Напиши ф-ю filterNumbers(array [, number1, ...]) которая: первым аргументом принимает массив чисел. После первого аргумента может быть произвольное к-во других аргументов, которые будут числами. Ф-я должна вернуть новый массив, в котором будут только те аргументы, начиная со второго, для которых есть аналог в оригинальном мвссиве

const filterNumbers = function (array, ...args) {
    console.log('array: ', args);
    console.log('args: ', args);

    for (const element of array) {
        // console.log(element);
        console.log(args.includes(element));

        if (args.includes(element)) {
            console.log(`${element} есть везде!`)
        }
    }
    
};

console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8));// [2, 3]
console.log(filterNumbers([10, 15, 25, 30], 23, 30, 18, 15));// [30, 15]
console.log(filterNumbers([100, 200, 300, 400, 500], 7, 12, 200, 64));// [200]