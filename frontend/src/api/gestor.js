import axios from "axios";

const API = import.meta.env.VITE_API_URL;

const updateComiteRequest = async (data, id) =>
  await axios.put(`${API}/api/comites/${id}`, data);

const actaCasosRequest = async (data) =>
  await axios.post(`${API}/api/casos`, data);

const crearActaRequest = async (data) =>
  await axios.post(`${API}/api/crear-acta`, data);

const getEnvioDoc = async (comiteId, ruta) =>
  await axios.get(`${API}/api/envio/${ruta}/${comiteId}`, {
    responseType: "blob",
  });

export default { updateComiteRequest, actaCasosRequest, crearActaRequest , getEnvioDoc};
