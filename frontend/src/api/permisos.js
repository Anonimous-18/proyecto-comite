import axios from "axios";

const API = import.meta.env.VITE_API_URL;

export const getPermisosRequest = async (token) => {
  try {
    const res = await axios.get(`${API}/api/get-permisos`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (res) {
      return res.data;
    }
  } catch (error) {
    //console.log("Error al obtener los permisos detalles: ", error.message);
  }
};

export const asignarPermisosRequest = async (token, data) => {
  try {
    const res = await axios.post(`${API}/api/asignar-rol-permiso`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (res) {
      return res.data;
    }
  } catch (error) {
    //console.log("Error al asignar un permsio al rol detalles: ", error.message);
  }
};
