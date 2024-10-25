// Sukurkite funkciją, kuri apskaičiuotų apskritimo plotą. Plotas yra apskaičiuojamas pagal šią formulę: S=π*r^2. Jūsų funkcija turėtų priimti vieną argumentą, kuris būtų r reikšmė. Sukurkite unit test, naudojantis biblioteka Jest, kuris ištestuotų ar jūsų funkcija veikia tinkamai.

function apskritimoPlotas(r) {
    return Math.PI * Math.pow(r, 2);
}

// 2
function palindrome(str) {
    const cleanStr = str.replace(/[\W_]/g, '').toLowerCase();
    const reversedStr = cleanStr.split('').reverse().join('');
    return cleanStr === reversedStr;
}

// 3




module.exports = [apskritimoPlotas, palindrome];