
// šis komponentas turi priimti props
const Zodis = (props) => {
  // turi išvesti gautą žodį,
  // taip pat, turi apskaičiuoti ir parodyti jo
  // ilgį (simbolių kiekį)
  return (
    <div style={{width: "250px", border: "1px solid salmon", borderRadius: "25px", padding: "10px"}}>
      <h3>{props.zodis}</h3>
      <p>Žodžio ilgis: {props.zodis.length}</p>
    </div>
  )
}

export default Zodis