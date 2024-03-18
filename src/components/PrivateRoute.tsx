import { Navigate, Outlet } from "react-router-dom";
import { AuthContext, IAuthContext } from "../context/AuthContext";
import { useContext } from "react";

const PrivateRoute = () => {
 
const { user } = useContext<IAuthContext>(AuthContext)

 // Your authentication logic goes here...
 
  return user ? <Outlet /> : <Navigate to="/login" replace />;
}

export default PrivateRoute;