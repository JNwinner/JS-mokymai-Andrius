import './App.css'
import Komp1Parent from './components/Komp1/Komp1Parent'
import Naujienos from './components/Komp2/Naujienos'
import Comp3Parent from './components/Komp3/Comp3Parent'
import Comp4Parent from './components/Komp4/Comp4Parent'
import Comp5Parent from './components/Komp5/Comp5Parent'
import Comp9Parent from './components/Uzduotys/Comp9/Comp9Parent'
import Zodziai from './components/Uzduotys/Comp10/Zodziai'
import Knygynas from './components/Uzduotys/Comp11/Knygynas'
import Comp12Parent from './components/Uzduotys/Comp12/Comp12Parent'
import Projektai from './components/Uzduotys/Comp13/Projektai'
import NavBar from './components/Uzduotys/Comp14/NavBar'


function App() {

  return (
    <>
      <Komp1Parent />
      <Naujienos />
      <Comp3Parent />
      <Comp4Parent />
      <Comp5Parent />
      <Comp9Parent />
      <Zodziai />
      <Knygynas />
      <Comp12Parent />
      <Projektai />
      <NavBar />
    </>
  )
}

export default App
