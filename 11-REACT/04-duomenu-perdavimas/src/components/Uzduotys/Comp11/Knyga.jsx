

// priima props (knygos objektą)
const Knyga = (props) => {
  // išspausdina visą turimą apie knygą informaciją,
  // taip pat išveda "knyga brangi" jei jos kaina
  // yra didesnė nei 30 eurų, "knyga kainuoja vidutiniškai",
  // jei jos kaina yra tarp 10 ir 30 eurų, bei
  // "knyga pigi", jei jos kaina iki 10 eurų
  return (
    <div style={{width: "250px", border: "1px solid white", borderRadius: "25px", padding: "10px"}}>
      <h3>{props.knyga.pavadinimas}</h3>
      <p>Puslapiai: {props.knyga.puslapiai}</p>
      <p>Kaina: {props.knyga.kaina} €</p>
      {props.knyga.kaina > 30 ? <p>Knyga brangi</p> : props.knyga.kaina > 10 ? <p>Knyga kainuoja vidutiniškai</p> : <p>Knyga pigi</p>}
    </div>
  )
}

export default Knyga