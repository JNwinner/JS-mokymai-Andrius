"use strict";
let vardai = ['Tomas', 'Diana', 'Saulius'];
let amziai = [2, 2, 10, 9, 7];
vardai.push('Tautvydas');
amziai.push(27);
let vaisiai = ['obuoliai', 'mangai', 'bananai'];
const vaisius = vaisiai[2];
let daiktai = [1, true, 'labas'];
const daiktas = daiktai[2];
let vartotojas = {
    vardas: 'Tomas',
    amzius: 23,
    id: 1
};
vartotojas.vardas = "Giedrius";
vartotojas.amzius = 25;
let asmuo = {
    vardas: 'Saulius',
    amzius: 38
};
asmuo.vardas = 'Paulina';
asmuo.amzius = 28;
function suma(a, b) {
    return a + b;
}
const atimtis = (a, b) => {
    return a - b;
};
suma(9, 3);
atimtis(8, 5);
function sudetis(items) {
    const viso = items.reduce((sum, c) => sum + c, 0);
    console.log(viso);
    return viso;
}
sudetis([5, 7, 13, 17, 3, 5]);
// any
let myName = 'Darius';
myName = 40;
let title;
title = 25;
title = 'Tomas';
let daiktai2 = ['labas', 1, 2, 'hello', true];
daiktai2.push({ id: 15 });
console.log(daiktai2);
function sudeti(value) {
    return value + value;
}
const pirmas = sudeti('labas');
console.log(pirmas);
// tuples - turi buti surusiuoti pagal numatyta seka
let person = ['Aidas', 30, true];
let hsla;
hsla = [200, '100%', '65%', 0.5];
function useCoords() {
    const lat = 100;
    const long = 57;
    return [lat, long];
}
const [lat, long] = useCoords();
let user;
user = ['Domantas', 27];
const pirmasAutorius = { name: 'James', avatar: 'img/james.png' };
const newPost = {
    title: 'Pirmas irasas',
    body: 'Idomi istorija',
    tags: ['gaming', 'tech'],
    created_at: new Date(),
    author: pirmasAutorius
};
function createPost(post) {
    console.log(`Created post ' ${post.title}`);
}
function randomColor() {
    const r = Math.floor(Math.random() * 225 + 1);
    const g = Math.floor(Math.random() * 225 + 1);
    const b = Math.floor(Math.random() * 225 + 1);
    return [r, g, b];
}
const pirmaSpalva = randomColor();
const antraSpalva = randomColor();
console.log(pirmaSpalva, antraSpalva);
const pirmasMokinys = { name: 'Jonas', grade: 8 };
function formatMokinys(mokinys) {
    console.log(`${mokinys.name} gavo pazymi: ${mokinys.grade}`);
}
formatMokinys(pirmasMokinys);
formatMokinys({ name: 'Vaida', grade: 9 });
let id;
id: 1;
id: '2';
let email = null;
email = 'tomas@tomauskas.lt';
email = null;
let kitasId;
kitasId = 'wdsffsf';
kitasId = 23;
function keistiIdTipa(id) {
    if (typeof id === 'string') {
        return parseInt(id);
    }
    else {
        return id.toString();
    }
}
const pirmasId = keistiIdTipa(1);
const antrasId = keistiIdTipa('2');
console.log(pirmasId, antrasId);
const kazkas = { quantity: 300 };
function printQuantityti(item) {
    console.log(`The quantity of the item is ${item.quantity}`);
}
const vaisius2 = { name: 'mangas', quantity: 50 };
printQuantityti(vaisius2);
function sudetis2(a, b) {
    return a + b;
}
function daugyba(pirmas, antras) {
    return pirmas * antras;
}
function kvadratu(num) {
    return num * num;
}
function sujungtiSkaiciai(num1, num2) {
    return `${num1}${num2}`;
}
let skaiciavimai = [];
skaiciavimai.push(sudetis2);
skaiciavimai.push(daugyba);
skaiciavimai.push(kvadratu);
// skaiciavimai.push(sujungtiSkaiciai) bus klaida nes turi buti number
