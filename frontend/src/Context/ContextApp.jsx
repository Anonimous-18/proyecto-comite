import jwt_decode from "jwt-decode";
import { login, resetPass } from "../api/inicioSesion";
import { getReglamentoRequest } from "../api/reglamento";
import { createContext, useContext } from "react";

export const ContextApp = createContext();

export const ContextAppProvider = ({ children }) => {
  console.log(`CONTEXT: ${localStorage.getItem("newToken")}`);
  console.log(localStorage.getItem("newToken"));

  const isLogged = async (data) => {
    try {
      deleteToken();
      const response = await login(data);
      if (response.status === 200 && response.data) {
        localStorage.setItem("newToken", JSON.stringify(response.data));
        return true;
      }
      return false;
    } catch (error) {
      console.log(error.message);
      return false;
    }
  };

  const deleteToken = () => {
    try {
      localStorage.removeItem("newToken");
    } catch (error) {
      console.log(error.message);
    }
  };

  const protectedRoutes = () => {
    const token = JSON.parse(localStorage.getItem("newToken"));
    if (token !== null) {
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

  const getReglamento = async () => {
    try {
      const response = await getReglamentoRequest();
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

  return (
    <ContextApp.Provider
      value={{
        isLogged,
        protectedRoutes,
        resetPassword,
        getReglamento,
        orderReglamento,
        validateToken,
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