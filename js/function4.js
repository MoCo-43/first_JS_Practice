// function4.js
// 함수 + 반복문 + 배열

let num = 10;
num = "10, 홍길동";
let numAry = [10, 20];  // newArray(); 배열선언
// console.log(numAry[0]); // 배열의 첫번째는 0번이므로, 첫번째 값을 출력

// 배열의 값을 추가
numAry[2] = 30;
numAry[3] = 50;
numAry[4] = "Hong"; // 권장 하지 않음 -> 자료형을 통일 시키는 편이 좋음
numAry[4] = 70;
numAry[5] = 90;
numAry[6] = 120;
numAry[7] = 150;

console.log(numAry[2]); // 3번째 값을 출력
console.log(numAry[3]);
console.log(numAry[4]);
console.log(`배열의 크기: ${numAry.length}`); // 배열의 첫번째는 0번이므로, 첫번째 값을 출력


// 배열은 for 반복문과 같은 형태로 사용하기 좋음
for (let i=0; i<numAry.length; i++) { // 배열의 크기가 자꾸 변한다면 numAry.length라는 것을 이용하면 편리함
  console.log(`[i]의 값 : ${i}, 배열의 값 : ${numAry[i]}`);
}

// 연산도 가능
console.log(`numAry[6] - numAry[2] => ${numAry[6]} - ${numAry[2]}`);

// 배열의 요소의 합
// let sum = 0;
// for(let i=0; i<numAry.length; i++) {
//   sum += numAry[i];
// }
// console.log(`sum=> ${sum}`);

// 배열의 특정요소들 합
let sum = 0;
for(let i=0; i<numAry.length; i++) {
  // 1,3,5,7 번째
  //if (i % 2 == 0)
  // 값중에서 50보다 큰값
  if (numAry[i] > 50) {
    sum += numAry[i];
  }
}
console.log(`sum=> ${sum}`);


// 배열변수 : ages 27, 28, 25, 30, 31, 36
// max(초기값은 0) ages 값을 0번 배열부터 끝까지 배열을 비교하면서 큰 값이 있다면 교체하고 아니면 넘어가는 형태로 제작

let ages = [27, 28, 25, 30, 31, 36];
let max = 0;

// for (let i=0; i<ages.length; i++) {
//   if (max < ages[i]) {  // 현재 max값보다 더 큰 요소가 있다면
//     max = ages[i];  // max의 변수에 할당
//   } 
// }
// console.log(`${max} 이 제일 많은 나이입니다.`);

//////// 함수: getMax() 를 사용한 ////////

function getMax(param1 = []) {
  let max = 0;
  for (let i = 0; i < param1.length; i++) {
    if (max < param1[i]) { // 현재 max값보다 더 큰 요소가 있다면
      max = param1[i]; // max의 변수에 할당
    }
  }
  console.log(`${max} 이 제일 많은 나이입니다.`);
}
getMax(ages);
getMax([30, 17, 22, 34, 27]); 

/////// 함수 getMinValue(매개값으로 배열) 제일 작은 값을 반환하는 함수 만들기

function getMinValue(param1 = []) {
  // let min = 999999999999999999;
  let min = param1[0];  // 최소값 지정
  for (let i=0; i<param1.length; i++) {
    if (min > param1[i]) {
      min=param1[i];
    } 
  }
  return min;
}

let result = getMinValue([20, 27, 17, 30]);
result = getMinValue([17, 34, 22, 10]);
console.log(`결과는 ${result}`);
