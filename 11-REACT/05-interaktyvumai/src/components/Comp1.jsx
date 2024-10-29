import { useState } from "react"

const Comp1 = () => {

  const pirmasHandler = () => { alert('Pirmas') }
  const antrasHandler = () => { alert('Antras') }
  const treciasHandler = () => { alert('Trecias') }
  const ketvirtasHandler = () => { alert('Ketvirtas') }
  const buttonHandler = (event) => { alert('Paspaustas: ' + event.target.textContent) }

  const [counter, setCounter] = useState(0)

  const counterHandler = () => {
    setCounter(counter + 1)
  }

  const turboCounterHandler = (action) => {
    if(action === 0) {
      setCounter(0)
    }else {
      setCounter(counter + action)
    }
  }




  return (
    <div>

      <h2>Comp1</h2>
      <button onClick={pirmasHandler}>Pirmas</button>
      <button onClick={antrasHandler}>Antras</button>
      <button onClick={treciasHandler}>Trecias</button>
      <button onClick={ketvirtasHandler}>Ketvirtas</button>
      <button onClick={buttonHandler}>Penktas</button>
        <div>
          <h2>Counter</h2>
          <button onClick={counterHandler}>Spausti</button>
          <p>Buvo paspausta: {counter}</p>
        </div>
        <div>
          <h2>Turbo Counter</h2>
          <button onClick={() => turboCounterHandler(1)}>+1</button>
          <button onClick={() => turboCounterHandler(-1)}>-1</button>
          <button onClick={() => turboCounterHandler(5)}>+5</button>
          <button onClick={() => turboCounterHandler(-5)}>-5</button>
          <button onClick={() => turboCounterHandler(0)}>= 0</button>
          <p>Counter reiksme: {counter} </p>

        </div>


    </div>
  )
}

export default Comp1