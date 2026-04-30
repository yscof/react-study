// let date = new Date();

// console.log(date);

// let Jan01_1970 = new Date(0);

// console.log(Jan01_1970);

// let Jan02_1970 = new Date(24 * 3600 * 1000);

// console.log(Jan02_1970);

// let Jan02_1970 = new Date(24 * 3600 * 1000);

// console.log(Jan02_1970.getTime());

// let date1 = new Date("2000-10-10/00:00:00");
// let date2 = new Date("2000.10.10/00:00:00");
// let date3 = new Date("2000/10/10/00:00:00");
// let date4 = new Date("2000 10 10/00:00:00");

// console.log("1", date1);
// console.log("2", date2);
// console.log("3", date3);
// console.log("4", date4);

// let date1 = new Date(2000, 10, 10, 0, 0, 0, 0);
// let date2 = new Date(2000, 9, 10);

// console.log("1:", date1);
// console.log("2:", date2);

// let date = new Date(2000, 9, 10);
// let timeStamp = date.getTime();
// console.log(timeStamp);

// let dateClone = new Date(timeStamp);
// console.log(dateClone);

// let date = new Date(2000, 9, 10);

// console.log(date.getFullYear());

// let date = new Date(2000, 9, 10);

// console.log(date.getMonth());

// let date = new Date(2000, 9, 10);

// console.log(date.getDate());

// let date = new Date(2000, 9, 10);

// console.log(date.getDay());

// let date = new Date(2000, 9, 10);

// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getMilliseconds());

// let date = new Date(2000, 9, 10);
// date.setFullYear(2021);

// console.log(date);

// let date = new Date(2000, 9, 10);
// date.setMonth(10);

// console.log(date);

// let date = new Date(2000, 9, 10);
// date.setDate(11);

// console.log(date);

// let date = new Date(2000, 9, 10);

// date.setHours(1);
// date.setMinutes(1);
// date.setSeconds(1);

// console.log(date);

// const today = new Date(2000, 9, 10, 22);

// console.log(today.toString());

// const today = new Date(2000, 9, 10, 22);

// console.log(today.toDateString());

// const today = new Date(2000, 9, 10, 22);

// console.log(today.toLocaleString());
// console.log(today.toLocaleDateString());

// function moveMonth(date, moveMonth) {
//     const curTimestamp = date.getTime();
//     const curMonth = date.getMonth();

//     const resDate = new Date(curTimestamp);
//     resDate.setMonth(curMonth + moveMonth);
//     return resDate;
// }

// const dateA = new Date("2000-10-10");
// console.log("A: ", dateA);

// const dateB = moveMonth(dateA, 1);
// console.log("B: ", dateB);

// const dateC = moveMonth(dateA, -1);
// console.log("C: ", dateC);

function filterThisMonth(pivotDate, dateArray) {
    const year = pivotDate.getFullYear();
    const month = pivotDate.getMonth();

    const startDay = new Date(year, month, 1, 0, 0, 0, 0);
    const endDay = new Date(year, month + 1, 0, 23, 59, 59);

    const resArr = dateArray.filter(
        (it) => 
            startDay.getTime() <= it.getTime() &&
            it.getTime() <= endDay.getTime()
    );
    return resArr;
}

const dateArray = [
    new Date("2000-10-1"),
    new Date("2000-10-31"),
    new Date("2000-11-1"),
    new Date("2000-9-30"),
    new Date("1900-10-11")
];

// 오늘은 2000년 10월 10일이라고 가정합니다.
const today = new Date("2000-10-10/00:00:00");
const filteredArray = filterThisMonth(today, dateArray);

console.log(filteredArray.toString());