<<<<<<< HEAD
// 현재시간을 출력하기 위하여 우선 현재 시간을 구해
// 오전 오후
let date = new Date();
let hour = date.getHours();
if(hour < 5) {
    alert('잠');
} else {
    if (hour < 7) {
        alert('깸');
    }
} else {
    if (7 <= hour < 9) {
        alert('일');
    }
} else {
    if (9<= hour < 12) {
        alert('밥');
    }
} else {
    if (12 <= hour < 4) {
        alert('일'); 
    }
}