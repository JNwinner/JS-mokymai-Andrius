import './korta.css'

export default function Korta ({korta, handlePasirinkimas}) {
    const handleClick = () => {
        handlePasirinkimas(korta)
    }

    return (
        <div className="korta">
            <div>
              <img src={korta.src} alt="kortos priekine puse" className="priekis" />
              <img src="img/cover.webp" alt="kortos nugarine puse" className="uzdengta" onClick={handleClick} />
            </div>
          </div>
    )

    
}