// function calcA() {
//     console.log("a");
//     return false;
// }

// function calcB() {      // 호출되지 않음
//     console.log("b");
//     return true;
// }

// console.log(calcA() && calcB());

// function calcA() {
//     console.log("a");
//     return undefined;
// }

// function calcB() {
//     console.log("b");
//     return true;
// }

// console.log(calcA() && calcB());

// function getName(person) {
//     return person.name;
// }

// let person;
// let name = getName(person);

// console.log(name);

// function getName(person) {
//     if (person !== undefined) {
//         return person.name;
//     } else {
//         return "매개변수가 객체가 아닙니다.";
//     }
// }

// let person;
// let name = getName(person);

// console.log(name);

// function getName(person) {
//     if (person !== undefined && person !== null) {
//         return person.name;
//     } else {
//         return "매개변수가 객체가 아닙니다.";
//     }
// }

// let person = null;
// let name = getName(person);

// console.log(name);

// function getName(person) {
//     return person && person.name;
// }

// let person = { name: "이정환" };

// let name1 = getName(undefined);
// let name2 = getName(null);
// let name3 = getName(person);

// console.log(name1);
// console.log(name2);
// console.log(name3);

// function calcA() {
//     console.log("a");
//     return true;
// }

// function calcB() {
//     console.log("b");
//     return false;
// }

// console.log(calcA() || calcB());

// const name = "이정환" || undefined;

// console.log(name);

const varA = 0;
const varB = "이정환";

const resultA = varA || varB;
const resultB = varA ?? varB;

console.log(resultA);
console.log(resultB);