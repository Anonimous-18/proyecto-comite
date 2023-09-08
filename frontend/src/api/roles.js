import axios from "axios";

const API = import.meta.env.VITE_API_URL;

/**----------------------------------------
 * |  Enpoint para obtener todos los roles
 ----------------------------------------*/
export const getRolesRequest = async (token) => {
  try {
    console.log("TOKEN DESDE API: ", token);
    const res = await axios.get(`${API}/api/get-rol`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (res) {
      return res.data;
    }
  } catch (error) {
    console.log("Error al obtener los roles detalles: ", error.message);
  }
};
