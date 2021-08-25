'use strict';

// Module 2
// Task 1
// Ранний возврат
//Запиши условие в инструкции if так, чтобы функция работала правильно
  // Test
    // Объявлена функция checkAge(age).
    // В выражении проверки возраста использован оператор >=
    // Вызов checkAge(20) возвращает "You are an adult"
    // Вызов checkAge(8) возвращает "You are a minor"
    // Вызов checkAge(14) возвращает "You are a minor"
    // Вызов checkAge(38) возвращает "You are an adult"
    // В теле функции есть только одна инструкция if
    // В теле функции нет инструкции else или else if

function checkAge(age) {
  if () { // Change this line
    return "You are an adult";
  }

  return "You are a minor";
}

// Solution 1

function checkAge(age) {
  if (age >=18) {
    return "You are an adult";
  }

  return "You are a minor";
};

checkAge(20);
checkAge(8);
checkAge(14);
checkAge(38);

console.log(checkAge(20));
console.log(checkAge(8));
console.log(checkAge(14));
console.log(checkAge(38));

// Task 2
// Задача: проверка пароля (ранний возврат)
// Функция checkPassword получает пароль пользователя в параметр password, проверяет его на совпадение с паролем администратора в переменной ADMIN_PASSWORD и возвращает сообщение о результате сравнения.
// Проведи рефакторинг кода функции checkStorage используя паттерн «ранний возврат»:
    // удали переменную message
    // удали else
    // код должен работать так же, как и до оптимизации
  // Test
    // Объявлена функция checkPassword(password)
    // Вызов checkPassword("mangohackzor") возвращает "Access denied, wrong password!"
    // Вызов checkPassword("polyhax") возвращает "Access denied, wrong password!"
    // Вызов checkPassword("jqueryismyjam") возвращает "Welcome!"

function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  // Change code below this line

  let message;

  if (password === ADMIN_PASSWORD) {
    message = "Welcome!";
  } else {
    message = "Access denied, wrong password!";
  }

  return message;
  // Change code above this line
}

// Solution 2

function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";

  if (password === ADMIN_PASSWORD) {
    return "Welcome!";
  } 
    return "Access denied, wrong password!";

};

checkPassword("mangohackzor");
checkPassword("polyhax");
checkPassword("jqueryismyjam");

console.log(checkPassword("mangohackzor"));
console.log(checkPassword("polyhax"));
console.log(checkPassword("jqueryismyjam"));

// Task 3
// Задача: склад товаров 3.0
// Функция checkStorage проверяет возможность оформления заказа и возвращает сообщение о результате. Она принимает два параметра, значения которых будут задаваться во время её вызова.
    // available - доступное количество товаров на складе
    // ordered - количество единиц товара в заказе
// Проведи рефакторинг кода функции checkStorage используя паттерн «ранний возврат».
  // Test
    // Объявлена функция checkStorage(available, ordered)
    // Вызов checkStorage(100, 50) возвращает "The order is accepted, our manager will contact you"
    // Вызов checkStorage(100, 130) возвращает "Your order is too large, not enough goods in stock!"
    // Вызов checkStorage(70, 0) возвращает "Your order is empty!"
    // Вызов checkStorage(200, 20) возвращает "The order is accepted, our manager will contact you"
    // Вызов checkStorage(200, 250) возвращает "Your order is too large, not enough goods in stock!"
    // Вызов checkStorage(150, 0) возвращает "Your order is empty!"

    function checkStorage(available, ordered) {
  // Change code below this line
  let message;

  if (ordered === 0) {
    message = "Your order is empty!";
  } else if (ordered > available) {
    message = "Your order is too large, not enough goods in stock!";
  } else {
    message = "The order is accepted, our manager will contact you";
  }

  return message;
  // Change code above this line
}

// Solution 3

// Паттерн Guard Clause 
// https://goit.global/javascript/ru/v1/module-02/functions.html

function checkStorage(available, ordered) {
  
  if (ordered === 0) {
    return "Your order is empty!";
  } 
  if (ordered > available) {
    return "Your order is too large, not enough goods in stock!";
  } 
    return "The order is accepted, our manager will contact you";

};
checkStorage(100, 50);
checkStorage(100, 130);
checkStorage(70, 0);
checkStorage(200, 20);
checkStorage(200, 250);
checkStorage(150, 0);

console.log(checkStorage(100, 50));
console.log( checkStorage(100, 130));
console.log(checkStorage(70, 0));
console.log(checkStorage(200, 20));
console.log(checkStorage(200, 250));
console.log(checkStorage(150, 0));

// Task 4
// Создание массива
// Объяви переменную fruits и присвой ей массив фруктов - строк "apple", "plum", "pear" и "orange".
  // Test
    // Объявлена переменная fruits
    // Значение переменной fruits это массив ["apple", "plum", "pear", "orange"]

    // Change code below this line

    // Solution 4

const fruits = ['apple', 'plum', 'pear', 'orange'];

console.log(fruits);

// Task 5
// Доступ к элементам по индексу
// Объяви три переменные и присвой каждой из них значение, используя нотацию квадратных скобок.
// Имя переменной 	Значение переменной
// firstElement 	первый элемент массива
// secondElement 	второй элемент массива
// lastElement 	последний элемент массива
  // Test
    // Объявлена переменная firstElement
    // Значение переменной firstElement это строка "apple"
    // Объявлена переменная secondElement
    // Значение переменной secondElement это строка "plum"
    // Объявлена переменная lastElement
    // Значение переменной lastElement это строка "orange"

    const fruits = ["apple", "plum", "pear", "orange"];

// Change code below this line

// Solution 5

const fruits = ["apple", "plum", "pear", "orange"];

const firstElement = fruits[0];
const secondElement = fruits[1];
const lastElement = fruits[3];

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[3]);

// Task 6
// Переопределение значения элемента
// Переопредели значения элементов с индексами 1 и 3. Замени "plum" на "peach", а "orange" на "banana".
  // Test
    // Объявлена переменная fruits
    // Значение переменной fruits это массив ["apple", "peach", "pear", "banana"]

    const fruits = ["apple", "plum", "pear", "orange"];

// Write your code under this line

// Solution 6

const fruits = ["apple", "plum", "pear", "orange"];

fruits[1] = 'peach';
fruits[3] = 'banana';

console.log(fruits);

// Task 7
// Длина массива
// Объяви переменную fruitsArrayLength и присвой ей длину массива fruits используя свойство length.
  // Test
    // Объявлена переменная fruitsArrayLength
    // Значение переменной fruitsArrayLength это число 4

const fruits = ["apple", "peach", "pear", "banana"];

// Change code below this line

// Solution 7

const fruits = ["apple", "peach", "pear", "banana"];

