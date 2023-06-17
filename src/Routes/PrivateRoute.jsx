import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Navigate } from "react-router-dom";
import * as RoutePath from './RoutePath'
import Loading from "../Pages/Loading/Loading";

const PrivateRoute = ({children}) => {
	const{user ,loading}=useContext(AuthContext);
	if(loading) return <Loading/>
	if(user) return children
	else return <Navigate to={RoutePath.LOGIN} />
}

export default PrivateRoute;
