let card = document.querySelector('.card');
let firstCard = document.querySelector('.card.first');
let secondCard = document.querySelector('.card.second');
let thirdCard = document.querySelector('.card.third');
let checkedElementFirst = firstCard.querySelector('.checked1');
let checkedElementSecond = secondCard.querySelector('.checked2');
let checkedElementThird = thirdCard.querySelector('.checked3');
let selectedRecipe = 0;
let recipes = document.querySelector('.container.recipes');
let rangeValue = document.getElementById('customRange');
let portionSize = document.getElementById('rangeValue').valueAsNumber;



 // Vistienos recepto kiekiai:
 let chicken = 100;
 let salat = 50;
 let tomatos = 1;
 let cocumber = 1;
 let bread = 1;
 // Mėlynių torto recepto kiekiai:
 let eggs = 2;
 let butter = 50;
 let grietinele = 30;
 let melynes = 50;
 let sugar = 35;
 // Makaronai su mėsa  recepto kiekiai:
 let makaroni = 50;
 let beef = 100;
 let onion = 1;
 let grietinele2 = 50;
 let salt = 5;
 let peppers = 5;
 let mushrooms = 5;



firstCard.addEventListener('click', (e) => {
    selectedRecipe = 1;
    firstCard.classList.add('green');
    secondCard.classList.remove('green');
    thirdCard.classList.remove('green');
    checkedElementFirst.classList.add('show')
    checkedElementSecond.classList.remove('show');
    checkedElementThird.classList.remove('show');
    recipes.classList.add('show')

    // Vistienos recepto kiekiai:
    let chicken = 100;
    let salat = 50;
    let tomatos = 1;
    let cocumber = 1;
    let bread = 1;

    portionSize = rangeValue.valueAsNumber;

    recipes.innerHTML = `<h2>Vištiena su salotom</h2>
    <p><strong>Jums reikės šių ingridientų, tokiais kiekiais:</strong></p>
    <p>Vištienos: <strong>${chicken * portionSize} g.</strong></p>
    <p>Salotų: <strong>${salat * portionSize} g.</strong></p>
    <p>Pomidorų: <strong>${tomatos * portionSize} vnt.</strong></p>
    <p>Agurkų: <strong>${cocumber * portionSize} vnt.</strong></p>
    <p>Duonos: <strong>${bread * portionSize} vnt.</strong></p>
    `
})

secondCard.addEventListener('click', (e) => {
    selectedRecipe = 2;
    secondCard.classList.add('green');
    thirdCard.classList.remove('green')
    firstCard.classList.remove('green');
    checkedElementFirst.classList.remove('show')
    checkedElementSecond.classList.add('show');
    checkedElementThird.classList.remove('show');
    recipes.classList.add('show')

    // Mėlynių torto recepto kiekiai:
    let eggs = 2;
    let butter = 50;
    let grietinele = 30;
    let melynes = 50;
    let sugar = 35;

    portionSize = rangeValue.valueAsNumber;

    recipes.innerHTML = `<h2>Tortas su mėlynėm</h2>
    <p><strong>Jums reikės šių ingridientų, tokiais kiekiais:</strong></p>
    <p>Kiaušiniai: <strong>${eggs * portionSize} vnt.</strong></p>
    <p>Sviestas: <strong>${butter * portionSize} g.</strong></p>
    <p>Grietinėlė: <strong>${grietinele * portionSize} ml.</strong></p>
    <p>Mėlynės: <strong>${melynes * portionSize} g.</strong></p>
    <p>Cukrus: <strong>${sugar * portionSize} g.</strong></p>
    `
})

thirdCard.addEventListener('click', (e) => {
    selectedRecipe = 3;
    thirdCard.classList.add('green')
    secondCard.classList.remove('green');
    firstCard.classList.remove('green');
    checkedElementFirst.classList.remove('show')
    checkedElementSecond.classList.remove('show');
    checkedElementThird.classList.add('show');
    recipes.classList.add('show')

    // Makaronai su mėsa  recepto kiekiai:
    let makaroni = 50;
    let beef = 100;
    let onion = 1;
    let grietinele2 = 50;
    let salt = 5;
    let peppers = 5;
    let mushrooms = 5;

    portionSize = rangeValue.valueAsNumber;

    recipes.innerHTML = `<h2>Makaronai su mėsa</h2>
     <p><strong>Jums reikės šių ingridientų, tokiais kiekiais:</strong></p>
     <p>Makaronai: <strong>${makaroni * portionSize} g.</strong></p>
     <p>Jautiena: <strong>${beef * portionSize} g.</strong></p>
     <p>Svogūnas: <strong>${onion * portionSize} vnt.</strong></p>
     <p>Grietinėle: <strong>${grietinele2 * portionSize} ml.</strong></p>
     <p>Druska: <strong>${salt * portionSize} g.</strong></p>
     <p>Pipirai: <strong>${peppers * portionSize} g.</strong></p>
     <p>Šampinjonai: <strong>${mushrooms * portionSize} vnt.</strong></p>

     `
})


rangeValue.addEventListener('input', () => {

    portionSize = rangeValue.valueAsNumber;
   

    if (selectedRecipe === 1) {
        recipes.innerHTML = `<h2>Vištiena su salotom</h2>
    <p><strong>Jums reikės šių ingridientų, tokiais kiekiais:</strong></p>
    <p>Vištienos: <strong>${chicken * portionSize} g.</strong></p>
    <p>Salotų: <strong>${salat * portionSize} g.</strong></p>
    <p>Pomidorų: <strong>${tomatos * portionSize} vnt.</strong></p>
    <p>Agurkų: <strong>${cocumber * portionSize} vnt.</strong></p>
    <p>Duonos: <strong>${bread * portionSize} vnt.</strong></p>
    `
    } else if (selectedRecipe === 2) {
        recipes.innerHTML = `<h2>Tortas su mėlynėm</h2>
    <p><strong>Jums reikės šių ingridientų, tokiais kiekiais:</strong></p>
    <p>Kiaušiniai: <strong>${eggs * portionSize} g.</strong></p>
    <p>Sviestas: <strong>${butter * portionSize} g.</strong></p>
    <p>Grietinėlė: <strong>${grietinele * portionSize} vnt.</strong></p>
    <p>Mėlynės: <strong>${melynes * portionSize} vnt.</strong></p>
    <p>Cukrus: <strong>${sugar * portionSize} vnt.</strong></p>
    `
    } else if (selectedRecipe === 3) {

        recipes.innerHTML = `<h2>Makaronai su mėsa</h2>
     <p><strong>Jums reikės šių ingridientų, tokiais kiekiais:</strong></p>
     <p>Makaronai: <strong>${makaroni * portionSize} g.</strong></p>
     <p>Jautiena: <strong>${beef * portionSize} g.</strong></p>
     <p>Svogūnas: <strong>${onion * portionSize} vnt.</strong></p>
     <p>Grietinėle: <strong>${grietinele2 * portionSize} ml.</strong></p>
     <p>Druska: <strong>${salt * portionSize} g.</strong></p>
     <p>Pipirai: <strong>${peppers * portionSize} g.</strong></p>
     <p>Šampinjonai: <strong>${mushrooms * portionSize} vnt.</strong></p>
     `

    }
})

function updateValue(val) {
    document.getElementById('rangeValue').innerHTML = val;
    let rangeName = document.getElementById('rangeName');
    if (val === '1') {
        rangeName.innerHTML = 'Porcija';
    } else if (val === '10') {
        rangeName.innerHTML = 'Porcijų';
    } else {
        rangeName.innerHTML = 'Porcijos';
    }
}
