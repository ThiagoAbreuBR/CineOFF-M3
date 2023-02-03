import React from "react";
import filmesFetch from "./axios/config";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import Logo from "../imagens/logo.png";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
// Import CSS via MODULE
import styles from "../styles/NewFilme.module.css"

// Validação dos campos de inputs
const validationNewFilme = yup.object().shape({
    titulo: yup.string().required("Nome do filme obrigatório"),
    sinopse: yup.string().required("Sinopse do filme obrigatória"),
    diretor: yup.string().required("Diretor(a) do filme obrigatório"),
    genero: yup.string().required("Gênero do filme obrigatório"),
    classificacao: yup.string().required("Classificação do filme obrigatória"),
    duracao: yup.string().required("Duração do filme obrigatória"),
    ano: yup.string().required("Ano de lançamento do filme obrigatório"),
    poster: yup.string().required("URL do poster do filme obrigatória")
})

const NewFilme = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validationNewFilme)
    })

    const navigate = useNavigate()


    const addFilmes = dados => filmesFetch.post("/filmes/", dados)
        .then(() => {
            console.log("Filme adicionada na API com sucesso")
            navigate('/')

        })
        .catch(() => {
            console.log("Infelizmente não foi possível adicionar o filme na API")
        })


    return (
        < motion.div className={styles.addFilm} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>

            <motion.div className={styles.logoAnimated} initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ x: -window.innerWidth }}  >
                <img src={Logo} alt="" />
            </motion.div>

            <h1>Adicionando um novo filme</h1>

            <div className={styles.newInput}>

                <form className={styles.formInput} onSubmit={handleSubmit(addFilmes)} >

                    <div className={styles.film}>
                        <input type="text" name="titulo" placeholder="Título" className={styles.tituloFilm} {...register("titulo")} />
                        <h3 className={styles.error}>{errors.titulo?.message}</h3>
                    </div>

                    <div className={styles.film}>
                        <textarea type="text" name="sinopse" placeholder="Digite a sinopse do filme" className={styles.sinopseFilm} {...register("sinopse")} />
                        <h3 className={styles.error}>{errors.sinopse?.message}</h3>
                    </div>

                    <div className={styles.film}>
                        <input type="text" name="diretor" placeholder="Diretor(a)" className={styles.diretorFilm} {...register("diretor")} />
                        <h3 className={styles.error}>{errors.diretor?.message}</h3>
                    </div>

                    <div className={styles.film}>
                        <input type="text" name="genero" placeholder="Gênero" className={styles.generoFilm} {...register("genero")} />
                        <h3 className={styles.error}>{errors.genero?.message}</h3>
                    </div>

                    <div className={styles.film}>
                        <input type="text" name="classificacao" placeholder="Classificação" className={styles.classificacaoFilm} {...register("classificacao")} />
                        <h3 className={styles.error}>{errors.classificacao?.message}</h3>
                    </div>

                    <div className={styles.film}>
                        <input type="text" name="poster" placeholder="Duração" className={styles.duracaoFilm} {...register("duracao")} />
                        <h3 className={styles.error}>{errors.duracao?.message}</h3>
                    </div>

                    <div className={styles.film}>
                        <input type="text" name="ano" placeholder="Ano de lançamento" className={styles.anoFilm} {...register("ano")} />
                        <h3 className={styles.error}>{errors.ano?.message}</h3>
                    </div>

                    <div className={styles.film}>
                        <input type="text" name="poster" placeholder="URL do poster" className={styles.posterFilm} {...register("poster")} />
                        <h3 className={styles.error}>{errors.poster?.message}</h3>
                    </div>

                    <div className={styles.film}>
                        <input type="submit" className={styles.enviarFilm} />
                    </div>

                </form>

            </div>

        </motion.div>
    )
}

export default NewFilme