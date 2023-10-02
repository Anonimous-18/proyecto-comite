import axios from "axios";

const API = import.meta.env.VITE_API_URL;

/**------------------------------
 * |  Consumiendo enpoint del login
 ------------------------------*/
export const login = async (data) => await axios.post(`${API}/api/login`, data);

/**-----------------------------------------------
  * |  Consumiendo enpoint del cambio de contraseña
  -----------------------------------------------*/
export const resetPass = async (email) => {
  try {
    const res = await axios.post(`${API}/api/reset-password`, email);
    return res;
  } catch (error) {
    console.log("Error enpoint restPass", error.message);
  }
};

/**-----------------------------------------------
  * |  Consumiendo enpoint del registro de usuario
  -----------------------------------------------*/
export const registerUserRequest = async (data) => {
  try {
    const res = await axios.post(`${API}/api/register`, data);
    return res;
  } catch (error) {
    console.log("Error enpoint restPass", error.message);
  }
};
