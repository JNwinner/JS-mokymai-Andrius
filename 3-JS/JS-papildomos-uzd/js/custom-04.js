/* 01.
Sukurkite masyvą su dešimt augalų pavadinimų.
*/

let augalai = ['Obuolys', 'Kriaušė', 'Slyva', 'Vyšnia', 'Kriekas', 'Mandarinas', 'Apelsinas', 'Bananas', 'Ananasas', 'Vynuogė'];

/* 02.
Atspausdinkite kiekvieną pirmo uždavinio augalą atskiroje eilutėje.
*/

for(let i = 0; i < augalai.length; i++) {
    console.log(augalai[i])
}


/* 03.
Atspausdinkite pirmo uždavinio kiekvieną augalą pradedant nuo paskutinio, ir baigiant pirmuoju. (atvirkščias ciklas).
*/


for(let i = augalai.length -1; i > 0; i--) {
    console.log(augalai[i])
}

/* 04.
Suskaičiuokite kiek pirmo uždavinio masyve yra žodžių trumpesnių nei 5 simboliai, ir kiek ilgesnių nei 7 simboliai.
*/

let simboliai5 = 0;
let simboliai7 = 0;
let array = []

for(let i = 0; i < augalai.length; i++) {
    
    if (augalai[i].length < 5) {
        simboliai5++
    } else if (augalai[i].length > 7) {
        array.push(augalai[i])
        simboliai7++
    }
}

console.log(simboliai5)
console.log('Zodziai su 7 simboliais ir daugiau skaicius:',simboliai7,'.' ,'zodziai:', array)
console.log(array)

