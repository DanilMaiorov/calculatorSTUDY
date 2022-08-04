'use strict';
const title = prompt('Как называется ваш проект?', 'Калькулятор верстки');
const screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');
const screenPrice = +prompt('Сколько будет стоить данная работа?', '10000');
const rollback = 15;
const service1 = prompt('Какой дополнительный тип услуги нужен?', 'service1');
const servicePrice1 = +prompt('Сколько это будет стоить?', '1000');
const service2 = +prompt('Какой дополнительный тип услуги нужен?', 'service2');
const servicePrice2 = +prompt('Сколько это будет стоить?', '2000');
const fullPrice = +screenPrice + +servicePrice1 + +servicePrice2;

const servicePercentPrice = fullPrice - fullPrice * (rollback / 100);
const adaptive = confirm('Нужен адаптив на сайте?');

if(fullPrice > 30000 || fullPrice === 30000) {
    console.log('Даем скидку в 10%');
} else if(fullPrice < 30000 && fullPrice > 15000 || fullPrice === 15000) {
    console.log('Даем скидку в 10%');
} else if(fullPrice < 15000 || fullPrice === 0) {
    console.log('Скидка не предусмотрена');
} else if(fullPrice < 0) {
    console.log('Что-то пошло не так');
}
console.log(title);
console.log(+fullPrice);
console.log(adaptive);
console.log(screens.length);
console.log('Стоимость верстки экранов ' + screenPrice + ' рублей/долларов/гривен/юани');
console.log('Стоимость разработки сайта ' + fullPrice + ' рублей/долларов/гривен/юани');
console.log(screens.toLowerCase());
console.log(fullPrice * (rollback / 100));
console.log(servicePercentPrice);