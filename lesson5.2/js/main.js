'use strict';

let start            = document.getElementById('start'),
    budget           = document.getElementsByClassName('budget-value')[0],
    daybudget        = document.getElementsByClassName('daybudget-value')[0],
    level            = document.getElementsByClassName('level-value')[0],
    expenses         = document.getElementsByClassName('expenses-value')[0],
    optionalexpenses = document.getElementsByClassName('optionalexpenses-value')[0],
    income           = document.getElementsByClassName('income-value')[0],
    monthsavings     = document.getElementsByClassName('monthsavings-value')[0],
    yearsavings      = document.getElementsByClassName('yearsavings-value')[0],
    expensesItem     = document.getElementsByClassName('expenses-item'),
    expensesItemBtn  = document.getElementsByTagName('button')[0],
    optionalexpensesBtn   = document.getElementsByTagName('button')[1],
    countBudgetBtn        = document.getElementsByTagName('button')[2],
    optionalexpensesItems = document.querySelectorAll('.optionalexpenses-item'),
    chooseIncome     = document.querySelector('.choose-income'),
    savings          = document.querySelector('#savings'),
    chooseSum        = document.querySelector('#sum'),
    choosePercent    = document.querySelector('#percent'),
    yearValue        = document.querySelector('.year-value'),
    monthValue       = document.querySelector('.month-value'),
    dayValue         = document.querySelector('.day-value');

