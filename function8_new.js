console.log(json);  // 문자열로 출력이 됨
let data = JSON.parse(json);  // json 문자열을 자바스크립트의 객체로변환해줌
console.log(data);  // 객체

let fields = ['id', 'first_name', 'email', 'salary', 'gender'];

let elist = "<table class='table'><thead><tr>";
for (let field of fields) {
  elist += `<th>${fields}</th>`;
}
elist += "</tr></thead><tbody>";
for (let i=0; i<data.length; i++) {
  elist += makeTr(data[i]);
}
elist += "</tbody></table>";
document.write(elist);

/////////////////////////////////////////////
// 1. 버튼 클릭 이벤트

document.querySelector('button#searchBtn').addEventListener('click', function() {
  //입력값
  let searchValue = document.querySelector('#userValue').value; // inputTag 
  let list = "";
  for (let emp of data) {
    if(searchValue == 'ALL' || searchValue == emp.gender) {
      list += makeTr(emp);
    }
  }
  document.querySelector('table.table<tbody').innerHTML = list;
}); 

function makeTr(emp = {}) {
  let str = "<tr>";
  for(let field of fields) {
    console.log(emp[field]);  // emp['id'] id 속성의 값을 읽어 라는 뜻 => == emp.id
    str += `<td>${emp[field]}</td>`;
  }
  str += "</tr>";
  return str;
}