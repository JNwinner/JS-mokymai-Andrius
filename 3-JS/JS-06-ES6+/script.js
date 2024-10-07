// Ar tekstas prasideda / baigiasi nurodytais simboliais?
// .startsWith  .endsWith 

let message = 'This is my first message';

console.log(message.startsWith('This')); // true
console.log(message.startsWith('this')); // false

console.log(message.endsWith('e')); // true



// Ar yra tekste nurodyti simboliai (arba žodžiai)
// .includes

message = 'This is my first message';

console.log(message.includes('my')); // true
console.log(message.includes('not')); // false



// Kurioje pozicijoje prasideda nurodytas tekstas
// .indexOf

message = 'This is my first message';
console.log(message.indexOf('my')); // 8


// Simbolių (žodžių) pakeitimas kitais
// .replace

message = 'This is my first message';

// grąžina naują string ir nekeičia originalo
console.log(message.replace('first', 'second')); // This is my second message

// Raidžių pavertimas didžiosiomis / mažosiomis
// .toUpperCase   .toLowerCase 


message = 'This is my first message';

console.log(message);
console.log(message.toUpperCase()); // returns new string
console.log(message.toLowerCase()); // returns new string


// Teksto apkarpymas
// .trim   .trimStart    .trimEnd 

const messageToTrim = ' some text ';

console.log(messageToTrim);

console.log('.' + messageToTrim.trim() + '.'); // apkarpys iš abiejų pusių
console.log('.' + messageToTrim.trimStart() + '.'); // apkarpys iš kairės
console.log('.' + messageToTrim.trimEnd() + '.'); // apkarpys iš dešinės

// Masyvo papildymas
// .push .unshift .splice 

let skaiciaiPild = [8, 4, 2];

// Pridėjimas gale
skaiciaiPild.push(-3);

// Pridėjimas priekyje
skaiciaiPild.unshift(-1);

// Pridėjimas viduryje
skaiciaiPild.splice(2, 0, -10, -7);

console.log('masyvo papildymas', skaiciaiPild);


// Masyvų apjungimas
// .concat 

let pirmas = [4, 7, 8, 6];

let antras = [3, 2, 5, 8];

let sujungtas = pirmas.concat(antras);

console.log('sujungtas', sujungtas);



// Masyvo iškarpa
// .slice
let skaiciai = [8, 9, 3, 2, 5, 8, 7];

let iskarpa = skaiciai.slice(2, 4);

console.log('iskarpa', iskarpa);


// Masyvo kopija
// .slice 

skaiciai = [8, 9, 3, 2, 5, 8, 7];

let kopija = skaiciai.slice();

console.log('kopija', kopija);

let kopija2 = [...skaiciai];

console.log('kopija', kopija2);


//spread operator (1)
let skaiciai1 = [1, 2, 3, 4];

let skaiciai2 = [5, 6, 7];

let sujungtiSkaiciai = [...skaiciai1, ...skaiciai2];

console.log('sujungti skaiciai', sujungtiSkaiciai);


// spread operator (2)
let skaiciai4 = [8, 7, 9, 6];

let skaiciai5 = [6, 9, 8];

skaiciai4.push(...skaiciai5);

console.log('papildytas skaiciu masyvas', skaiciai4);

// spread operator (3)

let dog = { name: 'Toby', age: 3, race: 'Beagle', size: 'small' }

// Kopijuoti šuns objektą ir atnaujinti jo reikšmes

let puppy = { ...dog, name: 'Max', age: 1 };

console.log('puppy objektas', puppy);

console.log('suns objektas', dog);


// spread operator (4)

let pirmiSk = [7, 8, 9];

let antriSk = [5, 7, 4];

let sujungtiSk = [...pirmiSk, 'a', ...antriSk, 'b'];

console.log('sujungti sk', sujungtiSk);

// Skaičių šalinimas iš masyvo
// .pop   .shift  .splice

let skaiciaiSal = [7, 8, 6, 5, 7, 4, 2, 3];

// Šalinimas iš galo
skaiciaiSal.pop();

// Šalinimas iš priekio
skaiciaiSal.shift();

// Šalinimas iš vidurio

skaiciaiSal.splice(2, 3);

console.log('skaiciu salinimas', skaiciaiSal);


// Masyvo išvalymas (1)
let skIsvalymui = [1, 2, 3, 4];

let skPriklausomi = skIsvalymui;

skIsvalymui = [];

