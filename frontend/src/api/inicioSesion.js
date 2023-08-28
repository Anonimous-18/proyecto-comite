import axios from "axios";

const API = import.meta.env.VITE_API_URL;

// ----Inicio de sesión----

export const login = async (data) =>
await axios.post(`${API}/api/login`, data)