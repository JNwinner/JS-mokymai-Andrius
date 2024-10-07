// 1
function kodelProgramuoju () {
    console.log(`Mano vardas yra Justas. Programavimas man suteikia dziaugsma ir skausma.`);
}

kodelProgramuoju();
kodelProgramuoju();
kodelProgramuoju();

// 2

function eilerastis () {
    console.log(`Mano batai\nBuvo du\nIr juos aš\nNusipirkau\n`);
}

for (let i = 0; i < 5; i++) {
    eilerastis();
}

// 3

function tekstas1 () {
    console.log(`Tekstas 1`);
}

function tekstas2 () {
    console.log(`Tekstas 2`);
}

function tekstas3 () {
    console.log(`Tekstas 3`);
}

tekstas1();
tekstas2();
tekstas3();

// 4

function tekstoEilute () {
    return `Labas rytas, Lietuva!`;
}

function tekstoEilute2 () {
    return `Labas vakaras, Lietuva!`;
}

function tekstoEilutesViename () {
    return tekstoEilute() + ' ' + tekstoEilute2();
}

console.log(tekstoEilutesViename());

// 5

function suma () {
    let num1 = Math.round(Math.random() * 100);
    let num2 = Math.round(Math.random() * 100);
    let suma = num1 + num2;
    console.log(`${num1} + ${num2} = ${suma}`);
}

suma();
suma();
suma();

// 6

function policininkas () {
    let vardas = 'Jonas';
    let pavarde = 'Jonaitis';
    let amzius = 35;
    let atlyginimas = 1000;
    let etatas = 1;
    let specializacija = 'eismo patrulis';
    console.log(`Policininkas ${vardas} ${pavarde} dirba ${etatas} etatu, jo specializacija yra ${specializacija}.`);
}

policininkas();

// 7
function random () {
    let emptyArray1 = [];
    for(let i = 0; i <= 10; i++) {
        emptyArray1.push(Math.round(Math.random() * 10));
    }
    console.log(...emptyArray1);
}

for (let i = 0; i < 5; i++) {
    random();
}



// 8

function atsitiktinisSkaicius () {
    let skaicius = Math.round(Math.random() * 100);
    return skaicius;
}

for(let i = 0; i < 5; i++) {
    console.log(atsitiktinisSkaicius());
}

// 9

function sveikas (vardas) {
    console.log(`Labas, ${vardas}!`);
}

function viso (vardas) {
    console.log('Viso gero,' , vardas);
}

let fname = 'Justas';

sveikas(fname);
viso(fname);

// 10

function  kurisDidesnis (a, b) {
    if (a > b) {
        return `Didesnis yra ${a}`;
    } else if (a < b) {
        return `Didesnis yra ${b}`;
    } else {
        return `Skaiciai yra lygus`;
    }
}

console.log(kurisDidesnis(5, 10));
console.log(kurisDidesnis(10, 5));
console.log(kurisDidesnis(5, 5));

// 11

function auto (marke, modelis, metai, turis) {
    let automobilis = {
        marke: marke,
        modelis: modelis,
        metai: metai,
        turis: turis
    }

    console.log('Automobilio duomenys:')
    for (raktas in automobilis) {
        console.log(`${raktas}: ${automobilis[raktas]}`);
    }
}

auto('Audi', 'e-tron', 20023, 1.9);
auto('BMW', 'iX', 2024, 2.0);

// 12

function sudetis(num1, num2) {
    return `${num1} + ${num2} = ${num1 + num2}`;
}

function atimtis(num1, num2) {
    return `${num1} - ${num2} = ${num1 - num2}`;
}

function daugyba(num1, num2) {
    return `${num1} * ${num2} = ${num1 * num2}`;
}

function dalyba(num1, num2) {
    return `${num1} / ${num2} = ${num1 / num2}`;
}

function aritmetika() {
    let num1 = Math.round(Math.random() * 100);
    let num2 = Math.round(Math.random() * 100);
    
    console.log(sudetis(num1, num2));
    console.log(atimtis(num1, num2));
    console.log(daugyba(num1, num2));
    console.log(dalyba(num1, num2));
}

aritmetika();
aritmetika();
aritmetika();


// 13

function zodziai (zodziuMasyvas) {
    for (let i = 0; i < zodziuMasyvas.length; i++) {
        const zodis = zodziuMasyvas[i]
        const ilgis = zodis.length

        console.log(`${zodis} - ${ilgis} simboliai`)
    }
}

const zodziuMasyvas = ['Labas', 'rytas', 'JavaScript', 'funkcija']
zodziai(zodziuMasyvas)

// 14 

