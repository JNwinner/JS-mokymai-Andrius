const Komp4 = () => {
  let school = 'VDU';
  let avg = 8.7;
  let sem = 3;
  return (
    <div className="student-details">
      <h2>Studento vardas ir pavarde</h2>
      <p>
        <strong>Mokosi:</strong> {school}
      </p>
      <p>
        <strong>Vidurkis:</strong> {avg}
      </p>
      <p>
        <strong>Kursas:</strong> {sem}
      </p>
    </div>
  );
};

export default Komp4;
