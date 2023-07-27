// TODO: Configurar AXIOS

import axios from "axios";

const api = axios.create({
  baseURL: "https://1ca1-45-166-181-186.ngrok-free.app/api",
});

// configura o header para enviar o token

api.interceptors.request.use((config) => {
  const token = "1|V4WG4bKTxy1m2XzEr0NkIWOLpxS31Yyq9t2kJKgH";
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
    config.headers["User-Agent"] = "ngrok-skip-browser-warning";
  }

  return config;
});

export default api;
