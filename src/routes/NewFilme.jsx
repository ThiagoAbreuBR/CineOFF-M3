import React from "react";
import filmesFetch from "./axios/config";
import { useForm } from "react-hook-form"
import { motion } from "framer-motion"
import Logo from "../imagens/logo.png"
import { Link } from "react-router-dom";
import "./NewFilme.css";

const NewFilme = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const addFilmes = dados => filmesFetch.post("/filmesemCartaz", dados)
        .then(() => {
            console.log("deu bom")
        })
        .catch(() => {
            console.log("perdemo")
        })


    return (
        < motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <section>
                <div className="logo">
                    <img src={Logo} alt="" />
                </div>

                <div className="introducao">
                    <h1>Adicione seus filmes</h1>
                </div>

                <form onSubmit={handleSubmit(addFilmes)} >

                    <div>
                        <input type="text" name="titulo" placeholder="Nome" {...register("titulo")} />
                    </div>

                    <div>
                        <input type="text" name="genero" placeholder="Gênero" {...register("genero")} />
                    </div>

                    <div>
                        <input type="text" name="diretor" placeholder="Diretor" {...register("diretor")} />
                    </div>

                    <div>
                        <input type="number" name="classificacao" placeholder="Classificação" {...register("classificacao")} />
                    </div>

                    <div>
                        <input type="text" name="poster" placeholder="URL do poster" {...register("poster")} />
                    </div>

                    <div>
                        <button type="submit">Enviar</button>
                    </div>

                </form>

                <div className="btnEdit">
                    <p>Você também pode remover e editar informações do catalogo atual</p>
                    <Link to={{ pathname: '/edit' }}>
                        <button>Editar</button>
                    </Link>
                </div>
            </section>
        </motion.div>
    )
}

export default NewFilme