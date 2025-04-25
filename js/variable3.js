// variable3.js
// 연산자(+, -, /, *, %)

// 덧셈
// let num1 = document.querySelector('#num1').value;
// let num2 = document.querySelector('#num2').value;
// let result = parseInt(num1) + parseInt(num2); // parseInt 타입변환 // parseInt를 빼게 된다면 "30" (숫자처럼 보이는 문자열) + "17" = "3017" 이라는 결과가 나옴
// console.log(result);
// // result: 값을 input#result의 value 대입
// document.querySelector('#result').value = result;


// 곱셈 
// let num1 = document.querySelector('#num1').value;
// let num2 = document.querySelector('#num2').value;
// let result = parseInt(num1) * parseInt(num2); // parseInt 타입변환 // parseInt를 빼게 된다면 "30" (숫자처럼 보이는 문자열) + "17" = "3017" 이라는 결과가 나옴
// console.log(result);
// // result: 값을 input#result의 value 대입
// document.querySelector('#result').value = result;


// 나눗셈
let num1 = document.querySelector('#num1').value;
let num2 = document.querySelector('#num2').value;
num1 = parseInt(num1);  // "30" 문자열 형태 -> int형 30으로 변환
num2 = parseInt(num2);  // "17" 문자열 형태 -> int형 17로 변환

let result = ++num1 % --num2; // 30 % (17-1) =
// let result = ++num1 % --num2; // ++num1 => 32 ,  num1++ => 31 | 32가 된 이유는 30에서 증감연산자를 1 더하
console.log(result, num1, num2);
// result: 값을 input#result의 value 대입
document.querySelector('#result').value = result;