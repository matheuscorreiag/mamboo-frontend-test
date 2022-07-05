import axios from "axios";

// Subi essa API para facilitar o teste, usem se preferirem no lugar de baseURL
//https://mamboo-backend-test.herokuapp.com/

const api = axios.create({
  baseURL: "http://localhost:3333/",
});

export default api;
