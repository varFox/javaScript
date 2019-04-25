'use strict';

// 1)
let menuItem = document.querySelectorAll('.menu-item'),
    menu = document.querySelector('.menu'),
    mI1 = menuItem[1].cloneNode(true),
    mI2 = menuItem[2].cloneNode(true),
    mI5 = menuItem[1].cloneNode(true);

menuItem[2].parentNode.insertBefore(mI1,menuItem[2]);
menuItem[1].parentNode.insertBefore(mI2,menuItem[1]);
menuItem[1].parentNode.removeChild(menuItem[1]);
menuItem[2].parentNode.removeChild(menuItem[2]);
mI5.textContent = 'Пятый пункт';
menu.appendChild(mI5);

// 2
document.body.style.background = 'url("img/apple_true.jpg") center no-repeat';

// 3
let title = document.querySelector('#title');
title.textContent = 'Мы продаем только подлинную технику Apple';

// 4
let column = document.querySelectorAll('.column');
column[1].removeChild(document.querySelector('.adv'));

// 5
let message = prompt('Какое у вас отношение к технике apple?', ''),
    prom = document.querySelector('#prompt');

setTimeout(function t() {
  if (message != null) {
    prom.textContent = message;
  } else {
    time = setTimeout(t, 200);
  }
}, 200);

