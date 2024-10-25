const Komp5 = () => {
  let auto = {
    marke: 'Audi',
    modelis: 'A4',
    rida: 25000,
    metai: 2023,
    darbinis_turis: 1.6,
  };
  return (
    <div>
      <h1>
        {auto.marke} {auto.modelis}
      </h1>
      <ul>
        <li>Rida: {auto.rida}</li>
        <li>Metai: {auto.metai}</li>
        <li>Darbinis turis: {auto.darbinis_turis} L</li>
      </ul>
    </div>
  );
};

export default Komp5;
