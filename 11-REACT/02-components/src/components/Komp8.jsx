import '../styles/komp8.css'



const Komp8 = () => {
  let preke = {
    kodas: 'BAK364',
    pavadinimas: 'Tusinukas',
    kaina: 2.34,
    savikaina: 1.50,
    nuotrauka: 'https://via.placeholder.com/200'
  }

  // šiame komponente jau turite prekės objektą
  // jį atvaizduokite return dalyje,
  // susikurkite visas reikiamas žymas, kad tą informaciją
  // būtų galima susidėti kažkaip tvarkingai ir aiškiai

  // taip pat, atlikite kažkiek stiliavimo, tam reikės
  // susikurti css failą ir jį prijungti prie šio komponento
  // ir atlikti stiliavims (pvz, blokelio spalva, tarpai, ...)
  return (
    
      <div className="preke">
        <img src={preke.nuotrauka} alt={preke.pavadinimas} />
        <div className="info">
          <h4>{preke.pavadinimas}</h4>
          <p>Kodas: {preke.kodas}</p>
          <p>Kaina: {preke.kaina} €</p>
          <p>Savikaina: {preke.savikaina} €</p>
        </div>
    </div>
  )
}

export default Komp8