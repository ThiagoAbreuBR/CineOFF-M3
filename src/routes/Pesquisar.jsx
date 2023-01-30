import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"
import Logo from "../imagens/logo.png"
import "./Home.css";
import axios from "axios";

const Pesquisar = (props) => {


    const [filmes, setFilmes] = useState([])
    const urlAPI = "https://testeapi-xawn.onrender.com/pesquisar/filmesemCartaz?" + props.location.pesquisar
    

    // Função sendo executada apenas quando o componente aparecer na tela
    useEffect(() => {
        axios.get(urlAPI)
            .then((resposta) => {
                setFilmes(resposta.data)
            })
            .catch(() => {
                console.log("Infelizmente deu erro na sua requisição de API")
            })

    }, [])

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="logo">
                <img src={Logo} alt="" />
            </div>
            {filmes.map((filmes, key) => {
                return (
                    <div>
                        <section>
                            <div className="catalogo">
                                <img src={filmes.poster} alt="" />
                                <h1>{buscar.titulo}</h1>
                            </div>
                        </section>
                    </div>

                )
            })}
        </ motion.div>

    )
}
export default Pesquisar