const fruitsArrayLength = fruits.length;

console.log(fruits.length);

// Task 8
// Индекс последнего элемента
// Объяви две переменные:
// Имя переменной    	Ожидаемое значение
// lastElementIndex 	Индекс последнего элемента масcива fruits через длина_массива - 1
// lastElement      	Значение последнего элемента массива

  // Test
    // Объявлена переменная lastElementIndex
    // Значение переменной lastElementIndex это число 3
    // Объявлена переменная lastElement
    // Значение переменной lastElement это строка "banana"

    const fruits = ["apple", "peach", "pear", "banana"];

// Change code below this line

// Solution 8

const fruits = ["apple", "peach", "pear", "banana"];

const lastElementIndex = fruits.length-1;
const lastElement = fruits[lastElementIndex];
  
console.log(lastElementIndex);
console.log(lastElement);

// Task 9
// Задача: Крайние элементы массива
// Напиши функцию getExtremeElements(array) которая принимает один параметр array - массив элементов произвольной длины. Функция должна возвращать массив из двух элементов - первого и последнего элемента параметра array.
  // Test
    // Объявлена функция getExtremeElements(array)
    // Вызов getExtremeElements([1, 2, 3, 4, 5]) возвращает [1, 5]
    // Вызов getExtremeElements(["Earth", "Mars", "Venus"]) возвращает ["Earth", "Venus"]
    // Вызов getExtremeElements(["apple", "peach", "pear", "banana"]) возвращает ["apple", "banana"]

    function getExtremeElements(array) {
  // Change code below this line


  // Change code above this line
}

// Solution 9

function getExtremeElements(array) {

return [array[0], array[array.length - 1]];
};

getExtremeElements([1, 2, 3, 4, 5]);
getExtremeElements(["Earth", "Mars", "Venus"]);
getExtremeElements(["apple", "peach", "pear", "banana"]);

console.log(getExtremeElements([1, 2, 3, 4, 5]));
console.log(getExtremeElements(["Earth", "Mars", "Venus"]));
console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));


// ! - возвращает вырезанные элементы массива
function getExtremeElements(array) {
return array = array.splice(1, array.length-2);
  
};

getExtremeElements([1, 2, 3, 4, 5]);
getExtremeElements(["Earth", "Mars", "Venus"]);
getExtremeElements(["apple", "peach", "pear", "banana"]);

console.log(getExtremeElements([1, 2, 3, 4, 5]));
console.log(getExtremeElements(["Earth", "Mars", "Venus"]));
console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));
// !

// Task 10
// Метод строк split()
// Дополни код функции splitMessage(message, delimeter) так, чтобы она возвращала в переменной words результат разделения строки message по разделителю delimeter - массив строк.
  // Test
    // Объявлена функция splitMessage(message, delimeter)
    // Вызов splitMessage("Mango hurries to the train", " ") возвращает ["Mango", "hurries", "to", "the", "train"]
    // Вызов splitMessage("Mango", "") возвращает ["M", "a", "n", "g", "o"]
    // Вызов splitMessage("best_for_week", "_") возвращает ["best", "for", "week"]

    function splitMessage(message, delimeter) {
  let words;
  // Change code below this line

  // Change code above this line
  return words;
}

// Solution 10

function splitMessage(message, delimeter) {
  let words;
  words = message.split(delimeter);
  return words;
};

splitMessage("Mango hurries to the train", " ");
splitMessage("Mango", "");
splitMessage("best_for_week", "_");

console.log(splitMessage("Mango hurries to the train", " "));
console.log(splitMessage("Mango", ""));
console.log(splitMessage("best_for_week", "_"));

// Task 11
// Задача: гравировка украшений
// Сервису гравировки украшений нужна функция, которая бы автоматически считала цену гравировки, в зависимости от количества слов и цены за слово.
// Объявлена функция calculateEngravingPrice(message, pricePerWord). Эта функция принимает строку, состоящую из слов разделённых только пробелами (параметр message) и цену гравировки одного слова (параметр pricePerWord).
// Напиши тело функции, чтобы она возвращала общую стоимость гравировки всех слов в строке.
  // Test
    // Объявлена функция calculateEngravingPrice(message, pricePerWord)
    // Вызов calculateEngravingPrice("JavaScript is in my blood", 10) возвращает 50
    // Вызов calculateEngravingPrice("JavaScript is in my blood", 20) возвращает 100
    // Вызов calculateEngravingPrice("Web-development is creative work", 40) возвращает 160
    // Вызов calculateEngravingPrice("Web-development is creative work", 20) возвращает 80

function calculateEngravingPrice(message, pricePerWord) {
   // Change code below this line

   // Change code above this line
}

// Solution 11.1

function calculateEngravingPrice(message, pricePerWord) {
  
  const quantityWords = message.split(' ');
  const totalPrice = quantityWords.length * pricePerWord;
  return totalPrice;
  
};

calculateEngravingPrice("JavaScript is in my blood", 10);
calculateEngravingPrice("JavaScript is in my blood", 20);
calculateEngravingPrice("Web-development is creative work", 40);
calculateEngravingPrice("Web-development is creative work", 20);

console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
console.log(calculateEngravingPrice("JavaScript is in my blood", 20));
console.log(calculateEngravingPrice("Web-development is creative work", 40));
console.log(calculateEngravingPrice("Web-development is creative work", 20));

// Solution 11.2

function calculateEngravingPrice(message, pricePerWord) {
  let totalPrice;
  
  return totalPrice = (message.split(' ')).length * pricePerWord;
};

calculateEngravingPrice("JavaScript is in my blood", 10);
calculateEngravingPrice("JavaScript is in my blood", 20);
calculateEngravingPrice("Web-development is creative work", 40);
calculateEngravingPrice("Web-development is creative work", 20);

console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
console.log(calculateEngravingPrice("JavaScript is in my blood", 20));
console.log(calculateEngravingPrice("Web-development is creative work", 40));
console.log(calculateEngravingPrice("Web-development is creative work", 20));

// Task 12
// Метод массива join()
// Дополни код функции makeStringFromArray(array, delimeter) так, чтобы она возвращала в переменной string результат соединения элементов массива array c разделителем delimeter - строку.
  // Test
    // Объявлена функция makeStringFromArray(array, delimeter)
    // Вызов makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ") возвращает "Mango hurries to the train"
    // Вызов makeStringFromArray(["M", "a", "n", "g", "o"], "")) возвращает "Mango"
    // Вызов makeStringFromArray(["top", "picks", "for", "you"], "_") возвращает "top_picks_for_you"

    function makeStringFromArray(array, delimeter) {
  let string;
  // Change code below this line


  // Change code above this line
  return string;
}

// Solution 12.1

