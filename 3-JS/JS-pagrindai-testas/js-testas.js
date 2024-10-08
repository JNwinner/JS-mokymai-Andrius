/*
1. Sukurkite funkciją, kuri paverstų eurus į dolerius.
Sugeneruokite atsitiktinį skaičių (eurų sumą) nuo 1 iki 1000.
Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
doleriais.
*/

function converterEurToDoll() {
    let randomAmount = Math.floor(Math.random() * 1000) + 1
    let converetedAmount = randomAmount * 1.1
    console.log(`${randomAmount} EUR converted to $: ${converetedAmount.toFixed(2)} $`)
}

converterEurToDoll()

/*
2. Sukurkite funkciją, kuri paverstų dolerius į eurus.
Sugeneruokite atsitiktinį skaičių (dolerių sumą) nuo 1 iki 1000.
Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
eurais.
*/

function converterDollToEur() {
    let randomAmount = Math.floor(Math.random() * 1000) + 1
    let converetedAmount = randomAmount * 0.909
    console.log(`${randomAmount} $ converted to EUR: ${converetedAmount.toFixed(2)} EUR`)
}

converterDollToEur()



/*
3. Parašykite programą, kuri suskaičiuotų žmogaus BMI (body
mass index), kai yra žinomas žmogaus ūgis ir svoris. 
BMI formulė: žmogaus svoris (kg) padalintas iš ūgio metrais kvadratu. 
Pvz. svoris = 80kg, ūgis = 1.8 m. 
BMI = 80 / 1.8**2 = 24.69
Viršsvoris = BMI > 25
Normalu = 18.5 <= BMI < 25
Per mažas svoris = BMI < 18.5
*/

function bmiCalc(weight, height) {
    let bmi = weight / (height ** 2)
    console.log(`BMI: ${bmi.toFixed(2)}`)

    if (bmi > 25) {
        console.log('Viršsvoris');
    } else if (bmi >= 18.5 && bmi < 25) {
        console.log('Normalu');
    } else {
        console.log('Per mažas svoris');
    }
}
let weight = 80;
let height = 1.85;

bmiCalc(weight, height)

/*
4. Parašykite programą, kuri iš duoto žmogaus amžiaus metais
pasakytų kiek tai yra sekundėmis, minutėmis, valandomis,
dienomis.
*/

function ageConverter(age) {
    const daysInYear = 365;
    const hoursInDay = 24;
    const minutesInHour = 60;
    const secondsInMinute = 60;


    let totDays = age * daysInYear;
    let totHours = totDays * hoursInDay;
    let totMin = totHours * minutesInHour;
    let totSec = totMin * secondsInMinute;

    console.log(`Amžius metais: ${age}`);
    console.log(`Dienomis: ${totDays} dienų.`);
    console.log(`Valandomis: ${totHours} valandų.`);
    console.log(`Minutėmis: ${totMin} minučių.`);
    console.log(`Sekundėmis: ${totSec} sekundžių.`);
}

let age = 30; 
ageConverter(age);


/*
5. Parašykite programą, kuri konvertuos termometro
duomenis iš Farenheito į Celsijų, ir atvirkščiai.
*/


function tempConverter(temperature, unit) {
    if (unit.toLowerCase() === 'f') {
        let celsius = (temperature - 32) * 5/9;
        return celsius.toFixed(2) + '°C';
    } else if (unit.toLowerCase() === 'c') {
        let fahrenheit = (temperature * 9/5) + 32;
        return fahrenheit.toFixed(2) + '°F';
    } else {
        return 'Klaida: Neteisingas vienetas. Naudokite "F" arba "C".';
    }
}

console.log(tempConverter(28, 'C'));
console.log(tempConverter(-20, 'F'));
console.log(tempConverter(25, 'X')); 


/*
6. Sukurkite kodą, kuris išspausdins į konsolę
1-2-3-4-5-6-7-8-9-10 vienoje eilutėje. Prieš vienetą ir po
dešimties neturėtų būti brūkšniuko.
*/

function printNumbers() {
    let result = '';
    for (let i = 1; i <= 10; i++) {
        result += i;
        if (i < 10) {
            result += '-';
        }
    }
    console.log(result);
}

printNumbers();


/*
7. Panaudokite for ciklus, kad sukurtumėte tokį vaizdą konsolėje.
*
**
***
****
*****
*/
let emptyString = '';

for (let i = 0; i <= 5; i++) {
    if(i == 0) {
        emptyString += '*\n'
    }  else if (i == 1) {
        emptyString += '**\n'
    }   else if ( i == 2) {
        emptyString += '***\n'
    }   else if ( i == 3) {
        emptyString += '****\n'
    }   else if (i == 4) {
        emptyString += '*****'
    }

}

console.log(emptyString)


/*
8. Parašykite kodą, kuris apskaičiuos kiek liko dienų iki Kalėdų.
*/

function daysUntilChristmas() {
    const today = new Date();
    const christmas = new Date(today.getFullYear(), 11, 25);
    
    if (today > christmas) christmas.setFullYear(christmas.getFullYear() + 1);
    
    const daysLeft = Math.ceil((christmas - today) / (1000 * 60 * 60 * 24));
    
    console.log(`Liko dienų iki Kalėdų: ${daysLeft}`);
}

daysUntilChristmas();



/*
9. Parašykite kodą, kuris apjungia masyvo duomenis į vieną
tekstinę eilutę. Turėtumėte gauti tokį rezultatą:
Tomas,Dainius,Paulius,Jonas
Tomas+Dainius+Paulius+Jonas
*/

let array = ['Tomas', 'Dainius', 'Paulius', 'Jonas']
console.log(array)
console.log(array.join(','))
console.log(array.join('+'))

/*
10. Parašykite kodą, kuris sugeneruos dvylikos simbolių
slaptažodį. Slaptažodyje privalo būti bent po vieną: didžioji raidė,
mažoji raidė, skaičius, specialusis simbolis. Visi slaptažodžio
simboliai privalo būti atsitiktiniai ir atsitiktine tvarka.
*/

console.log('Šito neišmasčiau :)')
