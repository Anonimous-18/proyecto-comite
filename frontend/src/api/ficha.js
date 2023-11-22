import axios from "axios";

const API = import.meta.env.VITE_API_URL;

const getFichasRequest = async () => await axios.get(`${API}/api/ficha`);

export default { getFichasRequest };
