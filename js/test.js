// 화살표 함수 "(  ) => {      }"

const result = document.getElementById('result');



 let date = new Date();
let hour = date.getHours();

if (hour >= 13 && hour <= 17) {
    result.textContent = "안녕"
    result.style.color = "black";
    
} else {
  result.textContent = "굿바이"
  result.style.color = "red";
}


// document.getElementById('testBtn').addEventListener('click', () => {
//     alert("실행결과");
// });


// const result = document.getElementById('result');

// let date = new Date();
// let hour = date.getHours();

// if (hour >= 13 && hour <= 17) {
//     result.textContent = "안녕";
//     result.style.color = "orange";       // '안녕'일 때는 오렌지색
//     result.style.fontWeight = "bold";    // 굵게 만들 수도 있어요
// } else {
//     result.textContent = "굿바이";
//     result.style.color = "royalblue";    // '굿바이'일 때는 파란색
// }