import { useNavigate } from "react-router-dom";
import { useAuth } from "../../auth"
import "./Navbar.css"

export const Navbar = () => {
    const auth = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        auth.logout()
        navigate('/')
    }

    return <nav className="nav">
        <img 
        src="orion_nav.png"
        className="nav_logo" />
        <a>Dashboard</a>
        <button onClick={handleLogout}>Salir</button>
    </nav>
}