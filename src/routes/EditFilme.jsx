import React from "react";
import { Link } from "react-router-dom";
import filmesFetch from "./axios/config";
import { useForm } from "react-hook-form"
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import "./EditFilme.css";


const EditReal = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm()

    const addFilmes = dados => filmesFetch.put(`/filmesemCartaz/${id}`, dados)
        .then(() => {
            console.log("Exclusão feita com sucesso")
        })
        .catch(() => {
            console.log("Infelizmente não foi possível excluir o filme")
        })

    const { id } = useParams()

    useEffect(() => {
        filmesFetch.get(`/filmesemCartaz/${id}`)
            .then((resposta) => {
                reset(resposta.data)
            })

    }, []);

    return (

        <div className="sectionBanner">

            <div className="intro">
                <h1>Atualizando informações do filme</h1>
            </div>

            <form onSubmit={handleSubmit(addFilmes)} className="formInput" >

                <div>
                    <input type="text" name="titulo" placeholder="Nome" className="nomeATT" {...register("titulo")} />
                </div>

                <div>
                    <input type="text" name="genero" placeholder="Gênero" className="generoATT" {...register("genero")} />
                </div>

                <div>
                    <input type="text" name="diretor" placeholder="Diretor" className="diretorATT" {...register("diretor")} />
                </div>

                <div>
                    <input type="number" name="classificacao" placeholder="Classificação" className="classificacaoATT" {...register("classificacao")} />
                </div>

                <div>
                    <input type="text" name="poster" placeholder="URL do poster" className="posterATT" {...register("poster")} />
                </div>

                <div>
                    <input type="submit" className="enviar" />
                </div>

            </form>
        </div>
    )
}

export default EditReal