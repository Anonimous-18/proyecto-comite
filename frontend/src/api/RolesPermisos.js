import axios from "axios";

const API = import.meta.env.VITE_API_URL;

/**----------------------------------------
 * |  Enpoint para obtener todos los roles
 ----------------------------------------*/
export const getPermisosRolRequest = async (token,id) => {
  try {
    const res = await axios.get(`${API}/api/get-permisosRol/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (res) {
      return res.data;
    }
  } catch (error) {
    throw error;
    console.log("Error al obtener los permisos detalles: ", error.message);
  }
};
