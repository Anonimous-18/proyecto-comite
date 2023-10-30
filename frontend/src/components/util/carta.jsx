/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { BsFillPersonLinesFill } from "react-icons/bs";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { BsFillPersonXFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillPersonDashFill } from "react-icons/bs";

import { useContextApp } from "../../Context/ContextApp";

export const Carta = ({
  tipo_falta,
  descripcion_solicitud,
  instructor,
  fecha,
  estado,
  comite_id,
}) => {
  const [nombreInstructor, setNombreInstructor] = useState(null);
  const contextApi = useContextApp();

  useEffect(() => {
    console.log(instructor);
    const getUserName = async (instructor) => {
      const user = await contextApi.getInstructor(instructor);
      if (user) {
        setNombreInstructor(user.nombre_completo);
      }
    };

    getUserName(instructor);
  }, [contextApi, instructor]);

  return (
    <div className="w-full h-full flex flex-row items-center justify-center">
      <figure className="bg-gray-400 shadow-md shadow-black h-full w-56 flex flex-col items-center justify-center rounded-l-xl">
        {estado && estado === "espera" ? (
          <BsFillPersonDashFill className="w-36 h-36 text-blue-800" />
        ) : estado && estado === "rechazado" ? (
          <BsFillPersonXFill className=" w-36 h-36 text-red-600 " />
        ) : estado && estado === "aceptado" ? (
          <BsFillPersonCheckFill className="text-green-700 w-36 h-36" />
        ) : estado && estado === "ejecucion" ? (
          <BsFillPersonLinesFill className=" w-36 h-36 text-green-700 " />
        ) : (
          <BsFillPersonFill className=" w-36 h-36 text-black " />
        )}
      </figure>
      <div className="p-2 flex flex-col items-start justify-center bg-blue-100 w-96 shadow-md shadow-black  rounded-r-xl">
        <h1 className="text-blue-800 text-lg font-bold">{tipo_falta}</h1>
        <p className="text-sm py-2">{descripcion_solicitud}</p>
        <p className="text-sm py-2 font-bold">
          {nombreInstructor && nombreInstructor !== null
            ? nombreInstructor
            : "¡Sin nombre!"}
        </p>
        <p className="text-sm py-2">{fecha}</p>
        <div className="w-full flex flex-row items-center justify-center h-auto gap-2">
          
          <Link to={`/infocomiteinstrutor/${comite_id}`}>
            <button
              className="relative inline-flex items-center rounded-md border border-transparent bg-blue-700 px-10 py-2 text-xs font-bold text-white shadow-xl transition duration-300 ease-in-out hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2"
              type="button"
            >
              Ver mas
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
// icono aceptado    ->  BsFillPersonCheckFill      -|
// icono rechazado   -> BsFillPersonXFill           -|
// icono finalizado  ->  BsFillPersonFill           -|-- todos son bs
// icono espera   -> BsFillPersonDashFill           -|
// icono ejecucion  ->  BsFillPersonLinesFill       -|
