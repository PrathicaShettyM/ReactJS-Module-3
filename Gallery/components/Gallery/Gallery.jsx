import './Gallery.css'
import ImageCard from '../ImageCard/ImageCard';

import { useEffect, useState } from 'react';

const Gallery = () => {
    const [data, setData] = useState([])
    const API_URL = "https://api.slingacademy.com/v1/sample-data/photos?limit=50";

    const downloadData = async() => {
        const response = await fetch(API_URL);
        const {photos} = await response.json();
        setData(photos)
        console.log(photos);
    }

    useEffect(()=>{
        // call the function to display to the console
        downloadData();
    },[])
    return(
        <div className='landingPage'>
           
            <div>
                <h1>GALLERY</h1>
            </div>
            
            <div>
                {
                    data?.map((e,i)=>{
                        return <ImageCard id={e.id} imageUrl={e.url} key={i}/>
                    })
                }
            </div>   
        </div>
    );
}
export default Gallery;