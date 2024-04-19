import axios from "axios";

//preciso criar uma URL BASE
//url da api: https://sujeitoprogramador.com/r-api/?api=filmes
const api = axios.create({
    baseURL: 'https://sujeitoprogramador.com/'
})

export default api