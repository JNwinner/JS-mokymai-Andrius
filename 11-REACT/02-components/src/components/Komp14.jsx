

const Komp14 = () => {

    const array = [-9, 8, -4, 12, 7, 5, -1]

    return (
        <div>
            <ul>
                {
                    array.map((number, i) => {
                        return <li key={i}>{number} - {number >= 0 ? 'teigiamas' : 'neigiamas'}</li>

                    })
                }
            </ul>
        </div>
    )
}

export default Komp14