// * Задача: найти самое маленькое число

const numbers = [51, 18, 13, 24, 7, 85, 19];
let smallestNumber = numbers[0];

for (const number of numbers) {
    if (number < smallestNumber) {
        smallestNumber = number;
    }
};
console.log('smallestNumber: ', smallestNumber);

// * Напиши ф-ю findSmallesNumber(numbers) для поиска самого маленького числа в массиве чисел и возвращала его, при условии что числа уникальные(не повторяются)

const findSmallesNumber = function (numbers) {
    let smallestNumber = numbers[0];

    for (const number of numbers) {
        if (number < smallestNumber) {
            smallestNumber = number;
        }
    }
    
    return smallestNumber
};

console.log(findSmallesNumber([3, 8, 12, -2, 15])); //-2
console.log(findSmallesNumber([100, 54, 8, 12, 47])); //8
console.log(findSmallesNumber([7, 21, 84, 15, 4])); //4

// закрываем какой-то функционал в ф-ю и вызывая ее с разными аргументами(массивами) можем получить результат. Абстракция. Переиспользование кода.