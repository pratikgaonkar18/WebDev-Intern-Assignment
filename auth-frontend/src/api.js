import axios from "axios";

const api = axios.create({
  baseURL: "https://webdev-intern-assignment-p1l1.onrender.com/api",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("authToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
