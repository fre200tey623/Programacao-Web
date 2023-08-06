import axios from "axios";

// Servidor Localhost
//export const api = axios.create({baseURL:"https://localhost:3000/api/v1/declaracao"})

// Servidor AWS
//export const api = axios.create({baseURL:"https://52.45.166.198:3000/api/v1/declaracao"})

// Servidor Render
export const api = axios.create({baseURL:"https://back-end-programacao-web.onrender.com/"})
