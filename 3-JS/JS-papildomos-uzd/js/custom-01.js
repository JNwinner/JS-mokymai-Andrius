/*
Uždavinių sprendimui nenaudoti, masyvų, ciklų ir savo parašytų funkcijų. JavaScript funkcijas žinoma naudokite (pageidautina).
Visi random generuojami skaičiai turi būti sveikieji.
*/

/* 01.
Sukurkite 4 kintamuosius, kurie saugotų jūsų vardą, pavardę, gimimo metus ir šiuos metus (nebūtinai tikrus). Parašykite kodą, kuris pagal gimimo metus paskaičiuotų jūsų amžių ir naudodamas vardo ir pavardės kintamuosius atspausdintų tokį sakinį :
"Aš esu Vardenis Pavardenis. Man yra XX metai(-ų)".
*/

let  vardas = 'Justas'
let pavarde = 'Narijauskas'
let gimimoMetai = 1988
const now = new Date;

console.log(`As esu ${vardas} ${pavarde}. Man yra ${now.getFullYear() - gimimoMetai} metai.`)



/* 02.
Naudokite funkciją Math.random(). Sukurkite du kintamuosius ir naudodamiesi funkcija Math.random() jiems priskirkite atsitiktines reikšmes nuo 0 iki 4. Didesnę reikšmę padalinkite iš mažesnės. Atspausdinkite rezultatą jį suapvalinę iki 2 skaičių po kablelio.
*/
let rNum1 = Math.random() * 4 + 1;
let rNum2 = Math.random() * 4 + 1;

if (rNum1 > rNum2 ) {
    let result = rNum1 / rNum2
    console.log(`${rNum1} / ${rNum2} = ${result.toFixed(2)}`)
    
} else {
    result = rNum2 / rNum1
    console.log(`${rNum2} / ${rNum1} = ${result.toFixed(2)}`)
}


/* 03.
Naudokite funkciją Math.random(). Sukurkite tris kintamuosius ir naudodamiesi funkcija Math.random() jiems priskirkite atsitiktines reikšmes nuo 0 iki 25. Raskite ir atspausdinkite kintąmąjį turintį vidurinę reikšmę.
*/

let randomNum1 = Math.floor(Math.random() * 26);
let randomNum2 = Math.floor(Math.random() * 26);
let randomNum3 = Math.floor(Math.random() * 26);

let randomNumbers = [randomNum1, randomNum2, randomNum3];

console.log(`Generated number: ${randomNumbers}`)

randomNumbers.sort((a,b) => a - b );

let middleValue = randomNumbers[1];

console.log(`The middle value is: ${middleValue}`)



/* 04.
Įvedami skaičiai - kr1, kr2, kr3 – kraštinių ilgiai, trys kintamieji (naudokite ​Math.random()​ funkcija nuo 1 iki 10). Parašykite JavaScript programą, kuri nustatytų, ar galima sudaryti trikampį ir atsakymą atspausdintų. 
*/

let kr1 = Math.floor(Math.random() * 10) +1;
let kr2 = Math.floor(Math.random() * 10) +1;
let kr3 = Math.floor(Math.random() * 10) +1;

console.log(`Generated side lengths: kr1 = ${kr1}, kr2 = ${kr2}, kr3 = ${kr3}`)

let canFormTriangle = (kr1 + kr2 > kr3) && (kr1 + kr3 > kr2) && (kr2 + kr3 > kr1)

if (canFormTriangle) {
    console.log('The sides can form a triangle')
} else {
    console.log('The sides cannot form a triangle')
}


/* 05.
Sukurkite keturis kintamuosius ir ​Math.random()​ funkcija sugeneruokite jiems reikšmes nuo 0 iki 2. Suskaičiuokite kiek yra nulių, vienetų ir dvejetų.
*/

let randomN1 = Math.floor(Math.random() * 3 );
let randomN2 = Math.floor(Math.random() * 3 );
let randomN3 = Math.floor(Math.random() * 3 );
let randomN4 = Math.floor(Math.random() * 3 );

