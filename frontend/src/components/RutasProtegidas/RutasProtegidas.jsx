import { Navigate,Outlet } from "react-router-dom"
    
export const RutasProtegidas = ({  permitido, children, redireccionaA = "/home" }) =>{
    console.log(permitido);
    if (!permitido) {
        return <Navigate to={redireccionaA}/>
    }
    return children ?  children : <Outlet />
}