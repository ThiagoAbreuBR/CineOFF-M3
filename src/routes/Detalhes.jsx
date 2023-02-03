import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import filmesFetch from "./axios/config";
import { motion } from "framer-motion"
import Logo from "../imagens/logo.png";
// Import CSS via MODULE
import styles from "../styles/Detalhes.module.css"



const Detalhes = () => {

    const [filmes, setFilmes] = useState([])

    // Função sendo executada apenas quando o componente aparecer na tela
    useEffect(() => {
        filmesFetch.get(`/filmes/${id}`)
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

        <motion.div div className={styles.dadosFilmes}>

            <motion.div className={styles.logoAnimated} initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ x: -window.innerWidth }}  >
                <img src={Logo} alt="" />
            </motion.div>

            <div className={styles.poster}>
                <img src={filmes.poster} alt="Poster do filme" />
            </div>

            <div className={styles.filmeInfo}>
                <h1>{filmes.titulo}</h1>
                <h2>Diretor</h2>
                <h3>{filmes.diretor}</h3>
                <h2>Sinopse</h2>
                <h3>{filmes.sinopse}</h3>

                <div classNames={styles.genre}>
                    <h4>Gênero</h4>
                    <h5 className={styles.infoGenre}>{filmes.genero}</h5>
                </div>

                <div className={styles.duraction}>
                    <h4>Duração</h4>
                    <h5 className={styles.infoDuraction}>{filmes.duracao}</h5>
                </div>
                <div className={styles.year}>
                    <h4>Ano de lançamento</h4>
                    <h5 className={styles.infoYear}>{filmes.ano}</h5>
                </div>
                <div className={styles.classification}>
                    <h4>Classificação</h4>
                    <h5 className={styles.infoClassication}>{filmes.classificacao}</h5>
                </div>
            </div>
        </motion.div>

    )
}
export default Detalhes