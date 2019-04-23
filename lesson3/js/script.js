'use strict';

let money,
  moneyPerDay,
  time;

let appData = {
  budget: 0,
  timeData: '',
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
}

function start() {
  money = +prompt("Ваш бюджет на месяц?");
  time = prompt("Введите дату в формате YYYY-MM-DD");
  while (isNaN(money) || money == '' || money == null) {
    money = +prompt("Ваш бюджет на месяц?");
  }
  moneyPerDay = money;
  appData.budget = money;
  appData.timeData = time;
}
start();

//обязательные статьи расходов
function chooseExpenses() {
  for (; Object.keys(appData.expenses).length < 2;) {
    let a = prompt('Введите обязательную статью расходов в этом месяце', '');
    let b = +prompt('Во сколько обойдётся');
    moneyPerDay -= b;
    if (b < money && moneyPerDay > 0 && typeof(a) === 'string' 
        && (typeof(a)) != null && (typeof(b)) != null 
        && a != '' && b != '' && a.length < 50) {
      appData.expenses[a] = b;
    } else if ((b && b > money) || moneyPerDay < 0) {
      console.log('Ваших ежемесечных доходов не хватает на такие траты');
    } else {
      console.log('Введите, пожалуйста, корректные данные');
    }
  }
}
chooseExpenses();

//расчёт дневного бюджета
function detectDayBudget() {
  appData.moneyPerDay = (moneyPerDay/30).toFixed();
  alert('Бюджет на день ' + (appData.moneyPerDay));
}
detectDayBudget();

//уровень достатка
function detectLevel() {
  if (appData.moneyPerDay <= 100) {
    console.log("Минимальный уровень достатка");
  } else if (appData.moneyPerDay > 100 && appData.moneyPerDay <= 2000) {
    console.log("Средний уровень достатка");
  } else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
  } else {
    console.log("Что-то тут не так");
  }
}
detectLevel();

//необязательные статьи расходов
function chooseOptExpenses() {

  for (let i = 1; i <= 3; i++) {
    let a = prompt('Введите необязательную статью расходов в этом месяце', '');
    if (a && a != null) {
      appData.optionalExpenses[i] = a;
    } else {
      i--;
    }
  }

}