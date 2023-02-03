import React from "react";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useForm } from "react-hook-form"
import { useEffect } from "react";
import { motion } from "framer-motion";
import Logo from "../imagens/logo.png";
import filmesFetch from "./axios/config";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// Import CSS via MODULE
import styles from "../styles/EditFilme.module.css"


// Validação dos campos de inputs
const validationEditFilme = yup.object().shape({
    titulo: yup.string().required("Nome do filme obrigatório"),
    sinopse: yup.string().required("Sinopse do filme obrigatória"),
    diretor: yup.string().required("Diretor(a) do filme obrigatório"),
    genero: yup.string().required("Gênero do filme obrigatório"),
    classificacao: yup.string().required("Classificação do filme obrigatória"),
    duracao: yup.string().required("Duração do filme obrigatória"),
    ano: yup.string().required("Ano de lançamento do filme obrigatório"),
    poster: yup.string().required("URL do poster do filme obrigatória")
})

const EditReal = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(validationEditFilme)
    })

    const navigate = useNavigate()

    const addFilmes = dados => filmesFetch.put(`/filmes/${id}`, dados)
        .then(() => {
            console.log("Modificação feita com sucesso")
            navigate(`/detalhes/${id}`)
        })
        .catch(() => {
            console.log("Infelizmente não foi possível modificar o filme")
        })

    const { id } = useParams()

    useEffect(() => {
        filmesFetch.get(`/filmes/${id}`)
            .then((resposta) => {
                reset(resposta.data)
            })

    }, []);

    return (
        < motion.div className={styles.editFilm} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>

            <motion.div className={styles.logoAnimated} initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ x: -window.innerWidth }}  >
                <img src={Logo} alt="" />
            </motion.div>
                
            <h1>Atualizando informações</h1>

            <div className={styles.editInput}>

            <form className={styles.formInput} onSubmit={handleSubmit(addFilmes)} >

                <div className={styles.film}>
                    <input type="text" name="titulo" placeholder="Escreva o novo titulo" className={styles.tituloATT} {...register("titulo")} />
                    <h3 className={styles.error}>{errors.titulo?.message}</h3>
                </div>

                <div className={styles.film}>
                    <textarea type="text" name="sinopse" placeholder="Escreva a nova sinopse" className={styles.sinopseATT} {...register("sinopse")} />
                    <h3 className={styles.error}>{errors.sinopse?.message}</h3>
                </div>

                <div className={styles.film}>
                    <input type="text" name="diretor" placeholder="Escreva novo nome do diretor(a)" className={styles.diretorATT} {...register("diretor")} />
                    <h3 className={styles.error}>{errors.diretor?.message}</h3>
                </div>

                <div className={styles.film}>
                    <input type="text" name="genero" placeholder="Escreva o novo gênero do filme" className={styles.generoATT}{...register("genero")} />
                    <h3 className={styles.error}>{errors.genero?.message}</h3>
                </div>

                <div className={styles.film}>
                    <input type="text" name="classificacao" placeholder="Escreva a nova classificação" className={styles.classificacaoATT} {...register("classificacao")} />
                    <h3 className={styles.error}>{errors.classificacao?.message}</h3>
                </div>

                <div className={styles.film}>
                    <input type="text" name="poster" placeholder="Escreva a nova duração do filme" className={styles.duracaoATT} {...register("duracao")} />
                    <h3 className={styles.error}>{errors.duracao?.message}</h3>
                </div>

                <div className={styles.film}>
                    <input type="text" name="ano" placeholder="Ano de lançamento" className={styles.anoATT} {...register("ano")} />
                    <h3 className={styles.error}>{errors.ano?.message}</h3>
                </div>

                <div className={styles.film}>
                    <input type="text" name="poster" placeholder="URL do poster" className={styles.posterATT} {...register("poster")} />
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

export default EditReal