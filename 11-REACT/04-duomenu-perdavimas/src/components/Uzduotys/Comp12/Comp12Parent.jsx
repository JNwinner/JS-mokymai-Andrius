import Comp12Child from "./Comp12Child"


const Comp12Parent = () => {
    // Susikurkite du komponentus. Vienas komponentas bus parent, o kitas child. Child komponentas turėtų priimti props (žodžių masyvą) ir jį išvesti lentelėje, pirmame stulpelyje nurodant žodį, o antrame žodžio simbolių kiekį. Parent komponente turėtų būti sukurti du žodžių masyvai, bei iškviestas child komponentas du kartus, kiekvieną kartą perduodant skirtingą masyvą.

    let wordsArr1 = ['apple', 'banana', 'cherry', 'date', 'watermelon', 'grapes']
    let wordsArr2 = ['kiwi', 'lemon', 'mango', 'orange', 'papaya', 'pear']

    return (
      <div>
        <h1>Lentelė</h1>
        <div style={{ display: "flex", gap: "50px", justifyContent: 'center', marginBottom: "50px" }}>
          <div style={{width: "300px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", border: "1px solid salmon", borderRadius: "10px", padding: "25px"}}>
          <h2>Words Array 1</h2>
          <table border={1}>
            <thead>
              <tr>
                <th>Word</th>
                <th>Length</th>
              </tr>
            </thead>
            <tbody>
              {wordsArr1.map((word, i) => (
                <Comp12Child key={i} word={word} />
              ))}
            </tbody>
          </table>
            </div>
            <div style={{width: "300px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", border: "1px solid salmon", borderRadius: "10px", padding: "25px"}}>
          <h2>Words Array 2</h2>
          <table border={1}>
            <thead>
              <tr>
                <th>Word</th>
                <th>Length</th>
              </tr>
            </thead>
            <tbody>
              {wordsArr2.map((word, i) => (
                <Comp12Child key={i} word={word} />
              ))}
            </tbody>
          </table>
          </div>
        </div>
        </div>
      );
    };
    

export default Comp12Parent