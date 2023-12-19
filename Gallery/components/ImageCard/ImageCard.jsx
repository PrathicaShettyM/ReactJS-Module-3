import {useNavigate} from "react-router-dom"

function ImageCard({imageUrl, id}){
    const navigate = useNavigate()

    const pageRedirect = () => {
        navigate(`/${id}`)
    }

    return(
        <div>
            <img src={imageUrl} onClick={pageRedirect} alt=""/>
        </div>
    )

}

export default ImageCard;
