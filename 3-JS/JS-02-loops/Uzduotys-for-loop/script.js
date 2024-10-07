// 1

for (let i = 0; i <= 10; i++) {
    console.log(i);
}

// 2

for (let i = 0; i <= 15; i += 2) {
    console.log(i);
}

// 3

for (let i = 0; i <= 20; i += 3) {
    console.log(`[${i}]`);
}

// 4

for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(`${i} - lyginis`);
    } else {
        console.log(`${i} - nelyginis`);
    }
}

// 5


let start = 0;
let end = 10;

for (let i = start; i <= end; i++) {
    console.log(`[${i}] - ${i ** 2}`);
}


// 6

let start1 = 0;
let end1 = 10;

for (let i = start1; i <= end1; i++) {
    if (i % 2 != 0 || i % 8 == 0)
        console.log(i);
}

// 7

let a = 5;
let b = 3;
let result = 0;

for (let i = 0; i < b; i++) {
    result += a;
}

console.log(result);


// 8

for (let i = 1; i <= 100; i++) {
    console.log(`Skaiciu suma: ${i} + ${i} = ${i + i}`);
}

// 9

for (let i = 20; i <= 50; i++) {
    if (i % 2 == 0) {
        console.log(`Lyginiu skaiciu suma: ${i} + ${i} = ${i * i}`);
    }
}

// 10 

for (let  i = 30; i <= 60; i++) {
    if (i % 2 !== 0) {
        console.log(`Nelyginiu skaiciu suma: ${i} + ${i} = ${i + i}`);
    }
}

// 11

let skaiciuSuma = 0

for (let i = 1000; i >= 0; i--) {
    if ( i % 3 == 0 || i % 5 == 0) {
        skaiciuSuma += i;
    }
}

console.log(skaiciuSuma);

// 12

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

// 13
