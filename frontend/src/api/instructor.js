import axios from "axios";

const API = import.meta.env.VITE_API_URL;

const createComiteRequest = async (data) =>
  await axios.post(`${API}/api/create-comites`, data);

export default { createComiteRequest };
