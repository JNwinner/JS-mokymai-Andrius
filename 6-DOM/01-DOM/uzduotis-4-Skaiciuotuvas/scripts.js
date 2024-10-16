let firstNumber = 0;
let secondNumber = 0;
let action = '+';
let answer = 0;

let input = document.getElementById('calc-input');

// Padarykite, kad įvedimas negalėtų prasidėti su skaičiumi 0.
function onNumberClick(number) {
    if (input.value === '0' && number === 0) {
        return;
    } else if (input.value === '0' && number !== 0) {
        input.value = number;
    } else {
        input.value += number;
    }
}
// Padarykite, kad iš eilės nebūtų galima suvesti dviejų skirtingų veiksmų
// arba kad paskutinį įvestą veiksmą pakeistų naujai paspaustu (kad nebūtų
// dviejų sudėčių iš eilės ir pan.).
function onActionClick(clickedAction) {
    let lastChar = input.value[input.value.length -1];
    if(lastChar !== '+' && lastChar !== '-' && lastChar !== '*' && lastChar !== '/' && lastChar !== ' ')
    input.value +=  ' ' + clickedAction + ' ';
    action = clickedAction;
}

function onCountClick() {
    let splitted = input.value.split(' ');
    firstNumber = parseFloat(splitted[0]);
    action = splitted[1]
    secondNumber = parseFloat(splitted[2]);

    calculateAnswer();
    input.value = answer;
}



function calculateAnswer() {
    switch (action) {
        case '+': answer = firstNumber + secondNumber; break;
        case '-': answer = firstNumber - secondNumber; break;
        case 'x': answer = firstNumber * secondNumber; break;
        case '/': answer = firstNumber / secondNumber; break;
    }
}

function onDecimalClick() {
    let lastNumber = input.value.split(action).pop();

    if (!lastNumber.includes('.')) {
        input.value += '.';
    }
}

function onCleanClick() {
    firstNumber = 0;
    secondNumber = 0;
    action = '+';
    answer = 0;
    input.value = ''
}