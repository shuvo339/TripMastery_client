import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar/Navbar";
import Footer from "../components/shared/Footer/Footer";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="max-w-6xl mx-auto px-2 md:px-0">
                 <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;