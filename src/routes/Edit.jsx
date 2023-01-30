import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import filmesFetch from "./axios/config";
import "./Edit.css";


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
        <div className="container">
            {filmes.map((filmes, key) => {
                return (
                    <div className="catalogo">
                        <section>
                            <h1>{filmes.titulo}</h1>
                            <img src={filmes.poster} alt="" />
                    
                        <div>
                            <Link to={{ pathname: `/editfilme/${filmes.id}`}}>
                                <button className="atualizar">Atualize informações</button>
                            </Link>
                            <button className="deletar" onClick={()=> apagarFilmes(filmes.id)}>Excluir</button>
                        </div>
                        </section>
                    </div>

                )
            })}
        </div>
    )
}
export default Edit