console.log('-----Uzduotis #1------ ')
let numX = 9;
let numY = 17;
let numZ = 4;

if (numX > numY) {
    console.log(`${numX} yra didenis uz ${numY}`)
} else if (numY > numZ) {
    console.log(`${numY} yra didenis uz ${numZ}`)
} else if (numZ > numX) {
    console.log(`${numZ} yra didenis uz ${numX}`)
}

if(numX == numY) {
    console.log(`${numX} yra lygus ${numY}`)
} else if (numY == numZ) {
    console.log(`${numY} yra lygus ${numZ} `)
} else if (numX == 0) {
    console.log(`${numX} yra lygus 0`)
}

if (numY < 0) {
    console.log(`${numY} yra maziau uz 0`)
} else if (numZ > 0) {
    console.log(`${numZ} yra daugiau uz 0`)
}

let randomGrade = Math.floor(Math.random() * 10) + 1;

if (randomGrade == 10) {
    console.log('Puiku')
} else if (randomGrade == 9) {
    console.log('Labai gerai')
} else if (randomGrade == 7) {
    console.log('Vidutiniskai')
} else if (randomGrade == 5) { 
    console.log('Patenkinamai')
} else if (randomGrade < 5) {
    console.log('Egzaminas neislaikytas')
}