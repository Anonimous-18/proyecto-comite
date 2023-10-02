import axios from "axios";

const API = import.meta.env.VITE_API_URL;

/**----------------------------------------
 * |  Enpoint para obtener todos los roles
 ----------------------------------------*/
export const getRolesRequest = async (token) => {
  try {
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

/**----------------------------------------
 * |  Enpoint para crear un rol
 ----------------------------------------*/
export const createRolRequest = async (token, data) => {
  try {
    const res = await axios.post(`${API}/api/create-rol`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (res) {
      return res.data;
    }
  } catch (error) {
    console.log("Error al crear un rol detalles: ", error.message);
  }
};

/**----------------------------------------
 * |  Enpoint para eliminar un rol
 ----------------------------------------*/
export const deleteRolRequest = async (token, data) => {
  try {
    const res = await axios.delete(`${API}/api/delete-rol/${data}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (res) {
      return res.data;
    }
  } catch (error) {
    console.log("Error al eliminar un rol detalles: ", error.message);
  }
};

/**----------------------------------------
 * |  Enpoint para actualizar un rol
 ----------------------------------------*/
export const updateRolRequest = async (token, id, data) => {
  try {
    const res = await axios.put(`${API}/api/update-rol/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (res) {
      return res.data;
    }
  } catch (error) {
    console.log("Error al actualizar un rol detalles: ", error.message);
  }
};

/**----------------------------------------
 * |  Enpoint para obtener un rol por id
 ----------------------------------------*/
export const getRolByIdRequest = async (token, id) => {
  try {
    const res = await axios.get(`${API}/api/get-rol/${id}`, {
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