function makeStringFromArray(array, delimeter) {
  let string;
  
  string = array.join(delimeter);
  
  return string;
};

makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ");
makeStringFromArray(["M", "a", "n", "g", "o"], "");
makeStringFromArray(["top", "picks", "for", "you"], "_");

console.log(makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " "));
console.log(makeStringFromArray(["M", "a", "n", "g", "o"], ""));
console.log(makeStringFromArray(["top", "picks", "for", "you"], "_"));

// Solution 12.2

function makeStringFromArray(array, delimeter) {

  return string = array.join(delimeter);
};

makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ");
makeStringFromArray(["M", "a", "n", "g", "o"], "");
makeStringFromArray(["top", "picks", "for", "you"], "_");

console.log(makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " "));
console.log(makeStringFromArray(["M", "a", "n", "g", "o"], ""));
console.log(makeStringFromArray(["top", "picks", "for", "you"], "_"));

// Task 13
// Задача: генератор slug
// Термин slug - это человеко-понятный уникальный идентификатор, который используется в веб-разработке для создания читабельных URL-адесов.
// Например, вместо того чтобы пользователь увидел в адресной строке mysite.com/posts/1q8fh74tx, можно сделать slug из названия статьи. В результате адрес получится более приятным для восприятия: mysite.com/posts/arrays-for-begginers.

//! Внимание
//! Slug это всегда строка в нижнем регистре, слова которой разделены тире.

// Напиши функцию slugify(title) которая принимает заголовок статьи, параметр title, и возвращает slug, созданный из этой строки.
    // Значением параметра title будут строки, слова которых разделены только пробелами
    // Все символы slug должны быть в нижнем регистре
    // Все слова slug должна быть разделены тире
  // Test
    // Объявлена функция slugify(title)
    // Вызов slugify("Arrays for begginers") возвращает "arrays-for-begginers"
    // Вызов slugify("English for developer") возвращает "english-for-developer"
    // Вызов slugify("Ten secrets of JavaScript") возвращает "ten-secrets-of-javascript"
    // Вызов slugify("How to become a JUNIOR developer in TWO WEEKS") возвращает "how-to-become-a-junior-developer-in-two-weeks"
function slugify(title) {
  // Change code below this line

  // Change code above this line
}

// Solution 13.1

function slugify(title) {

  return title.toLowerCase().split(' ').join('-');

};

slugify("Arrays for begginers");
slugify("English for developer");
slugify("Ten secrets of JavaScript");
slugify("How to become a JUNIOR developer in TWO WEEKS");

console.log(slugify("Arrays for begginers"));
console.log(slugify("English for developer"));
console.log(slugify("Ten secrets of JavaScript"));
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));

// Solution 13.2

function slugify(title) {

  let titleLowerCase = title.toLowerCase();
  let titleSplit = titleLowerCase.split(' ');
  let titleSlug = titleSplit.join('-');
  
  return titleSlug;

};

slugify("Arrays for begginers");
slugify("English for developer");
slugify("Ten secrets of JavaScript");
slugify("How to become a JUNIOR developer in TWO WEEKS");

console.log(slugify("Arrays for begginers"));
console.log(slugify("English for developer"));
console.log(slugify("Ten secrets of JavaScript"));
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));

// Solution 13.3

function slugify(title) {

  const slug = title.toLowerCase().split(' ').join('-');
  
  return slug;

};

slugify("Arrays for begginers");
slugify("English for developer");
slugify("Ten secrets of JavaScript");
slugify("How to become a JUNIOR developer in TWO WEEKS");

console.log(slugify("Arrays for begginers"));
console.log(slugify("English for developer"));
console.log(slugify("Ten secrets of JavaScript"));
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));

// Solution 13.4

function slugify(title) {

  const slug = title.toLowerCase().replace(/ /g, '-');
 
  return slug;

};


slugify("Arrays for begginers");
slugify("English for developer");
slugify("Ten secrets of JavaScript");
slugify("How to become a JUNIOR developer in TWO WEEKS");

console.log(slugify("Arrays for begginers"));
console.log(slugify("English for developer"));
console.log(slugify("Ten secrets of JavaScript"));
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));


// Task 14
// Метод slice()
// Дополни код так, чтобы переменные содержали частичные копии исходного массива fruits.
    // firstTwoEls - массив из первых двух элементов
    // nonExtremeEls - массив из всех элементов кроме первого и последнего
    // lastThreeEls - массив из трёх последних элементов
      // Test
    // Объявлена переменная fruits
    // Значение переменной fruits это массив ["apple", "plum", "pear", "orange", "banana"]
    // Объявлена переменная firstTwoEls
    // Значение переменной firstTwoEls это массив ["apple", "plum"]
    // Объявлена переменная nonExtremeEls
    // Значение переменной nonExtremeEls это массив ["plum", "pear", "orange"]
    // Объявлена переменная lastThreeEls
    // Значение переменной lastThreeEls это массив ["pear", "orange", "banana"]
    // Переменной lastThreeEls присвоена копия части массива fruits после применения метода slice с правильными аргументами

const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// Change code below this line
const firstTwoEls = ;
const nonExtremeEls = ;
const lastThreeEls = ;
    
// Solution 14.1

const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// Change code below this line
const firstTwoEls = fruits.slice(0, 2);
const nonExtremeEls = fruits.slice(1, fruits.length -1);
const lastThreeEls = fruits.slice(-3);

console.log(fruits);
console.log(firstTwoEls);
console.log(nonExtremeEls);
console.log(lastThreeEls);

// Solution 14.2

const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

const firstTwoEls = fruits.slice(0, 2);
const nonExtremeEls = fruits.slice(1, fruits.length-1);
const lastThreeEls = fruits.slice(2, fruits.length);

console.log(fruits);
console.log(firstTwoEls);
console.log(nonExtremeEls);
console.log(lastThreeEls);

// Task 15
// Метод concat()
// Дополни код так, чтобы в переменной allClients получился массив всех элементов массивов oldClients и newClients.
      // Test
    // Объявлена переменная oldClients
    // Значение переменной oldClients это массив ["Mango", "Ajax", "Poly", "Kiwi"]
    // Объявлена переменная newClients
    // Значение переменной newClients это массив ["Peach", "Houston"]
    // Объявлена переменная allClients
    // Значение переменной allClients это массив ["Mango", "Ajax", "Poly", "Kiwi", "Peach", "Houston"]
    // Переменной allClients присвоен массив после применения метода concat с правильными аргументами

const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
const newClients = ['Peach', 'Houston'];

const allClients = ; // Change this line
   
// Solution 15

const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
const newClients = ['Peach', 'Houston'];

const allClients = oldClients.concat(newClients);

