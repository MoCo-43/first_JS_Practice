// function7.js

console.log(friends);

// 함수생성 => makeRow(friend={})
// html tag를 이용해 표 형태로 만들기
function makeRow(friend = { name, age, phone }) {
  let str = "";
  str += "<tr>";
  str += `<td>${friend.name}</td><td>${friend.age}</td><td>${friend.phone}</td>`;
  str += "</tr>";
  return str; // tr td 만들어서 반환
}

// 출력
let tlist = "";
tlist += "<table class= 'table'>";
tlist += "<tbody>";
// 데이터 -> row생성
for (let i=0; i<friends.length; i++){
  tlist += makeRow(friends[i]);
}
tlist += "</tbody></table>";
document.write(tlist);