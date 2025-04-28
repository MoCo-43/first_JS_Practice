// function3_2.js

// 2. sumUpTo(5) => "1부터 5까지의 합은 15입니다."

function sumUpTo(number = 0) {
  let sum = 0;
  for (let i=1; i<=number; i++) {
    sum = sum + i;
  }
  console.log(`1부터 ${number}까지의 합은 ${sum}입니다`);
    //sum = number + (number-n)
}

sumUpTo(5);