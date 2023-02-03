import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import filmesFetch from "./axios/config";
import Logo from "../imagens/logo.png";
import { motion } from "framer-motion"
// Import CSS via MODULE
import styles from "../styles/Edit.module.css"

const Edit = () => {

    const [filmes, setFilmes] = useState([])

    // Função sendo executada apenas quando o componente aparecer na tela
    useEffect(() => {
        filmesFetch.get("/filmes/")
            .then((resposta) => {
                setFilmes(resposta.data)
            })
            .catch(() => {
                console.log("Infelizmente deu erro na sua requisição de API")
            })

    }, [])

    function apagarFilmes(id) {
        filmesFetch.delete(`/filmes/${id}`)
        setFilmes(filmes.filter(filmes => filmes.id !== id))
    }

    return (
        <motion.div className={styles.filmesEdit} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>

            <motion.div className={styles.logoAnimated} initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ x: -window.innerWidth }}  >
                <img src={Logo} alt="" />
            </motion.div>

            {filmes.map((filmes, key) => {

                return (
                    <div className={styles.card}>
                        <div className={styles.content}>
                            <img src={filmes.poster} alt="" />
                            <h1>{filmes.titulo}</h1>
                            <h1>{filmes.diretor}</h1>
                            <h1>{filmes.genero}</h1>
                            <h1>{filmes.duracao}</h1>
                            <h1>{filmes.ano}</h1>
                            <h1>{filmes.classificacao}</h1>
                            <Link to={{ pathname: `/editfilme/${filmes.id}` }}>
                                <button className={styles.atualizar}>Alterar</button>
                            </Link>
                            <button className={styles.deletar} onClick={() => apagarFilmes(filmes.id)}>Excluir</button>
                        </div>
                    </div>
                )
            })}
        </motion.div>
    )
}
export default Edit