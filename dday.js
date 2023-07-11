var now = new Date();
var firstDay = new Date("2021-02-03"); // 처음 만난 날
var toNow = now.getTime(); // 오늘날짜를 밀리초로 바꿈
var toFirst = firstDay.getTime(); // 처음 만난날을 밀리초로 바꿈
var passedTime = toNow - toFirst; // 처음 만난날과 오늘 날짜를 뺀 날짜
var passedDay = Math.round(passedTime / (24 * 60 * 60 * 1000)); // 밀리초를 1로 변환한후 round 로 반올림
document.querySelector("#accent").innerHTML = passedDay + 1 + "일";

clacDate(100);
clacDate(200);
clacDate(365);
clacDate(500);
clacDate(900);
clacDate(1000);
clacDate(1100);
clacDate(1200);
function clacDate(days) {
  var future = toFirst + days * (24 * 60 * 60 * 1000); // 처음 만난날에 밀리초로 바꾼 100일을 더함
  var someday = new Date(future); // future 값을 사용해서 Date 객체의 인스턴스를 만듦
  var year = someday.getFullYear(); // '연도'를 가지고 와서 year 변수에 저장
  var month = someday.getMonth() + 1; // '월'을 가지고 와서 month 변수에 저장
  var date = someday.getDate(); // '일'을 가지고 와서 date 변수에 저장
  document.querySelector(
    "#date" + days
  ).innerHTML = `${year} 년 ${month} 월 ${date} 일`;
}
