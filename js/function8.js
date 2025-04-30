// function8.js
// 1. JSON.parse vs JSON.stringify => 객체를 문자열(배열)로 바꿔줌 vs 객체를 문자로 바꿔줌

// console.log(json);  // 문자열로 출력이 됨
let data = JSON.parse(json);  // json 문자열을 자바스크립트의 객체로변환해줌
// console.log(data);  // 객체


/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////// 과제 ///////////////////////
/// button<삭제> 템플릿
let btnTemplate = "<button class='btn btn-danger' onclick='deleteTr(event)'>삭제</button>";   // 버튼을 만들기 위한 템플릿  deleteTr(event)라는 함수 생성
// let으로 지정해서 변수를 사용하면 좀 더 낫다

let fields = ['id', 'first_name', 'email', 'salary', 'gender', 'salary'];



// 가져온 json파일을 사원정보라고 가정
// 사원목록(table형식)을 출력
let elist = "<table class='table'><thead><tr>";
for (let field of fields) {
  elist += `<th>${field}</th>`;
}
elist += `<th>삭제</th>`;
elist += "</tr></thead><tbody>";
for (let i=0; i<data.length; i++) { // for(let i=0; i<data.length; i++) 반복문을 사용하는 것과 같은 효과
  elist += makeTr(data[i]);
}
elist += "</tbody></table>";
document.write(elist);


/////////////////////////////////////////////
// 1. 버튼 클릭 이벤트

document.querySelector('button#searchBtn').addEventListener('click', function() {   // .addEventListener 매소드에서 문자열 및 함수도 매개값으로 지정 가능
  //입력값
  let searchValue = document.querySelector('#userValue').value; // inputTag 
  let list = "";
  for (let emp of data) {
    if(searchValue == 'All' || searchValue == emp.gender) {
      list += makeTr(emp);
    }
  }
  document.querySelector('table.table>tbody').innerHTML = list;
}); 


/////////////////////////////////////////////
// 2. select 버튼 클릭 "change";
document.querySelector('select#selectGender').addEventListener('change', function() {
  // let selectedGender = document.querySelector('#selectGender').value;  // 선택된 값 (All, Male, Female)
  let selectedGender = this.value;  // 위 랑 같은 의미
  console.log(this);
  let list = ""; 
  for (let emp of data) {
    if (selectedGender === 'All' || selectedGender === emp.gender) {
      list += makeTr(emp);
    }
  }

  document.querySelector('table.table tbody').innerHTML = list;
});

function makeTr(emp = {}) {
  let str = "<tr>";
  // 지정한 id, first_name, email 속성을 정의
  for(let field of fields) {
    // console.log(emp[field]);  // emp['id'] id 속성의 값을 읽어 라는 뜻 => == emp.id
    str += `<td>${emp[field]}</td>`;
  }
  str += `<td>${btnTemplate}</td>`;
  str += "</tr>";
  return str;
}


// GPT 도움 받음
/// while3.js 에서 function removeElement(param1) 함수를 참고 하면 제작
// function deleteTr () {
//   // 눌렀을때 이벤트를 발생하게 되는데 라인 한줄을 삭제 하는 함수
//   let del_btn = event.target;         // 클릭한 버튼을 del_btn에 저장
//   let del_tr = del_btn.closest('tr');      // DOM 버튼 주변에 가장 가까운 부모 <tr> 태그를 찾아서 del_tr에 저장
//   del_tr.remove();  // <tr> 삭제
// }

  // 교수님이 한
function deleteTr (e) {
  console.log(e);
  e.target.parentElement.parentElement.remove();
}
