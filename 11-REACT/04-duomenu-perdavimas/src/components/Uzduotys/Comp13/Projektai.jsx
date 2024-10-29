import Projektas from './Projektas'
import './styles/projektai.css'
// susikurkite ir prijunkite stiliaus failą, bent minimaliai pastiliuokite šių komponentų kodą

const Projektai = () => {
  let projektai = [
    { id: 1, pavadinimas: 'Batsiuvio web', tipas: 'tinklalapis', atlikimo_data: '2022-01-10' },
    { id: 2, pavadinimas: 'Maisto šefo receptų web', tipas: 'tinklalapis', atlikimo_data: '2022-05-28' },
    { id: 3, pavadinimas: 'Logotipas tapkių gamintojams', tipas: 'logotipas', atlikimo_data: '2022-04-25' },
  ]

  return (
    <div className='projektai'>
        <h1>Projects</h1>
        <div className='projektu-list'>
            { /* šioje vietoje kvieskite komponentą Projektas tiek kartų kiek turite duomenų masyve projektai,
            galima rankiniu būdu, bet geriau per map funkciją */ 
            projektai.map(projektas =>  {
                return <Projektas key={projektas.id} name={projektas.pavadinimas} type={projektas.tipas} date={projektas.atlikimo_data} />
            })
            
            }
        </div>
    </div>
  )
}

export default Projektai