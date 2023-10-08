import axios from "axios";

const API = import.meta.env.VITE_API_URL;

const createComiteRequest = async (data) =>
  await axios.post(`${API}/api/comites`, data);

const getComitesRequest = async () =>
  await axios.get(`${API}/api/comites`);

export default { createComiteRequest, getComitesRequest };
