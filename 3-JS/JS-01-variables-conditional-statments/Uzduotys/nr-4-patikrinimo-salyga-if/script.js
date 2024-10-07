console.log('-------Uzduotis #1-------')
let numX = 3; 
let numY = 7;
let numZ = 14

if (numX === numY) {
    console.log('skaiciai yra lygus')
}  

if (numX === numZ) {
    console.log('skaiciai yra lygus')
}

if (numX > numY) {
    console.log('pirmas skaiciaus yra didesnis uz antra')
}

if (numX < numY ** 2) {
    console.log('antras skaiciius pakeltas kvadratu yra didesnis nei pirmas')
}

if (numX % 2 === 0 ) {
    console.log('numX yra lyginis skaicius')
}

if (numY % 2 !== 0) {
    console.log('numY yra nelyginis skaicius')
}

if (numZ > 0 ) {
    console.log('numY yra teigiamas skaicius')
}

if (numZ < 0 ) {
    console.log('numZ yra neigiamas skaicius')
}

if (numY % 4 === 0) {
    console.log('antras skaicius dalinasi is 4')
}

if (numZ % 8 === 0) {
    console.log('trecias skaicius dalinasi is 8')
}

console.log ('------Uzduotis #2-------')
let userAge = 19; 

if(userAge >= 18) {
    console.log('Jus galite balsuoti')
}

console.log('----Uzduotis #3-----') 
let gradeX = 8;
let gradeY = 10;
let gradeZ = 4;
let vidurkis = (gradeX + gradeY + gradeZ) / 3;

if ( (gradeX + gradeY + gradeZ) / 3 >= 5) {
    console.log('Vidurkis teigiamas:', vidurkis)
}
console.log('-----Uzduotis #4------')

let num = 20;

if(num % 5 === 0 ) {
    console.log(` 0 x ${num} = 0\n 1 x ${num} = 15\n 2 x ${num} = 30\n 3 x ${num} = 45\n 4 x ${num} = 60\n 5 x ${num} = 75 `)
}

if ( num % 2 === 0 ) {
    console.log(num)
    console.log(num ** 2)
    console.log(num /2)
}

if (num % 7 !== 0) {
    let  scopeNum = 7;
    console.log (num + scopeNum)
    console.log (num - scopeNum)
    console.log (num * scopeNum)
    console.log (num / scopeNum)
}

