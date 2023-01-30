import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import filmesFetch from "./axios/config";
import  {motion} from "framer-motion"
import Teste from "../componentes/imagens/cinema.jpg"
import "./Home.css";


const Home = () => {

    const [filmes, setFilmes] = useState([])

    // Função sendo executada apenas quando o componente aparecer na tela
    useEffect(() => {
        filmesFetch.get("/filmesemCartaz")
            .then((resposta) => {
                setFilmes(resposta.data)
            })
            .catch(() => {
                console.log("Infelizmente deu erro na sua requisição de API")
            })

    }, [])

    return (
        <motion.div 
            initial = {{opacity:0}}
            animate = {{opacity:1}}
            exit = {{opacity:0}}
         >
                <div className="teste">
                <img src={Teste} alt="" />
                </div>
            {filmes.map((filmes, key) => {
                return (
                    <div>
                        <section>
                            <div className="catalogo">
                                <img src={filmes.poster} alt="" />
                                <h1>Título:{filmes.titulo}</h1>
                                <div className="btnLerMais">
                                    <button>Ler mais</button>
                                </div>
                                <h1>Gênero:{filmes.genero}</h1>
                                <h1>Diretor:{filmes.diretor}</h1>
                                <h1>Classificação:{filmes.classificacao}</h1>
                            </div>
                        </section>
                    </div>

                )
            })}
        </ motion.div>

    )
}
export default Home