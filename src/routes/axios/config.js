import axios from "axios";

// Configuração do API Global

const filmesFetch =  axios.create({
    baseURL : "https://testeapi-xawn.onrender.com",
})

export default filmesFetch;