window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  let animate = document.querySelector('.animate');
  
  document.querySelector('#btn').addEventListener('click', () => {
    let pos = 0;
    let time = setInterval(function() {
    if (pos == 500) {
      clearInterval(time);
    } else {
      pos++;
      animate.style.left = pos + 'px';
    }
  }, 10);

  });
});