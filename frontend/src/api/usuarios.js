import axios from "axios";

const API = import.meta.env.VITE_API_URL;

const getUserRequest = async (id) =>
  await axios.post(`${API}/api/usuarios`, { id: id });

const getAprendicesRequest = async () =>
  await axios.get(`${API}/api/aprendices`);

export default { getUserRequest, getAprendicesRequest };
