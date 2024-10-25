
const [ apskritimoPlotas, palindrome ] = require('./script');



   test('Apskaičiuoja apskritimo plotą teisingai', () => {
         expect(apskritimoPlotas(5)).toBeCloseTo(78.54, 2);
    });


    test('tinkamas palindromas', () => {
        const result = palindrome('Kol laukiu kolkas');
        expect(result).toBe(true);
    });
    
    test('netinkamas palindromas', () => {
        const result = palindrome('Kol laukiu kol kas');
        expect(result).toBe(false);
    });