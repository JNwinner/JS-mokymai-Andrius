"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
class CSVWriter {
    constructor(stulpeliai) {
        this.stulpeliai = stulpeliai;
        this.csv = this.stulpeliai.join(',') + '\n';
    }
    pridetiEulute(values) {
        let eilutes = values.map(v => this.formatuotiEilute(v));
        this.csv += eilutes.join('\n');
        console.log(this.csv);
    }
    formatuotiEilute(m) {
        return this.stulpeliai.map(stul => m[stul]).join(',');
    }
    save(filename) {
        (0, fs_1.appendFileSync)(filename, this.csv);
        this.csv = '\n';
        console.log('File saved to ', filename);
    }
}
const writer = new CSVWriter(['id', 'suma', 'gavejas', 'paskirtis']);
writer.pridetiEulute([
    { id: 1, suma: 100, gavejas: 'Jonas', paskirtis: 'Maistas' },
    { id: 2, suma: 200, gavejas: 'Petras', paskirtis: 'Paslaugos' },
    { id: 3, suma: 300, gavejas: 'Antanas', paskirtis: 'Prekes' },
    { id: 4, suma: 400, gavejas: 'Kazys', paskirtis: 'Paslaugos' },
    { id: 5, suma: 500, gavejas: 'Juozas', paskirtis: 'Maistas' },
]);
writer.save('./data/mokejimai.csv');
