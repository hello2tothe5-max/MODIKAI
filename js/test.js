// let i = 1;
// let tot = 0;
// while(i<=10); {
// tot = tot +i;
// i++;
// }
// console.log(tot);

// let i = 1;
// while(1) {
//     console.log("Welcome");
//     if (i === 7) {
//         break;
//     }
//     i++;
// }


// 오늘 배운 거 총 정리 ↓↓↓

 while (1) {
     let input = parseInt(prompt("정수 입력"));
     if(input === 7) {
         console.log('7이 입력되었으니 종료');
         break;
     }
     let tot = 0;
     for(i=1; i <= input; i++){
        tot = tot + i;
     }
     console.log(tot);
    }

// 사용자로부터 입력받은 정수까지의 정수의 합계를 출력하시오

