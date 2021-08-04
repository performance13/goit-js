// * Напиши ф-ю findLogin(allLogins, login) для поиска логина *Если логина нет - вывести сообщение "Пользователь [логин] не найден." *Если нашли логин - вывести сообщение "Пользователь [логин] найден."

// задача на использование метода includes

// есть массив логинов
const logins = ['m4qqq', 'b2eee', 'y9ooo', 'js'];
// есть логин, который нужно найти
const loginToFind = 'js';

// мы проверяем: если в массиве логинов logins есть includes этот логин loginToFind
const message = logins.includes(loginToFind)
    // мы говорим:
    ? `Пользователь ${loginToFind} найден.`
    // в противном случае: 
    : `Пользователь ${loginToFind} не найден.`

    // логируем:
console.log(message);

