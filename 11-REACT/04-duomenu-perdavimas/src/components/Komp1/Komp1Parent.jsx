import Komp1Child from "./Komp1Child"


const Komp1Parent = () => {
  return (
    <div>
        <h2>Komp 1</h2>
        <Komp1Child tekstas='Pirma eilute'/>
        <Komp1Child tekstas='Antra eilute'/>
        <Komp1Child tekstas='Trecia eilute'/>
    </div>
  )
}

export default Komp1Parent