console.log(oldClients);
console.log(newClients);
console.log(allClients);

// Task 16
// Задача: композиция массивов
// Напиши функцию makeArray(firstArray, secondArray, maxLength) для создания нового массива со всеми элементами двух исходных firstArray и secondArray. Параметр maxLength содержит максимально допустимую длину нового массива.
// Если количество элементов нового массива больше maxLength, функция должна вернуть копию массива длиной maxLength элементов. В противном случае функция должна вернуть новый массив целиком.
      // Test
    // Объявлена функция makeArray(firstArray, secondArray, maxLength)
    // Вызов makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3) возвращает ["Mango", "Poly", "Ajax"]
    // Вызов makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4) возвращает ["Mango", "Poly", "Houston", "Ajax"]
    // Вызов makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3) возвращает ["Mango", "Ajax", "Chelsea"]
    // Вызов makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2) возвращает ["Earth", "Jupiter"]
    // Вызов makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4) возвращает ["Earth", "Jupiter", "Neptune", "Uranus"]
    // Вызов makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0) возвращает []
    // Вызов функции makeArray() со случайными массивами и случайным числом возвращает правильный массив

  function makeArray(firstArray, secondArray, maxLength) {
  // Change code below this line

  // Change code above this line
  }

// Solution 16.1

function makeArray(firstArray, secondArray, maxLength) {
  
return firstArray.concat(secondArray).slice(0,maxLength);
  
 };

makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3);
makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4);
makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3);
makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2);
makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4);
makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0);

console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));

// Solution 16.2

function makeArray(firstArray, secondArray, maxLength) {
  
return firstArray = firstArray.concat(secondArray).slice(0,maxLength);

 };

makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3);
makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4);
makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3);
makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2);
makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4);
makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0);

console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));

  // Solution 16.3
  // выдает ошибку по одному пункту, тоесть не ошибку а только цифру 4, а не масив: - Вызов makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4) возвращает ['Earth', 'Jupiter', 'Neptune', 'Uranus']

function makeArray(firstArray, secondArray, maxLength) {
  
  const linkedArray = firstArray.concat(secondArray);
  
  if (linkedArray.length > maxLength) {
    return linkedArray.slice(0,maxLength);
  }  
  return linkedArray.length;
 };

makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3);
makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4);
makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3);
makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2);
makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4);
makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0);

console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));

// Solution 16.4

  function makeArray(firstArray, secondArray, maxLength) {
  
  const linkedArray = firstArray.concat(secondArray);
  
  if (linkedArray.length > maxLength) {
    return linkedArray.slice(0,maxLength);
  }  
  return linkedArray;
 };

makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3);
makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4);
makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3);
makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2);
makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4);
makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0);

console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));

// Task 17
// Цикл for
// Дополни цикл for так, чтобы он логировал все целые числа в диапазоне от start до end включительно.
      // Test
    // Объявлена переменная start
    // Значение переменной start это число 3
    // Объявлена переменная end
    // Значение переменной end это число 7
    // Объявлена переменная i - счётчик цикла
    // Начальное значение переменной i равно 3
    // Условие цикла приводится к true до тех пор, пока i меньше либо равно 7
    // На каждой итерации значение переменной i увеличивается на единицу
    // Вывод в консоль переменной i покажет числа 3, 4, 5, 6, 7

const start = 3;
const end = 7;

for (let i = ; i <= ; i += ) { // Change this line
  console.log(i);
}

// Solution 17

const start = 3;
const end = 7;

for (let i = start; i <= end; i += 1 ) { 
  
  console.log(i);
};

// Task 18
// Задача: сумма чисел (цикл for)
// Напиши функцию calculateTotal(number), которая принимает целое число (параметр number) и возвращает сумму всех целых чисел от единицы и до этого числа. Например, если number равно 3, то сумма это 1 + 2 + 3, то есть 6.
      // Test
    // Объявлена функция calculateTotal(number)
    // Вызов функции calculateTotal(1) возвращает 1
    // Вызов функции calculateTotal(3) возвращает 6
    // Вызов функции calculateTotal(7) возвращает 28
    // Вызов функции calculateTotal(18) возвращает 171
    // Вызов функции calculateTotal(24) возвращает 300
    // Вызов функции calculateTotal() со случайным числом возвращает правильное значение

    function calculateTotal(number) {
 // Change code below this line



  // Change code above this line
}

// Solution 18.1

function calculateTotal(number) {
  let sum = 0;
  
  for (let i = 1; i <= number; i += 1) {
    sum = sum + i;
  };

  return sum;
  
};

calculateTotal(1);
calculateTotal(3);
calculateTotal(7);
calculateTotal(18);
calculateTotal(24);

console.log(calculateTotal(1));
console.log(calculateTotal(3));
console.log(calculateTotal(7));
console.log(calculateTotal(18));
console.log(calculateTotal(24));

// Solution 18.2

function calculateTotal(number) {
  let sum = 0;
  
  for(i = 1; i <= number; i += 1){
  	 sum = sum + i;
  };
  return sum;
};

calculateTotal(1);
calculateTotal(3);
calculateTotal(7);
calculateTotal(18);
calculateTotal(24);

console.log(calculateTotal(1));
console.log(calculateTotal(3));
console.log(calculateTotal(7));
console.log(calculateTotal(18));
console.log(calculateTotal(24));

// Task 19
// Итерация по массиву
// Дополни код цикла for так, чтобы он последовательно логировал все элементы массива fruits.
      // Test
    // Объявлена переменная fruits
    // Значение переменной fruits это массив ["apple", "plum", "pear", "orange"]
    // Объявлена переменная i - счётчик цикла
    // Начальное значение переменной i равно 0
    // Условие цикла приводится к true до тех пор, пока i меньше 4
    // На каждой итерации значение переменной i увеличивается на единицу
    // В теле цикла for объявляется переменная const fruit и этой переменной присваивается значение - элемент массива
    // В теле цикла for используется вывод в консоль переменной fruit
  
const fruits = ['apple', 'plum', 'pear', 'orange'];

for (let i = ;) { // Change this line
  const fruit = fruits[]; // Change this line
  console.log(fruit);
}

// Solution 19

const fruits = ['apple', 'plum', 'pear', 'orange'];

for (let i = 0; i < fruits.length; i += 1) { // Change this line
  const fruit = fruits[i]; // Change this line
  console.log(fruit);
};

