import './Gallery.css'

import { useEffect } from 'react';
import axios from 'axios';

function Gallery(){
    //axios.get() : returns an array of promises
    //API URL
    const API_URL = "https://api.slingacademy.com/v1/sample-data/photos";

    // async function for api data
    async function downloadData(){
        const response = await axios.get(API_URL);
        //store data of the api
        const photosData = response.data.photos;  //array of photo items

        const PromiseData = photosData.map((item)=> axios.get(item.url)); 

        const ListData = await axios.all(PromiseData);

        const FinalList = ListData.map(itemData => {
            const items = itemData.data;
            return{
               
              
            }
        })

        console.log(FinalList);

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