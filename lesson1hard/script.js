'use strict';

let num = 33721,
    rez;

function sum() {
  num = '' + num;
  let s = 1;

  for(let i = 0; i < num.length; i++) {
    s *= +num[i];
  }

  return s;
}

rez = sum()**3 + '';
console.log(sum());
alert(rez[0] + rez[1]);

//второй вариант
console.log(rez.split('', 2));
