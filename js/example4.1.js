// *

// const logins = ['m4ngoDoge', 'kiwidab3st', 'poly1scute', 'aj4xth3m4n'];

// const findLogin = function (allLogins, loginToFind) {
//     let message = `Пользователь ${loginToFind} не найден.`

//     for (const login of allLogins) {
//         if (login === loginToFind) {
//             message = `Пользователь ${loginToFind} найден.`
//         }
//     }

//     return message;
// };
    
// console.log(findLogin(logins, 'avocod3r'));
// console.log(findLogin(logins, 'kiwidab3st'));
// console.log(findLogin(logins, 'jam4l'));
// console.log(findLogin(logins, 'poly1scute'));

// *

// еще вариант когда ставим return. Это значит: при первом совпадении выходи из этой функции. Тоесть если логин совпадает с тем что мне нужно найти выходим (return прерывает все for, выходит из ф-и)

// мы пишем for если хотя-бы одно совпадение будет найдено оно прервет выполнение ф-и, выйдет из нее и вернет сообщение что пользователь найден

// если же этот for пробежиться и не найдет ни одного совпадения if ни разу не выполнится - нам возвращается сообщение что пользователь не найден


// const logins = ['m4ngoDoge', 'kiwidab3st', 'poly1scute', 'aj4xth3m4n'];

// const findLogin = function (allLogins, loginToFind) {
//     // 

//     for (const login of allLogins) {
//         if (login === loginToFind) {
//             return `Пользователь ${loginToFind} найден.`
//         }
//     }

//     // 
//     return `Пользователь ${loginToFind} не найден.`;
// };
    
// console.log(findLogin(logins, 'avocod3r'));
// console.log(findLogin(logins, 'kiwidab3st'));
// console.log(findLogin(logins, 'jam4l'));
// console.log(findLogin(logins, 'poly1scute'));

// *

// const logins = ['m4ngoDoge', 'kiwidab3st', 'poly1scute', 'aj4xth3m4n'];

// const findLogin = function (allLogins, loginToFind) {
//     // сразу говорим что пользователь не найден
//     let message = `Пользователь ${loginToFind} не найден.`;

//     // если пользователя нашли то в message пишем что найден
//     for (const login of allLogins) {
//         if (login === loginToFind) {
//             message = `Пользователь ${loginToFind} найден.`;

//             // и возвращаем этот message
//             return message;
//         }
//     }

//     // если for прошолся и ни разу не выполнился if то возвращаем  message, который не найден
//     return message;
// };
    
// console.log(findLogin(logins, 'avocod3r'));
// console.log(findLogin(logins, 'kiwidab3st'));
// console.log(findLogin(logins, 'jam4l'));
// console.log(findLogin(logins, 'poly1scute'));

// *

const logins = ['m4ngoDoge', 'kiwidab3st', 'poly1scute', 'aj4xth3m4n'];

const findLogin = function (allLogins, loginToFind) {
    // но этот message нам не нужен - он ничего не делает - лишняя переменная, которая занимает место (let message = `Пользователь ${loginToFind} не найден.`;)
    

    for (const login of allLogins) {
        if (login === loginToFind) {
            //  ведь можна вернуть или эту строку 
            return `Пользователь ${loginToFind} найден.`;
        }
    }

    // или эту
    return `Пользователь ${loginToFind} не найден.`;;
};
    
console.log(findLogin(logins, 'avocod3r'));
console.log(findLogin(logins, 'kiwidab3st'));
console.log(findLogin(logins, 'jam4l'));
console.log(findLogin(logins, 'poly1scute'));

// меньше кода и проще
// это пример множественного ритерна через фор