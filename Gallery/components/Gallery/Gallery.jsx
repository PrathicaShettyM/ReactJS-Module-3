import './Gallery.css'
import ImageCard from '../ImageCard/ImageCard';
import { useEffect, useState } from 'react';

function Gallery(){
    const [data, setData] = useState([])
    const downloadData = async() => {
        const response = await fetch("https://api.slingacademy.com/v1/sample-data/photos?limit=20");
        const {photos} = await response.json();
        setData(photos)
        console.log(photos);
    }

    useEffect(()=>{
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
