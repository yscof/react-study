// let food = ["짜장면", "피자", "치킨"];
// const newLength = food.push("탕수육");

// console.log(food);
// console.log(`새로운 배열의 길이: ${newLength}`);

// let food = ["짜장면", "피자", "치킨"];
// const newLength = food.push("탕수육", "라자냐");

// console.log(food);
// console.log(`새로운 배열의 길이: ${newLength}`);

// let food = ["짜장면", "피자", "치킨"];
// const removedItem = food.pop();

// console.log(removedItem);
// console.log(food);

// let food = [];
// const removedItem = food.pop();

// console.log(removedItem);
// console.log(food);

// let food = ["짜장면", "피자", "치킨"];
// const removedItem = food.shift();

// console.log(removedItem);
// console.log(food);

// let food = ["짜장면", "피자", "치킨"];
// const newLength = food.unshift("갈비찜");

// console.log(food);
// console.log(`새로운 배열의 길이: ${newLength}`);

// const arr = [1, 2, 3];
// const sliced = arr.slice(0, 2);

// console.log(arr);
// console.log(sliced);

// const arr = [1, 2, 3];
// const sliced = arr.slice(2);

// console.log(sliced);

// const arr = [1, 2, 3, 4, 5];

// console.log(arr.slice(-1));
// console.log(arr.slice(-2));
// console.log(arr.slice(-3));
// console.log(arr.slice(-4));
// console.log(arr.slice(-5));

// let arrA = [1, 2];
// let arrB = [3, 4];
// let arrC = arrA.concat(arrB);

// console.log(arrC);
// console.log(arrA);

// let arrA = [1, 2];
// let arrB = { a: 1, b: 2 };
// let arrC = arrA.concat(arrB);

// console.log(arrC);

// function cb(item, idx) {
//     console.log(`${idx}번째 요소: ${item}`);
// }

// const arr = [1, 2, 3];

// arr.forEach(cb);

// const arr = [1, 2, 3];
// arr.forEach((item, idx) => {
//     console.log(`${idx}번쨰 요소: ${item}`);
// });

// let arr = [1, 3, 5, 7, 1];

// console.log(arr.indexOf(1, 0));

// let arr = [1, 3, 5, 7, 1];

// console.log(arr.indexOf(1));
// console.log(arr.indexOf(1, -1));

// let arr = [1, 3, 5, 7, 1];

// console.log(arr.indexOf(4));

// let arr = [1, 3, 5, 7, 1];

// console.log(arr.indexOf(7, 9));

// let arr = [1, 3, 5, 7, 1];

// console.log(arr.indexOf("3"));

// let arr = [{ name: "이정환" }, 1, 2, 3];

// console.log(arr.indexOf({ name: "이정환" }));

// let arr = [1, 3, 5, 7, 1];

// console.log(arr.includes(3));
// console.log(arr.includes("생선"));

// function determine(item, idx, arr) {
//     if (item % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// let arr = [1, 3, 5, 6, 8];
// let index = arr.findIndex(determine);

// console.log(index);

// let arr = [1, 3, 5, 6, 8];
// let index = arr.findIndex((item) => 
//     item % 2 === 0 ? true : false
// );

// console.log(index);

// let arr = [
//     {name: "이종원"},
//     {name: "이정환"},
//     {name: "신다민"},
//     {name: "김효빈"},
// ];

// let index = arr.findIndex((item) => item.name === "이정환" ? true : false);

// console.log(index);

// let arr = [
//     { name: "이종원" }, 
//     { name: "이정환" }, 
//     { name: "신다민" }, 
//     { name: "김효빈" }, 
// ];

// let element = arr.find((item) => item.name === "이정환");
// console.log(element);

// let arr = [
//     { name: "이종원", hobby: "축구" }, 
//     { name: "이정환", hobby: "영화" }, 
//     { name: "신다민", hobby: "축구" }, 
//     { name: "김효빈", hobby: "노래" }, 
// ];

// let filteredArr = arr.filter(
//     (item) => item.hobby === "축구"
// );

// console.log(filteredArr);

// let arr = [1, 2, 3, 4];
// let newArr = arr.map((item) => item * 3);

// console.log(newArr);

// let arr = [
//     { name: "이종원", hobby: "축구" }, 
//     { name: "이정환", hobby: "영화" }, 
//     { name: "신다민", hobby: "축구" }, 
//     { name: "김효빈", hobby: "노래" }, 
// ];

// let newArr = arr.map((item) => item.name);

// console.log(newArr);

// let arr = ["b", "a", "c"];

// arr.sort();

// console.log(arr);

// let arr = [10, 5, 3];
// arr.sort();

// console.log(arr);

// function compare(a, b) {
//     if (a > b) {
//         return 1;
//     } else if (a < b) {
//         return -1;
//     } else {
//         return 0;
//     }
// }

// let arr = [10, 5, 3];
// arr.sort(compare);

// console.log(arr);

// let arr = ["안녕", "나는", "이정환"];

// console.log(arr.join());
// console.log(arr.join("-"));

let arr = [1, 2, 3, 4, 5];
let result = arr.reduce((acc, item) => acc + item, 0);

console.log(result);