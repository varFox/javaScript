'use strict';

function getFriendlyNumbers(start, end) {
  let arr = [];
  if (typeof (start) != 'number' || typeof (end) != 'number' ||
    start > end || start < 0 || end < 0 ||
    Number.isInteger(start) === false ||
    Number.isInteger(end) === false) {
    return false;
  } else {
    let s1, s2;
    for (let i = start; i <= end; i++) {
      s1 = sum(i);
      if (s1 > i && s1 < end) {
        s2 = sum(s1);
      } else {
        s2 = 0;
      }
      if (i == s2 && s1 != 0) {
        arr.push([i, s1]);
      }
    }
  }
  return arr;
}

function sum(a) {
  let s = 0;
  for (let j = 1; j < a; j++) {
    if (a % j == 0) {
      s += j;
    }
  }
  return s;
}