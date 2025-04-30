// object1/js
// 객체 //

// 객체지향의 대표적인 언어 -> java => 컴파일이 필요, 함수기반+객체 대표적인 언어 -> 자바스크립트 => 인터프리터(컴파일 X)
/// 이떄까지 수업은 자료묶음의 형태로 사용했지만, 함수도 사용할 수 있다.

/// this의 3가지 사용방법


// 1. 객체(객체를 가리킴)
let obj = {
  name: "홍길동",
  age: 20,
  showName: function() {
    console.log(this);
    return `이름은 ${this.name}입니다.`; // obj.name도 사용가능 하나 this라고 하는 자기 이름을 사용하는것이 편리함
  },
  setName(name) {           // 간략하게 사용했으나, 다음과 같이도 가능함 setName(name): function(name) { }
    this.name = name;
  }
}
obj.setName("김길동");
let result = obj.showName();  // 위의 return 즉 반환한 값을 result가 가지겠다
console.log(10);  // console객체의 log 매소드


// 1-1. class 생성
class Person {
  // name, age: 속성
  // showName(), setName(): 메소드
  constructor(name, age) {    // 생성자
    this.name = name;
    this.age = age; // name, age 속성을 할당
  }
  // showName 메소드 생성
  showName() {
    return `이름은 ${this.name}입니다.`;
  }
  setName(name) {
    this.name = name;
  }
  showAge() {
    return `나이는 ${this.age}입니다.`;
  } 
  setAge(age) {
    this.age = age;
  }
}

// 인스턴스 생성
let num = 10; 
let choi = new Person("최민식", 22) // 나이 이름을 구조체에 넣어서 person클래스를 생성해서 choi라는 변수에 집어 넣음
choi.setName("최민수"); // name속성을 변경
console.log(choi.showName()); // class의 showName 쪽에 가서 콘솔에서 "이름은 최민수입니다." 라고 출력 됨


// 또 다른 인스턴스 생성
let park = new Person("박충식", 30); 



choi.setAge(25);
console.log(choi.showAge());    // 최민식이라는 사람의 나이를 22살에서 25살로 변경



// 2. 함수(window 객체) 
function sum() {
  console.log(this);  // 함수안에서 this의 의미는 window를 가르키는 것
}
sum();


// 3. 이벤트(대상)

/*  function8.js 의 

  document.querySelector('select#selectGender').addEventListener('change', function() {
  // let selectedGender = document.querySelector('#selectGender').value;
  let selectedGender = this.value;  // this
  console.log(this);
  let list = ""; 
  for (let emp of data) {
    if (selectedGender === 'All' || selectedGender === emp.gender) {
      list += makeTr(emp);
    }
  }

*/
