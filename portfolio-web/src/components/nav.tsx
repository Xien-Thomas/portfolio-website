import { Link } from "react-router-dom"
import "../styles/nav.css"
import logo from "../images/xien-logo.png"
function Nav(){
    return(
        <>
            <div className="nav-container">
                <Link className="Home-link"to="/"><img src={logo} alt="" className="logo" /></Link>
                <nav className="navbar-links">
                    <Link className="link" to="/about">About me</Link>
                    <Link className="link" to="/projects">Projects</Link>
                </nav>
                
            </div>
        </>
    )
}

export default Nav