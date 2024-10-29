import Knyga from './Knyga'

const Knygynas = () => {
  // susikurkite tris atskirus knygų objektus
  // su informacija

  let knyga1 = { pavadinimas: 'The Psychology of Money: Timeless lessons on wealth, greed, and happiness', puslapiai: 256, kaina: 17.11 }
  let knyga2 = { pavadinimas: 'Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones', puslapiai: 320, kaina: 13.79 }
  let knyga3 = { pavadinimas: 'The Richest Man in Babylon', puslapiai: 124, kaina: 12.79 }

  // kvieskite komponentą Knyga kelis kartus,
  // kiekvieną kartą perduodant skirtingus
  // knygų objektus
  return (
    <div>
      <h1>Knygynas</h1>
      <div style={{ display: "flex", gap: "50px", justifyContent: 'center', marginBottom: "50px" }}>
        <Knyga knyga={knyga1} />
        <Knyga knyga={knyga2} />
        <Knyga knyga={knyga3} />
      </div>
    </div>
  )
}

export default Knygynas