console.log('originalus skaiciai', skIsvalymui);

console.log('kitas masyvas', skPriklausomi);


// Masyvo išvalymas (2)
skIsvalymui = [1, 2, 3, 4];

skPriklausomi = skIsvalymui;

skIsvalymui.length = 0;

console.log('originalus skaiciai', skIsvalymui);


// Masyvo išvalymas (3)
skIsvalymui = [1, 2, 3, 4];

skPriklausomi = skIsvalymui;

skIsvalymui.splice(0, skIsvalymui.length);

console.log('originalus skaiciai', skIsvalymui);

console.log('kitas masyvas', skPriklausomi);

// Masyvo isvalymas(4) 
skIsvalymui = [1, 2, 3, 4];

skPriklausomi = skIsvalymui;

while (skIsvalymui.length > 0) {

    skIsvalymui.pop();

}

console.log('originalus skaiciai', skIsvalymui);

console.log('kitas masyvas', skPriklausomi);


// Patikrinimas ar masyve yra elementas
// .includes 

skaiciai = [4, 7, 8, 9, 6, 5, 8, 2];

console.log('skaiciai', skaiciai);

let arYra1 = skaiciai.includes(3);

console.log('ar 3 yra', arYra1);

let arYra2 = skaiciai.includes(8);

console.log('ar 8 yra', arYra2);

// Indekso paieška
// .indexOf
skaiciai = [4, 7, 8, 9, 6, 5, 8, 2];

console.log('skaiciai', skaiciai);

let rastasIndeksas = skaiciai.indexOf(8);

console.log('skaiciaus 8 indeksas', rastasIndeksas);

let rastasPaskutinioIndeksas = skaiciai.lastIndexOf(8);

console.log('paskutinio 8 skaiciaus indeksas',

    rastasPaskutinioIndeksas);

// Paieška (1)
// .find


let zmones = [

    { vardas: 'Tomas', pavarde: 'Tomauskas', amzius: 21 },
    { vardas: 'Greta', pavarde: 'Gretauskiene', amzius: 22 },
    { vardas: 'Paulius', pavarde: 'Paulenas', amzius: 20 },

];

console.log('zmones', zmones);

let rastasZmogus1 = zmones.find(zmogus => {
    return zmogus.vardas === 'Paulius'

});
console.log('rastas zmogus', rastasZmogus1);

// Paieska (2)
// .find 

zmones = [

    { vardas: 'Tomas', pavarde: 'Tomauskas', amzius: 21 },

    { vardas: 'Greta', pavarde: 'Gretauskiene', amzius: 22 },

    { vardas: 'Paulius', pavarde: 'Paulenas', amzius: 20 },

];

console.log('zmones', zmones);

let rastasZmogus2 = zmones.find(zmogus => zmogus.vardas ===

    'Paulius');

console.log('rastas zmogus', rastasZmogus2);

// Paieska (3)
// .findIndex

zmones = [

    { vardas: 'Tomas', pavarde: 'Tomauskas', amzius: 20 },

    { vardas: 'Greta', pavarde: 'Gretauskiene', amzius: 20 },

    { vardas: 'Paulius', pavarde: 'Paulenas', amzius: 20 },

];

console.log('zmones', zmones);

let rastoZmogIndeksas = zmones.findIndex(zmogus => zmogus.vardas ===

    'Greta');

console.log('rasto zmogaus indeksas', rastoZmogIndeksas);

// Paieska (4)



zmones = [

    { vardas: 'Tomas', pavarde: 'Tomauskas', amzius: 20 },

    { vardas: 'Greta', pavarde: 'Gretauskiene', amzius: 20 },

    { vardas: 'Paulius', pavarde: 'Paulenas', amzius: 20 },

];

console.log('zmones', zmones);

let nerastasZmogus = zmones.find(zmogus => zmogus.vardas ===

    'Jaronimas');

console.log('zmogus nerastas', nerastasZmogus);


// Ėjimas per masyvą (1)
skaiciai = [4, 8, 7, 2, 3];

for (let skaicius of skaiciai) {

    console.log(skaicius);

}

// Ėjimas per masyvą (2)
// .forEach

let skaiciai6 = [4, 8, 7, 2, 3]

skaiciai6.forEach(function (skaicius) {
    console.log(skaicius)
})

skaiciai6.forEach(skaicius => {
    console.log(skaicius)
})

skaiciai6.forEach(skaicius => console.log(skaicius))


