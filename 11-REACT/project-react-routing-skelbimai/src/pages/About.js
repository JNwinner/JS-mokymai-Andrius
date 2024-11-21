import { useState } from "react"
import { Navigate } from "react-router-dom"


export default function About() {
    const [user, setUser] = useState('Andrius')
    if(!user) {
        return <Navigate to='/' replace={true} />
    }
    return (
        <div className="about">
            <h2>Apie mus</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores doloremque porro mollitia necessitatibus odio eveniet. Dignissimos ad explicabo quidem doloribus cupiditate placeat labore perspiciatis, minima voluptatibus, repudiandae necessitatibus ullam facere doloremque sed quod inventore ipsa autem magni error. Error corrupti facere tempore molestiae velit. Fuga porro accusantium ad rem aut?</p>
            <p>Impedit officiis sint porro eos ipsum, nostrum facilis placeat possimus vel esse autem, quam repudiandae corporis laboriosam alias doloribus. Accusamus quasi, delectus doloremque quas asperiores animi, voluptas nisi praesentium reprehenderit dolore quia a. Iure corrupti, eos eligendi, nam odio velit eaque accusamus saepe quis dignissimos nihil, dolor deleniti est numquam!</p>
            <p>Amet odio nobis culpa sit porro eligendi inventore rerum optio iure eum. Aut nihil illum molestias perferendis consectetur dolorum repellendus voluptatum est excepturi nulla fuga consequatur itaque et, atque aperiam quae odio blanditiis consequuntur quisquam odit quibusdam recusandae in! Explicabo magnam deleniti adipisci aliquid ut, fuga deserunt exercitationem quibusdam pariatur!</p>
        
            <button onClick={() => setUser(null)}>Atsijungti</button>
        </div>
    )
}
