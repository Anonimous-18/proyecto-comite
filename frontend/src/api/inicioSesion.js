import axios from "axios";

const API = import.meta.env.VITE_API_URL;

/**------------------------------
 * |    Inicio de sesión
 ------------------------------*/

export const login = async (data) =>
await axios.post(`${API}/api/login`, data);


// Obtén el token de autenticación almacenado en tu aplicación
// const token = "tu_token_aqui"; // Obtén el token de donde lo hayas guardado (estado, contexto, local storage, etc.)

// Configura el encabezado de autorización con el token
// const axiosInstance = axios.create({
//   baseURL: API,
//   headers: {
//     "Authorization": `Bearer ${token}`
//   }
// });

// Inicio de sesión
// export const funcion = async (data) =>
//   await axiosInstance.post("/api/algo", data);