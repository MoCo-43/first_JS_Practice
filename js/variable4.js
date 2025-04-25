// variable4.js
// 연산자(할당연산자 524p)

let num1 = "10";
num1 = num1 + "20"; // 결과값은 "1020"
num1 = num1 + "30"; // 결과값 "102030"
console.log(num1);

num1 += "40"; // num1 = num1 + "40";

let num2 = 10; // number
num2 += 20;
num2 += 30;

num2 = num2 - 5; // 55
num2=- 5; // 50

num2 = num2 * 2;
num2 *= 2;  // 200
num2 = 10203040;


console.log(num2 == num1); // 동일 // 연산자 값이 서로 같으면 true
console.log(num2 === num1); // 다름 // 연산자 값도 같고 자료형도 같으면 ture

console.log(num2 != num1); // 값만 비교 // 연산자 값이 서로 같지 않으면 true
console.log(num2 !== num1); // 값, 타입 // 연산자 값이 같지 않거나 자료형이 같지 않으면 true

// 논리 연산자
console.clear();
console.log(num1 >= num2 || num1 < 100); // 둘중 하나만 true여도 true가 됨 <OR연산자>
console.log(num1 >= num2 && num1 < 100); // 둘중 하나만 true일 경우만  true 됨 <AND연산자>
console.log(num1 >= num2 && !(num1 < 100)); // 연산자의 반댓값을 지정 <OR연산자>