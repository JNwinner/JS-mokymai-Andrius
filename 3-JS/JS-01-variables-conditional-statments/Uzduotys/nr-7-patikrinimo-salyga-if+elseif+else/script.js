console.log('------Uzduotis #10------');

let numX = 6;

if (numX % 2 === 0) {
    console.log('skaicius lyginis');
} else if (numX % 5 == 0) {
    console.log('skaicius dalinasi is 5');
} else if (numX % 3 == 0) {
    console.log('skaicius dalinasi is 3');
} else {
    console.log('skaicius nera lyginis ir nesidalina is 5 arba 3');
}

let num1 = 5;
let num2 = 8;
let num3 = 3;

if (num1 == num2) {
    console.log('skaiciai yra lygus');
} else if (num1 == num3) {
    console.log('skaiciai yra lygus');
} else if (num2 == num3) {
    console.log('skaiciai yra lygus');
} else if  (num3 > num1) {
    console.log('trecias skaicius didensnis uz pirma'); 
} else if (num3*2 == num2) {
    console.log('trecias skaicius padaugintas is dvieju yra lygus antram skaiciui');
} else if (num1 % 3 == 0) {
    console.log('pirma skaicius dalinasi is 3');
}  else {
    console.log('klaida')
}
