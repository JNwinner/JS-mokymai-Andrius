import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="bg-white shadow-[0_2px_5px_rgba(0,0,0,0.1)] flex justify-between items-center py-5 px-8 ">
        <div>
          <NavLink className='text-[salmon] text-2xl font-bold' to='/'>Statytojas A</NavLink>
        </div>
        <ul className="m-0 p-0 list-none">
          <li className="inline-block ml-5"><NavLink className='font-bold hover:text-[salmon]' to='/'>Pradzia</NavLink></li>
          <li className="inline-block  ml-5"><NavLink className='font-bold hover:text-[salmon]' to='/services'>Paslaugos</NavLink></li>
          <li className="inline-block  ml-5"><NavLink className='font-bold hover:text-[salmon]' to='/about-us'>Apie mus</NavLink></li>


        </ul>

    </div>
  )
}

export default Navbar