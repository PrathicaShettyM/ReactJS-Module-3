import { useEffect } from 'react';
import './Gallery.css'
import axios from 'axios';

function Gallery(){
    //axios.get() : returns an array of promises
    //API URL
    const API_URL = "https://api.slingacademy.com/v1/sample-data/photos";

    // async function for api data
    async function downloadData(){
        const response = await axios.get(API_URL);
        console.log(response.data);
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

            </div>   
        </div>
    )
}
export default Gallery;