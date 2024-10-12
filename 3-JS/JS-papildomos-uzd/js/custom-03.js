/* LENGVESNI */

/* 01.
Sukurkite ciklą kuris atspausdintų 10 kartų žodį “labas”.
*/

let ciklas = 10; 

while (ciklas >= 1) {
    ciklas--
    console.log('Labas')
}

/* 02.
Sukurkite ciklą kuris atspausdintų skaičius nuo 0 iki 9.
*/

for (let i = 0; i <= 9; i++) {
    console.log(i)
}

/* 03.
Atspausdinkite kas antrą skaičių nuo 10 iki 50 (porinius);
*/

for(let i = 10; i <= 50; i++ ) {
    console.log(i % 2 == 0 ? i : '') 
}

/* 04.
Atspausdinkite kas antrą skaičių nuo 10 iki 50. (porinius) Jei skaičius dalinasi iš 10 be liekanos jo nespausdinkite. ( naudokite continue.) (atspausdinti visus porinius skaičius, išskyrus tuos kurie dalinasi iš 10 be liekanos)
*/

for(let i = 10; i <= 50; i++ ) {
    if (i % 10 == 0) {
        continue
    } else if (i % 2 == 0) {
        console.log(i)
    }  
}

/* 05.
Sukurkite ciklą kuris suktųsi nuo 0 iki 20. Suskaičiuokite, kiek kartų kintamasis i turėjo porinę reikšmę;
*/

let poriniai = 0

for(let i = 0; i <= 20; i++) {
    if(i % 2 == 0) {
        poriniai++
    }
}

console.log('Poriniu skaiciu nuo 0 iki 20:', poriniai)

/* SUNKESNI */

/* 01.
Sugeneruokite 300 atsitiktinių skaičių nuo 0 iki 300, atspausdinkite juos atskirtus tarpais ir suskaičiuokite kiek tarp jų yra didesnių už 150.  Skaičiai didesni nei 275 turi būti atspausdinti skliausteliuose” [ ] “.
*/
emptyArray = [];
let countGreaterThan150 = 0;

for (let i = 0; i <= 300; i++) {
    let randomNumber = Math.floor(Math.random()* 301);
    if(randomNumber > 150) {
        countGreaterThan150++;
    }
    if (randomNumber > 275) {
        emptyArray.push(`[${randomNumber}]`);
    } else {
        emptyArray.push(randomNumber);
    }
}
console.log(emptyArray.join(' '));
console.log(`Count of number greater than 150: ${countGreaterThan150}`);

/* 02.
Vienoje eilutėje atspausdinkite visus skaičius nuo 1 iki 3000, kurie dalijasi iš 77 be liekanos. Skaičius atskirkite kableliais. Po paskutinio skaičiaus kablelio neturi būti.
*/
emptyArray2 = []

for(let i = 0; i <= 3000; i++) {
   if ( i % 77 === 0) {
     emptyArray2.push(i)
   }
}

console.log(emptyArray2.join(','))

/* 03.
Nupieškite kvadratą iš “*”, kurio kraštines sudaro 10 “*”.
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
*/


for (let i = 0; i <= 7; i++) {
    console.log('* '.repeat(10).trim());
}