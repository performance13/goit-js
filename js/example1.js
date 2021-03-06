// * Функция calculateTotalPrice(array) ,которая принимает массив цен (чисел) и возвращает их сумму

// Задача: корзина товаров; считаем общую сумму цен этих товаров => выполнена задача не используя функции, которая считает один раз массив чисел

const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
//объявляем переменную total
let total = 0;


// перебираем массив через цикл for
for (const value of cart) {
    // и к total прибавлялем value каждый раз
    total += value;
}

console.log('Total: ', total);
// Total:  613

// Представим себе что есть три массива и для каждого из этих массивов нужно выполнить эту операцию писать все по три раза - это решение не масштабируемое.
// Поэтому пишем функцию, которая будет получать такой массив, внутри себя считать и возвращать этот Total
// Пишем функцию calculateTotalPrice которая принимает параметр (array) - массив цен => calculateTotalPrice(array)

    //   const calculateTotalPrice = function (array) {
    //   console.log('array внутри функции: ', array);
    //    }
// проверка работы консоль-логом - вызов функции с каким-то аргументом, 
    //    console.log(calculateTotalPrice([1, 2, 3]));  //6
// и что она должна вернуть в результате если она правильно работает => 6

// console.log(array);    возвращает=>   (3) [1, 2, 3]
//undefined это эта консоль-лог  console.log(calculateTotalPrice([1, 2, 3])); 
// undefined это то что мы с функции function (array) возвращаем в console.log(array);  это то что нам вернет функция и мы ее в лог console.log(calculateTotalPrice([1, 2, 3])); <= результат этого выполнения
// если добавить в функцию return co значением, например 555, то всегда будет на месте undefined => 555

// Мы хотим внутри нашей функции объявить total потом написать for  of  и к total добавить +=array

// total получается внутри не снаружи, - получить к нему доступ мы не можем через console.log(total) вне функции (консоль пишет что не объявлена эта переменная)

// Что нужно сделать: из этой функции нужно вернуть этот total во внешний код - добавляем в функцию return total

// В итоге мы получаем:

const calculateTotalPrice = function (array) {
    console.log('array внутри функции: ', array);
    let total = 0;

    for (const num of array) {
        total += num;
    }
    return total;
}

const result1 = calculateTotalPrice([1, 2, 3]);

//console.log(calculateTotalPrice([1, 2, 3])); //6

console.log(`Общая сумма покупок ${result1}`);

console.log(calculateTotalPrice([1, 2, 3,12,25,65,125])); //233
console.log(calculateTotalPrice([1, 2, 3, 29, 97, 111])); //243

// let total = 0; находится внутри тела функции
// return total = 0; возвращение результата; выход с функции; возвращение значения во внешний код (внешний код - console.log(calculateTotalPrice([1, 2, 3])); - где функцию вызываем). return возвращает в то место где произошел вызов функции

// Таким образом мы сделали код который можно переиспользовать, масштабируемое решение