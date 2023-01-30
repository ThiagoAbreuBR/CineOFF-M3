import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import filmesFetch from "./axios/config";
import { Link } from "react-router-dom";
import "./Detalhes.css";


const Detalhes = () => {

    const [filmes, setFilmes] = useState([])

    // Função sendo executada apenas quando o componente aparecer na tela
    useEffect(() => {
        filmesFetch.get(`/filmesemCartaz/${id}`)
            .then((resposta) => {
                setFilmes(resposta.data)
            })
            .catch(() => {
                console.log("Infelizmente deu erro na sua requisição de API")
            })

    }, [])

    // Para o componente gerar a ID do filme clicado
    const { id } = useParams()

    return (
        <section>
            <div className="btnLerMais">
                <Link to={{ pathname: '/' }}>
                    <button>Voltar</button>
                </Link>
            </div>
            <h1>{filmes.titulo}</h1>
            <div className="filmeInfo">
                <img src={filmes.poster} alt="" />
                <h1>Gênero:{filmes.genero}</h1>
                <h1>Diretor:{filmes.diretor}</h1>
                <button>{filmes.classificacao}</button>
            </div>
        </section>

    )
}
export default Detalhes