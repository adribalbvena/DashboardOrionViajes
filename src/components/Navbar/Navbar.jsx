import "./Navbar.css"

export const Navbar = () => {
    return <nav className="nav">
        <img 
        src="orion_nav.png"
        className="nav_logo" />
        <a>Dashboard</a>
        <button>Salir</button>
    </nav>
}