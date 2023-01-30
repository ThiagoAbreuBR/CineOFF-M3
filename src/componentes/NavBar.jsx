import React from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";

const navBar= () => {
    return (        
        <nav className="navbar">
            <h2><Link to={`/`}></Link>CineOFF</h2>
            <ul>
                <li>
                <Link to={`/`}>Home</Link>
                </li>
                <li>
                <Link to={`/new`} className={"new-btn"}>Adicione um filme</Link>
                </li>
                <li>
                <Link to={`/edit`} className={"new-btn"}>Edite os filmes</Link>
                </li>
            </ul>
        </nav>

    )
}

export default navBar