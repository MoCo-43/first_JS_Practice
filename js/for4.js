// for4.js

// 구구단 출력
document.write("<h3>구구단출력</h3>"); // html태그도 사용이 가능
// console.log() 말고 본문에 출력


// <p>3 * 1 = 3</p> 
// <p>3 * 2 = 6</p> 
// ...<p> 3 * 9 = 27</p> 

// for (let n = 1; n <= 9; n++) {
//   document.write(`<p> 3 * ${n} = ${3 * n} </p>`);
// }

// 반복문 안에 반복문을 중첩해서 사용할 수 있다.
// for (let p = 2; p <= 4; p++) {
//   let m = 6;
//   for (let n = 1; n <= 9; n++) {
//     document.write(`<p> ${m} * ${n} = ${m * n} </p>`);
//   } // end of for
// }  // end of for

// for (let p = 2; p <= 4; p++) {
//   let m = p;
//   for (let n = 1; n <= 9; n++) {
//     document.write(`<p> ${m} * ${n} = ${m * n} </p>`);
//   } // end of for
// }  // end of for


// 테이블 형태로 만들어 보기
let str = "";
str += "<table class='table table-striped'>";
str += "<tbody>";
// let m = p;
for (let p = 2; p <= 4; p++) {
  str += "<tr>";
  for (let n = 1; n <= 9; n++) {
    str += (`<td>${p} * ${n} = ${p*n}</td>`);
  }
  str += "</tr>";
}
str +="</tbody>";
str +="</table>";
document.write(str);
