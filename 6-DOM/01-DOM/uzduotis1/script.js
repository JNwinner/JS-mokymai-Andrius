let selectFirst = document.getElementById('pirmas')
selectFirst.classList.add('nauja-klase', 'ir-dar-viena-klase')
selectFirst.classList.remove('naujas')
selectFirst.classList.add('bg-salmon')

let naujasEl = document.createElement('p')
naujasEl.innerText = 'Nauja paragrafo turinys'
let selectSecond = document.getElementById('antras')
selectSecond.appendChild(naujasEl)
naujasEl.classList.add('bg-lightBlue')
