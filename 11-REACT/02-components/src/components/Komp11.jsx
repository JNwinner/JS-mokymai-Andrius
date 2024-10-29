

const Komp11 = () => {

    let students = [
        {id: 1, name: 'John Smith', grade: 7},
        {id: 2, name: 'Jane Doe', grade: 8},
        {id: 3, name: 'Joe Bloggs', grade: 6},
        {id: 4, name: 'Alan Smith', grade: 9},
    ]

    const vidurkis = () => {
        return students.reduce((total, student) => total + student.grade, 0) / students.length
    }

  return (
    <div>

        <h1>Studentai</h1>
        <p>Bendras studentu vidurkis: {vidurkis()}</p>
        <table border='1'>
               <thead>  
                    <tr>
                        <th>ID</th>
                        <th>Vardas ir Pavarde</th>
                        <th>Vidurkis</th>
                        <th>Virs Vidurkio?</th>
                    </tr>
                </thead> 

                <tbody>
                    {
                        students.map(student => 
                            <tr key={student.id}>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.grade}</td>
                                <td>{student.grade > vidurkis() ? 'Taip' : 'Ne'}</td>
                            </tr>
                        )
                    }
                </tbody>
        </table>
    </div>
  )
}

export default Komp11