// 화살표 함수 "(  ) => {      }"

 const result = document.getElementById('result');
 
 let date = new Date();
let hour = date.getHours();

if (1 < hour < 5) {
    result.textContent = "안녕"
} else {
  result.textContent = "굿바이"
}




// document.getElementById('testBtn').addEventListener('click', () => {
//     alert("실행결과");
// });
