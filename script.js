'use strict';
const title = prompt('Как называется ваш проект?', 'Калькулятор верстки');
const screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');
const screenPrice = +prompt('Сколько будет стоить данная работа?', '15000');
const rollback = 15;
const service1 = prompt('Какой дополнительный тип услуги нужен?', 'service1');
const servicePrice1 = +prompt('Сколько это будет стоить?', '1000');
const service2 = +prompt('Какой дополнительный тип услуги нужен?', 'service2');
const servicePrice2 = +prompt('Сколько это будет стоить?', '2000');
const adaptive = confirm('Нужен адаптив на сайте?');
const allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);

const getFullPrice = function(scrPrice, allSrvPr) {
    return scrPrice + allSrvPr;
};

const fullPrice = getFullPrice(screenPrice, allServicePrices);

const getServicePercentPrices = function(total, rollback) {
    return total - total * (rollback / 100);
};

const servicePercentPrice = getServicePercentPrices(fullPrice, rollback);

const showTypeOf = function(variable) {
    console.log(variable, typeof variable);
};
const getRollbackMessage = function(price) {
    if(price >= 30000) {
        return 'Даем скидку в 10%';
    } else if(price < 30000 && price >= 15000) {
        return 'Даем скидку в 10%';
    } else if(price < 15000 || price >= 0) {
        return 'Скидка не предусмотрена';
    } else {
        return 'Что-то пошло не так';
    }
};
function getAllServicePrices(ser1, ser2) {
    return ser1 + ser2;
};
const getTitle = function(titleName) {
    return titleName.trim().toLowerCase().slice(0, 1).toUpperCase() + titleName.trim().toLowerCase().substring(1);
};

console.log(getTitle(title));

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log(getRollbackMessage(fullPrice));

console.log(adaptive);
console.log('Стоимость верстки экранов ' + screenPrice + ' рублей');
console.log('Стоимость разработки сайта ' + fullPrice + ' рублей');
console.log([screens]);
console.log(fullPrice * (rollback / 100));
console.log(servicePercentPrice);