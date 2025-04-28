// for1.js
// let sum = 0;
// for (let i = 1; i <= 5; i++) {  // for (초기값; 조건; 증감식;)
//   sum = sum + i;
// }
// console.log('sum 의 값은' + sum);

// 1 ~ 20 까지 반복문 코드 작성
// 짝수인 경우 합을 구하기
// i % 2 == 0

let sum = 0;
// 2,4,6,8,10,12..
for (let i = 1; i <= 20; i++) {
  if (i % 2 == 0) { // 조건; 짝수일 떄만 합
    sum = sum + i; // sum에 누적
  } // end of if.
} // end of for.
console.log("1 ~ 20에서 짝수인 경우의 합은 " + sum + "입니다.");