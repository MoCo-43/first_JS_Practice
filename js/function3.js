// function3.js
// 함수를 이용한 문제
// 1. max(10, 17) => "두 수중에서 큰값은 10입니다."

// 2. sumUpTo(5) => "1부터 5까지의 합은 15입니다."

// 3. diff(34, 17) => 큰 수에서 작은수를 빼 => "두 수의 차는 17입니다."



//////// 1. max(10, 17) => "두 수중에서 큰값은 10입니다."

function max_num(inNum1 = 0, inNum2 = 0) {
  let max = 0;
  if (inNum1 > inNum2) {
    max = inNum1;
    console.log(`두 수중에서 큰 값은 ${max}입니다.`);
  } else {
    max = inNum2;
    console.log(`두 수중에서 큰 값은 ${max}입니다.`);
  }
}

max_num(34, 17);