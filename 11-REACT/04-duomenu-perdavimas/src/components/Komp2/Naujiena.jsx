

const Naujiena = (props) => {
    const arLyginis = () => {
        return props.skaicius % 2 == 0 ? 'lyginis' : 'nelyginis'
    }

  return (
    <div>
       <h3>{props.title}</h3>
        <p>{props.text}</p>
        <p>Gautas skaicius: {props.skaicius} </p>
        <p>{props.skaicius >= 0 ? 'Teigiamas' : 'Neigiamas'}, {arLyginis()}</p>
    </div>
  )
}

export default Naujiena