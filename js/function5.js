// function5.js

///// 반복문  //////
let names = ["홍길동", "박춘식", "김민수", "이영식"];

let search = prompt("검색할 이름 입력: ");
// for(let i=0; i<names.length; i++) {
//   if (search == names[i]) {
//     alert('있음');
//       break;
//   } else {
//     alert('없음');
//       break;
//   }
// }


///// while 문으로 하는 방법 1 //////

// let i = 0;
// let exists = false; // 존재여부를 확인
// while (true) {
//   if (i <names.length) {
//     i++;
//   } else {
//     break;
//    }

//   if (search == names[i]) {
//     alert('있음');
//     break;
//   }
// }



///// while 문으로 하는 방법 2 //////

let i = 0;
let exists = false; // 존재여부를 확인

while (true) {
  if (i < names.length) {
    i++;
  } else {
    break;
  }
  if (search == names[i]) { // 찾는 친구의 이름이 존재하는지 
    exists = true;
    break;
  }
} // end of while

if (exists) {
  alert(`있음`);
} else {
  alert(`없음`);
}