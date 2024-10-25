const Komp3 = () => {
  let pazymiai = [7, 8, 10, 5, 9, 7];
  return (
    <div>
      <p>{pazymiai}</p>
      <p>{pazymiai.join(', ')}</p>
      <p>{pazymiai[2]}</p>
    </div>
  );
};

export default Komp3;
