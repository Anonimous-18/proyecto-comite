import axios from "axios";

const API = import.meta.env.VITE_API_URL;

/**------------------------------------------------
 * |    Validamos el rol del usuario
 ------------------------------------------------*/
export const filterRolRequest = async (token, rol) => {
  try {
    const res = await axios.post(
      `${API}/api/verificar-rol`,
      rol,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (res) {
      return res;
    }
  } catch (error) {
    console.log(
      "Error al filtrar el rol del usuario detalles: ",
      error.message
    );
  }
};
