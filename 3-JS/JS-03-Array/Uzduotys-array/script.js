// 1
let firstArray = ['Tomas', 'Mantas', 'Jonas', 'Petras', 'Antanas', 'Kazys', 'Rokas', 'Tadas', 'Marius', 'Lukas'];

console.log(firstArray[0], firstArray[firstArray.length - 1]);
console.log(firstArray.length);
console.log(firstArray[4]);
console.log(firstArray[8]);

// 2

let pazymiai = [10, 8, 6, 4, 2];

pazymiai[0] = 9;
pazymiai[4] = 1;

console.log(pazymiai);

// 3

let emptyArray = [];

emptyArray.push('Tomas');
emptyArray.push('Mantas');
emptyArray.push('Jonas');
emptyArray.push('Petras');

console.log(emptyArray);

// 4

let emptyArray1 = [];

emptyArray1.push(Math.round(Math.random() * 10));
emptyArray1.push(Math.round(Math.random() * 10));
emptyArray1.push(Math.round(Math.random() * 10));
emptyArray1.push(Math.round(Math.random() * 10));

console.log(emptyArray1);

// 5

let gradeArray = [];
let gradeArray2 = [];

gradeArray.push(9, 8, 7, 6, 5);
gradeArray2.push(10, 9, 8, 7, 6);

console.log(gradeArray);
console.log(gradeArray2);

let suma = gradeArray[0] + gradeArray[1] + gradeArray[2] + gradeArray[3] + gradeArray[4];
let suma2 = gradeArray2[0] + gradeArray2[1] + gradeArray2[2] + gradeArray2[3] + gradeArray2[4];
let vidurkis = suma / gradeArray.length;
let vidurkis2 = suma2 / gradeArray2.length;

console.log(vidurkis);
console.log(vidurkis2);

// 6

let studijuProgramos = ['Informatika', 'Ekonomika', 'Teise', 'Architektura', 'Statyba'];

for (let i = 0; i < studijuProgramos.length; i++) {
    console.log(studijuProgramos[i]);
}

// 7

let saliuPavadinimai = ['Lietuva', 'Latvija', 'Estija', 'Lenkija', 'Vokietija'];

for (let i = 0; i < saliuPavadinimai.length; i++) {
    console.log(`Salis: ${saliuPavadinimai[i]}`);
}

// 8

let igyvendintiProjektai = ['Projektas1', 'Projektas2', 'Projektas3', 'Projektas4', 'Projektas5'];

for (let i = 0; i < igyvendintiProjektai.length; i++) {
    console.log(`Projektas - ${i+1}: ${igyvendintiProjektai[i]}`);
}

// 9

let masyvas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < masyvas.length; i++) {
    if (masyvas[i] > 5) {
     console.log('Skaiciai esantys didesnis uz 5: ', masyvas[i]);
    }
}

//  10

let emptyArray2 = [];
let emptyArraySum = 0;

emptyArray2.push(Math.round(Math.random() * 10));
emptyArray2.push(Math.round(Math.random() * 10));
emptyArray2.push(Math.round(Math.random() * 10));
emptyArray2.push(Math.round(Math.random() * 10));
emptyArray2.push(Math.round(Math.random() * 10));

console.log(emptyArray2);

for (let i = 0; i < emptyArray2.length; i++) {
    if (emptyArray2[i] % 4 === 0) {
        emptyArraySum += emptyArray2[i];
    }
}
    console.log('Skaiciu kurie dalinasi is 4 suma: ', emptyArraySum);

// 11

let mokinioPazymiai = [10, 9, 8, 7, 6, 5, 8, 3, 10, 7];
let pazymiuSuma = 0;


for (let i = 0; i < mokinioPazymiai.length; i++) {
    pazymiuSuma += mokinioPazymiai[i];
}

let pazymiuVidurkis = pazymiuSuma / mokinioPazymiai.length;

console.log('Mokinio pazymiai: ', mokinioPazymiai);
console.log('Mokinio pazymiu vidurkis: ', pazymiuVidurkis); 

// 12

let grades = [];
let numberOfGrades = 10; 

for (let i = 0; i < numberOfGrades; i++) {
    grades.push(Math.floor(Math.random() * 10) + 1);
}
console.log('Grades: ', grades);

let sumOfGrades = 0;

for (let i = 0; i < grades.length; i++) {
    sumOfGrades += grades[i];
}
let averageGrade = sumOfGrades / grades.length;
console.log('Average Grade: ', averageGrade); 

let gradesAboveAverage = [];
for (let i = 0; i < grades.length; i++) {
    if (grades[i] > averageGrade) {
        gradesAboveAverage.push(grades[i]);
    }
}

console.log('Grades above average: ', gradesAboveAverage);


// 13

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 

for (let i = 0; i < numbers.length; i++) {

    let number = numbers[i];
    console.log('Number: ', number);
    
    if (number % 2 === 0) {
        console.log('Square of', number, ':', number * number);
    }
}

// 14


let studentoPazymiai = [];

for (let i = 0; i <= 10; i++) {
    studentoPazymiai.push(Math.floor(Math.random() * 9) + 2);
}

console.log('Studento pazymiai: ', studentoPazymiai);

