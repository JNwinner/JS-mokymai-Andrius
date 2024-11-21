let vardai: string[] = ['Tomas', 'Diana', 'Saulius']

let amziai: number[] = [2, 2, 10, 9, 7]


vardai.push('Tautvydas')
amziai.push(27)

let vaisiai = ['obuoliai', 'mangai', 'bananai']

const vaisius = vaisiai[2]

let daiktai = [1, true, 'labas']

const daiktas = daiktai[2]


let vartotojas:{vardas: string, amzius: number, id: number} = {
    vardas: 'Tomas',
    amzius: 23,
    id: 1
}

vartotojas.vardas = "Giedrius"
vartotojas.amzius = 25


let asmuo = {
    vardas: 'Saulius',
    amzius: 38
}

asmuo.vardas = 'Paulina'
asmuo.amzius = 28



function suma (a:number, b:number): number {
    return a + b
}


const atimtis = (a:number, b:number):number => {
    return a - b
}

suma(9,3)
atimtis(8,5)



function sudetis(items:number[]) {
    const viso = items.reduce((sum, c) => sum + c, 0)
    console.log(viso)
    return viso
}

sudetis([5, 7, 13, 17, 3, 5])

// any

let myName:any = 'Darius'
myName = 40

let title 

title =  25
title = 'Tomas'

let daiktai2:any[] = ['labas', 1, 2, 'hello', true]

daiktai2.push({id:15})
console.log(daiktai2)

function sudeti(value:any):any {
    return value + value
}

const pirmas = sudeti('labas')
console.log(pirmas)

// tuples - turi buti surusiuoti pagal numatyta seka

let person:[string, number, boolean] = ['Aidas', 30,  true]
let hsla:[number, string, string, number]

hsla = [200, '100%', '65%', 0.5]


function useCoords(): [number, number] {
    const lat = 100
    const long = 57
    return [lat, long]
}

const [lat, long] = useCoords()

let user:[name: string, age:number]
user = ['Domantas', 27]

// interface

interface Autorius {
    name: string,
    avatar: string
}

const pirmasAutorius: Autorius = {name: 'James', avatar: 'img/james.png'}

interface Post {
    title: string,
    body: string,
    tags: string[],
    created_at: Date,
    author: Autorius
}

const newPost = {
    title: 'Pirmas irasas',
    body: 'Idomi istorija',
    tags: ['gaming', 'tech'],
    created_at: new Date(),
    author: pirmasAutorius
}

function createPost(post: Post): void{
    console.log(`Created post ' ${post.title}`)
}


type Rgb = [number, number, number]

function randomColor(): Rgb {
    const r = Math.floor(Math.random() * 225 + 1)
    const g = Math.floor(Math.random() * 225 + 1)
    const b = Math.floor(Math.random() * 225 + 1)
return  [r, g, b]
}

const pirmaSpalva = randomColor()
const antraSpalva = randomColor()
console.log(pirmaSpalva, antraSpalva)

type Mokinys = {
    name: string
    grade: number
}

const pirmasMokinys: Mokinys = {name: 'Jonas', grade: 8}

function formatMokinys(mokinys: Mokinys): void {
    console.log(`${mokinys.name} gavo pazymi: ${mokinys.grade}`)
}

formatMokinys(pirmasMokinys)
formatMokinys({name: 'Vaida', grade: 9})


let id: number | string 

id: 1
id: '2'


let email: string | null = null

email = 'tomas@tomauskas.lt'
email = null

type Id = number | string

let kitasId: Id

kitasId = 'wdsffsf'
kitasId = 23

type Ids = number | string
function keistiIdTipa(id: Ids) {
    if(typeof id === 'string') {
        return parseInt(id)
    } else {
        return id.toString()
    }
}

const pirmasId = keistiIdTipa(1)
const antrasId = keistiIdTipa('2')

console.log(pirmasId, antrasId)


interface hasQuantity {
    quantity: number
}

const kazkas: hasQuantity = {quantity: 300}

function printQuantityti(item: hasQuantity):void {
    console.log(`The quantity of the item is ${item.quantity}`)
}


const vaisius2 = {name: 'mangas', quantity: 50}

printQuantityti(vaisius2)


type Skaiciuotuvas = (num1: number, num2: number) => number 

function sudetis2(a:number, b:number) {
    return a + b
}

function daugyba(pirmas:number, antras:number) {
    return pirmas * antras
}

function kvadratu(num:number) {
    return num * num
}

function sujungtiSkaiciai(num1: number, num2:number) {
    return `${num1}${num2}`
}

let skaiciavimai: Skaiciuotuvas[] = [] 
skaiciavimai.push(sudetis2)
skaiciavimai.push(daugyba)
skaiciavimai.push(kvadratu)
// skaiciavimai.push(sujungtiSkaiciai) bus klaida nes turi buti number


