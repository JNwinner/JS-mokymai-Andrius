import React from 'react'

const Komp13 = () => {

    let array = [12, 6, 3, 10, 9, 8];

    const didziausias = Math.max(...array);

  return (
    <div>
        <p>Skaiciai isspausdinti per kableli: {array.join(', ')}</p>
        <p>Skaiciu vidurkis: {array.reduce((total, number) => total + number, 0) / array.length}</p>
        <p>Didziausas sk:{didziausias}</p>
        <p>Lyginiai skaiciai: {array.filter(number => number % 2 === 0).join(', ')}</p>
    </div>
  )
}

export default Komp13