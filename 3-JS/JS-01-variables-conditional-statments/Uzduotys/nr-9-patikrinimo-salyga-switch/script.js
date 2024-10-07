// 1/2
let pasirinkimas = 2;

switch (pasirinkimas) {
    case 1:console.log("Vartotojas laimėjo vandens.");break;
    case 2:console.log("Vartotojas laimėjo limonadą.");break;
    case 3:console.log("Vartotojas laimėjo arbatą.");break;
    case 4:console.log("Vartotojas laimėjo kavą.");break;
    default:console.log("Klaida: pasirinkimas neegzistuoja.");
}

// 2/2

let num1 = 1;
let num2 = 5; 
let num3 = 3;

switch (num1) {
    case 1:
        console.log("Visų trijų skaičių suma:", num1 + num2 + num3);
        break;
    case 2:
        console.log("Antro ir trečio skaičių sandauga:", num2 * num3);
        break;
    case 3:
        console.log("Pirmo skaičiaus kvadratas:", num1 * num1);
        break;
    default:
        console.log("Klaida: pirmas skaičius netinka.");
        
}

// 3/3

let klaidosKodas = 404; 

switch (klaidosKodas) {
    case 404:
        console.log("Klaida 404: Puslapis nerastas. Bandykite kitą nuorodą.");
        break;
    case 500:
        console.log("Klaida 500: Serverio klaida. Bandykite vėliau.");
        break;
    case 403:
        console.log("Klaida 403: Prieiga uždrausta. Neturite reikiamų teisių.");
        break;
    default:
        console.log("Nežinomas klaidos kodas. Prašome susisiekti su pagalbos tarnyba.");
        
}