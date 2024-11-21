import { Link } from "react-router-dom"

const HomePage = () => {
  return (
    <div >
      <header className="bg-blue-200 py-12 px-8 text-center">
        <h1 className="text-4xl font-bold text-center pt-8 mb-4">Statytojas A</h1>
        <p className="text-xl mb-4">Patys geriausi nuo ...</p>
        <Link className="text-lg  text-[salmon] hover:text-black" to='/services'>Kuo galime padeti</Link>
      </header>
    </div>
  )
}

export default HomePage