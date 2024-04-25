import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";


const UseAuth = () => {
    const allvalues = useContext(AuthContext);
    return allvalues;
};

export default UseAuth;