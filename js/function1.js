// function1.js
// 2개의 수를 더하고 큰값에 10을 더하고 작은값에 5를 더한 후 합을 구하는 


////////// 계속 반복되는 형태로 나옴 ////////////////////////

// let num1 = 4, num2 =2;
// let result = 0;

// if(num1 > num2) {
//   result = (num1 + 10) + (num2 + 5);
// } else {
//   result = (num2 + 10) + (num1 + 5);
// }
// console.log(`결과값 ${result}`);


////////// 계속 반복되는 형태로 나옴 ////////////////////////

// let num1 = 5, num2 =3;
// let result = 0;

// if(num1 > num2) {
//   result = (num1 + 10) + (num2 + 5);
// } else {
//   result = (num2 + 10) + (num1 + 5);
// }
// console.log(`결과값 ${result}`);


// let num1 = 4, num2 =2;
// let result = 0;

// if(num1 > num2) {
//   result = (num1 + 10) + (num2 + 5);
// } else {
//   result = (num2 + 10) + (num1 + 5);
// }
// console.log(`결과값 ${result}`);

////////// 계속 반복되는 형태로 나옴 ////////////////////////

/////// 함수의 정의 //////////
// 2개의 수를 더하고 큰값에 10을 더하고 작은값에 5를 더한 후 합을 구하기
function sum(parameter1, parameter2) {
  let result = 0;
  if (parameter1 > parameter2) {
    result = (parameter1 + 10) + (parameter2 + 5);
  } else {
    result = (parameter2 + 10) + (parameter1 + 5);
  }
  // console.log(`결과값 ${result}`);
  return result;  // return => 함수를 호출한 영역으로 결과 반환
} // end of sum()

/// 위에서는 일일이 변수생성해서 작동했던 것을 함수 호출로 

// 화면요소를 삭제하는 함수
function removeElement(param1) {
  console.log(param1);
}

let str

let num1 = 4;
let num2 = 2;
let result = sum(num1, num2);
document.write(`결과값 ${result}`);

num3 = 5;
num4 = 3;
result = sum(num3, num4);
console.log(`결과값 ${result}`);

sum(20, 19);
document.querySelector('#result').value = result;
alert(`결과값 ${result}`);