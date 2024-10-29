import './App.css';
import { useState } from 'react';
import Korta from './components/korta';

const kortuImg = [
  { 'src': 'img/pic-1.jpg', id: 1 },
  { 'src': 'img/pic-2.jpg', id: 2 },
  { 'src': 'img/pic-3.jpg', id: 3 },
  { 'src': 'img/pic-4.jpg', id: 4 },
  { 'src': 'img/pic-5.png', id: 5 },
  { 'src': 'img/pic-6.png', id: 6 }
];

function App() {
  const [kortos, setKortos] = useState([]);
  const [bandymai, setBandymai] = useState(0);
  const manoKortos = () => {
    const visosKortos = [...kortuImg, ...kortuImg].sort(() => Math.random() - 0.5).map((korta) => ({ ...korta, id: Math.random() }));
    setKortos(visosKortos);
    setBandymai(0);
  };

const [pasirinkimas1, setPasirinkimas1] = useState(null)
const [pasirinkimas2, setPasirinkimas2] = useState(null)

const handlePasirinkimas = (korta) => {
  pasirinkimas1 ? setPasirinkimas2(korta) : setPasirinkimas1(korta)
}

  return (
    <div className="App">
      <h1>Stebuklinga atmintis</h1>
      <button onClick={manoKortos}>Naujas Zaidimas</button>

      <div className="kortu-grid">
        {
        kortos.map((korta) => (
          <Korta
            key={korta.id}
            korta={korta}
            handlePasirinkimas={handlePasirinkimas}
          />
        ))
        }
      </div>
    </div>
  );
}

export default App;