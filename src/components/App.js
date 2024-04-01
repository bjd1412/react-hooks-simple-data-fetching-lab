import React, {useEffect, useState} from "react";

function App () {
    const [image, setImage] = useState(null)
   const DOG_API_URL = "https://dog.ceo/api/breeds/image/random"
        useEffect(() => {
            fetch(DOG_API_URL)
            .then(res => res.json())
            .then(res => {
                setImage(res.message)

            })
        }, [])
        if(!image) {
            return <p>Loading...</p>
        }
        
    return(
        <>
        <h1>Here is a dog.
            <img src={image} alt="A Random Dog"/>
        </h1>
        </>
    )
}

export default App