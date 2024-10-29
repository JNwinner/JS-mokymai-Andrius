
const Komp15 = () => {

    let prekes = [
        {
            id: 1,
            kodas: '0879',
            pavadinimas: 'Kompiuteris',
            kaina: 1000,
            savikaina: 800,
            kiekis: 5
        },
        {
            id: 2,
            kodas: '0878',
            pavadinimas: 'Telefonas',
            kaina: 500,
            savikaina: 300,
            kiekis: 10
        },
        {
            id: 3,
            kodas: '0877',
            pavadinimas: 'Ausines',
            kaina: 100,
            savikaina: 50,
            kiekis: 20
        }
    ]

    return (
        <div>
            <h1>Prekių sąrašas</h1>
            <table>
                <thead>
                    <tr>
                        <th>Kodas</th>
                        <th>Pavadinimas</th>
                        <th>Kaina</th>
                        <th>Savikaina</th>
                        <th>Kiekis</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        prekes.map((preke, i) => {
                            return (
                                <tr key={i}>
                                    <td>{preke.kodas}</td>
                                    <td>{preke.pavadinimas}</td>
                                    <td>{preke.kaina}</td>
                                    <td>{preke.savikaina}</td>
                                    <td>{preke.kiekis}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

            <p>Brangiausia preke:
                {
                    prekes.reduce((a, b) => a.kaina > b.kaina ? a : b).pavadinimas
                }
            </p>
            <p>Pigiausia preke:
                {
                    prekes.reduce((a, b) => a.kaina < b.kaina ? a : b).pavadinimas
                }
            </p>

            <p> Prekių vidutinė kaina:
                {
                    (prekes.reduce((a, b) => a + b.kaina, 0) / prekes.length).toFixed(2)
                }
                Eur.
            </p>

            <p> Potencialus pelnas pardavus visus kompiuterius:
                {
                    prekes.find(preke => preke.pavadinimas === 'Kompiuteris').kaina * prekes.find(preke => preke.pavadinimas === 'Kompiuteris').kiekis - prekes.find(preke => preke.pavadinimas === 'Kompiuteris').savikaina * prekes.find(preke => preke.pavadinimas === 'Kompiuteris').kiekis
                } Eur.
            </p>

        </div>
    )
}

export default Komp15