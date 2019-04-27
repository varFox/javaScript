'use strict';

// 1)
let menuItem = document.querySelectorAll('.menu-item'),
    menu = document.querySelector('.menu'),
    li2 = document.querySelectorAll('.menu-item')[2],
    li3 = document.querySelectorAll('.menu-item')[1],
    li5 = li3.cloneNode(true);

menu.insertBefore(li2, li3);
li5.textContent = 'Пятый пункт';
menu.appendChild(li5);

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

