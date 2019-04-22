'use strict';

let money,
  time,
  everyDay;

let appData = {
  budget: 0,
  timeData: '',
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
}

function checkMoney() {
  money = +prompt("Ваш бюджет на месяц?");
  everyDay = money;
  time = prompt("Введите дату в формате YYYY-MM-DD");
  if (money && money > 0) {
    appData.budget = money;
    appData.timeData = time;
    console.log('Ваш бюджет на месяц ' + appData.budget);
  } else {
    alert('Данные введены не верно. Бюджет на месяц должен быть в числовом формате больше нуля.');
    checkMoney();
  }
}
checkMoney();

function checExpens() {
  let expens = prompt('Введите обязательную статью расходов в этом месяце');
  let moneyExpens = +prompt('Во сколько обойдётся');
  everyDay = everyDay - moneyExpens;
  if (moneyExpens && moneyExpens < money && everyDay > 0) {
    appData.expenses[expens] = moneyExpens;
  } else if ((moneyExpens && moneyExpens > money) || everyDay < 0) {
    console.log('С таким ежемесечным доходом вы не можете позволить себе такие траты');
  } else {
    console.log('Введите, пожалуйста, корректные данные');
  }
}

//больше понавился вариант ниже, его оставила. 1
// for (let i = 0; i < 2; i++) {
//   checExpens();
// }

//2
// checExpens();
// for(let key in appData.expenses) {
//   if (Object.keys(appData.expenses).length <= 2) {
//     checExpens();  
//   } else {
//     break;
//   }
// }

//3
for(;Object.keys(appData.expenses).length < 2;) {
  checExpens();
}

//4
// let a = 0;
// while(a < 2) {
//   checExpens();
//   a++;
// }

//5
// let j = 0;
// do {
//   checExpens();
// } while(++j < 2)

alert('Бюджет на день ' + everyDay/30);
