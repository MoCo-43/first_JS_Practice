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