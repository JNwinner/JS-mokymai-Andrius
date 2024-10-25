//masyvai

const { default: test } = require("node:test")

const maistoProduktai  = ['pienas', 'vanduo', 'duona', 'miltai']

test('tikrinu ar nepamirsom pieno', () => {
    expect(maistoProduktai).toContain('pienas')
})

function grazinaMasyva() {
    return ['pienas', 'vanduo', 'druska', 'miltai']
}

test('tikrinu ar nepamirsom pieno', () => {
    expect(maistoProduktai).toContain('pienas')
    const maistoProduktai2 = grazinaMasyva()
    expect(maistoProduktai2).toContain('pienas')
})


// async

async function delayedFunction() {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve('Atsakymas')
        }, 2000)
    })
}


test('testuoju async funkcija', async() => {
    const result = await delayedFunction()
    expect(result).toBe('Atsakymas')
})

async function fakeAPI(delay) {
    return new Promise ((resolve, reject) => {
        setTimeout (() => {
            if(delay > 2000) {
                reject ('uzdelsimas per ilgas')
            }
            resolve('atsakymas')
        }, delay)
    })      
}


test('testuoju fakeApi', async() => {
    const res = await fakeAPI(1000)
    expect(res).toBe('atsakymas')
    try {
        const res2 = await fakeAPI(3000)
        expect(res2).toBe('atsakymas')
    } catch (error) {
        expect(error).toBe('uzdelsimas per ilgas')
    }
})  

    const atmetantiFunckija = async () => {
     return Promise.reject('Atmetimo pranesimas')
}

test('tikrinu atmetimo funkcija', async() => {
    try {
        await atmetantiFunckija()
    } catch (error) {
        expect (error).toBe('Atmetimo pranesimas')

    }
})

