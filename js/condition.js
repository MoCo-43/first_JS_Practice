// condition1.js
console.clear;
let isTrue = true;
let num1 = 5;
let num2 = 10;


isTrue = 3 < 5;
isTrue = num1 < 5;
isTrue = --num1 < 5
// isTrue = --num1 <= 4 || num2++ == 10; // 3 <= 4 or 10 = 10 or조건이 참이므로 true
isTrue = --num1 <= 4 && num2++ == 10; // 3 <= 4 and 10 = 10 or조건이 참이므로 true
// isTrue = 0; // JS에서는 True / False 종류가 있음 대표적으로 => truthy / falsy => (0, "", null, undefine, NaN)과 같은 형태
isTrue = ++num2 % 2;
console.log(num1, num2);

if (isTrue) {
  // isTrue의 값이 참 => if블럭 실행
  console.log('참');
} else {
  // isTrue의 거짓 => else블럭 실행
  console.log('거짓');
}