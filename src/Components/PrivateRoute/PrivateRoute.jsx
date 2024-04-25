import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../../Hook/UseAuth";
//import UseAuth from "../Hook/UseAuth";
//import UseAuth from "../../Hook/UseAuth";

const PrivateRoute = ({children}) => {
    
    const {user, loading} = UseAuth();

    const location = useLocation();

    if(loading){
        //return <Navigate to='/login' state={location?.pathname || '/'}></Navigate>
        return <div className="flex items-center justify-center"><div className="h-[400px] w-1/2 flex items-center justify-center"><span className="loading loading-bars loading-lg"></span></div></div>
    }

    if(!user){
        return <Navigate to='/login' state={location?.pathname || '/'}></Navigate>
    }
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;