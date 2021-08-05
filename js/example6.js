// * Задача: инвертировать регистр строки 

const string = 'qWeERRORkj';
const letters = string.split('');
let invertedString = '';

for (const letter of letters) {
    const isInLowerCase = letter === letter.toLocaleLowerCase();

    invertedString += isInLowerCase ? letter.toLocaleUpperCase() : letter.toLocaleLowerCase(); 
}

console.log('invertedString: , invertedString');


// * task: write function changeCase(string) которая заменяет регистр каждого символа в строке на противоположный

const changeCase = function (string) {
    const letters = string.split('');
    let invertedString = '';

    for (const letter of letters) {
        const isInLowerCase = letter === letter.toLocaleLowerCase();

        invertedString += isInLowerCase
            ? letter.toLocaleUpperCase()
            : letter.toLocaleLowerCase();
    }

    return invertedString;
};



console.log(changeCase('qweRTY')); //QWErty
console.log(changeCase('MANgo')); //manGO
console.log(changeCase('jAVAsCRIPT')); //JavaScript