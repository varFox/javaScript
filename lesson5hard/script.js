'use strict';

var now = new Date();

function zero(a) {
  let hours   = a.getHours(),
      minutes = a.getMinutes(),
      seconds = a.getSeconds(),
      day     = a.getDate(),
      month   = a.getMonth() + 1,
      year    = a.getFullYear();
      console.log(seconds);

  if (hours   < 10) { hours   = '0' + hours;   }
  if (minutes < 10) { minutes = '0' + minutes; }
  if (seconds < 10) { seconds = '0' + seconds; }
  if (day     < 10) { day     = '0' + day;     }
  if (month   < 10) { month   = '0' + month;   }
  return hours + ':' + minutes + ':' + seconds + ' ' + day + '.' + month + '.' + year;
}

function weekDay(a) {
  let arr = ['Воскресение', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
  let wDay = a.getDay();
  return arr[wDay];
}

document.querySelector('body #date').innerHTML = zero(now) + ' ' + weekDay(now);

document.querySelector('#btn').addEventListener('click', () => {
  let a1 = new Date(document.querySelector('#a1').value),
      a2 = new Date(document.querySelector('#a2').value);
  document.querySelector('#result').value = (Math.ceil(Math.ceil(Math.abs(a2.getTime() - a1.getTime()))/(1000*3600*24)));

})
// ДОПОЛНИТЕЛЬНОЕ ЗАДАНИЕ:

// 4) Напишите функцию, которая выводит на страницу разницу между двумя датами в количестве дней

// ·        На странице создайте интерфейс для её отображения: как минимум - 3 input’a: 
// для двух ввода дат и вывода результата.