function updateCalculations() {
    let storis = parseInt(document.getElementById('storis').value);
    document.querySelector('.storis-info').innerText = storis
    let plotis = parseInt(document.getElementById('plotis').value);
    document.querySelector('.plotis-info').innerText = plotis
    let ilgis = parseInt(document.getElementById('ilgis').value);
    document.querySelector('.ilgis-info').innerText = ilgis
    let lentos = parseInt(document.getElementById('kiekis').value);
    document.querySelector('.kiekis-info').innerText = lentos

    let kubai = storis * plotis * ilgis * lentos * 0.000000001
    document.querySelector('.kubatura-info').innerText = kubai.toFixed(3)

    let kaina = (kubai * 340).toFixed(2)
    document.querySelector('.amount').innerText = kaina
}

updateCalculations()

document.getElementById('storis').onchange = updateCalculations
document.getElementById('plotis').onchange = updateCalculations
document.getElementById('ilgis').onchange = updateCalculations
document.getElementById('kiekis').onchange = updateCalculations