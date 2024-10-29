import React from 'react'

const Komp10 = () => {

    let skaicius = 57
    let num1 = 34
    let num2 =52

    const kurisDidenis = () => {
        return Math.max(num1, num2)
    }

  return (
    <div>
        <h1>Skaiciai ir skaiciavimai</h1>
        <p>{skaicius}</p>
        <p>{4 + 5}</p>
        <p>{skaicius + 10}</p>
        <p>{skaicius % 2 === 0 ? 'lyginis' : 'nelyginis'}</p>
        <p>Turimi skaiciai: {num1} ir {num2}</p>
        <p>Didziausias: {kurisDidenis()}</p>


    </div>
  )
}

export default Komp10