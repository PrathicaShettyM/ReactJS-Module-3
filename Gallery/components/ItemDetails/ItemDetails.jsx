import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

export const ItemDetail = () => {
    const [data, setData] = useState();

    const {id} = useParams();

    const getData = async () => {
        
        const response = await fetch(`https://api.slingacademy.com/v1/sample-data/photos/${id}`);
        const {photos} = await response.json();
        setData(photos);
    }

    useEffect(()=> {
        getData()
    },[])

    return(
        <div>
            <img src={data?.url} alt=""/>
            <div>
                <h1>{data?.url}</h1>
                <p>
                    {data?.description}
                </p>
            </div>
            </div> 
    )
}