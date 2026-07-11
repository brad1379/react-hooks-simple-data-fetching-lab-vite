import { useState, useEffect } from 'react';

const API_URL = "https://dog.ceo/api/breeds/image/random"

function DogImage() {
    const [image, setImage] = useState();
    const [loading, setLoading] = useState(true);

    // Function fetches a new dog image and handles toggling loading while waiting for the image to fetch
    function fetchNewImage() {
        setLoading(true);
        fetch(API_URL)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Failed to fetch image");
            }
            return response.json()
        })
        

        .then(data => {
            setImage(data.message);
            setLoading(false);
        })
        .catch(error => console.log(error))
    }

    // Use effect runs once to initially fetch an image upon component mount
    useEffect(fetchNewImage, []);

    return(
        <div>
            {loading ? <p>Loading...</p> : ""}
            <img src={image} alt="dog image" />
            <button onClick={fetchNewImage}>Generate New Dog Image</button>
        </div>
    )
}

export default DogImage