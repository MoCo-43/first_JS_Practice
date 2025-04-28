// for3.js
// let sum = 0;

// for (let i = 1; i <= 5; i++) {
//   let str = prompt("1~10 까지의 숫자를 입력하세요.");
//   let inputValue = parseInt(str); // 문자타입의 "7"이 숫자 타입 7로 변환됨
//   // 누적
//   // inputValue의 범위 1 <= x <= 10 이라는 조건부 함수는 JS에서는 에러가 남
//   if (inputValue >= 1 && inputValue <= 10) {
//     sum += inputValue;
//   } else {
//     console.log("계산 범위 초과");
//   }
// }
// console.log(`누적합계: ${sum}입니다.`); // 틸드 밑에 있는 기호 `
// // console.log("누적합계:" +  sum + "입니다."");


// 합과 평균을 구하기
let sum = 0;  // 합
let avg = 0;  // 평균
let count = 0;  // 합을 한 횟수
for (let i = 1; i <= 5; i++) {
  let str = prompt("1~10 까지의 숫자를 입력하세요.");
  let inputValue = parseInt(str); // 문자타입의 "7"이 숫자 타입 7로 변환됨
  // 누적
  // inputValue의 범위 1 <= x <= 10 이라는 조건부 함수는 JS에서는 에러가 남
  if (inputValue >= 1 && inputValue <= 10) {
    sum += inputValue;
    count++;
  } 
}
avg = sum / count;
console.log(`누적합계: ${sum}입니다. 평균은 ${avg}입니다.`); // 틸드 밑에 있는 기호 `
// console.log("누적합계:" +  sum + "입니다."");