
const Comp4Child = (props) => {

    let duomenys = props.data

  return (
    <>
        <div>
            {/* abu variantai galimi kaip paimti duomenys per props */}
            <p>{duomenys.join(', ')}</p>
            <p>{props.data.join(', ')}</p>
        </div>
    
    </>
  )
}

export default Comp4Child