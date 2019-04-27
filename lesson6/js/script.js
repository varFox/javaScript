'use strict';

let startBtn         = document.getElementById('start'),
    budget           = document.getElementsByClassName('budget-value')[0],
    dayBudget        = document.getElementsByClassName('daybudget-value')[0],
    level            = document.getElementsByClassName('level-value')[0],
    expenses         = document.getElementsByClassName('expenses-value')[0],
    optionalExpenses = document.getElementsByClassName('optionalexpenses-value')[0],
    income           = document.getElementsByClassName('income-value')[0],
    monthSavings     = document.getElementsByClassName('monthsavings-value')[0],
    yearSavings      = document.getElementsByClassName('yearsavings-value')[0],
    expensesItem     = document.querySelectorAll('.expenses-item'),
    expensesItemBtn  = document.getElementsByTagName('button')[0],
    optionalExpensesBtn   = document.getElementsByTagName('button')[1],
    countBudgetBtn        = document.getElementsByTagName('button')[2],
    optionalExpensesItems = document.querySelectorAll('.optionalexpenses-item'),
    chooseIncome     = document.querySelector('.choose-income'),
    savings          = document.querySelector('#savings'),
    chooseSum        = document.querySelector('#sum'),
    choosePercent    = document.querySelector('#percent'),
    yearValue        = document.querySelector('.year-value'),
    monthValue       = document.querySelector('.month-value'),
    dayValue         = document.querySelector('.day-value');

let money,
  moneyPerDay,
  time;

let appData = {
  budget: money,
  timeData: '',
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
};

countBudgetBtn.disabled = true;
countBudgetBtn.style.background = '#ff964b5c';

startBtn.addEventListener('click', () => {
  
  time = prompt('Введите дату в формате YYYY-MM-DD');
  money = +prompt('Ваш бюджет на месяц?');

  while (isNaN(money) || money == '' || money == null) {
    money = +prompt('Ваш бюджет на месяц?');
  }

  moneyPerDay      = money;
  appData.budget   = money;
  appData.timeData = time;
  budget.textContent = money.toFixed();
  yearValue.value = new Date(Date.parse(time)).getFullYear();
  monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
  dayValue.value = new Date(Date.parse(time)).getDate();

  countBudgetBtn.disabled = false;
  countBudgetBtn.style.background = '';

});

expensesItemBtn.addEventListener('click', () => {
  let sum = 0;

  for (let i = 0; i < expensesItem.length; i++) {
    let a = expensesItem[i].value;
    let b = expensesItem[++i].value;
    moneyPerDay -= b;
    if (typeof (a) === 'string' &&
      (typeof (a)) != null && (typeof (b)) != null &&
      a != '' && b != '' && a.length < 50) {
      appData.expenses[a] = b;
      sum += +b;
    } else {
      console.log('Введите, пожалуйста, корректные данные');
    }
    if (moneyPerDay < 0){
      dayBudget.textContent = 'Вашего уровня дохода не достаточно';
    } 
  }
  expenses.textContent = sum;
});

optionalExpensesBtn.addEventListener('click', () => {
  optionalExpenses.textContent = '';
  for (let i = 0; i < optionalExpensesItems.length; i++) {
    let a = optionalExpensesItems[i].value;
    appData.optionalExpenses[i] = a;
    if (i < 2) {
      optionalExpenses.textContent += appData.optionalExpenses[i] + ', ';
    } else {
      optionalExpenses.textContent += appData.optionalExpenses[i];
    }
    
  }
});

countBudgetBtn.addEventListener('click', () => {

  if (appData.budget != undefined && moneyPerDay > 0) {
    appData.moneyPerDay = ((moneyPerDay ) / 30).toFixed();
    dayBudget.textContent = appData.moneyPerDay;

    if (appData.moneyPerDay <= 100) {
      level.textContent = 'Минимальный уровень достатка';
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay <= 2000) {
      level.textContent = 'Средний уровень достатка';
    } else if (appData.moneyPerDay > 2000) {
      level.textContent = 'Высокий уровень достатка';
    } else {
      level.textContent = 'moneyPerDay не определена';
    }

  }  else {
    level.textContent = 'Произошла ошибка';
  }

});

chooseIncome.addEventListener('input', () => {
  let items = chooseIncome.value;
  appData.income = items.split(', ');
  income.textContent = appData.income;
});

savings.addEventListener('click', () => {
  appData.savings ? appData.savings = false : appData.savings = true;
});

chooseSum.addEventListener('input', () => {
  if (appData.savings) {
    let sum = +chooseSum.value,
        percent = +choosePercent.value;
    appData.monthIncome = sum / 100 / 12 * percent;
    appData.yearIncome = sum / 100 * percent;

    monthSavings.textContent = appData.monthIncome.toFixed(1);
    yearSavings.textContent = appData.yearIncome.toFixed(1);
  }
});

choosePercent.addEventListener('input', () => {
  if (appData.savings) {
    let sum = +chooseSum.value,
        percent = +choosePercent.value;
    appData.monthIncome = sum / 100 / 12 * percent;
    appData.yearIncome = sum / 100 * percent;

    monthSavings.textContent = appData.monthIncome.toFixed(1);
    yearSavings.textContent = appData.yearIncome.toFixed(1);
  }
});

setInterval(function time() {
    if (isSomeTrue(expensesItem) && budget.textContent != '') {
      expensesItemBtn.disabled = false;
      expensesItemBtn.style.background = '';    
    } else {
      expensesItemBtn.disabled = true;
      expensesItemBtn.style.background = '#ff964b5c';
    }
    if (isSomeTrue(optionalExpensesItems) && budget.textContent != '') {
      optionalExpensesBtn.disabled = false;
      optionalExpensesBtn.style.background = '';
    } else {
      optionalExpensesBtn.disabled = true;
      optionalExpensesBtn.style.background = '#ff964b5c';      
    }
  
}, 500);

function isSomeTrue(arr) {
	for(let i = 0; i < arr.length; i++) {
		if (arr[i].value == '') {
			return false;
		}
	}
	return true;
}

optionalExpensesItems.forEach((item) => {
  item.addEventListener('input', () => {
    item.value = item.value.match(/[а-я]+[ а-я]*/gi);
  });
});
expensesItem[1].addEventListener('input', () => {
  expensesItem[1].value = expensesItem[1].value.match(/[0-9]+/gi);
});
expensesItem[3].addEventListener('input', () => {
  expensesItem[3].value = expensesItem[3].value.match(/[0-9]+/g);
});