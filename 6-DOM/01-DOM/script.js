console.log(document.querySelector('#pirmas')) 

let pirmoAntras = document.querySelector('#pirmo-antras')
console.log(pirmoAntras)

console.log(document.querySelector('#antras article'))
console.log(document.querySelectorAll('#antras article'))

console.log(document.querySelector('.straipsnio-paragrafas'))
console.log(document.querySelectorAll('.straipsnio-paragrafas'))

let antro_pirmas_str = document.querySelector('#antras article')

let antro_pirmas_str_p = antro_pirmas_str.querySelector('p')

console.log(antro_pirmas_str)
console.log(antro_pirmas_str_p)

let medis = document.getElementById('pirmo-antras')
console.log('medis:', medis)

console.log('sekantis:', medis.nextElementSibling)
console.log('pries:', medis.previousElementSibling)
console.log('tevinis:', medis.parentElement)

document.querySelector('#pirmo-pirmas').innerHTML = '<span>Labas</span>'
// document.querySelector('#pirmo-pirmas').textContent = '<span>Labas</span>'
// document.querySelector('#pirmo-pirmas').innerText = '<span>Labas</span>'

document.querySelector('#trecias #trecio-pirmas').innerHTML = 'Labas, tau sakau!'
let trecioAntras = document.querySelector('#trecio-antras')

trecioAntras.textContent = '<span>idejau span zyma</span>'

document.getElementById('trecio-trecias').innerText = 'Hello'
document.getElementById('trecio-trecias').innerText = ' again'

let ketvirtas = document.getElementById('ketvirtas')
ketvirtas.innerHTML += '<p class="raudonas">Naujas paragrafas 2</p>'
ketvirtas.innerHTML += '<p class="zalias">Naujas paragrafas 3</p>'


// document.querySelectorAll('.straipsnio-paragrafas').forEach(function(p){
//     p.style.display = 'none';
// })
// sutrumpinta funkcija
document.querySelectorAll('.straipsnio-paragrafas').forEach(p => {
    p.style.display = 'none';
})

let pirmasBtn = document.getElementById('pirmas-btn')
let antrasBtn = document.getElementById('antras-btn')


pirmasBtn.addEventListener('click', (e) => {
    alert('paspaustas pirmas mygtukas')
})
antrasBtn.addEventListener('click', (e) => {
        e.target.disabled = true
})

let inputas = document.querySelector('#sestas input')

inputas.addEventListener('keyup', (e) => {
        // console.log(e.target.value)
        let norimasTekstas = e.target.value
        document.querySelector('#sestas #norimas-tekstas').innerText = norimasTekstas
})

let naujasP1 = document.createElement('p')
naujasP1.innerText = 'Naujo paragrafo turinys'
let septintas = document.getElementById('septintas')
septintas.appendChild(naujasP1)


let naujasP2 = document.createElement('p')
naujasP2.innerText = 'Dar vieno paragrafo turinys'
septintas.appendChild(naujasP2)


let naujasBtn = document.createElement('button')
naujasBtn.innerText = 'Naujas mygtukas'
septintas.appendChild(naujasBtn)


document.getElementById('pirmo-pirmas').style.color = 'red';
document.getElementById('pirmo-pirmas').style.cssText = 'color: blue; background-color: gray'

let klases1 = document.querySelector('#astuntas .pirmas')
klases1.classList.add('dar-viena')
klases1.classList.add('ir-dar-viena', 'irrrrrr-dar-viena')
klases1.classList.remove('irrrrrr-dar-viena')

let klases2 = document.querySelector('#astuntas .antras')
klases2.classList.add('fonas-raudonas')

let klases3 = document.querySelector('#astuntas .trecias') 
klases3.classList.add('fonas-melynas')











