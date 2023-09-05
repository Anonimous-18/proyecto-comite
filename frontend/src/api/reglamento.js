import axios from "axios";

const API = import.meta.env.VITE_API_URL;

/**------------------------------------------
 * |    Obtenemos el token de autenticación
 ------------------------------------------*/
const token = JSON.parse(localStorage.getItem("newToken"));

/**--------------------------------------------------
 * |    Configurar el encabezado de la autorización
 --------------------------------------------------*/
const axiosInstance = axios.create({
  baseURL: API,
  headers: {
    Authorization: `Bearer ${token ? token.token : null}`,
  },
});

/**----------------------------------
 * |    Aqui obtenemos el reglamento
 ----------------------------------*/
export const getReglamentoRequest = async () => {
  try {
    return await axiosInstance.get(`/api/reglamento`);
  } catch (error) {
    console.log("Error reglamento detalles: ", error.message);
  }
};
