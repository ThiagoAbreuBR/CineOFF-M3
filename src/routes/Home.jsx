import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from 'react';
import { motion } from "framer-motion"
import { Link } from "react-router-dom";
import filmesFetch from "./axios/config";
import setaDireitaEsquerda from "../imagens/setaLeftRight.png";
import Logo from "../imagens/logo.png";
// Import CSS via MODULE
import styles from "../styles/Home.module.css"


function Home() {

    const [filmes, setFilmes] = useState([]);
    const carousel = useRef(null);

    // Função sendo executada apenas quando o componente aparecer na tela
    useEffect(() => {
        filmesFetch.get("/filmes/")
            .then((resposta) => {
                setFilmes(resposta.data)
            })
            .catch(() => {
                console.log("Erro na Requisição de API")
            })

    }, [])

    const handleLeftClik = (e) => {
        e.preventDefault();
        console.log(carousel.current.offsetWidth);
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    }

    const handleRightClik = (e) => {
        e.preventDefault();
        console.log(carousel.current.offsetWidth);
        carousel.current.scrollLeft += carousel.current.offsetWidth;
    }

    if (!filmes || !filmes.length) return null;

    return (
        < motion.div className={styles.filmesCartaz} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>

            <motion.div className={styles.logoAnimated} initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ x: -window.innerWidth }}  >
                <img src={Logo} alt="" />
            </motion.div>

            <div className={styles.introduction}>
                <h1>Quer ver seu filme favorito de volta as telas ?</h1>
                <p>Com a CineOFF seu sonho pode se tornar realidade</p>
                <p>Participe da nossa pesquisa </p>
                <p>Adicione seu filme e veja a mágica acontecer</p>
            </div>

            <div className={styles.carousel} ref={carousel}>

                {filmes.map((item) => {
                    const { id, titulo, diretor, poster } = item;

                    return (
                        <div className={styles.item} key={id} >

                            <div className={styles.image}>
                                <img src={poster} alt=""/>
                            </div>

                            <div className={styles.info}>
                                <span className={styles.titulo}>{titulo}</span>
                                <span className={styles.diretor}>{diretor}</span>
                                <Link to={{ pathname: `/detalhes/${id}` }}>
                                    <span className={styles.detalhes}>Detalhes</span>
                                </Link>
                            </div>
                        </div>
                    );

                })}
            </div>

            <div className={styles.buttons}>
                <button onClick={handleLeftClik}><img src={setaDireitaEsquerda} alt='Scroll Left' /></button>
                <button onClick={handleRightClik}><img src={setaDireitaEsquerda} alt='Scroll Right' /></button>
            </div>
            </motion.div>
    );
}

export default Home;