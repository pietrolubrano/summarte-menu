import { useContext } from "react"
import { AuthContext, IAuthContext } from "../context/AuthContext"
import { Button } from "react-bootstrap"
import { Navigate } from "react-router-dom"

const LogIn = () => {
    const { user, signIn } = useContext<IAuthContext>(AuthContext)

    if(!user){
        return (<div>
            Devi essere loggato per poter accedere a questa risorsa.
            Effettua il Login
            <Button onClick={() => signIn()}>Effettua il login</Button>
            </div>
        )
    }
    
    return <Navigate to="/admin" replace />
}

export default LogIn