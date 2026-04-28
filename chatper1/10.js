// let person = {
//     name: "이정환", 
//     age: 25,
//     "like cat": true
// };

// const personName = person.name;     // 점 표기법
// const personAge = person["age"];    // 괄호 표기법

// console.log(personName);
// console.log(personAge);

// let person = {
//     name: "이정환", 
//     age: 25, 
//     "like cat": true
// };

// person.gender = "male";                 // 점 표기법을 이용한 프로퍼티 추가
// person["nickname"] = "winterwood";      // 괄호 표기법을 이용한 프로퍼티 추가

// console.log(person.gender);
// console.log(person["nickname"]);

// function addProperty(obj, key, value) {
//     obj[key] = value;
// }

// let obj = {};

// addProperty(obj, "a", 1);
// addProperty(obj, "b", 2);
// addProperty(obj, "c", 3);

// console.log(obj);

// let cat = {
//     name: "치삼이", 
//     age: 4
// };

// cat.name = "치삼";
// cat["age"] = 5;

// console.log(cat);

// let cat = {
//     name: "치삼이",
//     age: 4
// };

// delete cat.name;
// delete cat["age"];

// console.log(cat);

// const obj = {
//     a: 1,
//     b: "text"
// };

// obj.a = 2;
// obj.c = undefined;
// delete obj.b;

// console.log(obj);

// let obj = {
//     a: 1
// };

// console.log(obj.b);

// let obj = {
//     a: 1
// };

// let isPropertyExist = obj.b !== undefined;

// console.log(isPropertyExist);

// let person = {
//     age: 10
// };

// let isNameExist = "name" in person;

// console.log(isNameExist);

let person = {
    name: "이정환",
    sayHi: function() {
        console.log("안녕");
    }
};

person.sayHi();