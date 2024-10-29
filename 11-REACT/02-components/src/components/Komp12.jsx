

const Komp12 = () => {

    let sk1 = 12;
    let sk2 = 6;
    let sk3 = 3;

    const didziausias = Math.max(sk1, sk2, sk3);
    const maziausias = Math.min(sk1, sk2, sk3);
    const vidukris = (sk1 + sk2 + sk3) / 3;

  return (
    <div>
        <p>Didziausias skaicius: {didziausias}</p>
        <p>Maziausias skaicius: {maziausias}</p>
        <p>Vidurkis: {vidukris}</p>
    </div>
  )
}

export default Komp12