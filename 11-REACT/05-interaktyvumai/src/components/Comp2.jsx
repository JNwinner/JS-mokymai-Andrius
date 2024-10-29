import { useState } from "react"

const Comp2 = () => {
    const [vardas, setVardas] = useState('')
    const [pirmasZodis, setPirmasZodis] = useState('-')
    const [antrasZodis, setAntrasZodis] = useState('-')
    const pirmasHandler = (e) => {
        setPirmasZodis(e.target.value)
    }
    const antrasHandler = (e) => {
        setAntrasZodis(e.target.value)
    }

const inputHandler = (e) => {
    setVardas(e.target.value)
}

const vardasLength = () => {
    return vardas.length
}

  return (
    <div>
        <h2>Comp2</h2>
        <label htmlFor="nameInput">Vardas</label>
        <input onChange={inputHandler} type="text" id="nameInput" />
        <p>Jus ivedete: {vardas}</p>
        <p>Simboliu kiekis: {vardasLength()}</p>

        <div>
            <label htmlFor="">Pirmas zodis:</label>
            <input type="text" onChange={pirmasHandler} />
        </div>

        <div>
            <label htmlFor="">Antras zodis:</label>
            <input type="text" onChange={antrasHandler} />
        </div>
        <p><strong>Ivesti zodziai:</strong> {pirmasZodis} ir {antrasZodis}</p>
    </div>
   
  )
}

export default Comp2