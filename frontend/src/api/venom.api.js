import axios from "axios";

const API = import.meta.env.VITE_API_URL;

const sendMessageRequest = async (body) =>
  await axios.post(`${API}/api/bot`, body);

export default { sendMessageRequest };
