// function3.js

// 3. diff(34, 17) => 큰 수에서 작은수를 빼 => "두 수의 차는 17입니다."


function diff(num1 = 0, num2 = 0) {
  let num_sum = 0;
  if (num1 > num2) {
    sum = num1-num2;
  } else {
    sum= num2-num1;
  }
  console.log(`두 수의 차는 ${sum}입니다.`);
}

diff(34, 17);