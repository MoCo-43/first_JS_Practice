// object4.js
// filter() => forEach와는 다르게 조건을 만족하는 요소를 새로운 배열을 생성

let numAry = [20, 27, 33, 42, 19, 68, 52];
let filterAry = numAry.filter(function (item, idx, ary) {
  if (item % 2 == 0) {
    return true;  // true일 경우에만
  }
    return false;
  // return을 넣지 않으면 undefined 라는 값을 반환하는데, false 값은아닌 falsy라는 값을 반환
});
console.log(filterAry);



///// 문제 /////
/// salary가 5000이 넘는 사원들을 empAry에 저장

let data = JSON.parse(json);  // json파일을 파싱해서 json을 데이터에 넣는다
let empAry = data.filter(function (item) {  // empAry data를 필터하고 function item
  if(item.salary >= 5000) { // salary가 5000넘는 사원이 있다면
    return true;  // true값 반환
  } else {
    return false;
  }
})
console.log(empAry);