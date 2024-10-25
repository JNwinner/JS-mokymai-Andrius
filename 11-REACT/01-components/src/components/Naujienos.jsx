import Naujiena from './Naujiena';
import './Naujienos.css';

const Naujienos = () => {
  return (
    <div className="naujienos-wrapper">
      <h1>Naujienos</h1>
      <div className="naujienu-list">
        <Naujiena />
        <Naujiena />
        <Naujiena />
      </div>
    </div>
  );
};

export default Naujienos;
