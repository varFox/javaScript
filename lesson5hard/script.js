'use strict';

function zero(a) {
  if (a < 10) {
    a = '0' + a;
  }
  return a;
}

function weekDay(a) {
  let arr = ['Воскресение', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
  let wDay = a.getDay();
  return arr[wDay];
}

setInterval(function() {
  let now = new Date();
  document.querySelector('body #date').textContent = zero(now.getHours()) + ':' + zero(now.getMinutes()) + 
        ':' + zero(now.getSeconds()) + ' ' + zero(now.getDate()) + '.' + zero(now.getMonth() + 1) + 
        '.' + zero(now.getFullYear()) + ' ' + weekDay(now);
}, 1000);


document.querySelector('#btn').addEventListener('click', () => {
  let a1 = new Date(document.querySelector('#a1').value),
      a2 = new Date(document.querySelector('#a2').value);
  let res = Math.abs(a2.getTime() - a1.getTime());
  res = Math.ceil(res/(1000*3600*24));
      document.querySelector('#result').value = res;
});