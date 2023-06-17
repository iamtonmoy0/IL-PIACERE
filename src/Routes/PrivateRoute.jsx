import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import * as RoutePath from './RoutePath'
import Loading from "../Pages/Loading/Loading";

const PrivateRoute = ({children}) => {
	const{user ,loading}=useContext(AuthContext);
	const location = useLocation()
	if(loading) return <Loading/>
	if(user) return children
	else return <Navigate to={RoutePath.LOGIN} state={{from:location}} replace />
}

export default PrivateRoute;
