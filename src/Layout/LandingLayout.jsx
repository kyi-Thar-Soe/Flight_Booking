import { Outlet } from "react-router";
import NavBarThree from "../Components/NavBarThree/NavBarThree";

export default function LandingLayout() {
    return (
        <>
        <NavBarThree/>
        <Outlet/>
        </>
    )
}