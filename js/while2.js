// while2.js
// 사용자에게 1 ~ 10까지 임의의 수를 입력
// 범위밖의 값을 입력하면 종료 입력값의 누적합을 콘솔 출력

let sum = 0;
let stat = true;

while (stat) {
  let inNum = (prompt("1 ~ 10까지 임의의 수를 입력하세요"));
  let nums = parseInt(inNum); // 문자열을 정수로 변환

  if (nums < 1 || nums > 10) {
    console.log("입력범위를 초과했습니다. 다시시도하세요");
    break;
  }
  sum += nums;
  console.log(`누적합은 ${sum}입니다`);
}