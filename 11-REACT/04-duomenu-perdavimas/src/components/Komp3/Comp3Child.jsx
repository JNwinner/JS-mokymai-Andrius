
const Comp3Child = (props) => {
  return (
    <div>
        {
            props.student && (
                <div>
                    <h3>{props.student.name}</h3>
                    <p>Universitetas: {props.student.school}</p>
                    <p>Vidurkis: {props.student.grade}</p>
                </div>    
            )
        }
    </div>
  )
}

export default Comp3Child