function skaiciuOperacijos(skaiciuMasyvas) {
    for (let i = 0; i < skaiciuMasyvas.length; i++) {
        const skaicius = skaiciuMasyvas[i];
        const kvadratas = skaicius * skaicius;
        const dalijimasIsDvieju = skaicius / 2;
        
        //isvedame skaiciu jo kvadrata ir dalijimasi is dvieju
        console.log(`Skaicius: ${skaicius}, Kvadratas: ${kvadratas}, Dalijimas is dvieju: ${dalijimasIsDvieju}`)
    }
}

const pirmasMasyvas = [3, 5, 7, 10];
const antrasMasyvas = [2, 4, 6, 8];

console.log("Pirmas masyvas:")
skaiciuOperacijos(pirmasMasyvas)
console.log("Antras masyvas:")
skaiciuOperacijos(antrasMasyvas)


// 15

function studentoInfo (vardas, pavarde, pazymiai) {
    console.log(`Studento vardas: ${vardas}`);
    console.log(`Studento pavarde: ${pavarde}`);

    console.log(`Pazymiai: ${pazymiai.join(', ')}`)

    const vidurkis = pazymiai.reduce((suma, pazymys) => suma + pazymys, 0) / pazymiai.length;
    console.log(`Vidurkis: ${vidurkis.toFixed(2)}`);
}

const studentas = {
    vardas: "Jonas",
    pavarde: "Jonaitis",
    pazymiai: [9, 8, 7, 6, 10]
}

studentoInfo(studentas.vardas, studentas.pavarde, studentas.pazymiai)

// 16

function rastiDidziausiaSk (skaiciuMasyvas) {
    if (skaiciuMasyvas.length === 0) {
        console.log(`Masyvas yra tuscias`);
        return
    }

    const didziausias = Math.max(...skaiciuMasyvas)
    console.log(`Didziausias skaicius: ${didziausias}`)
}

function generuotiAtsitiktiniusSk (masyvas, kiekis) {
    for (let i = 0; i < kiekis; i++) {
        masyvas.push(Math.floor(Math.random() * 100) +1 );
    }
}

const masyvas1 = [];
const masyvas2 = [];
const masyvas3 = [];

generuotiAtsitiktiniusSk(masyvas1, 10)
generuotiAtsitiktiniusSk(masyvas2, 7)
generuotiAtsitiktiniusSk(masyvas3, 8)


rastiDidziausiaSk(masyvas1)
rastiDidziausiaSk(masyvas2)
rastiDidziausiaSk(masyvas3)

// 17 
function tekstas() {
    return `fainas tekstas`
}

console.log(tekstas())

