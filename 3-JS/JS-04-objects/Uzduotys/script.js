// 1 

const studentas = {
    vardas: 'Jonas',
    pavarde: 'Jonaitis',
    amzius: 25,
    ugis: 180,
    studijuPrograma: 'Informatika',
    asiskaitytaKreditu: 120,
    pazymiai: [10, 8, 6, 4, 7],
    kursas: 3,
    mokykla: 'Vilnius Tech'
}

console.log(studentas);
console.log(studentas.vardas);
console.log(studentas.amzius);
console.log(studentas.mokykla);

// 2

const filmas = {
    pavadinimas: 'Avatar',
    rezisierius: 'James Cameron',
    biudzetas: 237000000,
    pajamos: 2787965087,
    zanras: 'fantastinis',
    trukme: 162,
    metai: 2009,
    aktoriai: ['Sam Worthington', 'Zoe Saldana', 'Sigourney Weaver']
}

console.log(filmas);
console.log(`Pelnas yra ${filmas.pajamos - filmas.biudzetas} USD`);
console.log(filmas.aktoriai.length);
console.log(`Sukurtas pries: ${new Date(Date.now()).getFullYear() - filmas.metai} metu`);

// 3

const  knyga1 = {
    pavadinimas: 'War and Peace',
    autorius: 'Lev Tolstoy',
    zanras: 'novel',
    kaina: 14.63,
    psl: 1225,
    skyriai: ['Chapter 1', 'Chapter 2', 'Chapter 3'],
    metai: 1867,
    knygynuose: true
}

const knyga2 = {
    pavadinimas: 'The Great Gatsby',
    autorius: 'F. Scott Fitzgerald',
    zanras: 'novel',
    kaina: 12.83,
    psl: 180,
    skyriai: ['Chapter 1', 'Chapter 2', 'Chapter 3', 'Chapter 4', 'Chapter 5'],
    metai: 1925,
    knygynuose: false
}

console.log(knyga1, knyga2);
console.log(knyga1.psl > knyga2.psl ? "pirma knyga ilgesne" : "antra knyga ilgesne");
console.log(knyga1.skyriai.length > knyga2.skyriai.length ? "pirma knyga turi daugiau skyriu" : "antra knyga turi daugiau skyriu");

if(knyga1.kaina > knyga2.kaina) {
    if(knyga2.kaina*2 > knyga1.kaina) {
        console.log('Dvi pigesnės knygos kainuoja daugiau nei viena brangesnė')
    } else {
        console.log('Brangesnė knyga kainuoja daugiau nei dvi pigesnės')
    }
} else {
    if(knyga1.kaina*2 > knyga2.kaina) {
        console.log('Dvi pigesnės knygos kainuoja daugiau nei viena brangesnė')
    } else {
        console.log('Brangesnė knyga kainuoja daugiau nei dvi pigesnės')
    }
}

// 4

const preke1 = {
    pavadinimas: "Preke 1",
    kaina: 50,
    savikaina: 30,
    kodas: "P1",
    turimasKiekis: 100,
    dėžėsMatmenys: { x: 10, y: 5, z: 8 }
}

const preke2 = {
    pavadinimas: "Preke 2",
    kaina: 70,
    savikaina: 40,
    kodas: "P2",
    turimasKiekis: 75,
    dėžėsMatmenys: { x: 12, y: 6, z: 10 }
}

const preke3 = {
    pavadinimas: "Preke 3",
    kaina: 90,
    savikaina: 55,
    kodas: "P3",
    turimasKiekis: 50,
    dėžėsMatmenys: { x: 8, y: 4, z: 6 }
}

console.log('Peke  1:', preke1);
console.log('Peke  2:', preke2);
console.log('Peke  3:', preke3);

// isvesti visu prekiu kainas
console.log(`Preke 1 kainuoja - ${preke1.kaina}, Preke 2 kainuoja - ${preke2.kaina}, Preke 3 kainuoja - ${preke3.kaina}`);
// rasti ir isvesti brangiausia preke
const prekes = [preke1, preke2, preke3];
let brangiausiaPreke = prekes[0];

for(let i = 1; i < prekes.length; i++) {
    if(prekes[i].kaina > brangiausiaPreke.kaina) {
        brangiausiaPreke = prekes[i];
    }
}

