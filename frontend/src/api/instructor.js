import axios from "axios";

const API = import.meta.env.VITE_API_URL;

const createComiteRequest = async (data) =>
  await axios.post(`${API}/api/comites`, data, {
    headers: {
      Accept: "application/json",
      "Content-Type": "multipart/form-data",
    },
  });

const getComitesRequest = async () => await axios.get(`${API}/api/comites`);

const getEvidenciaRequest = async (nombreArchivo, token) =>
  await axios.get(`${API}/api/evidencia/${nombreArchivo}`, {
    responseType: "blob",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

const getAprendicesImpRequest = async (comite_fk) =>
  await axios.post(`${API}/api/comites/aprendices`, { comite_fk });

const getComiteByIdRequest = async (id) =>
  await axios.get(`${API}/api/comites/${id}`);

export default {
  getComitesRequest,
  getEvidenciaRequest,
  createComiteRequest,
  getComiteByIdRequest,
  getAprendicesImpRequest,
};
