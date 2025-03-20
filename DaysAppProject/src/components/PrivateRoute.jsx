import { Navigate, Outlet } from "react-router-dom";
import { useLocalContext } from "../context/localContext";




export default function PrivateRoute(){
   const {flagAuth} = useLocalContext() 
    return flagAuth ? <Outlet/> : <Navigate to="/login" />
}