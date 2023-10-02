import axios from "axios";

const API = import.meta.env.VITE_API_URL;

/**------------------------------------------------
 * |  Aqui obtenemos el reglamento
 * |  Configurar el encabezado de la autorización
 ------------------------------------------------*/
export const getReglamentoRequest = async (token) => {
  try {
    const res = await axios.get(`${API}/api/reglamento`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (res) {
      return res;
    }
  } catch (error) {
    console.log("Error al obtener el reglamento detalles: ", error.message);
  }
};
