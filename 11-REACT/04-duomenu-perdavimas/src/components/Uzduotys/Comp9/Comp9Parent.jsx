import Comp9Child from './Comp9Child'

const Comp9Parent = () => {
  // Susikurkite du komponentus. Vienas komponentas bus parent, skirtas kelių paslaugų atvaizdavimui. Kitas komponentas bus child, skirtas vienos paslaugos atvaizdavimui. Child komponentas turi priimti props (paslaugos pavadinimą ir mini aprašymą). Tuo tarpu iš parent komponento turi būti iškviesti bent trys tokie child komponentai, kurie tiesiai perduoda kažkokios tekstinės informacijos į child komponentą. Pamėginkite šiuos komponentus ir jų content bent kažkiek pastiliuoti.

  let paslauga1 = 'Programavimo sprendimai'
  let paslauga2 = 'Web sprendimai'
  let paslauga3 = 'Testavimas'
  return (
    <div>
      <h1>Paslaugos</h1>
      <div style={{ display: "flex", gap: "50px", justifyContent: 'center', marginBottom: "50px" }}>
        <Comp9Child service={paslauga1} />
        <Comp9Child service={paslauga2} />
        <Comp9Child service={paslauga3} />
      </div>
    </div>
  )
}

export default Comp9Parent