import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    console.log("estoy en redirect")
    const { state } = useLocation()
    return state?.auth ? children : <Navigate to="/login" />
}

export default PrivateRoute;