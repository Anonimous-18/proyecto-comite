/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { FaGears } from "react-icons/fa6";
import { AiFillCheckCircle } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { GiSandsOfTime } from "react-icons/gi";

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
    <div className="w-full h-full flex flex-row items-center justify-center shadow-sm shadow-zinc-400">
      <figure className="bg-zinc-200 h-full w-56 flex flex-col items-center justify-center">
        {estado && estado === "espera" ? (
          <GiSandsOfTime className="w-36 h-36 text-blue-800" />
        ) : estado && estado === "rechazado" ? (
          <MdCancel className=" w-36 h-36 text-red-600 " />
        ) : estado && estado === "aceptado" ? (
          <AiFillCheckCircle className="text-green-700 w-36 h-36" />
        ) : estado && estado === "ejecucion" ? (
          <FaGears className=" w-36 h-36 text-green-700 " />
        ) : (
          <IoCheckmarkDoneCircleSharp className=" w-36 h-36 text-black " />
        )}
      </figure>
      <div className="p-2 flex flex-col items-start justify-center bg-gray-100 w-96  ">
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
