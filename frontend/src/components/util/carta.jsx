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

  return (
    <>
      <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
        <div className="flex-shrink-0">
          <img
            className="h-48 w-full object-cover"
            src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
            alt={tipo_falta}
          />
        </div>
        <div className="flex flex-1 flex-col justify-between bg-white p-6">
          <div className="flex-1">
            <p className="text-sm font-medium text-indigo-600">
              <Link
                to={`/infocomiteinstrutor/${comite_id}`}
                className="hover:underline"
              >
                Ver mas
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
                src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
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
            <div className="mt-4 flex gap-3">
              <button className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-500 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm">
                Aceptar
              </button>
              <button className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-500 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
                Rechazar
              </button>
            </div>
          ) : (
            <div className="h-12"></div>
          )}
        </div>
      </div>
    </>
  );
};
