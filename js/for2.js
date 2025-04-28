// for2.js

// 1 ~ 10까지 반복
// 2의 배수, 3의 배수 => 2의 배수는 sum2 저장
//                      3의 배수는 sum3 저장

let sum2 = 0; let sum3 = 0;


for (i = 1; i <= 10; i++) {
  // 2의 배수
  if (i % 2 == 0) {
    sum2 = sum2 + i;
    // 3의 배수
  } else if (i % 3 == 0) {  // else 빼면 3의 경우 2의 배수이면서 3의배수인 6이 같이 합해 짐
    sum3 = sum3 + i;
  }
} // end of for
console.log("1에서 10 중 2의 배수의 합은 " + sum2 + ", 3의 배수의 합은 " + sum3);