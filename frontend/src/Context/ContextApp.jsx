import { login } from "../api/inicioSesion";
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


  return (
    <ContextApp.Provider value={{ isLogged, protectedRoutes }}>
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