// 18
function randomSkaicius(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

for (let i = 0; i < 5; i++) {
    const skaicius = randomSkaicius(1, 100)
    console.log(`Atsitiktinis skaicius ${i + 1}: ${skaicius}`)
}

// 19 
function sakinys(studentas, vidurkis) {
    return `Studentas ${studentas} turi vidurki ${vidurkis}`
}

console.log(sakinys("Tomas", 8.7))
console.log(sakinys("Marius", 9.2))
console.log(sakinys("Laura", 7.5))

// 20

function maziausiasDaliklis(skaicius) {
    let daliklis = skaicius;
    for (let i = 2; i <= skaicius; i++) {
        if (skaicius % i === 0) {
            daliklis = i;
            break
        }
    }
    return daliklis;
}

for (let i = 10; i <= 30; i++) {
    const daliklis = maziausiasDaliklis(i);
    console.log(`Maziausias daliklis skaiciui ${i} yra: ${daliklis}`);
}

// 21

function arPirminis(skaicius) {
    if (skaicius <= 1) {
        return false
    } else if (skaicius <= 3) {
        return true
    } else if (skaicius % 2 === 0 || skaicius % 3 === 0) {
        return false
    }

    let daliklis = 5; //startuojam nuo 5, nes 2 ir 3 jau sutvarkem
    while(daliklis * daliklis <= skaicius) {
        if (skaicius % daliklis === 0 || skaicius % (daliklis + 2) === 0) {
            return false; //atsikratome visu skaiciu kurie dalijasi is 2 ir 3
        }
        daliklis += 6 // persokam ne pirminius skaicius, nes visi pirminiai skaiciai remiasi i formule: 6k - 1 arba 6k + 1, kur k= teigiamas skaicius.
    }
    return true;
}

// 22

// suma dvieju skaiciu

function sumaDu(sk1, sk2) {
    return sk1 + sk2
}

function sumaTrys(sk1, sk2, sk3) {
    return sk1 + sk2 + sk3
}

// skirtumas dvieju skaiciu 
function skirtumas(sk1, sk2) {
    return sk1 - sk2
}

// sandauga dvieju skaiciu 
function sandauga(sk1, sk2) {
    return sk1 * sk2
}
// Dalyba dvieju skaiciu 
function dalyba(sk1, sk2) {
    if (sk2 === 0) {
        return "Dalyba is nulio negalima"
    }
    return sk1 / sk2
}

function skaiciavimai() {
const skaicius1 = Math.floor(Math.random() * 100)
const skaicius2 = Math.floor(Math.random() * 100)
const skaicius3 = Math.floor(Math.random() * 100)


const rezultatas1 = sumaDu(skaicius1, skaicius2)
const rezultatas2 = skirtumas(skaicius1, skaicius2)
const rezultatas3 = sandauga(skaicius1, skaicius2)
const rezultatas4 = dalyba(skaicius1, skaicius2)
const rezultatas5 = sumaTrys(skaicius1, skaicius2, skaicius3)

console.log(`Skaicius 1: ${skaicius1}`)
console.log(`Skaicius 2: ${skaicius2}`)
console.log(`Skaicius 3: ${skaicius3}`)

console.log(`Suma: ${skaicius1} + ${skaicius2} = ${rezultatas1}`)
console.log(`Skirtumas: ${skaicius1} - ${skaicius2} = ${rezultatas2}`)
console.log(`Sandauga: ${skaicius1} * ${skaicius2} = ${rezultatas3}`)
console.log(`Dalyba: ${skaicius1} / ${skaicius2} = ${rezultatas4}`)
console.log(`Suma triju skaiciu: ${skaicius1} + ${skaicius2} + ${skaicius3} = ${rezultatas5}`)

}


// 23

function kokiaSuma(skaiciai) {
    let suma = 0
    for (let i = 0; i < skaiciai.length; i++) {
        suma += skaiciai[i]
    }
    return suma
}

let m1 = [5, 10, 15, 20]
let m2 = [3, 7, 11, 14]

let suma1 = kokiaSuma(m1)
let suma2 = kokiaSuma(m2)

console.log(`Masyvo 1 suma: ${suma1}`)
console.log(`Masyvo 2 suma: ${suma2}`)


if (suma1 > suma2) {
    console.log('Pirmo masyvo suma yra didesne')
} else if (suma1 < suma2) {
    console.log ('Antro masyvo suma yra didesne')
} else {
    console.log('Abieju masyvu sumos yra lygios.') 
}

// 24

function ilgiausiasZodis(zodziuMasyvas) {
    if (zodziuMasyvas.length === 0) {
        return 'Masyvas yra tuscias'
    }

    let ilgiausias = zodziuMasyvas[0]
    let ilgis = ilgiausias.length

    for (let i = 1; i < zodziuMasyvas.length; i++) {
        let zodis = zodziuMasyvas[i]
        if (zodis.length > ilgis) {
            ilgiausias = zodis
            ilgis = zodis.length
        }
    }

    return ilgiausias
}

zodziai = ['Obuolys', 'Bananas', 'Kriause', 'Mandarinas', 'Avokadas']
const ilgiausias = ilgiausiasZodis(zodziai)

console.log(`Ilgiausias zodis: ${ilgiausias}`)
console.log(`Ilgis: ${ilgiausias.length}`)


// 25 

function teigiamiPazymiai(pazymiai) {
    for (let i = 0; i < pazymiai.length; i++) {
        if (pazymiai[i] < 5) {
            return false
        }
    }
    return true
}

function keiciamTekstu(atsakymas) {
    return atsakymas ? 'Visi studento pazymiai teigiami' : 'studentas turi bent viena neigiama pazymi'
}

let pazymiai1 = [8, 9, 10, 7]
let pazymiai2 = [10, 5, 4, 7, 2]

const ats1 = teigiamiPazymiai(pazymiai1)
const ats2 = teigiamiPazymiai(pazymiai2)

console.log(keiciamTekstu(ats1))
console.log(keiciamTekstu(ats2))


// 26
// Funkcijos objektuose (metodai)

let darbuotojas = {
    vardas: 'Jonas',
    pavarde: 'Jonaitis',
    dabartinisAtlyginimas: 1000,
    etatas: 1,
    skaiciuotiAtlyginima: function(procentai) {
        let naujasAtlyginimas = this.dabartinisAtlyginimas * (1 + procentai / 100)
        return naujasAtlyginimas
    },
    atlyginimoPokytis: function(naujasEtatas) {
        let naujasAtlyginimas = this.dabartinisAtlyginimas * naujasEtatas
        let atlyginimoKitimas = this.dabartinisAtlyginimas - naujasAtlyginimas
        return atlyginimoKitimas
    },
}

console.log('Dabartinis atlyginimas:', darbuotojas.dabartinisAtlyginimas)
let procentai = 10 // pavyzdziui pakelti atlyginima 10%
let naujasAtlyginimas = darbuotojas.skaiciuotiAtlyginima(procentai)
console.log('Naujas atlyginimas po pakelimo', procentai + "%:", naujasAtlyginimas)

let naujasEtatas = 0.5 // Pavyzdziui, sumazinti etata iki puses 
let atlyginimoKitimas = darbuotojas.atlyginimoPokytis(naujasEtatas)
console.log("Atlyginimo kitimas po etato pakeitimo:", atlyginimoKitimas)