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
  savings: false,
  // обязательные статьи расходов
  chooseExpenses: function () {
    for (; Object.keys(appData.expenses).length < 2;) {
      let a = prompt('Введите обязательную статью расходов в этом месяце', '');
      let b = +prompt('Во сколько обойдётся');
      moneyPerDay -= b;
      if (b < money && moneyPerDay > 0 && typeof (a) === 'string' &&
        (typeof (a)) != null && (typeof (b)) != null &&
        a != '' && b != '' && a.length < 50) {
        appData.expenses[a] = b;
      } else if ((b && b > money) || moneyPerDay < 0) {
        console.log('Ваших ежемесечных доходов не хватает на такие траты');
      } else {
        console.log('Введите, пожалуйста, корректные данные');
      }
    }
  },
  // расчёт дневного бюджета
  detectDayBudget: function () {
    appData.moneyPerDay = (moneyPerDay / 30).toFixed();
    alert('Бюджет на день ' + (appData.moneyPerDay));
  },
  //уровень достатка
  detectLevel: function () {
    if (appData.moneyPerDay <= 100) {
      console.log('Минимальный уровень достатка');
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay <= 2000) {
      console.log('Средний уровень достатка');
    } else if (appData.moneyPerDay > 2000) {
      console.log('Высокий уровень достатка');
    } else {
      console.log('moneyPerDay не определена');
    }
  },
  // необязательные статьи расходов
  chooseOptExpenses: function () {
    for (let i = 1; i <= 3; i++) {
      let a = prompt('Введите необязательную статью расходов в этом месяце', '');
      if (a && a != null) {
        appData.optionalExpenses[i] = a;
      } else {
        i--;
      }
    }
  },
  // ститьи дополнительного дохода
  chooseIncome: function () {
    let items = prompt('Что принесёт дополнительный доход? (перечислите через зарятую)', '');
    if (typeof (items) === 'string' && (typeof (items)) != null 
        && items != '') {
      appData.income = items.split(', ');
      appData.income.push(prompt('Может что-то ещё?', ''));
      appData.income.sort();
    } else {
      console.log('Введите, пожалуйста, корректные данные');
      appData.chooseIncome();
    }
    let i = 1,
        message = '<p>Способы доп.заработка: ';

    appData.income.forEach((item) => {
      if (i < appData.income.length) {
        message += i + ': ' + item + ', ';
      }else {
        message += i + ': ' + item;
      }
      i++;
    });
    document.querySelector('body').innerHTML = message;
  }
};

function start() {
  money = +prompt('Ваш бюджет на месяц?');
  time = prompt('Введите дату в формате YYYY-MM-DD');
  while (isNaN(money) || money == '' || money == null) {
    money = +prompt('Ваш бюджет на месяц?');
  }
  moneyPerDay = money;
  appData.budget = money;
  appData.timeData = time;
}
start();

console.log('Наша программа включает в себя данные: ');
for(let key in appData) {
  console.log(key);
}
