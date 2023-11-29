import axios from "axios";

const API = import.meta.env.VITE_API_URL;

const createNotificacionRequest = async (data) =>
  await axios.post(`${API}/api/notificaciones`, data);

const createNotificacionUsuRequest = async (data) =>
  await axios.post(`${API}/api/notificacionse-usuarios`, data);

const getNotificacionByUserRequest = async (id) =>
  await axios.get(`${API}/api/notificaciones-usuario/${id}`);

const deleteNotificacionRequest = async (id) =>
  await axios.delete(`${API}/api/notificaciones/${id}`);

const getNotificacionesRequest = async () =>
  await axios.get(`${API}/api/notificaciones`);

const getDetallesComiteNotificado = async (fecha) =>
  await axios.get(`${API}/api/detalles-comite/${fecha}`);

const getNotificacionesUsuRequest = async () =>
  await axios.get(`${API}/api/notificaciones-usuarios`);

export default {
  getNotificacionesRequest,
  deleteNotificacionRequest,
  createNotificacionRequest,
  getNotificacionesUsuRequest,
  getDetallesComiteNotificado,
  createNotificacionUsuRequest,
  getNotificacionByUserRequest,
};
