import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from 'react';
import { Link } from "react-router-dom";
import filmesFetch from "./axios/config";
import setaDireita from "../imagens/seta.png";
import "./Home.css";


function Home() {

    const [filmes, setFilmes] = useState([]);
    const carousel = useRef(null);

    // Função sendo executada apenas quando o componente aparecer na tela
    useEffect(() => {
        filmesFetch.get("/filmesemCartaz/")
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
        <div className='filmesCartaz'>

            <div className='carousel' ref={carousel}>

                {filmes.map((item) => {
                    const { id, titulo, diretor, poster } = item;

                    return (
                        <div className='item' key={id} >

                            <div className='image'>
                                <img src={poster} alt=""/>
                            </div>

                            <div className='info'>
                                <span className='titulo'>{titulo}</span>
                                <span className='diretor'>{diretor}</span>
                                <Link to={{ pathname: `/detalhes/${id}` }}>
                                    <span className='detalhes'>Detalhes</span>
                                </Link>
                            </div>
                        </div>
                    );

                })}
            </div>

            <div className='buttons'>
                <button onClick={handleLeftClik}><img src={setaDireita} alt='Scroll Left' /></button>
                <button onClick={handleRightClik}><img src={setaDireita} alt='Scroll Right' /></button>
            </div>
        </div>
    );
}

export default Home;