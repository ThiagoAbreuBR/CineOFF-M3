import axios from "axios";

// Configuração do API Global

const filmesFetch =  axios.create({
    baseURL : "https://cineoff-get-post-put-delete.onrender.com",
})

export default filmesFetch;