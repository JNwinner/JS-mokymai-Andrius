
// 13
let num1 = 9;
let num2 =12;
let num3 =11;

// console.log(`Didziausias ${Math.max (num1, num2, num3)}`);

if  (k1 > k2 && k1 > k3) {
    console.log(`Didziausias ${k1}`);
} else if (k2 > k1 && k2 > k3) {
    console.log(`Didziausias ${k2}`);
} else {
    console.log(`Didziausias ${k3}`);
}


console.log(`Maziausias ${Math.min (num1, num2, num3)}`);

if  (k1 < k2 && k1 < k3) {
    console.log(`Maziausias ${k1}`);
} else if (k2 < k1 && k2 < k3) {
    console.log(`Maziausias ${k2}`);
} else {
    console.log(`Maziausias ${k3}`);
}

// 14

let gr1 = 9;
let gr2 = 8;
let gr3 = 7;
let avg = (gr1 + gr2 + gr3) / 3;

if (avg >= 8 && avg <= 10) {
    console.log("Nuostabu");
} else if (avg >= 5 && avg < 8) {
    console.log("patenkinamai");
} else if (avg < 5) {
    console.log("prastai");
}

// 15
let kin1 = 14;
let kin2 = 8;

if (kin1 > kin2 || kin1 == 0) {
    // Code block here
}

if (kin1 > kin1 || kin2 == 5) {
    // Code block here
}

if (kin1 > kin2 && kin1 == 20) {
    // Code block here
}

if (kin2 > kin1 && kin2 < 100) {
    // Code block here
}