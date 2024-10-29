import NavbarHeader from './NavbarHeader'
import NavbarLinks from './NavbarLinks'
import './styles/navbar.css'
// susikurkite css failą ir jį prijunkite
// sustiliuokite taip, kad turėtumėte navigacijos juostą, kur po kaire būtų
// tinklalapio pavadinimas ir po dešine, horizontaliai einančios nuorodos

const Navbar = () => {
  let navbarData = {
    header_text: 'Projektas ABC',
    links: [
        { id: 1, url: '/', title: 'Pradžia' },
        { id: 2, url: '/paslaugos', title: 'Paslaugos' },
        { id: 3, url: '/projektai', title: 'Projektai' },
        { id: 4, url: '/apie-mus', title: 'Apie mus' },
        { id: 5, url: '/kontaktai', title: 'Kontaktai' },
    ]
  }

  return (
    <nav className='nav'>
        {
          <NavbarHeader header_text={navbarData.header_text} />
        }
        <div>
          <ul>
        {
         navbarData.links.map(link => {
            return <NavbarLinks key={link.id} link={link.url} title={link.title} />
          })
        }
        </ul>
        </div>
    </nav>
  )
}

export default Navbar