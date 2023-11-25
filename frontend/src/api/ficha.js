import axios from "axios";

const API = import.meta.env.VITE_API_URL;

const getFichasRequest = async () => await axios.get(`${API}/api/ficha`);

const getDetailsRequest = async (id) => await axios.get(`${API}/api/ficha/${id}`);

export default { getFichasRequest, getDetailsRequest };
