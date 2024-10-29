import Naujiena from "./Naujiena"
const Naujienos = () => {
    let num1 = 34
    let num2 = 53
    let num3 = 82
    let num4 = -5

  return (
    <div>
        <h1>Naujienos</h1>
        <Naujiena title='Naujiena 1' skaicius={num1} text='aa'/>
        <Naujiena title='Naujiena 2' skaicius={num2} text='bb'/>
        <Naujiena title='Naujiena 3' skaicius={num3} text='cc'/>
        <Naujiena title='Naujiena 4' skaicius={num4} text='dd'/>
    </div>
  )
}

export default Naujienos