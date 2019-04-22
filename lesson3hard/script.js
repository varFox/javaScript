'use strict';

let str = 'урок-3-был слишком легким';
str = (str[0].toUpperCase() + str.substring(1)).replace(/-/g, ' ');
console.log(str);
str = str.match(/легким/)[0].replace(/им$/, 'о');
console.log(str);


let arr = [20, 33, 1, 'Человек', 2, 3];
// квадратный корень из суммы кубов
let a = 0;
for(let i = 0; i < arr.length; i++) {
  if(typeof(arr[i]) === 'number'){
    a += arr[i]**3;
  }
}
console.log(Math.sqrt(a));

function sliceStr(str) {
  if(typeof(str) === 'string') {
    str = str.trim();
    if(str.length > 50) {
      str = str.slice(0, 49) + '...';
    }
    console.log(str);
  }else {
    console.log('передана не строка');
  }
}
sliceStr('    fgjbgjоздайте функцию, которая принимает 1 аргумент (название произвольное)bvghb bnnbhbh ghnjj        ');