// Task 20
// Задача: подсчёт суммы покупки
// Напиши функцию calculateTotalPrice(order), которая принимает один параметр order - массив чисел, и рассчитывает общую сумму его элементов. Общая сумма элементов должна сохраняться в переменной total, которая возвращается, как результат работы функции.
      // Test
    // Объявлена функция calculateTotalPrice(order)
    // Вызов функции calculateTotalPrice([12, 85, 37, 4]) возвращает 138
    // Вызов функции calculateTotalPrice([164, 48, 291]) возвращает 503
    // Вызов функции calculateTotalPrice([412, 371, 94, 63, 176]) возвращает 1116
    // Вызов функции calculateTotalPrice() со случайным массивом возвращает правильное значение

function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line

  // Change code above this line
  return total;
}

// Solution 20
// Тебе надо перебрать массив. Значения которого хранится в переменной order. И соответственно в теле перебирающей конструкции суммировать полученные значения которые будут хранится в переменной total. Соответственно функция возвращает сумму значения массива.total.
// перебрать массив с помощью for of, и на каждой итерации прибавляйте элемент к тотал. Потом верните тотал.

function calculateTotalPrice(order) {
  let total = 0;

  for(orderItems of order){
    total += orderItems;
  };
  
  return total;
};

calculateTotalPrice([12, 85, 37, 4]);
calculateTotalPrice([164, 48, 291]);
calculateTotalPrice([412, 371, 94, 63, 176]);

console.log(calculateTotalPrice([12, 85, 37, 4]));
console.log(calculateTotalPrice([164, 48, 291]));
console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

// Task 21
// Задача: поиск самого длинного слова
// Напиши функцию findLongestWord(string) которая принимает произвольную строку состоящую только из слов разделённых пробелом (параметр string) и возвращает самое длинное слово в этой строке.
      // Test
    // Объявлена функция findLongestWord(string)
    // Вызов функции findLongestWord("The quick brown fox jumped over the lazy dog") возвращает jumped
    // Вызов функции findLongestWord("Google do a roll") возвращает Google
    // Вызов функции findLongestWord("May the force be with you") возвращает force
    // Вызов функции findLongestWord() со случайной строкой возвращает правильное значение

function findLongestWord(string) {
  // Change code below this line

  // Change code above this line
}
   
// Solution 21.1
// воспользуйтесь методом split(), получите массив строк, а потом уже найдите самое длинное слово

function findLongestWord(string) {
  
    let longestWord = [];
    array = string.split(" ");
    for(let i = 0; i < array.length; i++){
        if(array[i].length > longestWord.length){
        longestWord = array[i];    
        };
    };
return longestWord;
};    

findLongestWord("The quick brown fox jumped over the lazy dog");
findLongestWord("Google do a roll");
findLongestWord("May the force be with you");

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWord("Google do a roll"));
console.log(findLongestWord("May the force be with you"));

// Solution 21.2

function findLongestWord(string) {
let array=string.split(' ');
let biggestWord = '';
for (let i = 0; i < array.length; i += 1){
  if (array[i].length > biggestWord.length) {
    biggestWord = array[i];
  }
}
  return biggestWord;

};   

findLongestWord("The quick brown fox jumped over the lazy dog");
findLongestWord("Google do a roll");
findLongestWord("May the force be with you");

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWord("Google do a roll"));
console.log(findLongestWord("May the force be with you"));

// Solution 21.3
// оптимальное

function findLongestWord(string) {
    const words = string.split(' ');
    let longestWord = words[0];

    for (let word of words) {
        if (word.length > longestWord.length)
            longestWord = word;
    };

    return longestWord;
};  

findLongestWord("The quick brown fox jumped over the lazy dog");
findLongestWord("Google do a roll");
findLongestWord("May the force be with you");

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWord("Google do a roll"));
console.log(findLongestWord("May the force be with you"));

// Solution 21.4

function findLongestWord(string) {
  const word = string.split(' ');
  let longWord = word[0];

for (let i = 0; i < word.length; i += 1){
  if (word[i].length > longWord.length) {
    longWord = word[i];
  }
}
  return longWord;

};   

findLongestWord("The quick brown fox jumped over the lazy dog");
findLongestWord("Google do a roll");
findLongestWord("May the force be with you");

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWord("Google do a roll"));
console.log(findLongestWord("May the force be with you"));

// Task 22
// Метод push()
// Дополни код функции createArrayOfNumbers(min, max) так, чтобы она возвращала массив всех целых чисел от значения min до max.
      // Test
    // Объявлена функция createArrayOfNumbers(min, max)
    // Вызов функции createArrayOfNumbers(1, 3) возвращает [1, 2, 3]
    // Вызов функции createArrayOfNumbers(14, 17) возвращает [14, 15, 16, 17]
    // Вызов функции createArrayOfNumbers(29, 34) возвращает [29, 30, 31, 32, 33, 34]
    // Вызов функции createArrayOfNumbers() со случайными min и max возвращает правильный массив
    // В цикле for использовался метод push
 
function createArrayOfNumbers(min, max) {
  const numbers = [];
  // Change code below this line

  // Change code above this line
  return numbers;
}

// Solution 22

// используй цикл for с перебором значений от min до max с шагом 1, а в теле цикла присваивай новое значение счетчика элементу массива, используя метод push

function createArrayOfNumbers(min, max) {
  const numbers = [];

  for (let i = min; i <= max; i += 1){
    numbers.push(i);
  	};
  
  return numbers;
};

createArrayOfNumbers(1, 3);
createArrayOfNumbers(14, 17);
createArrayOfNumbers(29, 34);

console.log(createArrayOfNumbers(1, 3));
console.log(createArrayOfNumbers(14, 17));
console.log(createArrayOfNumbers(29, 34));

// Solution 22.1
// Этот вариант не подходит так как добавляет числа в один и тот же массив:

function createArrayOfNumbers(min, max) {
  const numbers = [];

  for (let i = 1; i <= max; i += 1){
    numbers.push(i);
  	};
  
  return numbers;
};

createArrayOfNumbers(1, 3);
createArrayOfNumbers(14, 17);
createArrayOfNumbers(29, 34);

console.log(createArrayOfNumbers(1, 3));
console.log(createArrayOfNumbers(14, 17));
console.log(createArrayOfNumbers(29, 34));

// Task 23
// Задача: фильтрация массива чисел
// Напиши функцию filterArray(numbers, value), которая принимает массив чисел (параметр numbers) и возвращает новый массив, в котором будут только те элементы массива numbers, которые больше чем значение параметра value (число).
      // Test
    // Объявлена функция filterArray(numbers, value)
    // Вызов функции filterArray([1, 2, 3, 4, 5], 3) возвращает [4, 5]
    // Вызов функции filterArray([1, 2, 3, 4, 5], 4) возвращает [5]
    // Вызов функции filterArray([1, 2, 3, 4, 5], 5) возвращает []
    // Вызов функции filterArray([12, 24, 8, 41, 76], 38) возвращает [41, 76]
    // Вызов функции filterArray([12, 24, 8, 41, 76], 20) возвращает [24, 41, 76]
    // Вызов функции filterArray() со случайным массивом и числом возвращает правильный массив
    // В цикле for использовался метод push
 
