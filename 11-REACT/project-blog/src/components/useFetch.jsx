import { useState, useEffect } from "react"

const useFetch = (url) => {

    const [data, setData] = useState(null)
    const [isKraunasi, setKraunasi] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                if(!res.ok) {
                    throw Error('nepavyko paimti duomenu')
                }
                return res.json()
            })
            .then(data => {
                setBlogs(data)
                setKraunasi(false)
                setError(null)

            })
            .catch(err => {
                setKraunasi(false)
                setError(err.message)
            })
    }, [url])

  return {data, isKraunasi, error}
}

export default useFetch