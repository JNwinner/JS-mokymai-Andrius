let selectAuto = document.getElementById('select-auto');
let selectModelPrice = document.getElementById('modelPrice')

selectAuto.addEventListener('change', function () {
    let selectedValue = selectAuto.value;

    switch (selectedValue) {
        case 'tesla3': selectModelPrice.textContent = '50 eur';
            break;
        case 'fiat500': selectModelPrice.textContent = '35 eur';
            break;
        case 'vwgolf': selectModelPrice.textContent = '40 eur';
            break;
        case 'audigt': selectModelPrice.textContent = '100 eur';
            break;
        case 'teslay': selectModelPrice.textContent = '70 eur';
            break;
        default: 
        selectModelPrice.textContent = '0 eur'
    }
})


let ageCof = document.getElementById('selectAge');
let ageCofWithValue;
ageCof.addEventListener('change', () => {
    ageCofWithValue = ageCof.value;
    console.log(ageCofWithValue);
});

let selectRange = document.getElementById('selectRange');
let rangeCof;
selectRange.addEventListener('change', () => {
    rangeCof = selectRange.value;
    console.log(rangeCof)
})

let priceTotal = document.getElementById('priceTotal');
let numOfDays = document.getElementById('numOfDays');
let btnCalc = document.querySelector('.btn-calc');

let cof = ageCof.value + selectRange.value;

btnCalc.addEventListener('click', () => {
    if (selectAuto.value === 'Automobiliai'|| ageCof.value === 'Amžius' || selectRange.value === 'Planuojamas nuvaziuoti atstumas') {
        priceTotal.classList.add('error');
        priceTotal.innerText = 'trūksta info '; 

    } else if (numOfDays.value < 0 || numOfDays.value === '' ) {
            numOfDays.classList.add('error-input');
            priceTotal.innerText = 'įveskite dienų skaičių'; 
    } else {
        numOfDays.classList.remove('error-input')
        priceTotal.classList.remove('error');
        priceTotal.innerText = `${numOfDays.valueAsNumber * parseInt(selectModelPrice.textContent) * (1 + (parseFloat(ageCofWithValue)  + parseFloat(rangeCof))
        )} €`
    }
});





