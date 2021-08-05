// * Задача: строку переделать на слаг (возвращается все буквы в нижнем регистре и пробелы между словами заменяются на тире)

// slug - Чаще всего, как уже написали, встречается в URL, но все же его значение чуть более шире - slug это уникальная строка идентификатор, понятная человеку (в отличие от ID) и содержащая только "безопасные" символы:
// - 0-9
// - a-z (общепринято - в нижнем регистре)
// - символ -
// - иногда еще символ _
// Могут использоваться не только в URL для понятности, но и, например, в запросах к БД (в первую очередь - на уровне АПИ) - ведь
// SELECT * FROM pages WHERE category="some-slug"
// более понятно, чем
// SELECT * FROM pages WHERE category=126.
// На уровне API это выглядит как
// get_pages_in_category( 'some-slug' )
// или
// $object->get_pages_in_category( 'some-slug' ).
// В общем, это человеко-понятный уникальный идентификатор. 


// const title = 'Top 10 benefits of React framework'

// const normalizedString = title.toLowerCase();
// const words = normalizedString.split(' ');

// console.log(words);
// const slug = words.join('-');

// const slug1 = title.toLowerCase().split(' ').join('-');

// console.log(slug1);

// * task: write function slugify(string) которая получает строку и возвращает URL-slug. Строка состоит только из букв т пробелов

const slugify = function (string) {
    const normalizedString = string.toLowerCase();
    const words = normalizedString.split(' ');
    const slug = words.join('-');
    
    return slug;
};


console.log(slugify('Top 10 benefits of React framework'));
console.log(slugify('Azure Static Web Apps are Awesome'));
console.log(slugify('Technical writing tips for non-native English speakers'));

// * or second version of the function

// const slugify = function (string) {
//    return string.toLowerCase().split(' ').join('-');
// };


// console.log(slugify('Top 10 benefits of React framework'));
// console.log(slugify('Azure Static Web Apps are Awesome'));
// console.log(slugify('Technical writing tips for non-native English speakers'));