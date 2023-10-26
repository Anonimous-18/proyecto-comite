import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";


export const Spinner = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(false);
    }, 3000); // Cambia 3000 por la cantidad de milisegundos que desees

    return () => clearTimeout(timeout);
  }, []);
  if (!visible) {
    // Realiza la redirección y recarga
    window.location.href = '/';
    return <Navigate to={'/xxx'} replace />;
  }

  return visible ? (
    <div className="flex items-center justify-center min-h-screen">
      <button
        type="button"
        className="bg-blue-700 h-max w-max rounded-lg text-white font-bold hover:bg-indigo-300 hover:cursor-not-allowed duration-500ms 800ms p-4"
        disabled>
        <div className="flex items-center justify-center m-10px text-4xl">
          <span className="h-8 w-8 border-t-transparent border-solid border-y-8 border-x-8  animate-spin rounded-full border-white border-4"></span>
          <span className="ml-2">Cargando</span>
        </div>
      </button>
    </div>
  ): null;
};
