import axios from "axios";

const API = import.meta.env.VITE_API_URL;

const createNotificacionRequest = async (data) =>
  await axios.post(`${API}/api/notificaciones`, data);

const createNotificacionUsuRequest = async (data) =>
  await axios.post(`${API}/api/notificacionse-usuarios`, data);

const getNotificacionesRequest = async () =>
  await axios.get(`${API}/api/notificaciones`);

const getNotificacionesUsuRequest = async () =>
  await axios.get(`${API}/api/notificaciones-usuarios`);

export default {
  getNotificacionesRequest,
  createNotificacionRequest,
  getNotificacionesUsuRequest,
  createNotificacionUsuRequest,
};
