'use strict';
let money = prompt("Ваш бюджет на месяц?" , "0");
let time = prompt("Введите дату в формате ГГГГ,ММ,ДД");

var expenses = {a: prompt("Введите обязательную статью расходов в этом месяце") , b: prompt("Во сколько обойдется?") };
var optionalExpenses = {};
var income;
var savings = false;


let appData = {money , timeData: time , expenses , optionalExpenses , income , savings}
alert(+money/30);
console.log(appData);