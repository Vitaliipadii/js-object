// 1. Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость), и следующие функции для работы с этим объектом:

// let avto = {
//     manufacturer: 'japan',
//     model: 'honda',
//     year: 2005,
//     speed: 100,
//     getInformation: function () {
//         for (let key in this) {
//             console.log(`${key} - ${this[key]}`);
//         }
//     },
//     getNav: function (distance) {
//         let time = distance / avto.speed
//         if (time > 4) {
//             let count = Math.trunc(time / 4);
//             return time + 1 * count;
//         }
//         else {
//             return time
//         }
//     }
// }


// Функция для вывода на экран информации об автомобиле; 

// avto.getInformation();

// Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью. Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.

// console.log(avto.getNav(50));



// 3. Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом: 


let clock = {
    hours: 10,
    mins: 15,
    sec: 5,
    getTime: function () {
        for (let key in this) {
            if (typeof this[key] == 'number') {
                console.log(`${key} - ${this[key]}`);
            }
        }
    },
    getSec: function (move) {
        clock.sec += move;
        clock.sec > 59 ? clock.mins + 1 : clock.mins + 0;
        return;
    },
    getMin: function (move) {
        clock.mins += move

    },
    getHour: function (move) {
        clock.hours += move

    }
}

// Функция вывода времени на экран;

// clock.getTime();

// Функция изменения времени на переданное количество секунд;

clock.getSec(58);
console.log(clock);

// Функция изменения времени на переданное количество минут;

// clock.getMin(59);
// console.log(clock);

// Функция изменения времени на переданное количество часов. 

// clock.getHour(59);
// console.log(clock);

// Учтите, что в последних 3-х функциях, при изменении одной части времени, может измениться и другая. Например, если ко времени «20:30:45» добавить 30 секунд, то должно получиться «20:31:15», а не «20:30:75».
