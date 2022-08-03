'use strict';
const title = 'Калькулятор верстки';
const screens = 'Простые, Сложные, Интерактивные';
const screenPrice = 100;
const rollback = 15;
const fullPrice = 1000;
const adaptive = true;

console.log(title);
console.log(fullPrice);
console.log(adaptive);

console.log(screens.length);

console.log('Стоимость верстки экранов ' + screenPrice + ' рублей/долларов/гривен/юани');
console.log('Стоимость разработки сайта ' + fullPrice + ' рублей/долларов/гривен/юани');

console.log(screens.toLowerCase());

console.log(fullPrice * (rollback / 100));