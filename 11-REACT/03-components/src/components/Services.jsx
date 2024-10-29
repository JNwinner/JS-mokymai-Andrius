import '../styles/Services.css'

const Services = () => {
    return (
        <div className='services-wrapper'>
            <h2>Services</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas temporibus reiciendis tempore? Deserunt laudantium fugiat labore doloremque soluta sint cupiditate asperiores, provident totam minus?</p>
            <div className='services'>
                <div className='service'>
                    <h3>Service 1</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, soluta.</p>
                </div>
                <div className='service'>
                    <h3>Service 2</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, eos?</p>
                </div>
                <div className='service'>
                    <h3>Service 3</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, deleniti!</p>
                </div>
            </div>
        </div>
    )
}

export default Services