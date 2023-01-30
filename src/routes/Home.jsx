import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import filmesFetch from "./axios/config";
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
        <div>   
            {filmes.map((filmes, key) => {
                return (
                    <div>
                        <section>
                        <h1>{filmes.titulo}</h1>
                        <h1>{filmes.genero}</h1>
                        <h1>{filmes.diretor}</h1>
                        <h1>{filmes.classificacao}</h1>
                        <img src={filmes.poster} alt=""/>
                        </section>
                    </div>

                )
            })}
        </div>

    )
}
export default Home