for (let i = 0; i < studentoPazymiai.length; i++) {
    if (studentoPazymiai[i] >= 5) {
        console.log(`Studento pazymys: ${studentoPazymiai[i]}`);
    } else {
        console.log(`Studento pazymys: ${studentoPazymiai[i]} - neigiamas. Iki teigiamo pazymio truksta: ${5 - studentoPazymiai[i]}`);
    }
} 

// 15

let zodziuMasyvas = ['liepa', 'rugpjutis', 'spalis', 'gruodis', 'sausis', 'vasaris', 'kovas', 'balandis', 'geguze', 'birzelis'];
let raidziuSkaicius = 0;

for (let i = 0; i < zodziuMasyvas.length; i++) {
    console.log(zodziuMasyvas[i] , ' - raidziu skaicius zodyje -', zodziuMasyvas[i].length);
    raidziuSkaicius += zodziuMasyvas[i].length;
}
console.log('Raidziu skaicius visuose zodziuose: ', raidziuSkaicius);

// 16

let skMasyvas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let skSuma = 0;



for (let i = 0; i < skMasyvas.length; i++) {
    if (skMasyvas[i] % 3 == 0) {
        skSuma += skMasyvas[i];
    }
}

let skVidurkis =  skSuma / skMasyvas.length;
console.log(...skMasyvas)
console.log('Skaiciu kurie dalinasi is 3 suma: ', skSuma);
console.log('Skaiciu kurie dalinasi is 3 vidurkis: ', skVidurkis);

// 17 for of 

let zodziuMasyvas2 = ['liepa', 'rugpjutis', 'spalis', 'gruodis', 'sausis', 'vasaris', 'kovas', 'balandis', 'geguze', 'birzelis'];

for (let zodis of zodziuMasyvas2) {
    console.log(zodis);
}

// 18 for of

let pirkiniuSarasas = ['duona', 'pienas', 'saldainiai', 'sultys', 'kava', 'kakava', 'sokoladas', 'kefyras', 'degtine', 'alus'];

let pirkiniuSk = 0;

for (let preke of pirkiniuSarasas) {
    console.log('- ', preke);
    pirkiniuSk++;
}
console.log ('Pirkiniu sarase yra:', pirkiniuSk,  pirkiniuSk >=10 ? 'prekiu' : 'prekes');

// 19 for of

let pazymiuMasyvas = [10, 9, 8, 7, 6, 5, 8, 3, 10, 7];
let sum = 0;
for (let pazymys of pazymiuMasyvas) {
    
    console.log('Pazymys: ', pazymys);
    sum += pazymys;
}

console.log('Pazymiu vidurkis: ',  sum / pazymiuMasyvas.length);


// 20 for of

let kelionesAtstumai = [100, 200, 300, 400, 90, 600, 20, 800, 900, 1000];

for (let atstumas of kelionesAtstumai) {
    if (atstumas > 150) {
        console.log('Atstumas didesnis nei 150 km: ', atstumas);
    }
}

// 21 for of

let masyvasFailu = ['failas1.json', 'failas2.txt', 'failas3.json', 'failas4.txt', 'failas5.json', 'failas6.txt', 'failas7.jpg', 'failas8.png', 'failas9.json', 'failas10.txt'];

for (let failas of masyvasFailu) {
   if(failas.endsWith('.json') || failas.endsWith('.txt')) {
       console.log('Failas: ', failas);
   }
}

// 22 for of

let auto = ['Audi', 'BMW', 'VW', 'Toyota', 'Mazda', 'Ford', 'Opel', 'Fiat', 'Renault', 'Peugeot'];
for (let car of auto) {
    console.log('Automobilis: ', car , ' - ', car.length, 'raidziu');
}

// 23 for of

let errorCodes = ['ui87', 'sys12', 'net404', 'db500']
let errorMessages = [
    'Grafinės sąsajos klaida navigacijoje',
    'Trūksta operatyviosios atminties sistemoje',
    'Tinklo klaida: puslapis nerastas',
    'Duomenų bazės klaida'
]

for (let code of errorCodes) {
    let index = errorCodes.indexOf(code)
    if (index !== -1) {
        console.log(code, ':', errorMessages[index])
    } else {
        console.log(code, 'Nežinoma klaida')
    }
}


// 24 for of

let likuciai = [74, 54, 32, 100, 22]
let vidutinisPardavimuKiekis = 5
for (let likutis of likuciai) {
    let dienos = Math.ceil(likutis / vidutinisPardavimuKiekis)
    console.log(likutis + " vnt. prekės užteks maždaug " + dienos + " dienų.")
}


// 25 for of

let pazymiukai = []
for (let i = 0; i < 10; i++) {
    pazymiukai.push(Math.floor(Math.random() * 10) + 1)
}

let aves = 0
let neigiamuPazymiuKiekis = 0

for (const pazymys of pazymiukai) {
    aves += pazymys
    if (pazymys < 5) {
        neigiamuPazymiuKiekis++
    }
}

aves /= pazymiukai.length

console.log("Teigiami pažymiai: " + pazymiukai.join(", "))
console.log("Vidurkis: " + aves.toFixed(2))
console.log("Neigiamų pažymių kiekis: " + neigiamuPazymiuKiekis)


// 26 for of












