// 1. Sukurkite JS funkciją, kurios parametras yra callback funkcija. Jūsų funkcija
// turėtų vykdyti callback funkciją po 2s.

function print() {
    setTimeout(() => {
        console.log('2s');
    }, 2000);
}

function helloWorld() {
    console.log('Hello World');
}

function delayedFc(callback) {
    setTimeout(callback, 5000);
}

print();
delayedFc(helloWorld);


// lektoriaus

function paveluotasSveikinimas(cb) {
    setTimeout(cb, 2000);
}

function sveikinimas() {
    console.log('Su Gimtadieniu!');
}

paveluotasSveikinimas(sveikinimas)


// 2. Sukurkite JS funkciją, kuri daro HTTP Request užklausą ir grąžina pažadą su duomenimis.
const fetchData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')

    if (response.status !== 200) {
        throw new Error('cannot fetch the data')
    }

    const data = await response.json()
    return data
}


fetchData()
    .then(data => console.log('resolved:', data))
    .catch(err => console.log('rejected:', err.message))

    // lektoriaus
    const ingredientai = async() => {
        const response = await fetch('ingredientai.json')

        if(response.status !== 200) {
            throw new Error ('nepavyko gauti duomenis')
        }

        const duomenys = await response.json()
        return duomenys
    }

    ingredientai()
        .then(duomenys => console.log('resolved:', duomenys))
        .catch(err => console.log('rejected:', err.message))


/*  3. Sukurti funkciją(1), kuri kaip parametrus priimtų skaičių masyvą ir callback
    funkciją(2). Funkcija(1) turėtų iteruoti per masyvą ir siųsti kiekvieną jos narį
    callback funkcijai(2). Callback funkcijos esmė - patikrinti ar gautas skaičius yra
    lyginis ar nelyginis ir atitinkamą informaciją išvesti į konsolę.
    Funkcija turėtų būti iškviečiama taip (pavadinimai gali būti kitokie):
    pirmojiFunkcija(masyvas, callbackFunkcija)
*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function firstFunction(array, callback) {
    array.forEach(callback);
}

function cbFunction(number) {
    if (number % 2 === 0) {
        console.log(number, '- Even');
    } else {
        console.log(number, '- Odd');
    }
}

firstFunction(numbers, cbFunction);

// lektoriaus

function arLyginiai(array, callback) {
    for(const item of array) {
        callback(item);
    }
}

function arLyginis(item) {
    if(item % 2 === 0) {
        console.log(item, 'yra lyginis');
    } else {
        console.log(item, 'nelyginis');
    }
}

const masyvas  = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arLyginiai(masyvas, arLyginis);


/* 4. Sukurkite funkciją, kuri priima masyvą (kuris užpildytas "string" tipo
     reikšmėmis(žodžiais)) ir callback funkciją. Funkcija turėtų iteruoti per masyvą ir
     nusiųsti kiekvieną stringą esantį masyve callback funckijai. Callback funkcija turi
    grąžinti atsiųsto "string" ilgį.
     - susikurti funkciją patikrinkZodzioIlgi(masyvas, callbackFunkcija)
     - funkcijos patikrinkZodzioIlgi esmė - panaudoti foreach ir kiekvienam masyvo
    nariui iškviest funkciją koksIlgis(string)
*/    

let array = ['Labas', 'rytas', 'Lietuva', 'sveiki', 'visi'];

function patikrintiZodzioIlgi(array, cb) {
    array.forEach(item => cb(item));
}

function callBack(string) {
    console.log('Zodyje:', string, 'yra raidziu:', string.length)
}


patikrintiZodzioIlgi(array, callBack)

// 5. Sukurkite funkciją, kuri kaip argumentus priima masyvą, sudarytą iš objektų ir
// callback funkciją. Funkcija turėtų iteruoti per masyvą ir nusiųsti kiekvieną ten
// esantį objektą (tarkim tai automobilis, turintis šias properties: rida, markė,
// modelis, gamybos metai ir kaina (bet galite susikurti ir savo nuožiūra)) callback
// funkcijai. Callback funkcija turėtų grąžinti naują objektą, kuriame būtų tik
// atrinktos objekto properties, tarkim tik markė ir modelis.

const cars = [
    { rida: 120000, marke: 'Toyota', modelis: 'Corolla', metai: 2010, kaina: 5000 },
    { rida: 80000, marke: 'Honda', modelis: 'Civic', metai: 2015, kaina: 7000 },
    { rida: 150000, marke: 'Ford', modelis: 'Focus', metai: 2008, kaina: 3000 }
];

function processCars(array, callback) {
    const naujiDuomenys = array.map(item => callback(item));
    return naujiDuomenys;
}

function selectProperties(car) {
    return {
        marke: car.marke,
        modelis: car.modelis
    };
}

const selectedCars = processCars(cars, selectProperties);
console.log(selectedCars);


// 6. Sukurkite funkciją, kuri priims parametrą isUserLogedIn (reikšmė gali būti true
//     arba false). Jūsų funkcijos viduje, naudojantis Promise konstruktoriumi, sukursite
//     naują promise objektą, kuris tikrins ar isUserLogedIn yra true ar false, jeigu
//     paduotas parametras ar false, jūsų sukurtas promise turėtų reject’inti užklausą,
//     kitu atveju - resolvinam ir grąžinam pasirinktą pranešimą. Iškvieskite tą funkciją
//     naudojantis then ir catch, o gautą rezultatą atvaizduokite konsolėje.


function login(isUserLogedIn){
    return new Promise((resolve, reject) => {
        if(isUserLogedIn){
            resolve('User is logged in');
        } else {
            reject('User is not logged in');
        }
    });
}

login(false)
    .then(data => console.log(data))
    .catch(err => console.log(err));



// 7. Sukurkite async funkciją, kuri priimtų parametrą "age". Funkcijos viduje
// padarykite patikrinimą ar "age" yra paduotas ir ar jis yra skaičius - priešingu
// atveju iškvieskite klaidą (throw). Toliau tikrinkite ar amžius yra daugiau nei 18,
// jeigu taip, grąžinkite, kad “vartotojas gali laikyti vairuotojo egzaminą", priešingu
// atveju iškvieskite klaidą (throw) ir parašykite, kad "jūsų amžius turi būti daugiau
// nei 18". Iškvieskite šią funkciją naudojantis then ir catch.

const arLeistinasVairuotjoEgzaminas = async (age) => {
    if(!age || typeof age !== 'number') {
        throw new Error('Age must be a number');
    }

    if(age >= 18) {
        return 'Vartotojas gali laikyti vairuotojo egzamina';
    } else {
        throw new Error('Jusu amzius turi buti daugiau nei 18');
    }
}

arLeistinasVairuotjoEgzaminas(18)
    .then(data => console.log(data))
    .catch(err => console.log(err.message));

arLeistinasVairuotjoEgzaminas('18')
    .then(data => console.log(data))
    .catch(err => console.log(err.message));

arLeistinasVairuotjoEgzaminas(17)
    .then(data => console.log(data))
    .catch(err => console.log(err.message));