function filterArray(numbers, value) {
   // Change code below this line

  // Change code above this line
}

// Solution 23.1

function filterArray(numbers, value) {
  let newArray = [];
  for (const number of numbers) {
    if (number > value) {
      newArray.push(number);
    };
  };
  return newArray;
};

filterArray([1, 2, 3, 4, 5], 3);
filterArray([1, 2, 3, 4, 5], 4);
filterArray([1, 2, 3, 4, 5], 5);
filterArray([12, 24, 8, 41, 76], 38);
filterArray([12, 24, 8, 41, 76], 20);

console.log(filterArray([1, 2, 3, 4, 5], 3));
console.log(filterArray([1, 2, 3, 4, 5], 4));
console.log(filterArray([1, 2, 3, 4, 5], 5));
console.log(filterArray([12, 24, 8, 41, 76], 38));
console.log(filterArray([12, 24, 8, 41, 76], 20));

// Solution 23.2
// для итерации по масиву (или перебора массива) используем цикл for - перебираем массив чисел
// если число из массива больше заданого value
// добавляем в новый массив

function filterArray(numbers, value) {
  const newArray = [];
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > value) {
      newArray.push(numbers[i]);
    };
  };
  return newArray;
};

filterArray([1, 2, 3, 4, 5], 3);
filterArray([1, 2, 3, 4, 5], 4);
filterArray([1, 2, 3, 4, 5], 5);
filterArray([12, 24, 8, 41, 76], 38);
filterArray([12, 24, 8, 41, 76], 20);

console.log(filterArray([1, 2, 3, 4, 5], 3));
console.log(filterArray([1, 2, 3, 4, 5], 4));
console.log(filterArray([1, 2, 3, 4, 5], 5));
console.log(filterArray([12, 24, 8, 41, 76], 38));
console.log(filterArray([12, 24, 8, 41, 76], 20));

// Task 24
// Метод includes()
// Функция checkFruit(fruit) принимает строку с названием фрукта (параметр fruit), и проверяет есть ли такой фрукт в массиве fruits.
// Дополни код функции так, что если:
    // фрукт есть в массиве, то функция возвращает true;
    // фрукта нет в массиве, то функция возвращает false.
      // Test
    // Объявлена функция checkFruit(fruit)
    // Вызов checkFruit("plum") возвращает true
    // Вызов checkFruit("mandarin") возвращает false
    // Вызов checkFruit("pear") возвращает true
    // Вызов checkFruit("Pear") возвращает false
    // Вызов checkFruit("apple") возвращает true
    // Вызов функции checkFruit() со случайным словом возвращает правильное значение boolean
    // В функции использовался метод includes

function checkFruit(fruit) {
  const fruits = ["apple", "plum", "pear", "orange"];

  return; // Change this line
}

// Solution 24.1

function checkFruit(fruit) {
  const fruits = ["apple", "plum", "pear", "orange"];

  return fruits.includes(fruit);
};

checkFruit("plum");
checkFruit("mandarin");
checkFruit("pear");
checkFruit("Pear");
checkFruit("apple");
checkFruit();

console.log(checkFruit("plum"));
console.log(checkFruit("mandarin"));
console.log(checkFruit("pear"));
console.log(checkFruit("Pear"));
console.log(checkFruit("apple"));
console.log(checkFruit());

// Solution 24.2
// выполнено с использованием: if ... else

function checkFruit(fruit) {
  const fruits = ["apple", "plum", "pear", "orange"];

  let message;

  if (fruits.includes(fruit)) {
    message = true;
  } else {
    message = false;
  }

  return message;
};

checkFruit("plum");
checkFruit("mandarin");
checkFruit("pear");
checkFruit("Pear");
checkFruit("apple");
checkFruit();

console.log(checkFruit("plum"));
console.log(checkFruit("mandarin"));
console.log(checkFruit("pear"));
console.log(checkFruit("Pear"));
console.log(checkFruit("apple"));
console.log(checkFruit());

// Task 25
// Задача: общие элементы
// Общими элементами массивов называют те элементы, которые присутствуют во всех массивах.
// Например, в двух массивах [1, 3, 5] и [0, 8, 5, 3] общими будут числа 3 и 5, т.к. они присутствуют в обоих исходных массивах. А числа 0, 1 и 8 присутствуют только в одном из массивов.
// Напиши функцию getCommonElements(array1, array2) которая получает два массива произвольной длины в параметры array1 и array2, и возвращает новый массив, состоящий из тех элементов, которые присутствуют в обоих исходных массивах.
      // Test
    // Объявлена функция getCommonElements(array1, array2)
    // Вызов getCommonElements([1, 2, 3], [2, 4]) возвращает [2]
    // Вызов getCommonElements([1, 2, 3], [2, 1, 17, 19]) возвращает [1, 2]
    // Вызов getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) возвращает [12, 27, 3]
    // Вызов getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) возвращает [10, 30, 40]
    // Вызов getCommonElements([1, 2, 3], [10, 20, 30]) возвращает []
    // Вызов функции getCommonElements() со случайными двумя массивами возвращает правильный массив
    // В цикле for использовались методы includes и push

function getCommonElements(array1, array2) {
  // Change code below this line

 // Change code above this line
}

// Solution 25.

function getCommonElements(array1, array2) {

  const similarNumbers = [];

  for (let number of array1) {
    if (array2.includes(number)) {
      similarNumbers.push(number);
    }
  }
  return similarNumbers;

};

getCommonElements([1, 2, 3], [2, 4]);
getCommonElements([1, 2, 3], [2, 1, 17, 19]);
getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);
getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]);
getCommonElements([1, 2, 3], [10, 20, 30]);
getCommonElements();
getCommonElements([13, 13, 13], [13, 13, 13]);


console.log(getCommonElements([1, 2, 3], [2, 4]));
console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
console.log(getCommonElements([1, 2, 3], [10, 20, 30]));
console.log(getCommonElements());
console.log(getCommonElements([13, 13, 13], [13, 13, 13]));

// Solution 25.2

function getCommonElements(array1, array2) {

  const uniElement = [];

  for (let element of array1) {
    if (array2.includes(element)) {
      uniElement.push(element);
    }
  }
  return uniElement;

};

