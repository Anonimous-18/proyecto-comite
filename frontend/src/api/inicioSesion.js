import axios from "axios";

const API = import.meta.env.VITE_API_URL;

/**------------------------------
 * |  Consumiendo enpoint del login
 ------------------------------*/
 export const login = async (data) =>
 await axios.post(`${API}/api/login`, data);

 /**-----------------------------------------------
  * |  Consumiendo enpoint del cambio de contraseña
  -----------------------------------------------*/
export const resetPass = async (email) =>
  await axios.post(`${API}/api/reset-password`, email)