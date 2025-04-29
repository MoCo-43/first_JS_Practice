// function7.js

console.log(friends);

let friend = {
  name: "김민규",
  age: 20,
  phone: "010-1111-2222"
}

// for ... in 속성의 갯수만큼 반복하겠다는 반복문
for (let prop in friend) {
  console.log(`prop: ${prop}, val: ${friend[prop]}`);
}

// 함수생성 => makeRow(friend={})
// html tag를 이용해 표 형태로 만들기
/// for ... in 을 사용하지 않게 되는 경우 <td>${friend.name}</td> 처럼 계쏙 나열 해 줘야 함 //////////

// function makeRow(friend = { name, age, phone }) {
//   let str = "";
//   str += "<tr>";
//   str += `<td>${friend.name}</td><td>${friend.age}</td><td>${friend.phone}</td>`;
//   str += "</tr>";
//   return str; // tr td 만들어서 반환
// }



/// for.. in 으로 사용하게 되어 변경 
function makeRow(friend = { name, age, phone }) {
  let str = "";
  str += "<tr>";
    for (let prop in friend) {
      str += `<td>${friend[prop]}</td>`;
    }
  str += "</tr>";
  return str; // tr td 만들어서 반환
}

// 출력
let tlist = "";
tlist += "<table class= 'table'>";
tlist += "<tbody>";
// 데이터 -> row생성
// for (let i=0; i<friends.length; i++){ 
//   tlist += makeRow(friends[i]);

//// for ... of => 배열 반복 => 위 형태 말고도 for ... in 형태로 사용할 수 있음
for (let friend of friends) {
  tlist += makeRow(friend);
  }
tlist += "</tbody></table>";
document.write(tlist);


//////////////////////////////////////////////////////////////

/// 이름 나이 연락처 다른 방법으로 만들어 보기
let titles = ["이름", "나이", "연락처"];
tlist += "<table class= 'table'>";
tlist += "<tbody>";
for (let titles of friends) {
  tlist += makeRow(titles);
  }
tlist += "</tbody></table>";
document.write(tlist);

//////////////////////////////////////////////////////////////


// 현업에서 js를 쓰면 많은 데이터를 들고와서 보여주는 작업 
// 반복문 많이 이용하게 될것
// ex) 한 줄에 10페이지씩 보여주게 해라 등등