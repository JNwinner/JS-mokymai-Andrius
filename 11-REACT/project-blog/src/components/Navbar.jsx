

const Navbar = () => {
  return (
    <div className='p-5  flex max-w-[600px] mx-auto my-0 border-b-[1px_solid_#f2f2f2]'>
        <h1 className="text-[#f1356d]">My Blog</h1>
        <div className='ml-auto'>
            <a className="hover:text-[#f1356d] ml-4 no-underline p-1.5" href="/">Home</a>
            <a className="hover:text-[#f1356d] ml-4 no-underline p-1.5 text-white bg-[#f1356d] rounded-lg" href="/create">Create New Blog</a>
        </div>
    </div>
  )
}

export default Navbar