import { NavLink } from "react-router-dom";
import { RiErrorWarningLine } from "react-icons/ri";

export const Noautorizado = () => {
  return (
    <div className="fixed inset-0 z-10 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-4 max-w-md mx-auto">
        <div className=" flex flex-col items-center text-9xl text-red-600">
          <RiErrorWarningLine />
        </div>
        <h2 className="text-xl font-bold text-red-800 flex flex-col items-center p-2">
          No autorizado
        </h2>
        <p className="text-gray-600">
          No tienes permiso para acceder a esta página.
        </p>
        <div className="p-2 flex flex-col items-center">
          <NavLink
            to="/home"
            className="bg-blue-600 text-white rounded px-4 py-2 mt-4 "
          >
            Aceptar
          </NavLink>
        </div>
      </div>
    </div>
  );
};
