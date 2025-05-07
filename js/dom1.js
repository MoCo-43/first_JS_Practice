// dom1.js

// createElement(), appendChild(), setAttribute(), quearySelector()


///////////////////////////////////
// 이벤트

//// 과일-가격 등록 버튼 작동하는 코드_1
// document.querySelector('#addBtn').addEventListener('click', function() {
//   let fruit = document.getElementById('fruit').value;
//   let price = document.querySelector('#price').value; // getElementById('price')로 사용해도 동일
  
//   let new_list = createLi(fruit, price);
//   document.querySelector('ul').appendChild(new_list); // 부모 - 자식 관계 생성

//   // 입력값 초기화
//   // 다음 받을 값을 위해 공백 및 0으로 초기화 시켜 줌
//   document.getElementById('fruit').value = "";
//   document.querySelector('#price').value = 0; 
// });

document.querySelector('#addBtn').addEventListener('click', addCallback);

// 원래 html태그에 있던 삭제버튼 생성
document.querySelectorAll('ul button').forEach(function(item) {  // querySelectorAll('ul button') 그냥 button으로 사용하면 상위 버튼까지 잡히게 됨
  // console.log(item);
  item.addEventListener('click', function() {
    item.parentElement.remove();  // 요소삭제
  })
});

// li에 스타일
document.querySelectorAll('li').forEach(item => { 
  console.log(item);
  item.addEventListener('mouseover', function() { // 마우스를 가져다 대었을때 컬러가 바뀌고
    item.style.backgroundColor = "cyan";
  })
  item.addEventListener('mouseout', function() { // 마우스를 땔때 색깔이 변경
    item.style.backgroundColor = "";
  })
});



//// 과일-가격 등록 버튼 작동하는 코드_2
// 콜백함수 -> 이벤트가 호출되는 함수 또는 이벤트 핸들러?
// document.querySelector('#addBtn').addEventListener('click', addCallback);
function addCallback() {
    let fruit = document.getElementById('fruit').value;
    let price = document.querySelector('#price').value; // getElementById('price')로 사용해도 동일
    
    // 입력값이 없으면 실행하지않록 하는 입력값 체크
    if (!fruit || !price) { // 공백 확인
      alert("값을 입력하세요");
      return; // 함수의 실행 종료
    } 


    let new_list = createLi(fruit, price);
    document.querySelector('ul').appendChild(new_list); // 부모 - 자식 관계 생성
  
    // 입력값 초기화
    // 다음 받을 값을 위해 공백 및 0으로 초기화 시켜 줌
    document.getElementById('fruit').value = "";
    document.querySelector('#price').value = 0; 
}



function createLi(fruitName, fruitPrice) {
  let li = document.createElement("li");  // <li /> 
  // li.innerText = "test"
  let sp1 = document.createElement("span");
  sp1.innerText = fruitName;
  let sp2 = document.createElement("span");
  sp2.innerText = fruitPrice + '원';
  let txt = document.createTextNode(" ");

  // 삭제버튼
  // 제일 위 쪽에 삭제버튼을 만들어 없애도 됨
  // let btn = document.createElement("button");
  // btn.innerText = "삭제";
  // btn.addEventListener('click', function() {
  //   btn.parentElement.remove();
  // })
  let btn = document.createElement("button"); // <button id="delBtn" class="btn btn-danger">
  btn.innerText = "삭제";
  // btn.setAttribute('class', 'btn btn-danger');  //속성추가
  btn.className = "btn btn-danger";
  btn.addEventListener('click', function() {
    btn.parentElement.remove();
  })  // 클릭 이벤트등록
  
  // 먼저 붙이는 대로 만들어짐
  li.appendChild(sp1);
  li.appendChild(txt);
  li.appendChild(sp2);
  li.appendChild(btn);

  return li; // <li /> 반환
}