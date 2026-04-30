// console.log("1번");
// console.log("2번");
// console.log("3번");

// function longTask() {
//     // 10초 이상 걸리는 작업
// }

// function shortTask() {
//     // 매우 빠르게 끝나는 작업
// }

// longTask();
// shortTask();

// setTimeout(function() {
//     console.log("1번!");
// }, 3000);

// console.log("2번!");

// setTimeout(() => {
//     console.log("1번!");
// }, 3000);

// console.log("2번!");

// function orderCoffee(coffee, time) {
//     setTimeout(() => {
//         console.log(`${coffee} 제조 완료`);
//     }, time);
// }

// orderCoffee("달콤한 커피", 4000);
// orderCoffee("레몬 티", 2000);
// orderCoffee("시원한 커피", 3000);

// function double(num) {
//     setTimeout(() => {
//         const doubleNum = num * 2;
//         console.log(doubleNum);
//     }, 1000);
// }

// double(10);

// function double(num) {
//     return setTimeout(() => {
//         const doubleNum = num * 2;
//         return doubleNum;
//     }, 1000);
// }

// const res = double(10);
// console.log(res);

function double(num, cb) {
    setTimeout(() => {
        const doubleNum = num * 2;
        cb(doubleNum);
    }, 1000);
}

double(10, (res) => {
    console.log(res);
});

console.log("마지막");