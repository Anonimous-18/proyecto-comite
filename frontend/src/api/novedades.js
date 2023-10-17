import axios from "axios";

const API = import.meta.env.VITE_API_URL;

const createNovedadRequest = async (body) =>
  await axios.post(`${API}/api/novedades`, body);

export default { createNovedadRequest };
