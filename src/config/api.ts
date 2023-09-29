// TODO: Configurar AXIOS

import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
});

// configura o header para enviar o token

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
    config.headers["User-Agent"] = "ngrok-skip-browser-warning";
  }

  return config;
});

export default api;
