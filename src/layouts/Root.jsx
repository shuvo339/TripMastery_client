import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar/Navbar";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="max-w-6xl mx-auto md:px-8 px-2">
                 <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;