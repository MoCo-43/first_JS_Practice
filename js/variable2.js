// variable2.js
let num1 = 100; // int num1;
console.log(typeof num1);
num1 = "hundered"; // javascript 변수에서 int을 하였어도 다른 데이터타입을 넣어도 가능하다 -> java와 같은 언어에서는 안됨

let num_2 = 200; // 변수 이름 첫 글자는 숫자, 대문자는 사용하지 말기
let nameOfFriend = "홍길동";

let birthOfDate = new Date(); // object Type // 변수 선언시 대소문자 구분하며, 가능하면 underbar를 사용하지 말 것, 한글 선언도 가능
console.log(typeof birthOfDate);

let isOK = true;
isOK = 10 < 5; // false값 출력
isOK = 10 > 5; // true

if (isOK) {
  // isOK 값이 true인 경우 { } 블럭을 실행
  console.log('isOK는 참입니다.');
}

// 배열 :  [100, 200, 250] 여러개의 값을 저장
let numAry = [10, 20, 25, 31]; // 인덱스는 0부터 시작
console.log(numAry[0]);

let strAry = ["Hello", "Nice", "Good", 300]; // 문자배열에 숫자를 넣을 수 있으나, 가능하면 쓰지 말기

// 객체(object). 키: 값의 형태
let person = {
  name: "홍길동",
  age: 20,
  height: 168.9,
  weight: 65.3,
  personInfo: function() {  // 함수는 기능
    console.log('이름은 ' + person.name + '이고 나이는 ' + person.age);
  }
};
person.personInfo();  // 메소드 호출(call)

console.log(person);
console.log(person.name);

// undefine, null
let whatIsThis;
whatIsThis = document.querySelector('#userValue');
console.log(typeof whatIsThis); // undefine 변수 선언만 되어있는 상태

let whatIsThis2;
whatIsThis2 = document.querySelector('#userVal22u');
console.log(typeof whatIsThis2.value); // null 값 출력