// dom2.js

let userList = [{
  uid: 'user01',
  uname: '홍길동',
  phone: '010-1111-1111'
},
{
  uid: 'user02',
  uname: '최시욱',
  phone: '010-2222-2222'
},
{
  uid: 'user03',
  uname: '김영식',
  phone: '010-3333-3333'
},
{
  uid: 'user04',
  uname: '이양은',
  phone: '010-4444-4444'
}]

// userList의 정보 활용 출력
userList.forEach(function(user) {   // item이라는 변수대신 user로 바꿈
  let tr = makeRow(user);
  document.querySelector('#list').appendChild(tr);
});

//////////////////////////////
// 이벤트

document.querySelector('form[name="addForm"]').addEventListener('submit', function(e) {
  e.preventDefault(); // form의 기본기능 차단
  console.log(e);
  let uid = document.querySelector('input[name="userId"]').value;
  let uname = document.querySelector('input[name="userName"]').value;
  let phone = document.querySelector('input[name="phone"]').value;
  // validation check
  if (!uid || uid.length < 3) {
    alert(`아이디를 확인하세요.`);
    return;
  }


  if(!uname || uname.length > 5) {
    alert(`이름을 확인하세요.`);
    return;
  }
  // 3개 값을 편리화 하기 위해 오브젝트로 만듦
  let userInfo = {
    uid, // uid: uid 와 같이 변수명이랑 같이 써도 되나 그냥 왼쪽값 하나만 써도 됨 편리를 위해?
    uname,
    phone
  }

  let tr = makeRow(userInfo); // 입력한 값
  // tbody의 하위요소로 등록
  document.querySelector('#list').appendChild(tr);
  // 선택된 값을 대상
})

// 선택삭제
document.querySelector('button.selected').addEventListener('click', function (e) {
  document.querySelectorAll('tbody#list input').forEach(function (item) {
    if(item.checked) {
      console.log(item);
      item.parentElement.parentElement.remove();
    }
  });
  
  })


//////////////////////////////
// 함수
function makeRow(user = { /*uid, uname, phone */ }) { // user라는 변수이름 생성
    // tr생성
  let tr = document.createElement('tr');  // <tr /> 태그를 생성하겠다는 의미

  // 선택한 tr의 하위요소(td)의 값을 input에 할당
  tr.addEventListener('click', function (e) {
    e.stopPropagation();
    console.log(tr.children);
    document.querySelector('input[name="userId"]').value = user.uid    // tr.children[0].innerText;
  });
  tr.addEventListener('click', function (e) {
    document.querySelector('input[name="userName"]').value = user.uname // tr.children[1].innerText;
  });
  tr.addEventListener('click', function (e) {
    document.querySelector('input[name="phone"]').value = user.phone    // tr.children[2].innerText;
  }); 
  false; // ture => capturing 방식
  

  // checkbox 생성
  let td2 = document.createElement('td');
  let chk = document.createElement('input');
  chk.setAttribute('type', 'checkbox');
  td2.appendChild(chk);
  tr.appendChild(td2);


  // td 생성
  for(let prop in user) {
    let td = document.createElement('td');  // <td /> 생성 후에 하게될 .innerHTML을 편리하게 하기 위해서
    td.innerHTML = user[prop];  // userInfo["uid"] == userInfo.udi  
    tr.appendChild(td);
  }
  // 삭제버튼 생성
  let td = document.createElement('td');  // <td> </td>생성
  let btn = document.createElement('button'); //<button></button>생성
  btn.innerText = '삭제'; // <button>삭제</button>
  btn.className = "btn btn-danger"; // <button class="btn btn-danger">삭제</button>
  // btn.setAttribute('onclick', 'removeUserFnc(event)');  // 함수를 직접 호출해서 넣으면 됨 // 버튼에 직접적으로 넣어도 되긴 함 
  btn.addEventListener('click', removeUserFnc, false);     // removeUserFnc라고 함수를 따로 뺌 // bunbling  // false => bubbling
  td.appendChild(btn);  // <tr><td><button>삭제</button></td><tr>
  tr.appendChild(td); // <td><button>삭제</button></td>

  return tr;  // 반환
}

// 삭제버튼의 이벤트 핸들러(Callback 함수)
function removeUserFnc(e) {
  e.stopPropagation();  // 이벤트 전파를 중단
  console.log(e.target, this);  //e.target == btn  // this대신 함수 매개값 e로 해도 ㄱㅊ
  e.target.parentElement.parentElement.remove();
}


// 이벤트 전파 및 bubbling, capturing 방식 설명
// https://inpa.tistory.com/entry/JS-%F0%9F%93%9A-%EB%B2%84%EB%B8%94%EB%A7%81-%EC%BA%A1%EC%B3%90%EB%A7%81