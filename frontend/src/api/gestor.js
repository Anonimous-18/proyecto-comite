import axios from "axios";

const API = import.meta.env.VITE_API_URL;

const updateComiteRequest = async (data,id) =>
  await axios.put(`${API}/api/comites/${id}`, data);

export default 
  updateComiteRequest
