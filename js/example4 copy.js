
const logins = ['m4ngoDoge', 'kiwidab3st', 'poly1scute', 'aj4xth3m4n'];

const findLogin = function (allLogins, loginToFind) {
    let message = `Пользователь ${loginToFind} не найден.`

    for (const login of allLogins) {
        if (login === loginToFind) {
            message = `Пользователь ${loginToFind} найден.`
        }
    }

    return message;
};
    
console.log(findLogin(logins, 'avocod3r'));
console.log(findLogin(logins, 'kiwidab3st'));
console.log(findLogin(logins, 'jam4l'));
console.log(findLogin(logins, 'poly1scute'));
