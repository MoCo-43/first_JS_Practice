// condition4.js

// 1~ 10 임의의 값을 생성하고, 생성값을 변수에 저장 후, 그 값이 2의 배수 또는 3의 배수 또는 2,3의 배수가 아닌 프로그램

let num1 = 1 + Math.floor(Math.random() * 10);
console.log(num1);

if (num1 % 2 == 0 && num % 3 == 0) {
  console.log("2&3 의 배수");
} else if (num1 % 2 == 0) {
  console.log("2의 배수");
} else if (num1 % 3 == 0) {
  console.log("3의 배수");
} else {
  console.log("2, 3의 배수가 아님");
}

// if (num1 % 2 == 0) {
//   console.log("2의 배수");
// } else if (num1 % 3 == 0) {
//   console.log("3의 배수");
// } else {
//   console.log("2, 3의 배수가 아님");
// }