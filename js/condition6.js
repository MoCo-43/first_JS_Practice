// condition6.js
// 1. 2개의 수를 입력, 큰값을 콘솔에 출력 (console.log 사용), 2개의 값을 비교해서 출력. "두 수 중에서 큰값은 20입니다."
// 2. 임의의 2개의 수(40 ~ 70)를 생성. "2개의 수 중에서 큰값은 ??, 작은값은 ??"
// 3. condition3.js에 "A", "B", "C", "D", "F" => 95이상이면 A+ 와 같이 /점수구간을 좀 더 잘게 나누세요
// (선택) 4. 반복문(P537페이지 연습 차원) 읽고 예제 따라 해보기


// condition6_1.js
// let inNum = Number(prompt)("숫자를 입력하세요. 숫자구분은 스페이스로 구분합니다");
// console.log(inNum);

// if (inNum) {
//   console.log("두 수 중에서 큰 값은 20입니다.");
// } else {
//   console.log('두 수 중에서 큰 값은 입니다다');
// }

// let values = prompt("값을 공백으로 구분");

// if (values) {
//   let arrayValues = values.split("");
//   console.log(values);
// }

// let inNum = prompt("숫자를 입력하세요. 숫자 구분은 띄어쓰기로 구분합니다.");
// let nums = inNum.split('').map(Number);

// if (nums.length >= 2) {
//   let max = (nums[0] > nums[1]) ? nums[0] : nums[1];
//   console.log('두 수 중에서 큰 값은', max, '입니다');
// } else { 
//   console.log("잘못 입력하셨습니다. 다시 입력해주세요");
// }


let inNum1= parseInt(prompt("첫번째 숫자를 입력하세요."));
let inNum2 = parseInt(prompt("두번째 숫자를 입력하세요."));

console.log(inNum1);
console.log(inNum2);

let numMax = inNum1 > inNum2 ? inNum1 : inNum2;
let numMin = inNum1 < inNum2 ? inNum1 : inNum2;

if (inNum1 === inNum2) {
  console.log("두 수는 같습니다!");
} else {
  console.log("두 수 중에서 큰값은", numMax, "입니다.");
  console.log("두 수 중에서 작은값은", numMin, "입니다.");
}


// 교수님 정답
// 임의의 2개의수 40~70
num1 = Math.floor(Math.random() * 31) + 40; // 40 <= x <= 70
num2 = Math.floor(Math.random() * 31) + 40; // 40 <= x <= 70
if (num1 > num2) {
  console.log("2개의 수 중에서 큰값은 " + num1 + ", 작은값은 " + num2);
} else if(num2 == num1) {
  console.log("2개의 수는 같습니다.");
} else {
  console.log("2개의 수 중에서 큰값은 " + num2 + ", 작은값은 " + num1);
}