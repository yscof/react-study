// let width1 = 10;
// let height1 = 20;
// let area1 = width1 * height1;

// let width2 = 100;
// let height2 = 200;
// let area2 = width2 * height2;

// console.log("면적: ", area1);
// console.log("면적: ", area2);

// function greeting() {
//     console.log("안녕하세요!");
// }

// greeting();

// function greeting() {
//     console.log("안녕하세요!");
// }

// console.log("함수 시작 전");
// greeting();
// console.log("함수 종료");

// function getArea() {
//     let width = 10;
//     let height = 20;
//     let area = width * height;
//     console.log(area);
// }

// getArea();

// function getArea(width, height) {
//     let area = width * height;
//     console.log(area);
// }

// getArea(10, 20);

// function getArea(width, height) {
//     let area = width * height;
//     return area;
// }

// let result = getArea(10, 20);
// console.log(result);

// function getArea(width, height) {
//     let area = width * height;
//     return area;
//     console.log("함수 종료");
// }

// let result = getArea(10, 20);
// console.log(result);

// function greeting() {
//     function greetingWithName(name) {
//         console.log(`hello! ${name}`);
//     }

//     let name = "이정환";
//     greetingWithName(name);
// }

// greeting();

// func();

// function func() {
//     console.log("hello");
// }

// let greeting = function() {
//     console.log("hello");
// };

// greeting();

// function greetFunc() {
//     console.log("hello");
// }

// greetFunc();

// let greeting = greetFunc;
// greeting();

// funcA();
// funcB();

// function funcA() {
//     console.log("func A");
// }

// let funcB = function() {
//     console.log("func B");
// };

// function parentFunc(callBack) {     // 매개변수 callBack에는 함수 childFunc이 저장됩니다.
//     console.log("parent");
//     callBack();
// }

// function childFunc() {
//     console.log("child");
// }

// parentFunc(childFunc);

// function repeat(count) {
//     for (let idx = 0; idx < count; idx++) {
//         console.log(idx + 1);
//     }
// }

// function repeatDouble(count) {
//     for (let idx = 0; idx < count; idx++) {
//         console.log((idx + 1) * 2);
//     }
// }

// repeatDouble(5);

// function repeat(count, callBack) {
//     for (let idx = 0; idx < count; idx++) {
//         callBack(idx + 1);
//     }
// }

// function origin(count) {
//     console.log(count);
// }

// function double(count) {
//     console.log(count * 2);
// }

// repeat(5, double);

// function repeat(count, callBack) {
//     for (let idx = 0; idx < count; idx++) {
//         callBack(idx + 1);
//     }
// }

// const double = function(count) {
//     console.log(count * 2);
// }

// repeat(5, function(count) {
//     console.log(count * 2);
// });

// let greeting = (name) => `hello ${name}`;

// const greetingText = greeting("이정환");

// console.log(greetingText);

// let greeting = (name) => {
//     let greetingText = `hello ${name}`;
//     return greetingText;
// };

// console.log(greeting("이정환"));

let isConfirm = true;

function confirm(onYes, onNo) {
    if (isConfirm) onYes();
    else onNo();
}

confirm(
    () => console.log("승인"),
    () => console.log("거부")
);