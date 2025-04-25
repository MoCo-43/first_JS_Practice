// condition3.js
// let result = Math.floor(Math.random() * 10); // 0 <= x < 10
// let result = Math.floor(Math.random() * 10); // 0 ~ 9 사이의 랜덤 수 (자연수)
// let result = Math.floor(Math.random() * 11); // 0 ~ 10
// let result = Math.random(); // 0 <= x < 1
let result = 30 + Math.floor(Math.random() * 71); // 30 ~ 100사이의 수
console.log(result);

// 60점 이상이면 패스 
// if (result >= 60) {
//   console.log("Pass");
// } else {
//   console.log("Fail");
// }


// Pass Fail 프로그램
// 100 ~ 90 => A
// ~ 80 => B
// ~ 70 => C
// ~ 60 => D 그 외에는 F

if (result >= 90) {
  console.log("A");
} else if (result >= 80) {
  console.log("B");
} else if (result >= 70) {
  console.log("C");
} else if (result >= 60) {
  console.log("D");
} else {
  console.log("F");
}
