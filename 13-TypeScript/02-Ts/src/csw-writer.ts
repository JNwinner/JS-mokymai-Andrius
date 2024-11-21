import {appendFileSync} from 'fs'

interface Mokejimas {
    id: number
    suma: number
    gavejas: string
    paskirtis: string
}

type MokejimuStulpelis = ('id' | 'suma' | 'gavejas' | 'paskirtis')[]

class CSVWriter {
    constructor(private stulpeliai: MokejimuStulpelis) {
        this.csv = this.stulpeliai.join(',') + '\n'
    }
    private csv: string

    pridetiEulute(values: Mokejimas[]): void {
        let eilutes = values.map(v => this.formatuotiEilute(v))
        this.csv += eilutes.join('\n')
        console.log(this.csv)
    }

    private formatuotiEilute(m: Mokejimas): string {
        return this.stulpeliai.map(stul => m[stul]).join(',')
    }

    save(filename: string): void {
        appendFileSync(filename, this.csv)
        this.csv = '\n'
        console.log('File saved to ', filename)
    }
}

const writer = new CSVWriter(['id', 'suma', 'gavejas', 'paskirtis'])

writer.pridetiEulute([
    {id: 1, suma: 100, gavejas: 'Jonas', paskirtis: 'Maistas'},
    {id: 2, suma: 200, gavejas: 'Petras', paskirtis: 'Paslaugos'},
    {id: 3, suma: 300, gavejas: 'Antanas', paskirtis: 'Prekes'},
    {id: 4, suma: 400, gavejas: 'Kazys', paskirtis: 'Paslaugos'},
    {id: 5, suma: 500, gavejas: 'Juozas', paskirtis: 'Maistas'},
])

writer.save('./data/mokejimai.csv')