import React from "react";
import { Link } from "react-router-dom";
import LogoNav from "../imagens/LogoGIF.gif"
// Import CSS via MODULE
import styles from "../styles/NavBar.module.css"


const navBar = () => {

    return (
        <header>
            <nav> 
                <div className={styles.navBar}>
                <Link to={`/`}>
                    <img className={styles.logo} src={LogoNav} alt="CineOFF" />
                </Link>
                <ul>
                    <li><Link to={`/newfilme`}>Adicionar</Link></li>
                    <li><Link to={`/edit`}>Alterar</Link></li>
                </ul>
                </div>
            </nav>
        </header>
    )
}

export default navBar