import { Navigate } from "react-router-dom";




export default function PrivateRoute({children}){
    const isAuth = sessionStorage.getItem('auth') === 'true'

    return isAuth ? children : <Navigate to="/login" />
}