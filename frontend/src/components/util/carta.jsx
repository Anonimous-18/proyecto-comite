/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { FaGears } from "react-icons/fa6";
import { AiFillCheckCircle } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { GiSandsOfTime } from "react-icons/gi";
import { CiSaveDown2 } from "react-icons/ci";

import { useContextApp } from "../../Context/ContextApp";

export const Carta = ({
  tipo_falta,
  descripcion_solicitud,
  instructor,
  fecha,
  estado,
  comite_id,

  gestor,
}) => {
  const [nombreInstructor, setNombreInstructor] = useState(null);
  const contextApi = useContextApp();

  useEffect(() => {
    window.scroll(0, 0);

    const getUserName = async (instructor) => {
      const user = await contextApi.getInstructor(instructor);
      if (user) {
        setNombreInstructor(user.nombre_completo);
      }
    };

    getUserName(instructor);
  }, [contextApi, instructor]);

  const handleAceptar = () => {
    contextApi.reducerModalActivo();
    contextApi.reducerModoAceptar();
    contextApi.reducerColocarId(comite_id);
  };
  const handleRechazar = () => {
    contextApi.reducerModalActivo();
    contextApi.reducerModoRechazar();
    contextApi.reducerColocarId(comite_id);
  };

  return (
    <>
      <div className="flex flex-col overflow-hidden rounded-lg shadow-lg border">
        <div className="flex flex-col justify-center  h-[224px] items-center">
          <img
            className="flex items-center justify-center text-center w-full h-full"
            src="../../../public/f.jpg"
            alt={tipo_falta}
          />
        </div>
        <div className="flex flex-1 flex-col justify-between bg-white p-4">
          <div className="flex-1">
            <p className="text-sm font-medium text-blue-600">
              <Link
                to={`/informacion-comite/${comite_id}`}
                className="text-center block hover:underline w-20 bg-blue-800 tracking-wide mt-4 py-2 rounded-2xl text-white capitalize font-semibold mb-2 focus:outline-none transition duration-300 transform active:scale-95 ease-in-out"
              >
                Ver Más
              </Link>
            </p>
            <div className="mt-2 block">
              <p className="text-xl font-semibold text-gray-900 ">
                Estado del Comite:
                <span className="ml-2">
                  {estado && estado === "espera" ? (
                    <span>
                      <GiSandsOfTime className="inline-block w-8 h-6 text-blue-800" />{" "}
                      <span className="bg-blue-200 text-blue-600 py-1 px-3 rounded-full text-xs">
                        Espera
                      </span>
                    </span>
                  ) : estado && estado === "rechazado" ? (
                    <span>
                      <MdCancel className="inline-block w-8 h-6 text-red-600 " />{" "}
                      <span className="bg-red-200 text-red-600 py-1 px-3 rounded-full text-xs">
                        Rechazado
                      </span>
                    </span>
                  ) : estado && estado === "aceptado" ? (
                    <span>
                      <AiFillCheckCircle className="inline-block text-green-700 w-8 h-6" />{" "}
                      <span className="bg-green-300 text-green-600 py-1 px-3 rounded-full text-xs">
                        Aceptado
                      </span>
                    </span>
                  ) : estado && estado === "ejecucion" ? (
                    <span>
                      <FaGears className="inline-block w-8 h-8 text-green-700 " />{" "}
                      <span className="bg-green-300 text-green-600 py-1 px-3 rounded-full text-xs">
                        Ejecucion
                      </span>
                    </span>
                  ) : (
                    <span>
                      <IoCheckmarkDoneCircleSharp className="inline-block w-8 h-6 text-black" />{" "}
                      <span className="bg-zinc-300 text-zinc-600 py-1 px-3 rounded-full text-xs">
                        Finalizado
                      </span>
                    </span>
                  )}
                </span>
              </p>
              <p className="mt-3 text-base text-gray-500">
                {descripcion_solicitud}
              </p>
            </div>
          </div>
          <div className="mt-6 flex items-center">
            <div className="flex-shrink-0">
              <span className="sr-only">{nombreInstructor}</span>
              <img
                className="h-10 w-10 rounded-full"
                src="../../../public/logoSena.png"
                alt={nombreInstructor}
              />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">
                <small className="hover:underline text-sm">
                  {nombreInstructor && nombreInstructor !== null
                    ? nombreInstructor
                    : "Error al obtener el nombre"}
                </small>
              </p>
              <div className="flex space-x-1 text-sm text-gray-500">
                <time dateTime={fecha}>{fecha}</time>
              </div>
            </div>
          </div>
          {estado === "espera" && gestor ? (
            <div className="mt-4 flex justify-center gap-3">
              <button
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-500 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-lg"
                onClick={handleAceptar}
              >
                Aceptar
              </button>
              <button
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-500 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-lg"
                onClick={handleRechazar}
              >
                Rechazar
              </button>
            </div>
          ) : estado === "aceptado" && gestor ? (
            <div className="mt-4 flex gap-3">
              <Link
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-500 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-lg"
                to={`/acta/${comite_id}`}
                type="button"
              >
                Crear Acta
              </Link>
            </div>
          ) : estado === "ejecucion" && gestor ? (
            <div className="mt-4 flex flex-col gap-3">
              
              <div className="flex justify-center">
                <Link
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-lg min-w-[27%]"
                  to={`/acta/${comite_id}`}
                  type="button"
                >
                  <CiSaveDown2 className="text-3xl w-[20%]" />Citacion
                </Link>
                <Link
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-lg min-w-[27%]"
                  to={`/acta/${comite_id}`}
                  type="button"
                >
                  <CiSaveDown2 className="text-3xl w-[30%]" />Acta
                </Link>
              </div>
            </div>
          ) : (
            <div className="h-12"></div>
          )}
        </div>
      </div>
    </>
  );
};