// Task 26
// Цикл for...of
// Выполни рефакторинг кода функции calculateTotalPrice(order) заменив цикл for на for...of.
      // Test
    // Объявлена функция calculateTotalPrice(order)
    // Вызов функции calculateTotalPrice([12, 85, 37, 4]) возвращает 138
    // Вызов функции calculateTotalPrice([164, 48, 291]) возвращает 503
    // Вызов функции calculateTotalPrice([412, 371, 94, 63, 176]) возвращает 1116
    // Вызов функции calculateTotalPrice([]) возвращает 0
    // Вызов функции calculateTotalPrice() со случайным массивом чисел возвращает правильную сумму

  function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line

  for (let i = 0; i < order.length; i += 1) {
    total += order[i];
  }

  // Change code above this line
  return total;
}

// Solution 26

function calculateTotalPrice(order) {
  let total = 0;
  let item = 0;
  for(let item of order){
    total += item;
  };
  
  return total;
};

calculateTotalPrice([12, 85, 37, 4]);
calculateTotalPrice([164, 48, 291]);
calculateTotalPrice([412, 371, 94, 63, 176]);
calculateTotalPrice([]);

console.log(calculateTotalPrice([12, 85, 37, 4]));
console.log(calculateTotalPrice([164, 48, 291]));
console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
console.log(calculateTotalPrice([]));

// Task 27
// Зачада: фильтрация массива чисел 2.0
      // Test
    // Объявлена функция filterArray(numbers, value)
    // Вызов функции filterArray([1, 2, 3, 4, 5], 3) возвращает [4, 5]
    // Вызов функции filterArray([1, 2, 3, 4, 5], 4) возвращает [5]
    // Вызов функции filterArray([1, 2, 3, 4, 5], 5) возвращает []
    // Вызов функции filterArray([12, 24, 8, 41, 76], 38) возвращает [41, 76]
    // Вызов функции filterArray([12, 24, 8, 41, 76], 20) возвращает [24, 41, 76]
    // Вызов функции filterArray() со случайным массивом и числом возвращает правильный массив
    // Функция calculateTotalPrice() использует цикл for..of

function filterArray(numbers, value) {
  // Change code below this line
  const filteredNumbers = [];

  for (let i = 0; i < numbers.length; i += 1) {
    const number = numbers[i];

    if (number > value) {
      filteredNumbers.push(number);
    }
  }

  return filteredNumbers;
  // Change code above this line
}

// Solution 27

function filterArray(numbers, value) {

  const filteredNumbers = [];

  for (let i of numbers) {
    const number = i;

    if (number > value) {
      filteredNumbers.push(number);
    };
  };

  return filteredNumbers;
 };

filterArray([1, 2, 3, 4, 5], 3);
filterArray([1, 2, 3, 4, 5], 4);
filterArray([1, 2, 3, 4, 5], 5);
filterArray([12, 24, 8, 41, 76], 38);
filterArray([12, 24, 8, 41, 76], 20);


console.log(filterArray([1, 2, 3, 4, 5], 3));
console.log(filterArray([1, 2, 3, 4, 5], 4));
console.log(filterArray([1, 2, 3, 4, 5], 5));
console.log(filterArray([12, 24, 8, 41, 76], 38));
console.log(filterArray([12, 24, 8, 41, 76], 20));

// Task 28
// Оператор %
// Дополни выражения остатка от деления так, чтобы код проходил тесты.
      // Test
    // Объявлена переменная a
    // Значение переменной a это число 0
    // Объявлена переменная b
    // Значение переменной b это число 1
    // Объявлена переменная c
    // Значение переменной c это число 3
    // Объявлена переменная d
    // Значение переменной d это число 5
    // Объявлена переменная e
    // Значение переменной e это число 2

    // Change code below this line
const a = 3 % ;
const b = 4 % ;
const c = 11 % ;
const d = 12 % ;
const e = 8 % ;

// Solution 28

const a = 3 % 1;
const b = 4 % 3;
const c = 11 % 4;
const d = 12 % 7;
const e = 8 % 3;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

// Task 29
// Задача: чётные числа
// Напиши функцию getEvenNumbers(start, end) которая возвращает массив всех чётных чисел от start до end. Чётным считается число которое делится на 2 без остатка (10 % 2 === 0).
      // Test
    // Объявлена функция getEvenNumbers(start, end)
    // Вызов функции getEvenNumbers(2, 5) возвращает [2, 4]
    // Вызов функции getEvenNumbers(3, 11) возвращает [4, 6, 8, 10]
    // Вызов функции getEvenNumbers(6, 12) возвращает [6, 8, 10, 12]
    // Вызов функции getEvenNumbers(8, 8) возвращает [8]
    // Вызов функции getEvenNumbers(7, 7) возвращает []
    // Вызов функции getEvenNumbers() со случайными start и end возвращает правильный массив

function getEvenNumbers(start, end) {
   // Change code below this line

    // Change code above this line
}

// Solution 29
// for пройдитесь от старт до энд и внутри for делайте проверку и если остаток от деления 0, то добавляйте числа в массив. После всего верните этот массив

function getEvenNumbers(start, end) {
  
const arrayOfEvenNumbers = [];
  
  for( let i = start; i <= end; i += 1) {
    if (i % 2 === 0) {
      arrayOfEvenNumbers.push(i);
       
    };
  };
    return arrayOfEvenNumbers;
  };

getEvenNumbers(2, 5);
getEvenNumbers(3, 11);
getEvenNumbers(6, 12);
getEvenNumbers(8, 8);
getEvenNumbers(7, 7);

console.log(getEvenNumbers(2, 5));
console.log(getEvenNumbers(3, 11));
console.log(getEvenNumbers(6, 12));
console.log(getEvenNumbers(8, 8));
console.log(getEvenNumbers(7, 7));

// Task 30
// Оператор break
// Дополни код так, чтобы в переменную number записывалось первое число от start до end, которое делится на 5 без остатка.
      // Test
    // Объявлена переменная start со значением 6
    // Объявлена переменная end со значением 27
    // Объявлена переменная number без инициализации
    // Итоговое значение переменной number равно 10
    // В цикле for используется break для выхода до завершения всех итераций цикла

const start = 6;
const end = 27;
let number;

for (let i = start; i < end; i += 1) {
  if (i % 5 === 0) {
    number = i;
  }
}

// Solution 30

const start = 6;
const end = 27;
let number;

for (let i = start; i < end; i += 1) {
  if (i % 5 === 0) {
    number = i;
    break;
  };
};

console.log(start);
console.log(end);
console.log(number);

// Task 31
// Оператор break vs return в функции
// Выполни рефакторинг функции findNumber(start, end, divisor) так, чтобы она:
    // возвращала первое число от start до end, которое делится на divisor без остатка
    // не использовала оператор break
    // не использовала переменную number
      // Test
    // Объявлена функция findNumber(start, end, divisor)
    // Вызов findNumber(2, 6, 5) возвращает 5
    // Вызов findNumber(8, 17, 3) возвращает 9
    // Вызов findNumber(6, 9, 4) возвращает 8
    // Вызов findNumber(16, 35, 7) возвращает 21
    // Вызов findNumber() со случайным набором чисел возвращает верный результат
    // В цикле for не должен использоваться break для выхода до завершения всех итераций цикла