console.log(`Brangiausia preke yra: ${brangiausiaPreke.pavadinimas}, Kaina: ${brangiausiaPreke.kaina}`);

// Isvesti dezes turi kiekvienai prekei

console.log(`Preke 1 dezes turis: ${preke1.dėžėsMatmenys.x * preke1.dėžėsMatmenys.y * preke1.dėžėsMatmenys.z}`);
console.log(`Preke 2 dezes turis: ${preke2.dėžėsMatmenys.x * preke2.dėžėsMatmenys.y * preke2.dėžėsMatmenys.z}`);
console.log(`Preke 3 dezes turis: ${preke3.dėžėsMatmenys.x * preke3.dėžėsMatmenys.y * preke3.dėžėsMatmenys.z}`);

// Isvesti pelninguma kiekvienai prekei

console.log(`Preke 1 pelningumas: ${(preke1.kaina - preke1.savikaina) * preke1.turimasKiekis}`);
console.log(`Preke 2 pelningumas: ${(preke2.kaina - preke2.savikaina) * preke2.turimasKiekis}`);
console.log(`Preke 3 pelningumas: ${(preke3.kaina - preke3.savikaina) * preke3.turimasKiekis}`);

// 5

const automobilis = {
    marke: "Toyota",
    modelis: "Corolla",
    rida: 200000,
    gamybosMetai: 2005,
    spalva: "raudona",
    darbinisTuris: 1.6,
    dauzta: false,
    parduodama: true
}

// isvesti visa automobilio informacija
console.log('Automobilio informacija:');
console.log(`Marke: ${automobilis.marke}`);
console.log(`Modelis: ${automobilis.modelis}`);
console.log(`Rida: ${automobilis.rida}`);
console.log(`Gamybos metai: ${automobilis.gamybosMetai}`);
console.log(`Spalva: ${automobilis.spalva}`);
console.log(`Darbinis turis: ${automobilis.darbinisTuris}`);
console.log(`Dauzta: ${automobilis.dauzta ? 'Taip' : 'Ne'}`);
console.log(`Parduodama: ${automobilis.parduodama ? 'Taip' : 'Ne'}`);

//  Paskaiciuoti kiek metu automobiliui 

const dabartiniaiMetai = new Date(Date.now()).getFullYear();
const amzius = dabartiniaiMetai - automobilis.gamybosMetai;
console.log(`Automobilis yra ${amzius} metu`);

// Paskaiciuoti vidutini nuvaziuotu kilometru kieki per metus

const vidutinisKilometruKiekis = automobilis.rida / amzius;
console.log(`Vidutinis kilometru kiekis per metus: ${vidutinisKilometruKiekis}`);

// 6

const knyga = {
    pavadinimas: 'Harry Potter and the Sorcerer"s Stone',
    autorius: 'J.K. Rowling',
    puslapiai: 223,
    leidimoMetai: 1997,
    kalba: 'anglų',
}

// Objekto informacijos isvedimas 

console.log('Knygos informacija:');
console.log(`Pavadinimas: ${knyga.pavadinimas}`);
console.log(`Autorius: ${knyga.autorius}`);
console.log(`Puslapiai: ${knyga.puslapiai}`);
console.log(`Leidimo metai: ${knyga.leidimoMetai}`);
console.log(`Kalba: ${knyga.kalba}`);

// Apskaitiuoti kiek metu praejo nuo knygos isleidimo

const dabartiniaiMetai2 = new Date(Date.now()).getFullYear();
const amzius2 = dabartiniaiMetai2 - knyga.leidimoMetai;
console.log(`Knyga yra ${amzius2} metu senumo`);

//  objektas su informacija apie ora 

const oras = {
    temperatura: 25,
    vejas: 5,
    krituliai: 0,
    debesuotumas: 0,
    vejoKryptis: 'p',
    miestas: 'Vilnius'
}

// Objekto informacijos isvedimas

console.log('Oras:');
console.log(`Temperatura: ${oras.temperatura}`);
console.log(`Vejas: ${oras.vejas}`);
console.log(`Krituliai: ${oras.krituliai}`);
console.log(`Debesuotumas: ${oras.debesuotumas}`);
console.log(`Vejo kryptis: ${oras.vejoKryptis}`);
console.log(`Miestas: ${oras.miestas}`);











