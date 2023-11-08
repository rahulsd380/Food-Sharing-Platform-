import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../Spinner/Spinner";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    console.log(location);


    if(loading){
        return <Spinner></Spinner>
    }
    if(user?.email){
        return children
    }
    return (
        <Navigate state={location.pathname} to={'/login'}>
            
        </Navigate>
    );
};

export default PrivateRoute;
