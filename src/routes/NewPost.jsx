import React from "react";
import filmesFetch from "./axios/config";
import { useForm } from "react-hook-form"

const NewPoster = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const addFilmes = dados => filmesFetch.post("/filmesemCartaz", dados)
        .then(() => {
            console.log("deu bom")
        })
        .catch(() => {
            console.log("perdemo")
        })


    return (
        <div>
            <section>
                <div>
                    <h1>Adicione seus filmes</h1>
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
                                <button type="submit">Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default NewPoster