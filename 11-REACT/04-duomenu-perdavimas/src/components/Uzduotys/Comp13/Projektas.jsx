

// padarykite kad šis komponentas priimtų props (vieno projekto objektą)
const Projektas = (props) => {
  // išveskite visą turimą projekto informaciją
  return (
    <div className="project">
      <h2>{props.name}</h2>
      <p>{`<${props.type}/>`}</p>
      <p>Atlikimo data: <span>{props.date}</span></p>


    </div>
  )
}

export default Projektas