skaiciai6.forEach((skaicius, indeksas) => console.log(indeksas + ' - ' + skaicius))

// Masyvo elementų apjungimas į teksto eilutę
//join
let tekstas = skaiciai6.join(', ')
console.log('sujungtas i tekstas', tekstas)

// Teksto eilutės pavertimas į masyvo elementus
//split
tekstas = 'Koks nors sakinys is keliu zodziu';
let zodziai = tekstas.split(' ')
console.log('zodziai is teksto eilutes:', zodziai)


// Rikiavimas (1)
//sort
let surikiuotiSkaiciai = skaiciai6.sort()
console.log('Surikiuoti skaiciai didiejimo tvarka:', surikiuotiSkaiciai)

let courses = [
    { id: 1, name: 'Node.js' },
    { id: 2, name: 'Javascript' }
]

courses.sort(function (a, b) {
    let nameA = a.name.toLocaleLowerCase()
    let nameB = b.name.toLocaleLowerCase()
    if (a.name < b.name) return -1
    if (a.name > b.name) return 1
})

console.log(courses)


//reverse
let atvirksiciaiSurikiuoti = skaiciai6.reverse()
console.log('Surikiuoti skaiciai mazejimo tvarka:', atvirksiciaiSurikiuoti)

//every

let visiTeigiami = skaiciai6.every(function (skaicius) {
    return skaicius > 0
})

console.log('Visi skaiciai yra teigiami:', visiTeigiami)

skaiciai6 = [5, 7, 9, -1, 4, -3]

let arYraTeigiamu = skaiciai6.some(function (skaicius) {
    return skaicius > 0
})

console.log('Yra bent vienas teigiamas skaicius:', arYraTeigiamu)

let tikTeigiami = skaiciai6.filter(skaicius => skaicius > 0)

console.log('Tik teigiami skaiciai:', tikTeigiami)

let lyginiai = skaiciai6.filter(skaicius => skaicius % 2 === 0)
console.log('lyginiai skaiciai:', lyginiai)

console.log(skaiciai6)

// map
let dvigubinti = skaiciai6.map(x => x * 2)
console.log('Dvigubi skaiciai:', dvigubinti)

let pak = skaiciai6.map(x => x + (x % 2 === 0 ? ' lyginis' : ' nelyginis'))
console.log('lyginis ar nelyginis:', pak)

let suformuotiZmones = zmones.map(x => `${x.vardas} ${x.pavarde} (${x.amzius} m.)`)
console.log('Suformuoti zmones:', suformuotiZmones)

let sarasas = zmones.map(x => `<li>${x.vardas} ${x.pavarde} (${x.amzius} m.)</li>`)
console.log('sarasas:', sarasas)

let skaiciai7 = [1, 2, 3, 4]

let punktai = skaiciai7.map(x => '<li>' + x + '</li>')
console.log('saras su punktais:', punktai)

let html = '<ul>' + punktai.join('') + '</ul>'
console.log('Galutinis html:', html)

// let objektai = skaiciai7.map(x => {
//     let obj = {reiksme: x}
//     return obj
// })


// let objektai = skaiciai7.map(n => {
//     return {reiksme: n}
// })

let objektai = skaiciai7.map(n => ({ reiksme: n }))


console.log('pakeista i objekta:', objektai)


let skaiciai8 = [9, -2, -3, 7, 5, 6, -9]

let atrinktiSk = skaiciai8
    .filter(x => x > 0)
    .sort()
    .map(x => `<li>${x}</li>`)

    console.log('atrinkti sarasdui ir surikiuoti:', atrinktiSk)

    // let suma = 0 

    // for (let skaicius of skaiciai8) {
    //     suma += skaicius
    // }


    // accumulator = suma
    // currentValue = viena reiksme is masyvo
// let suma = skaiciai8.reduce((accumulator, currentValue) => {return accumulator + currentValue}, 0)
// console.log(suma)

let suma = skaiciai8.reduce((dalineSuma, skaicius) => dalineSuma + skaicius)
console.log(suma)

// Datos 
//  new Date

const now = new Date()
const date1 = new Date('May 11 2015 09:00')
const date2 = new Date(2018, 4, 11, 9)

console.log(`${now}\n ${date1}\n ${date2}`)

// now.setFullYear(2022)
// console.log(now)
console.log(now.getFullYear())

console.log(now.toDateString())

console.log(now.toTimeString())

console.log(now.toISOString())

console.log(now.toLocaleDateString('lt'))













