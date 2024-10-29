import Comp4Child from "./Comp4Child"


const Comp4Parent = () => {

    let skaiciai = [8, 5, 9, 2, 0, 7, 6, 8, 10]

  return (
    <>
    <h2>Masyvas</h2>
    <Comp4Child data={skaiciai}/>
    </>
  )
}

export default Comp4Parent