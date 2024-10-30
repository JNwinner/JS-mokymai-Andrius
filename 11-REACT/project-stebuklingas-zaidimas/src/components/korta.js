import './Korta.css'

export default function Korta ({korta, handlePasirinkimas, flipped, disabled}) {
    const handleClick = () => {
      if(!disabled) {
        handlePasirinkimas(korta)
      } 
    }

    return (
        <div className="korta">
            <div className={flipped ? 'flipped' : ''}>
              <img src={korta.src} alt="kortos priekine puse" className="priekis" />
              <img src="img/cover.webp" alt="kortos nugarine puse" className="uzdengta" onClick={handleClick} />
            </div>
          </div>
    )

    
}