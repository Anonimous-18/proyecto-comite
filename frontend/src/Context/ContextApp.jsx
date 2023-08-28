import { createContext, useContext } from "react";
import { login } from "../api/inicioSesion";

export const ContextApp = createContext();

export const ContextAppProvider = ({ children }) => {
  const isLogged = async (data) => {
    try {
      const response = await login(data);
      if (response.status === 200 && response.data) {
        return true;
      }
      return false;
    } catch (error) {
      console.log(error.message);
      return false;
    }
  };
  return (
    <ContextApp.Provider value={{ isLogged }}>{children}</ContextApp.Provider>
  );
};

export const useContextApp = () => {
  const context = useContext(ContextApp);
  if (!context) {
    throw new Error("useContextApp debe usarse dentro de ContextAppProvider");
  }
  return context;
};
