import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import filmesFetch from "./axios/config";
import { useForm } from "react-hook-form"
import "./Home.css";


const Edit = () => {

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

    function apagarFilmes(id) {

    filmesFetch.delete(`/filmesemCartaz/${id}`)
    setFilmes(filmes.filter(filmes => filmes.id !== id ))
    }

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
                            <img src={filmes.poster} alt="" />
                        </section>
                        <div>
                            <Link to={{ pathname: `/editreal/${filmes.id}`}}>
                                <button>Editar</button>
                            </Link>
                            <button onClick={()=> apagarFilmes(filmes.id)}>Deletar</button>
                        </div>
                    </div>

                )
            })}
        </div>
    )
}
export default Edit