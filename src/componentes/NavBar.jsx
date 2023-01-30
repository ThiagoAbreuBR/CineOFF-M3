import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./NavBar.css";

const navBar = (props) => {
    const [pesquisa, setPesquisa] = useState("");

    function handlePesquisar(e) {
        setPesquisa(e.target.value)
    }
 
    return (
        <nav className="navbar">
            <h2><Link to={`/`}></Link>CineOFF</h2>
            <ul>
                <li>
                    <Link to={`/`}>Home</Link>
                </li>
                <li>
                    <Link to={`/new`} className={"new-btn"}>Novo filme</Link>
                </li>
                <li>
                    <Link to={`/edit`} className={"new-btn"}>Edite os filmes</Link>
                </li>
                <form onSubmit={handlePesquisar}>
                <input type="text" placeholder="Procure um filme" name="query" id="query" onChange={(e) => setPesquisa(e.target.value)} />
                <button type="submit">Buscar</button>
                </form>
            </ul>
        </nav>

    )
}

export default navBar