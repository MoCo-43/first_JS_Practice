// 3. condition3.js에 "A", "B", "C", "D", "F" => 95이상이면 A+ 와 같이 /점수구간을 좀 더 잘게 나누세요

let score = Math.floor(Math.random() * 100);
console.log(score);

if (score >= 95) {
  console.log('A+');
} else if(score > 90) {
  console.log('A');
} else if(score >= 85) {
  console.log('B+');
} else if(score > 80) {
  console.log('B');
} else if(score >= 75) {
  console.log('C+');
} else if(score > 70) {
  console.log('C');
} else if(score >= 65) {
  console.log('D+');
} else if(score > 60) {
  console.log('D');
} else {
  console.log('F');
}