function findNumber(start, end, divisor) {
  // Change code below this line
  let number;

  for (let i = start; i < end; i += 1) {
    if (i % divisor === 0) {
      number = i;
      break;
    }
  }

  return number;
  // Change code above this line
}

// Solution 31

function findNumber(start, end, divisor) {
  let number;

  for (let i = start; i < end; i += 1) {
    if (i % divisor === 0) {
      number = i;
      return number;
    }
  }

  return number;
};

findNumber(2, 6, 5);
findNumber(8, 17, 3);
findNumber(6, 9, 4);
findNumber(16, 35, 7);
findNumber();

console.log(findNumber(2, 6, 5));
console.log(findNumber(8, 17, 3));
console.log(findNumber(6, 9, 4));
console.log(findNumber(16, 35, 7));
console.log(findNumber());

// Task 32
// Задача: функция includes()
// Напиши функцию includes(array, value), которая делает тоже самое, что и метод массива массив.includes(значение) - проверяет, есть ли в массиве array значение value, возвращая true если есть и false в противном случае.
// При выполнении этой задачи в теле функции includes() нельзя использовать метод массив.includes(значение).
      // Test
    // Объявлена функция includes(array, value)
    // Вызов includes([1, 2, 3, 4, 5], 3) возвращает true
    // Вызов includes([1, 2, 3, 4, 5], 17) возвращает false
    // Вызов includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter") возвращает true
    // Вызов includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus") возвращает false
    // Вызов includes(["apple", "plum", "pear", "orange"], "plum") возвращает true
    // Вызов includes(["apple", "plum", "pear", "orange"], "kiwi") возвращает false
    // Вызов includes() для случайного массива со случайным value возвращает верный boolean
    // В функции includes используется for, return, но не метод массива includes
  
function includes(array, value) {
  // Change code below this line

  // Change code above this line
}

// Solution 32.1

function includes(array, value) {

  for (let i = 0; i < array.length; i += 1) {
  	if (array[i] === value) {
      console.log(true);
      return true;
    };
  };
  console.log(false);
  return false;

};

includes([1, 2, 3, 4, 5], 3);
includes([1, 2, 3, 4, 5], 17);
includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter");
includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus");
includes(["apple", "plum", "pear", "orange"], "plum");
includes(["apple", "plum", "pear", "orange"], "kiwi");

console.log(includes([1, 2, 3, 4, 5], 3));
console.log(includes([1, 2, 3, 4, 5], 17));
console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter"));
console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus"));
console.log(includes(["apple", "plum", "pear", "orange"], "plum"));
console.log(includes(["apple", "plum", "pear", "orange"], "kiwi"));

// Solution 32.2

function includes(array, value) {

  for (const element of array) {
  	if (element === value) {
      console.log(true);
      return true;
    };
  };
  console.log(false);
  return false;
 
};

includes([1, 2, 3, 4, 5], 3);
includes([1, 2, 3, 4, 5], 17);
includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter");
includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus");
includes(["apple", "plum", "pear", "orange"], "plum");
includes(["apple", "plum", "pear", "orange"], "kiwi");

console.log(includes([1, 2, 3, 4, 5], 3));
console.log(includes([1, 2, 3, 4, 5], 17));
console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter"));
console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus"));
console.log(includes(["apple", "plum", "pear", "orange"], "plum"));
console.log(includes(["apple", "plum", "pear", "orange"], "kiwi"));





























// P.S.

// * Поиск длинны предложения

function findLongestWord(str) {
  return str.length;
}
findLongestWord("The quick brown fox jumped over the lazy dog");//44

//* Поиск самого длинного слова
var longestword = function(string){
    var longest = [];
    array = string.split(" ");
    for(var i = 0; i < array.length; i++){
        if(array[i].length > longest.length){
        longest = array[i];    
        }
    }
console.log(longest)
}    
longestword("This isnt workin for some reason"); //workin

// *Метод filter для массивов

let a = [3, -12, 0, 4, 5, -8];

let b = [];
for (let i = 0; i < a.length; i += 1) {
if (a[i] >= 0) b.push(a[i]);
}
console.log(a);
console.log(b);

// let c = a.filter(function(carrentValue) {

// });

let c = a.filter(function(carrentValue) {
    return carrentValue > 0;
});

console.log(c);
// выводит:
// (6) [3, -12, 0, 4, 5, -8]
// (4) [3, 0, 4, 5]
// (3) [3, 4, 5]

// * Метод filter() создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции.

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]


// * поиск двух одинаковых чисел в двух массивах

var array1 = [1, 2, 3, 4, 5];
var array2 = [3, 4, 5];

var duplicates = array1.filter(function(val) {
  return array2.indexOf(val) != -1;
});

console.log(duplicates);

// * есть два массива, и они могут содержать повторяющиеся элементы. Нужно скопировать неповторяющиеся элементы из первого массива во второй. 

var x = [1, 2, 3, 4, 5, 6, 7]
var y = [2, 4, 6, 8, 10]

x.forEach( function (i) { 
  if(y.indexOf(i) < 0) {
    y.push(i);
  }
});

x // [1, 2, 3, 4, 5, 6, 7]
y // [2, 4, 6, 8, 10, 1, 3, 5, 7]

// Так что вам нужно: 

values.forEach( function (i) { 
  if(valueArea.indexOf(i) < 0) {
    valueArea.push(i);
  }
});

// Или 

var nonDuplicates = values.filter(function(i){ return valueArea.indexOf(i) < 0; });
valueArea.push.apply(valueArea, nonDuplicates);

// * Как найти пересечение двух массивов
// С этой задачей вы можете столкнуться на любом JavaScript-собеседовании, потому что ее решение показывает ваши знания методов массива, а также то, как вы мыслите. Чтобы найти общие значения двух массивов, мы будем использовать один из ранее рассмотренных методов в этой статье, чтобы убедиться, что значения в массиве, который мы проверяем, не дублируются. Кроме этого, мы воспользуемся методами filter() и includes(). В результате мы получим массив с элементами, которые представлены в обоих массивах:

const numOne = [0, 2, 4, 6, 8, 8];
const numTwo = [1, 2, 3, 4, 5, 6];
const duplicatedValues = [...new Set(numOne)].filter(item => numTwo.includes(item));
console.log(duplicatedValues); // вернет [2, 4, 6]