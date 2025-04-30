// object2.js
// 배열내장객체: new Array() 또는 []
// 관련메소드: push, pop, unshift, shift => forEach

// 모질라 개발자 도큐먼트 
// mdn every  https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/every


//  let arr1 = new Array(); // 이렇게 선언하면 바로바로 값을 넣을 수 있다 // 웹브라우저에서 내장된객체가있어 이러한 형태로 사용 가능
let arr1 = [10, 20, 30];
arr1[3] = 40;
arr1.push(50); // 추가 메소드
arr1.unshift(60);
// 현재 배열상태 [60, 10, 20, 30, 40, 50]
arr1.pop(); // 60, 10, 20, 30, 40
arr1.pop(); // 60, 10, 20, 30
arr1.shift(); // 10, 20, 30
// 10, (20), 30 -> 특정 위치에 넣고 싶을때?
// splice 메소드를 사용
// splice (시작 위치, 삭제할 개수, 삽입할 값1, 값2, ...)

arr1.splice(1, 1, 15);
arr1.splice(1, 1); // 삭제
arr1.splice(1, 0, 15, 16, 17); // 변경    // 0일 경우 아무것도 삭제를 하지 않는다라는 의미 -> 추가


// every, some

// every_표현방식 1
// let result = arr1.every(function (item) { // every: 모든 요소가 조건을 만족해야 true, some: 하나라도 만족하면 true
// });
// console.log(result);


// some_표현방식 2
let result = arr1.some(item => item % 2 == 1); // 간편하게 이렇게 생략이 가능
console.log(result);


arr1.forEach(function (item, idx, ary) { // 익명함수   // forEach 요소의 갯수만큼 함수 실행  // 매개변수 (요소, 인덱스, 객체) 정해져 있음
  console.log(item, idx);
});

// console.log(arr1);