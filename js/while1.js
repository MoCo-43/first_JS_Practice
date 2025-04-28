// while1.js

// for문 복습
// 1~ 10 까지의 값 중에서 홀수값만 콘솔에 출력

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 == 0) {
//     // continue;
//   } else {
//     console.log(`홀수값 ${i}`);
//   }
// }


// // while문으로 작성
// let no = 1;
// while(true) {
//   if (no % 2) {
//   console.log(no)
//   }
//   if (no > 10) {
//     break;  // 반복종료
//   }
//   no++; // 증감
// }

// while문으로 작성_반복횟수 상관없이 조건을 만족할 동안 반복
// 임의의 값(0 ~ 100) 값을 생성하다가 30보다 작은 값이 나오면 반복종료
// while(true) { // true말고도 변수값으로도 바꾸기 가능
//   let num = Math.floor(Math.random() * 101); // 0 <= x < 101 사이에서 나옴
//   console.log(num);
//   if(num < 30) {
//     break;
//   }
// }

// while(true)대신 변수로 사용
// let running = true;
// while(running) { // true말고도 변수값으로도 바꾸기 가능
//   let num = Math.floor(Math.random() * 101); // 0 <= x < 101 사이에서 나옴
//   console.log(num);

//   if(num < 30) {
//     // break;
//     running = false; // break대신 사용 가능 // 종료조건
//   }
// }
// console.log("end of program");


// while(true)대신 변수로 사용 2
let running = true;
while(running) { // true말고도 변수값으로도 바꾸기 가능
  let num = Math.floor(Math.random() * 101); // 0 <= x < 101 사이에서 나옴
  console.log(num);

  if(num == 100) {
    // break;
    running = false; // break대신 사용 가능 // 종료조건
  }
}
console.log("end of program");