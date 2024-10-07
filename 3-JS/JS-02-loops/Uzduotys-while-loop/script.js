// 1

let i = 1;

while (i <= 20) {
    console.log(i);
    i++;
}

// 2

let x = 1;

while (x <= 50) {
    
   
    // x % 2 === 0 ? console.log(`${x} - lyginis`) : console.log(`${x} - nelyginis`);

    if (x % 2 === 0) {
        console.log(`${x} - lyginis`);
    } else {
        console.log(`${x} - nelyginis`);
    }
    x++;
}

// 3

let y = 25;

while (y <= 50) {
    
    if (y % 3 === 0) {
     console.log(`[${y}] - dalinasi is 3`);
    } else {
        console.log(`[${y}]`);
    }

    y++;
}

// 4

let sk = 1;

while(!(sk % 3 == 0 && sk % 5 == 0)) {
    console.log(sk);
    sk++;
}

let b = 1;

while(true) {
    if (b % 3 == 0 && b % 5 == 0) {
        break;
    }
    console.log(b);
    b++;
}

// 5

let z = 1;
let zSum = 0;

while (z <= 100) {
    if (z % 2 === 0) {
        zSum += z;
    }
    z++;
}

console.log(`Visu lyginiu skaiciu suma: ${zSum}`);

// 6

let skaicius = 1;

while (skaicius < 5) {

console.log(`Skaicius: ${skaicius}, kvadratu: ${skaicius ** 2}`);
skaicius++;

}

// 7

const kiekis =  Math.floor(Math.random() * 10) + 1;

for (let i = 0; i < kiekis; i++) {
    const atsitiktinis = Math.round(Math.random() * 20);
    console.log(`[${atsitiktinis}]`);
}

// 8

const kiek =  Math.floor(Math.random() * 10) + 1;
let atsitiktiniuSuma = 0;

for (let i = 0; i < kiekis; i++) {
    const atsitiktinis = Math.round(Math.random() * 20);
    console.log(`[${atsitiktinis}]`);
    atsitiktiniuSuma += atsitiktinis;
}

console.log(`Atsitiktiniu skaiciu suma: ${atsitiktiniuSuma}`);
