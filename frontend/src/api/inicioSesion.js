import axios from "axios";

const API = import.meta.env.VITE_API_URL;

/**------------------------------
 * |    Inicio de sesión
 ------------------------------*/

export const login = async (data) =>
await axios.post(`${API}/api/login`, data);

export const resetPass = async (email) =>
  await axios.post(`${API}/api/reset-password`, email)


// Obtén el token de autenticación almacenado en tu aplicación
const token = JSON.parse(localStorage.getItem("newToken")); // Obtén el token de donde lo hayas guardado (estado, contexto, local storage, etc.)

// Configura el encabezado de autorización con el token
const axiosInstance = axios.create({
  baseURL: API,
  headers: {
    "Authorization": `Bearer ${token}`
  }
});

export const instructor = async (data) =>
  await axiosInstance.post("/api/verificar-rol", data);