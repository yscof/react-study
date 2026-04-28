// for (let i = 0; i <= 100; i++) {
//     console.log(i);
// }

// for (let idx = 1; idx <= 100; idx++) {
//     console.log(idx);
// }

for (let idx = 1; idx <= 100; idx++) {
    if (idx > 10) {
        console.log("반복문 종료!");
        break;
    }
    console.log(idx);
}

for (let idx = 0; idx <= 100; idx++) {
    if (idx % 2 === 0) {
        continue;
    }
    console.log(idx);
}