// 1. Parašykite TypeScript kodą, kuris deklaruoja
// kintamąjį name ir priskiria jam string reikšmę. Taip pat
// deklaruokite kintamąjį amžius ir priskirkite jam skaičių.
// Galiausiai atspausdinkite vardo ir amžiaus reikšmes.

let manoVardas:string = 'Justas'
let amzius: number = 25

console.log(`Mano vardas yra ${manoVardas} ir amzius ${amzius}`)


// 2. Parašykite TypeScript kodą, kuris deklaruoja
// kintamąjį nenurodydamas jo tipo ir parodo, kaip
// TypeScript nustato tipą pagal priskirtą reikšmę.

let autoTypedVariable

autoTypedVariable = 'Hello, TypeScript!';
console.log(`autoTypedVariable is of type: ${typeof autoTypedVariable}`);

autoTypedVariable = 42;
console.log(`autoTypedVariable is now of type: ${typeof autoTypedVariable}`);

let variableWithoutType

variableWithoutType = 'namas'
variableWithoutType = 25

console.log('labas')


// 3. Parašykite TypeScript kodą, kuris konvertuoja vieno
// tipo kintamąjį į kitą, naudodamas tipo teiginius ir tipo
// konvertavimo funkcijas, pvz., parseInt().

let skaicius:number = 25
let skaiciusString:string = skaicius.toString()
console.log(skaiciusString)

let skaicius2:string = '25'
let skaiciusNumber:number = parseInt(skaicius2)
console.log(skaiciusNumber)


// 4. Parašykite TypeScript kodą, kuris deklaruoja
// konkretaus duomenų tipo masyvą. Parašykite įprastas
// masyvo operacijas, tokias kaip elementų pridėjimas ar
// pašalinimas iš masyvo, taip pat masyvo elementų
// pateikimas konsolėje.

let masyvas:number[] = [5,9,10,2,9]
console.log(masyvas)

masyvas.push(6)
console.log(masyvas)

masyvas.pop()
console.log(masyvas)

masyvas.shift()
console.log(masyvas)

masyvas.unshift(0)
console.log(masyvas)











