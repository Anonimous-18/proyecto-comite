import axios from "axios";

const API = import.meta.env.VITE_API_URL;

const getFichasRequest = async () => await axios.get(`${API}/api/ficha`);

const getDetailsRequest = async (id) => await axios.get(`${API}/api/ficha/${id}`);

const deleteFichaRequest = async (id) => await axios.delete(`${API}/api/ficha/${id}`);

const createFichaRequest = async (body) => await axios.post(`${API}/api/ficha`, body);

const updateFichaRequest = async (body, id) => await axios.put(`${API}/api/ficha/${id}`, body);

export default { getFichasRequest, getDetailsRequest, createFichaRequest, updateFichaRequest, deleteFichaRequest };
