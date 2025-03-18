import { Navigate, Outlet } from "react-router-dom";
import { useLocalContext } from "../context/localContext";




export default function PrivateRoute(){
    const {loggedIn} = useLocalContext()
    console.log(loggedIn)
    return loggedIn ? <Outlet/> : <Navigate to="/login" />
}