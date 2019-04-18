'use strict';

let money,
  time,
  expens = '',
  moneyExpens = 0,
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

// function checExpens() {
//   expens = prompt("Введите обязательную статью расходов в этом месяце");
//   moneyExpens = +prompt("Во сколько обойдётся");
//   everyDay = everyDay - moneyExpens;
//   if (moneyExpens && moneyExpens < money && everyDay > 0) {

//     if (confirm('В этом мясяце Ваш ежедневный бюджет составляет ' + everyDay / 30 + 
//                 '. Добавь ежемесечную статью разходов?')) {
//       checExpens();
//     } else {
//       document.querySelector('.rez > p').innerHTML = `Общий бюджет - ${appData.budget}.<br>
//                               Сумма обязательных трат - ${money - everyDay}<br>
//                               Ежедневный бюджет составляет - ${everyDay/30}`;
//     }
//   } else if ((moneyExpens && moneyExpens > money) || everyDay < 0) {
//     console.log('С таким ежемесечным доходом вы не можете позволить себе такие траты');
//   } else {
//     console.log('Введите, пожалуйста, корректные данные');
//   }
// }

function checExpens() {
  expens = prompt('Введите обязательную статью расходов в этом месяце');
  moneyExpens = +prompt('Во сколько обойдётся');
  everyDay = everyDay - moneyExpens;
  if (moneyExpens && moneyExpens < money && everyDay > 0) {
    appData.expenses[expens] = moneyExpens;
  } else if ((moneyExpens && moneyExpens > money) || everyDay < 0) {
    console.log('С таким ежемесечным доходом вы не можете позволить себе такие траты');
  } else {
    console.log('Введите, пожалуйста, корректные данные');
  }
}
checExpens();
checExpens();
