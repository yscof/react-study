// let arr = [1, 2, 3];

// let one = arr[0];
// let two = arr[1];
// let three = arr[2];

// console.log(one, two, three);

// let arr = [1, 2, 3];
// let [one, two, three] = arr;

// console.log(one, two, three);

// let arr = [1, 2, 3];
// let [one, two] = arr;

// console.log(one, two);

// let arr = [1, 2];
// let [one, two, three] = arr;

// console.log(one, two, three);

// let person = {
//     name: "이정환",
//     age: 25,
//     location: "경기도"
// };

// let { name, age, location } = person;

// console.log(name, age, location);

// function func({ name, age, location }) {
//     console.log(name, age, location);
// }

// let person = {
//     name: "이정환",
//     age: 25,
//     location: "경기도"
// };

// func(person);

function func({ name: n, age: a, location: l }) {
    console.log(n, a, l);
}

let person = {
    name: "이정환",
    age: 25,
    location: "경기도"
};

func(person);