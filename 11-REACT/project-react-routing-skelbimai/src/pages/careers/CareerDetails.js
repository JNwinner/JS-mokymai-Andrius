import { useLoaderData, useParams } from "react-router-dom"

export default function CareerDetails() {
    const {id} = useParams()
    const career = useLoaderData()
    return (
        <div className="career-details">
            <h2>Darbo pasiūlymas - {career.title}</h2>
            <p>Atlyginimas: nuo {career.salary} €</p>
            <p>Vietovė: {career.location}</p>
            <div className="details">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nostrum optio sequi, repellat nobis voluptatum necessitatibus illum nesciunt aut dolorem delectus facere molestiae quos asperiores quam modi exercitationem aliquam rerum.</p>
            </div>
        </div>
    )
}

export const careerDetailsLoader = async ({params}) => {
    const {id} = params
    const res = await fetch('http://localhost:5000/careers/' + id)
    if(!res.ok) {
        throw Error('Neradome šio darbo pasiūlymo.')
    }
    return res.json()
}
