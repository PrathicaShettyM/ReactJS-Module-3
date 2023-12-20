import {useNavigate} from "react-router-dom"

function ImageCard({imageUrl, id}){
    const navigate = useNavigate()

    const redirectToPage = () => {
        navigate(`/${id}`)
    }

    return(
        <div>
            <img src={imageUrl} onClick={redirectToPage} alt=""/>
        </div>
    )

}

export default ImageCard;
