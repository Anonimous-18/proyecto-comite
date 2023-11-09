/* eslint-disable react/prop-types */
import io from "socket.io-client";
import jwt_decode from "jwt-decode";
import { createContext, useContext, useEffect, useState } from "react";

import usuariosApi from "../api/usuarios";
import novedadesApi from "../api/novedades";
import instructorApi from "../api/instructor";
import notificacionesApi from "../api/notificacionse";
import { filterRolRequest } from "../api/filtrarRol";
import { getReglamentoRequest } from "../api/reglamento";
import { login, resetPass, registerUserRequest } from "../api/inicioSesion";
import { getPermisosRequest, asignarPermisosRequest } from "../api/permisos";
import { getPermisosRolRequest } from "../api/RolesPermisos";

import {
  getRolesRequest,
  createRolRequest,
  deleteRolRequest,
  updateRolRequest,
  getRolByIdRequest,
} from "../api/roles";

import {
  encodeCustomBase64String,
  decodeCustomBase64String,
} from "../funciones/encode";
// import jwtDecode from "jwt-decode";

export const ContextApp = createContext();

export const ContextAppProvider = ({ children }) => {
  const API = import.meta.env.VITE_API_URL;
  const socket = io(`${API}`);

  const [usuario, setUsuario] = useState({});

  const [camposFil, setCamposFil] = useState(null);

  // const [cargarPagina, setCargarPagina] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("Datos")) {
      const token = decode(sessionStorage.getItem("Datos"));
      const usuarioToken = jwt_decode(token);

      const obtenerUsuario = async () => {
        const usuario = await usuarioToken.user;
        setUsuario(usuario);
      };

      obtenerUsuario();
    }
  }, [location.pathname]);

  const decode = (encode) => {
    return decodeCustomBase64String(encode);
  };

  const deleteToken = () => {
    try {
      localStorage.removeItem("newToken");
      sessionStorage.clear();
    } catch (error) {
      console.log(error.message);
    }
  };

  const isLogged = async (data) => {
    try {
      deleteToken();
      const response = await login(data);
      if (response.status === 200 && response.data) {
        localStorage.setItem("newToken", JSON.stringify(response.data));

        sessionStorage.setItem(
          "Datos",
          encodeCustomBase64String(response.data.token)
        );
        const datosUsuario = jwt_decode(response.data.token);
        setUsuario(datosUsuario.user);
        return true;
      }
      return false;
    } catch (error) {
      console.log(error.message);
      return false;
    }
  };

  const registerUser = async (data) => {
    try {
      const res = await registerUserRequest(data);
      return res;
    } catch (error) {
      console.log("Error al registrarse desde context");
    }
  };

  const protectedRoutes = () => {
    const token = JSON.parse(localStorage.getItem("newToken"));
    if (token) {
      return true;
    }
    return false;
  };

  const orderReglamento = (reglamento) => {
    const capituloPorArticulo = reglamento.reduce((acc, capitulo) => {
      const {
        cap_id,
        cap_titulo,
        art_id,
        art_titulo,
        art_descripcion,
        par_id,
        par_descripcion,
      } = capitulo;

      /**---------------------------------------------------------------
       * |  Comprueba si ya existe una entrada para este capítulo
       ---------------------------------------------------------------*/
      const existingCapitulo = acc.find((item) => item.cap_id === cap_id);

      if (!existingCapitulo) {
        /**-------------------------
         * |  Si no existe la crea
         -------------------------*/
        const newCapitulo = {
          cap_id,
          cap_titulo,
          contenido: [
            {
              art_id,
              art_titulo,
              art_descripcion,
              par_id,
              par_descripcion,
            },
          ],
        };
        acc.push(newCapitulo);
      } else {
        /**--------------------------------------------------
           * |  Si existe la agrega al capitulo existente
           --------------------------------------------------*/
        existingCapitulo.contenido.push({
          art_id,
          art_titulo,
          art_descripcion,
          par_id,
          par_descripcion,
        });
      }

      return acc;
    }, []);

    return capituloPorArticulo;
  };

  const validateToken = () => {
    try {
      const token = JSON.parse(localStorage.getItem("newToken"));

      const decodedToken = jwt_decode(token.token);

      /**--------------------------
       * | Hora actual en segundos
       --------------------------*/
      const currentTime = Date.now() / 1000;

      if (decodedToken.exp < currentTime) {
        /**-----------------
         * | Token vencido
         -----------------*/
        deleteToken();
        return true;
      } else if (decodedToken.exp > currentTime) {
        return false;
      }
    } catch (error) {
      console.log("Error en validateToken detalles: ", error.message);
      return false;
    }
  };

  const getReglamento = async (token) => {
    try {
      const response = await getReglamentoRequest(token);
      if (response === undefined) {
        return null;
      }
      return response.data;
    } catch (error) {
      console.log(error.message);
    }
  };

  const resetPassword = async (email) => {
    try {
      const response = await resetPass(email);
      if (response !== undefined) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.log("Error al recuperar contraseña ", error.message);
      return false;
    }
  };

  const filterRol = async (token, rol) => {
    try {
      const res = await filterRolRequest(token, { rol });
      if (res === undefined) {
        return false;
      } else {
        return true;
      }
    } catch (error) {
      console.log("Error al filtrar el rol: ", error.message);
    }
  };

  const getPermisos = async (token) => {
    try {
      const res = await getPermisosRequest(token);
      return res;
    } catch (error) {
      console.log("Error chupaloo inin: ", error.message);
    }
  };

  const asignarPermisos = async (token, data) => {
    try {
      const res = await asignarPermisosRequest(token, data);
      return res;
    } catch (error) {
      console.log("Error al crear un rol: ", error.message);
    }
  };
  const getPermisosRol = async (token,id) => {
    try {
      const res = await getPermisosRolRequest(token,id);
      return res;
    } catch (error) {
      console.log("Error: ", error.message);
    }
  };
  const getRoles = async (token) => {
    try {
      const res = await getRolesRequest(token);
      return res;
    } catch (error) {
      console.log("Error al filtrar el rol: ", error.message);
    }
  };

  const getRolesById = async (token, id) => {
    try {
      const res = await getRolByIdRequest(token, id);
      return res;
    } catch (error) {
      console.log("Error al filtrar el rol por id: ", error.message);
    }
  };

  const createRoles = async (token, data) => {
    try {
      const res = await createRolRequest(token, data);
      return res;
    } catch (error) {
      console.log("Error al crear un rol: ", error.message);
    }
  };

  const deleteRoles = async (token, data) => {
    try {
      const res = await deleteRolRequest(token, data);
      return res.status;
    } catch (error) {
      console.log("Error al eliminar un rol: ", error.message);
    }
  };

  const updateRoles = async (token, id, data) => {
    try {
      console.log("ID: ", id);
      console.log("DATA: ", data);
      console.log("TOKEN: ", token);
      const res = await updateRolRequest(token, id, data);
      return res;
    } catch (error) {
      console.log("Error actualizar un rol: ", error.message);
    }
  };

  const createComite = async (data) => {
    try {
      await instructorApi.createComiteRequest(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getComites = async () => {
    try {
      const response = await instructorApi.getComitesRequest();
      if (response) return response.data;
      return null;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const getInstructor = async (id) => {
    try {
      const response = await usuariosApi.getUserRequest(id);
      if (response) return response.data;
      return null;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const getComite = async (id) => {
    try {
      const response = await instructorApi.getComiteByIdRequest(id);
      if (response) return response.data;
      return null;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const getImplicados = async (comite) => {
    try {
      const response = await instructorApi.getAprendicesImpRequest(comite);
      if (response) return response.data;
      return null;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const filtro = (valores) => {
    try {
      setCamposFil(valores);
    } catch (error) {
      console.log(error);
    }
  };

  const getAprendices = async () => {
    try {
      const response = await usuariosApi.getAprendicesRequest();
      if (response) return response.data;
      return null;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const getAntecedentes = async (id) => {
    try {
      const response = await usuariosApi.getAntecedentesRequest(id);
      if (response) return response.data;
      return null;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const createNovedad = async (body) => {
    try {
      const response = await novedadesApi.createNovedadRequest(body);
      if (response) return response.status;
      return null;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const createNotificacion = async (body) => {
    try {
      const response = await notificacionesApi.createNotificacionRequest(body);
      if (response) return response.status;
      return null;
    } catch (error) {
      return null;
    }
  };

  const createNotificacionUsu = async (body) => {
    try {
      const response = await notificacionesApi.createNotificacionUsuRequest(
        body
      );
      if (response) return response.status;
      return null;
    } catch (error) {
      return null;
    }
  };

  return (
    <ContextApp.Provider
      value={{
        isLogged,
        protectedRoutes,
        resetPassword,
        getReglamento,
        orderReglamento,
        validateToken,
        registerUser,
        filterRol,
        getRoles,
        createRoles,
        deleteRoles,
        updateRoles,
        getRolesById,
        createComite,
        getComites,
        getInstructor,
        getComite,
        getImplicados,
        filtro,
        camposFil,
        getAprendices,
        getAntecedentes,
        getPermisos,
        asignarPermisos,
        createNovedad,
        decode,
        usuario,
        setUsuario,
        socket,
        createNotificacion,
        createNotificacionUsu,
        getPermisosRol,
      }}
    >
      {children}
    </ContextApp.Provider>
  );
};

export const useContextApp = () => {
  const context = useContext(ContextApp);
  if (!context) {
    throw new Error("useContextApp debe usarse dentro de ContextAppProvider");
  }
  return context;
};
