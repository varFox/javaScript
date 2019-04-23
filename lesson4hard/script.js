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
      s1 = 0;
      s2 = 0;
      for (let j = 1; j < i; j++) {
        if (i % j == 0) {
          s1 += j;
        }
      }
      if (s1 > start && s1 < end && s1 > i) {
        for (let j = 1; j < s1; j++) {
          if (s1 % j == 0) {
            s2 += j;
          }
        }
      }
      if (i == s2 && s1 != 0) {
        arr.push([i, s1]);
      }
    }
  }
  return arr;
}