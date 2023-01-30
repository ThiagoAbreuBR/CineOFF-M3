import React from "react";
import { Link } from "react-router-dom";
import Logo from "../imagens/Logo.png"
import "./NavBar.css";


const navBar = () => {

    return (
        
        <div className="container">
        <header>
            <nav className="navBar">
                <Link to={`/`}>
                    <img className="logo" src={Logo} alt="CineOFF" />
                </Link>
                <ul>
                    <li><Link to={`/`}>Cinemas</Link></li>
                    <li><Link to={`/buscar`} className={"new-btn"}>Comidas</Link></li>
                </ul>
            </nav>
        </header>
        </div>
    )
}

export default navBar