 'use strict';

const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    adaptive: true,
    rollback: 10,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    services: {},
    start: function () {
        appData.asking();
        appData.addPrices();
        appData.getTitle();
        appData.getFullPrice();
        appData.getServicePercentPrices();
        appData.getRollbackMessage();
        appData.logger();
    },
    isNumber: function(num) {
        return !isNaN(parseFloat(num)) && isFinite(num);
    },
    isString: function(str) {
        return isNaN(str) && str !== null && str !== '';
    },
    asking: function () {
        do {
            appData.title = prompt('Как называется ваш проект?', 'Калькулятор верстки');
        }
        while(!appData.isString(appData.title)); 

        for (let i = 0; i < 2; i++) {
            let name;
            do {
                name = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');
            }
            while(!appData.isString(name)); 
            let price = 0;
            do {
                price = prompt('Сколько будет стоить данная работа?', 20000);
            }
            while(!appData.isNumber(price));
            appData.screens.push({id: i, name: name, price: price});
        }
        for (let i = 0; i < 2; i++) {
            let name;
            do {
                name = prompt('Какой дополнительный тип услуги нужен?', 'service1');
            }
            while(!appData.isString(name)); 
            
            let price = 0;
            do {
                price = prompt('Сколько это будет стоить?', '1500');
            }
            while(!appData.isNumber(price)); 
                appData.services[[i] + '-' + name] = +price;
        }
        appData.adaptive = confirm('Нужен адаптив на сайте?');
    },
    addPrices: function() {
/*         for (let screen of appData.screens) {
            appData.screenPrice += +screen.price;
        } */
    appData.screens.reduce(function(sum, item) {
        return appData.screenPrice = sum + +item.price;
    }, 0);

        for(let key in appData.services) {
            appData.allServicePrices += appData.services[key];
        }
    },
    getTitle: function() {
        appData.title = appData.title.trim().toLowerCase().slice(0, 1).toUpperCase() + appData.title.trim().toLowerCase().substring(1);
    },
    getFullPrice: function() {
        return appData.fullPrice = +appData.screenPrice + +appData.allServicePrices;
        
    },
    getServicePercentPrices: function() {
        return appData.servicePercentPrice = appData.fullPrice - appData.fullPrice * (appData.rollback / 100);
    },
    getRollbackMessage: function() {
        if(appData.fullPrice >= 30000) {
            return 'Даем скидку в 10%';
        } else if(appData.fullPrice < 30000 && appData.fullPrice >= 15000) {
            return 'Даем скидку в 10%';
        } else if(appData.fullPrice < 15000 || appData.fullPrice >= 0) {
            return 'Скидка не предусмотрена';
        } else {
            return 'Что-то пошло не так';
        }
    },
    logger: function () {
        console.log(appData.getFullPrice());
        console.log(appData.getServicePercentPrices());
        console.log(appData.screens);
        console.log(appData.services);
        }
};

appData.start();
