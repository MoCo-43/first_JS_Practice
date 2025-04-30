// object5.js
// Date 객체 : 날짜, 시간

let now = new Date();
// now = new Date("02/01/2025");  // 월/일/년
now.setDate('20');
// console.log(now.getFullYear()); // 년도만 반환
// console.log(now.getMonth()); // 월 만 반환
// console.log(now.getDate()); // 일만 반환
console.log(now);
// console.log(getDate);
console.log(getKorDay.getDate(now.getDay())); // 요일 정보 0-> 일요일, 1->월요일, 2->화요일

function getKorDay(day = 1) {
  switch(day) {
    case 0: return "일요일";
    case 1: return "월요일";
    case 2: return "화요일";
    case 3: return "수요일";
    case 4: return "목요일";
    case 5: return "금요일";
    case 6: return "토요일";
  }
}