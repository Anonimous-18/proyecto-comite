import axios from "axios";

const API = import.meta.env.VITE_API_URL;

/**------------------------------------------------
 * |  Aqui obtenemos el reglamento
 * |  Configurar el encabezado de la autorización
 ------------------------------------------------*/
export const getReglamentoRequest = async (token) =>
  await axios.get(`${API}/api/reglamento`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
