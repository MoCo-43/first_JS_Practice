// object3.js
// indexOf()

let numArr = [10, 21, 33, 54, 16, 73];
// indexOf() =>(찾을 값)을 적으면 몇번째 위치에 있는지 알려줌 => 값이 있는지 없는지 확인하는 용도 // 만약 없다면 -1 을 출력
let result = numArr.indexOf(33);  // 2번째 있으니 2 출력
// let result2 = numArr.indexOf(333); // 없으니 -1 출력
console.log(result);
// console.log(result2);


// indexOf()는 스트링에서도 사용 가능
// let strAry = ["홍길동", "김길동", "홍길순"];
// strAry.forEach(function(item) {
//   if(item.indexOf("길동") != -1) {
//     console.log(item);
//   }
// });

let strAry = ["홍길동", "김길동", "홍길순"];
strAry.forEach(function(item) {
  if(item.indexOf("홍") == 0) {
    console.log(item);
  }
});

////// 문제 ////////
// numAry(변수) => 10 ~ 50 사이의 값을 10개 저장 => 콘솔에 출력(forEach);

let numAry = []; // 변수 선언
  for (let i=0; i<=10; i++) { // 10번을
    let rand = Math.floor(Math.random() * 41)+10;   // 랜덤수를 10 ~ 50까지 생성
    numAry.push(rand);  // numAry에 랜덤수를 push()
  }


// 10 ~ 50 사이의 값이 정상적으로 생성 체크 : every() _ 3가지 방법

// 1, 이때까지 배운 방법
result = numAry.every(function (item) {
  if(item >= 10 && item <= 50) {
    return true; 
  } else {
    return false;
  }
})

// 2. 조금 줄여서 써본 방법
// result = numAry.every(function (item) {
//   return item >= 10 && item <= 50; 
// })

// 3. '=>' 형태로 쓴 방법
// result = numAry.every(item => item >= 10 && item <= 50);
// console.log(result);



// forEach를 사용하여 출력
numAry.forEach(function (item) { 
  console.log(item);
});