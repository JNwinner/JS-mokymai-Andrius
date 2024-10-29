import React from 'react'

const Komp7 = () => {
  // susikurkite žodžių masyvą (tiesiog string reikšmės,
  // ne objektai)
  // ir tą masyvą atvaizduokite return dalyje

let masyvas = ['vienas', 'du', 'trys', 'keturi', 'penki', 'šeši', 'septyni', 'aštuoni', 'devyni', 'dešimt'];



  return (
    <div>
      <ul>
        {masyvas.map((zodis, i) =>  <li key={i}>{i}: {zodis}</li>)}
      </ul>

    </div>
  )
}

export default Komp7