import {Route, Routes} from "react-router-dom"
import Gallery from "../components/Gallery/Gallery"
import ItemDetails from "../components/ItemDetails/ItemDetails"

export const CustomRoute = () => {
    return(
        <Routes>
            <Route path="/" element={<Gallery/>}/>     
            <Route path="/:id" element={<ItemDetails/>}/>
        </Routes>
    )
}