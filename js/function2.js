// function2.js

function sum(num1 = 0 , num2 = 0) { // 매개변수의 초기값. 값을 아무것도 넣지 않는다면 NaN을 발생시켜 NaN방지
  let result = 0;
  // if(num2 == undefined) {
  //   result = num1 + 0;    // 위에 파라미터값을 초기화 해주면 이렇게 길게 할 필요 X
  // } else {
  //   result = num1 + num2;
  // }
  result = num1 + num2;
  return result;  // 반환
}

function printStar(times = 1, shape = '⭐') { // printStart(times = 1) 아무것도 넣지 않는다면 1로 대처 하겠다는 의미?
  let str = '';
  for(let i=1; i<=times; i++) {
    str += shape;
  }
  console.log(str);
}

// 함수 호출
// printStar(1);  // JS에서는 에러가 나지 않는다.

printStar(2, '🥂');


// 구구단을 출력하는 함수
function printGugudan(dan = 2 ) {
  let result = 0;
    for(i=1; i<=9; i++) {
      document.write(`<p>${dan} * ${i} = ${dan*i}`);
      
    }
  }

printStar(5);
printGugudan(9);