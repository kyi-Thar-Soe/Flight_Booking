import NavBar from "../Components/NavBarOne/NavBar";
import NavBarTwo from "../Components/NavBarTwo/NavBarTwo";
import {Outlet} from "react-router-dom";

export default function Defaultlayout() {
    return(
        <>
        <NavBar/>
        <NavBarTwo/>
        <Outlet/>
        </>
    )
}