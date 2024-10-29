import Zodis from './Zodis'

const Zodziai = () => {
  let pirmas = 'Kriause'
  let antras = 'Obelis'
  let trecias = 'Medis'
  let ketvirtas = 'Kalnas'

  // turi iškviesti komponentą Zodis kelis kartus,
  // kiekvieną kartą jam perduodant vis skirtingą
  // kintamąjį (pirmas, antras, ...)
  return (
    <div>
      <h1>Žodžiai</h1>
      <div style={{ display: "flex", gap: "50px", justifyContent: 'center', marginBottom: "50px" }}>
        <Zodis zodis={pirmas} />
        <Zodis zodis={antras} />
        <Zodis zodis={trecias} />
        <Zodis zodis={ketvirtas} />
      </div>
    </div>
  )
}

export default Zodziai