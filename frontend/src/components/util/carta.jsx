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
  comite_id
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
    <div className="p-2">
      <figure className="md:flex border-gray-200  p-3 md:p-0 max-w-lg bg-gray-200 rounded-xl">
        <div className="flex  max-w-xl bg-gray-400">
          {estado && estado === "espera" ? (
            <BsFillPersonDashFill className="w-36 h-36 md:h-auto  mx-auto  flex  items-center p-2 text-blue-600" />
          ) : estado && estado === "rechazado" ? (
            <BsFillPersonXFill className=" w-36 h-36 md:h-auto  mx-auto  flex  items-center p-2  text-red-600 " />
          ) : estado && estado === "aceptado" ? (
            <BsFillPersonCheckFill className="  text-yellow-500  w-36 h-36 md:h-auto  mx-auto  flex  items-center p-2  " />
          ) : estado && estado === "ejecucion" ? (
            <BsFillPersonLinesFill className=" w-36 h-36 md:h-auto  mx-auto  flex  items-center p-2  text-lime-500 " />
          ) : (
            <BsFillPersonFill className=" w-36 h-36 md:h-auto  mx-auto  flex  items-center p-2  text-red-950 " />
          )}
        </div>
        <div className="p-2">
          <h1 className="text-blue-800 text-lg font-bold">{tipo_falta}</h1>
          <p className="text-sm p-2">{descripcion_solicitud}</p>
          <p className="text-sm p-2 font-bold">
            {nombreInstructor && nombreInstructor !== null
              ? nombreInstructor
              : "¡Sin nombre!"}
          </p>
          <p className="text-sm p-2">{fecha}</p>
          <div className="flex p-2">
            <div className="p-2 ">
              <button
                className="ml-3 relative inline-flex items-center rounded-md border border-transparent bg-blue-700 px-10 py-2 text-xs font-bold text-white shadow-xl transition duration-300 ease-in-out hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2"
                type="button"
              >
                Anexar Plan
              </button>
            </div>
            <div className="p-2 ">
              <Link to={`/infocomiteinstrutor/${comite_id}`}>
                <button
                  className="ml-3 relative inline-flex items-center rounded-md border border-transparent bg-blue-700 px-10 py-2 text-xs font-bold text-white shadow-xl transition duration-300 ease-in-out hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2"
                  type="button"
                >
                  Ver mas
                </button>
              </Link>
            </div>
          </div>
        </div>
      </figure>
    </div>
  );
};
// icono aceptado    ->  BsFillPersonCheckFill      -|
// icono rechazado   -> BsFillPersonXFill           -|
// icono finalizado  ->  BsFillPersonFill           -|-- todos son bs
// icono espera   -> BsFillPersonDashFill           -|
// icono ejecucion  ->  BsFillPersonLinesFill       -|
