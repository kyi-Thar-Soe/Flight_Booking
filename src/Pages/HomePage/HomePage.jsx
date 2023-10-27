import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import Info from "../Info/Info";
import Lounge from "../Lounge/Lounge";
import Search from "../Search/Search";
import Subscribe from "../Subscribe/Subscribe";
import Support from "../Support/Support";
import Travelers from "../Travelers/Travelers";

export default function HomePage() {
    return(
        <>
        <Home/>
        <Search/>
        <Support/>
        <Info/>
        <Lounge/>
        <Travelers/>
        <Subscribe/>
        <Footer/>
        </>
    )
}