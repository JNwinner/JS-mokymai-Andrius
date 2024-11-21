import './App.css'
import BlogDetails from './components/BlogDetails'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Sidebar from './components/Sidebar'

function App() {
    const title = "My Blog"
    const likes = 150  

  return (
    <div className='App'>
            <Navbar/>
        <div className='max-w-[600px] my-10 mx-auto p-5'>
            <Home/>
        </div>
    </div>
  )
}

export default App
