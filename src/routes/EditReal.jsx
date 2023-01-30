import React from "react";
import { Link } from "react-router-dom";
import filmesFetch from "./axios/config";
import { useForm } from "react-hook-form"
import "./Home.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";


const EditReal = () => {

    
    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    const addFilmes = dados => filmesFetch.put(`/filmesemCartaz/${id}`, dados)
        .then(() => {
            console.log("deu bom")
        })
        .catch(() => {
            console.log("perdemo")
        })


        const {id} = useParams()
        
        useEffect(() => {
            filmesFetch.get(`/filmesemCartaz/${id}`)
                .then((resposta) => {
                    reset(resposta.data)
                })
    
        }, [])


    return (
        <div>
        <section>
            <div>
                <h1>Edite seus filmes</h1>
                <div></div>
                <div>
                    <form onSubmit={handleSubmit(addFilmes)} >
                        <div>
                            <label htmlFor="">Digite o nome do filme</label>
                            <input type="text" name="titulo" {...register("titulo")} />
                        </div>
                        <div>
                            <label htmlFor="">Digite o gênero do filme</label>
                            <input type="text" name="genero" {...register("genero")} />
                        </div>
                        <div>
                            <label htmlFor="">Digite o nome do diretor do filme</label>
                            <input type="text" name="diretor" {...register("diretor")} />
                        </div>
                        <div>
                            <label htmlFor="">Digite a classificação</label>
                            <input type="text" name="classificacao" {...register("classificacao")} />
                        </div>
                        <div>
                            <label htmlFor="">Digite a url do poster</label>
                            <input type="text" name="poster" {...register("poster")} />
                        </div>

                        <div>
                            <button type="submit">Alterar</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </div>

    )
}
export default EditReal