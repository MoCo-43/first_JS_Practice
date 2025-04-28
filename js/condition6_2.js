// condition6_2.js

// 2. 임의의 2개의 수(40 ~ 70)를 생성. "2개의 수 중에서 큰값은 ??, 작은값은 ??"



// https://stack-queue.tistory.com/1549 랜덤난수 범위 지정 참고
// Math.round(Math.random() * (max - min)) + min 
// 혹은 Math.floor(Math.random() * (max - min +1)) + min

let num1 = Math.floor(Math.random() * (70 - 40))+40; 
let num2 = Math.floor(Math.random() * (70 - 40))+40;
console.log(num1);
console.log(num2);

let max = (num1 > num2) ? num1 : num2;
let min = (num1 < num2) ? num1 : num2;


if (num1 > num2) {
    console.log('2개의 수 중에서 큰값은', max, '입니다');
    console.log('2개의 수 중에서 작은 값은', min, '입니다');

} else {
    console.log('숫자가 같습니다');
}
