// while3.js
// 친구이름을 입력 => quit를 타이핑하면 종료하게 하고 싶음 단, 이름에는 입력하면 안됨

let str = `<table class = "table"><tbody>`;
let running = true;

// 화면요소를 삭제하는 함수
function removeElement(param1) {
  console.dir(param1.target.parentElement);
  param1.target.parentElement.parentElement.remove();
  // param1.target.remove(); f// 제거
}

while(running) {
  let userValue = prompt("친구이름을 입력하세요");
  str += "<tr>";
  if (userValue == "quit") {
    running = false;  // 종료조건
    // 코드의 실행흐름을 종료
    continue;
  } 
    str += `<tr><td>${userValue}</td></tr>
    <td><button onclick="removeElement(event)" class='btn btn-danger'>삭제</button></td>`;
} // end of while
str += `</tbody></table>`;
document.write(str); 