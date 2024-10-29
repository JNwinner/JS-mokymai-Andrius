import Comp3Child from "./Comp3Child"

const Comp3Parent = () => {
    let student1 = {name: 'Jonas Jonauskas', grade: 8, school: 'VU'}
    let student2 = {name: 'Pranas Pranauskas', grade: 9, school: 'VDU'}

  return (
    <div>
        <h2>Studentai</h2>
        <Comp3Child student={student1}/>
        <Comp3Child student={student2}/>

    </div>
  )
}

export default Comp3Parent