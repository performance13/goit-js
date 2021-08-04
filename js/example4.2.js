// *

// // еще короче через тернарник - Условный (тернарный) оператор

// // Синтаксис 
// // условие ? выражение1 : выражение2
// // Параметры
//     // условие
//         // Выражение, принимающее значение true или false.
//     // выражение1, выражение2
//         // Выражения, значения которых могут принадлежать любому типу. 

// const logins = ['m4ngoDoge', 'kiwidab3st', 'poly1scute', 'aj4xth3m4n'];

// const findLogin = function (allLogins, loginToFind) {
//         // делаем переменную message; если все логины allLogins включают в себя логин который нужно найти loginToFind мы в message записываем `Пользователь ${loginToFind} найден.`; 
//     const message = logins.includes(loginToFind)
 
//         ? `Пользователь ${loginToFind} найден.`

//             // если не включает - записываем `Пользователь ${loginToFind} не найден.`
//         : `Пользователь ${loginToFind} не найден.`

//      //  и потом возвращаем message
//     return message;
// };
    
// console.log(findLogin(logins, 'avocod3r'));
// console.log(findLogin(logins, 'kiwidab3st'));
// console.log(findLogin(logins, 'jam4l'));
// console.log(findLogin(logins, 'poly1scute'));

// *

const logins = ['m4ngoDoge', 'kiwidab3st', 'poly1scute', 'aj4xth3m4n'];

const findLogin = function (allLogins, loginToFind) {

    // одно большое выражение - тернарный оператор, результаты которого мы возвращаем (метод includes возвращает или true или false. Если логин, который нужно найти входит во все логины - на  место return logins.includes(loginToFind) вернется true. Если не входит - вернется false). Если true - вернется первая строка, если false, на место всего тернарника вернется вторая строка. Мы сразу делаем return на какую-то из этих строк. В даном примере использование переменной - лишнее
    return logins.includes(loginToFind)
        ? `Пользователь ${loginToFind} найден.`
        : `Пользователь ${loginToFind} не найден.`
    
    // false ? 1 : 2; вернется 2
    // true ? 1 : 2; вернется 1 

};
    
console.log(findLogin(logins, 'avocod3r'));
console.log(findLogin(logins, 'kiwidab3st'));
console.log(findLogin(logins, 'jam4l'));
console.log(findLogin(logins, 'poly1scute'));