console.log(randomN1, randomN2, randomN3, randomN4)

let array = [randomN1, randomN2, randomN3, randomN4]

let nuliai = 0;
let vienetai = 0;
let dvejetai = 0;

for(let i = 0; i < array.length; i++) {
    if (array[i] == 0) {
        nuliai++
    } else if (array[i] == 1) {
        vienetai++
    }  else {
        dvejetai++
    }
}

console.log(` Is viso yra nuliu: ${nuliai}\n Is viso yra vienetu: ${vienetai}\n Is viso yra dvejetu: ${dvejetai}`)


/* 06.
Naudokite funkcija Math.random(). Atspausdinkite 3 skaičius nuo -10 iki 10. Skaičiai mažesni už 0 turi būti  laužtiniuose skliaustuose [], 0 -  (), didesni už 0 {}.
*/

let emptyArray = []

for (let i = 0; i <= 2; i++) {
    emptyArray.push(Math.floor(Math.random() * 21) - 10);
}

console.log('Generated numbers:', emptyArray);

for (let i = 0; i < emptyArray.length; i++) {
    if (emptyArray[i] < 0) {
        console.log(`[${emptyArray[i]}]`);
    } else if (emptyArray[i] === 0) {
        console.log(`(${emptyArray[i]})`);
    } else {
        console.log(`{${emptyArray[i]}}`);
    }
}



/* 07.
Įmonė parduoda žvakes po 1 EUR. Perkant daugiau kaip už 1000 EUR taikoma 3 % nuolaida, daugiau kaip už 2000 EUR - 4 % nuolaida. Parašykite programą, kuri skaičiuos žvakių kainą ir atspausdintų atsakymą kiek žvakių ir kokia kaina perkama. Žvakių kiekį generuokite ​Math.random()​ funkcija nuo 5 iki 3000.
*/

let zvakiuKiekis = Math.floor(Math.random() * 2996) + 5;
let priceOne = 1;
let totalPrice = priceOne * zvakiuKiekis


if (totalPrice > 1000 && totalPrice < 2000 ) {
    totalPrice *= 0.97
    console.log(`Jus perkate: ${zvakiuKiekis} vnt. zvakiu.\n Kaina: ${totalPrice.toFixed(2)} Eur. (Pritaikyta 3% nuolaida)`)
} else if (totalPrice > 2000) {
    totalPrice *= 0.96
    console.log(`Jus perkate: ${zvakiuKiekis} vnt. zvakiu.\n Kaina: ${totalPrice.toFixed(2)} Eur. (Pritaikyta 4% nuolaida)`)
}  else {
    console.log(`Jus perkate: ${zvakiuKiekis} vnt. zvakiu.\n Kaina: ${totalPrice} Eur.`)
}




/* 08.
Naudokite funkciją Math.random(). Sukurkite tris kintamuosius su atsitiktinėm reikšmėm nuo 0 iki 100. Paskaičiuokite jų aritmetinį vidurkį. Tada aritmetinį vidurkį atmetus tas reikšmes, kurios yra mažesnės nei 10 arba didesnės nei 90. Abu vidurkius atspausdinkite. Rezultatus apvalinkite iki sveiko skaičiaus.
*/



/* 09.
Padarykite skaitmeninį laikrodį, rodantį valandas, minutes ir sekundes. Valandom, minutėm ir sekundėm sugeneruoti panaudokite funkciją Math.random(). Sugeneruokite skaičių nuo 0 iki 300. Tai papildomos sekundės. Skaičių pridėkite prie jau sugeneruoto laiko. Atspausdinkite laikrodį prieš ir po sekundžių pridėjimo ir pridedamų sekundžių skaičių.
*/



/* 10.
Naudokite funkciją Math.random(). Sugeneruokite 6 kintamuosius su atsitiktinėm reikšmėm nuo 1000 iki 9999. Atspausdinkite reikšmes viename string'e, išrūšiuotas nuo didžiausios iki mažiausios, atskirtas tarpais. Naudoti ciklų ir masyvų NEGALIMA.
*/

