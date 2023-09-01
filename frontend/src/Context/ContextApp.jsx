import { login, resetPass } from "../api/inicioSesion";
import { createContext, useContext } from "react";

export const ContextApp = createContext();

export const ContextAppProvider = ({ children }) => {
  console.log(`CONTEXT: ${localStorage.getItem("newToken")}`);
  console.log(localStorage.getItem("newToken"));

  const isLogged = async (data) => {
    try {
      const response = await login(data);
      if (response.status === 200 && response.data) {
        const token = JSON.parse(localStorage.getItem("newToken"));
        if (token !== null) {
          console.log("Eliminando: ", token);
          localStorage.removeItem("newToken");
        }
        localStorage.setItem("newToken", JSON.stringify(response.data));
        return true;
      }
      return false;
    } catch (error) {
      console.log(error.message);
      return false;
    }
  };

  const protectedRoutes = () => {
    const token = JSON.parse(localStorage.getItem("newToken"));
    if (token !== null) {
      return true;
    }
    return false;
  };

  const resetPassword = async (email) => {
    try {
      const response = await resetPass(email);
      if (response.status === "204") {
        return true;
      }
      return false;
      console.log("RESPONSE", response);
    } catch (error) {
      console.log("ENTRO");
      console.log(error.message);
      return false;
    }
  };

  return (
    <ContextApp.Provider value={{ isLogged, protectedRoutes, resetPassword }}>
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
