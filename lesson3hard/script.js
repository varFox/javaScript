'use strict';

let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресение'];
const now = new Date();

let dw = '<ul>';
for(let i = 0; i < week.length; i++) {
  if((i == 5 || i == 6) && now.getDay() == (i + 1)){
    dw += '<li style="font-weight: bold; font-style: italic; color: red;">' + week[i];
  }else if (i == 5 || i == 6) {
    dw += '<li style="font-weight: bold; color: red;">' + week[i];
  }else if (now.getDay() == (i + 1)) {
    dw += '<li style="font-style: italic;">' + week[i];
  }else {
    dw += '<li>' + week[i];
  }
}
dw += '</ul>';
document.querySelector('body').innerHTML = dw;


let arr = ['51518613', '764156', '8486', '84614', '346486', '784521'];

for(let key in arr){
  if(arr[key].split('', 1) == 3 || arr[key].split('', 1) == 7){
    console.log(arr[key]);
  }
}

// другой вариант
// for(let key in arr) {
//   console.log(arr[key].match(/^3|7/));
// }