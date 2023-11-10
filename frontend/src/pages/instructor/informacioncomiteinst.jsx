import { MdCancel } from "react-icons/md";
import { FaGears } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { GiSandsOfTime } from "react-icons/gi";
import { Link, useParams } from "react-router-dom";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsSkipBackwardCircle } from "react-icons/bs";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";

import { dowloadFile } from "../../hooks/dowloadFile";
import DefaultLayout from "../../Layout/DefaultLayout";
import { useContextApp } from "../../Context/ContextApp";
import { Semaforo } from "../../components/util/semaforo";

export const Informacioncomiteinst = () => {
  const [comite, setComite] = useState(null);
  const [instructorName, setInstructorName] = useState(null);
  const [aprendicesImplicados, setAprendicesImplicados] = useState(null);

  const { comite_id } = useParams();
  const contextApi = useContextApp();

  useEffect(() => {
    window.scroll(0, 0);

    const getComiteById = async (id) => {
      const response = await contextApi.getComite(id);

      if (response && response !== null) {
        setComite(response);
      }
    };

    if (comite_id && comite_id !== undefined && comite_id !== null) {
      getComiteById(parseInt(comite_id));
    }

    const getAprendicesImplicados = async (comite_id) => {
      const aprendices = await contextApi.getImplicados(comite_id);
      if (aprendices) {
        setAprendicesImplicados(aprendices);
      }
    };

    if (comite_id && comite_id !== undefined && comite_id !== null) {
      getAprendicesImplicados(parseInt(comite_id));
    }
  }, [contextApi, comite_id]);

  if (comite && comite !== null) {
    const getUserName = async (instructor_id) => {
      const user = await contextApi.getInstructor(instructor_id);
      if (user) {
        setInstructorName(user.nombre_completo);
      }
    };

    getUserName(comite.instructor_fk);
  }

  const handleArchivo = async (nombreArchivo) => {
    const response = await contextApi.getEvidencia(nombreArchivo);
    dowloadFile(response, nombreArchivo.split("-").shift());
  };

  return (
    <DefaultLayout>
      <div className="mx-auto max-w-screen-xl pt-20 pb-32 sm:pt-20 sm:pb-40 ">
        <div className="h-auto max-w-full flex flex-col items-center  p-5 place-content-evenly rounded-2xl">
          <h1 className="flex flex-col items-center p-2 text-blue-800 mt-5 text-xl">
            Informacion de comite
          </h1>
          <Semaforo />
          <div className=" flex space-x-2 border-2 mt-5">
            <div className="flex flex-col mt-2 ml-2 ">
              <Link
                to={`/login`}
                className="font-medium text-primary-600 hover:underline text-blue-800 text-2xl"
              >
                <BsSkipBackwardCircle />
              </Link>
            </div>
            {comite && comite !== null ? (
              <>
                <div className="p-5">
                  <div className="border-2 p-2">
                    {comite.estado && comite.estado === "espera" ? (
                      <GiSandsOfTime className="w-36 h-36 md:h-auto  mx-auto  flex  items-center p-2 text-blue-800" />
                    ) : comite.estado && comite.estado === "rechazado" ? (
                      <MdCancel className=" w-36 h-36 md:h-auto  mx-auto  flex  items-center p-2  text-red-600 " />
                    ) : comite.estado && comite.estado === "aceptado" ? (
                      <AiFillCheckCircle className="  text-green-700 w-36 h-36 md:h-auto mx-auto flex items-center p-2  " />
                    ) : comite.estado && comite.estado === "ejecucion" ? (
                      <FaGears className=" w-36 h-36 md:h-auto  mx-auto  flex  items-center p-2  text-green-700 " />
                    ) : (
                      <IoCheckmarkDoneCircleSharp className=" w-36 h-36 md:h-auto  mx-auto  flex  items-center p-2  text-black " />
                    )}
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 p-2">
                      Aprendicez implicados:
                    </label>
                    {aprendicesImplicados &&
                    aprendicesImplicados.length !== 0 ? (
                      aprendicesImplicados.map((aprendiz) => (
                        <p
                          key={aprendiz.id}
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                        >
                          <strong>Nombre: </strong>
                          {aprendiz.nombre_completo || ""}
                          <strong className="ml-9">Documento: </strong>
                          {aprendiz.documento || ""}
                        </p>
                      ))
                    ) : (
                      <input
                        type="number"
                        defaultValue=""
                        disabled
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                        required
                      />
                    )}
                    <div className=" border-2 mt-2 p-2">
                      <h1 className="flex flex-col items-center p-2 text-blue-800  text-base">
                        Resultado plan de mejoramiento
                      </h1>
                      <input
                        type="text"
                        defaultValue=""
                        className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                        required
                      />
                      <button
                        type="submit"
                        className="mt-2 place-items-center flex flex-col items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-blue-600 to-blue-800 group-hover:from-blue-600 group-hover:to-blue-800 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-sky-500 dark:focus:ring-blue-800"
                        disabled
                      >
                        <span className="relative px-11 py-2.5 transition-all ease-in duration-75 bg-blue-500 text-white rounded-md group-hover:bg-opacity-0">
                          Registrar
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex space-x-2">
                    <div>
                      <button
                        type="submit"
                        className="mt-2 place-items-center flex flex-col items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-blue-600 to-blue-800 group-hover:from-blue-600 group-hover:to-blue-800 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-sky-500 dark:focus:ring-blue-800"
                        disabled
                      >
                        <span className="relative px-11 py-2.5 transition-all ease-in duration-75 bg-blue-500 text-white rounded-md group-hover:bg-opacity-0">
                          Cancelar Cambios
                        </span>
                      </button>
                    </div>
                    <div>
                      <button
                        type="button"
                        className="mt-2 place-items-center flex flex-col items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-blue-600 to-blue-800 group-hover:from-blue-600 group-hover:to-blue-800 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-sky-500 dark:focus:ring-blue-800"
                      >
                        <span className="relative px-11 py-2.5 transition-all ease-in duration-75 bg-blue-500 text-white rounded-md group-hover:bg-opacity-0">
                          Editar
                        </span>
                      </button>
                    </div>
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 ">
                      Instructor Solicitante:
                    </label>
                    <input
                      type="text"
                      defaultValue={instructorName || ""}
                      disabled
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                      required
                    />
                  </div>
                  <div className="flex space-x-2">
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 ">
                        Fechade solicitud:
                      </label>
                      <input
                        type="text"
                        defaultValue={comite.createdAt.replace(/T.*/, "") || ""}
                        disabled
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                        required
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900">
                        Tipo de Falta:
                      </label>
                      <input
                        type="text"
                        defaultValue={comite.tipo_falta || ""}
                        disabled
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                        required
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block mb-2 text-sm font-medium text-gray-900 ">
                      Descripcion
                    </label>
                    <textarea
                      rows="8"
                      disabled
                      defaultValue={comite.descripcion_solicitud || ""}
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 "
                    ></textarea>
                  </div>
                  <div className="w-full p-2">
                    <label className="block mb-2 p-2 text-sm font-medium text-gray-900 ">
                      Evidencias Adjuntas
                    </label>
                    <button
                    disabled={comite && comite.evidencia === null}
                      onClick={ comite && comite.evidencia ? () => handleArchivo(comite.evidencia) : null}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    >
                      Descargar Evidencias
                    </button>
                  </div>
                  <div className="border-2 flex flex-col items-center p-2">
                    <blockquote>
                      <p className=" mt-2  p-2 text-lg font-bold  text-blue-800  w-36 h-7 flex flex-col items-center rounded-l-lg rounded-r-lg  ">
                        Voto
                      </p>
                    </blockquote>
                    {comite && comite.estado === "ejecucion" ? (
                      <Link to={`/voto-comite/${comite.id}`}>
                        <button
                          type="button"
                          className="mt-2 place-items-center flex flex-col items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-blue-600 to-blue-800 group-hover:from-blue-600 group-hover:to-blue-800 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-sky-500 dark:focus:ring-blue-800"
                        >
                          <span className="relative px-11 py-2.5 transition-all ease-in duration-75 bg-blue-500 text-white rounded-md group-hover:bg-opacity-0">
                            Votar
                          </span>
                        </button>
                      </Link>
                    ) : (
                      <button
                        type="button"
                        disabled
                        className="mt-2 place-items-center flex flex-col items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-blue-600 to-blue-800 group-hover:from-blue-600 group-hover:to-blue-800 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-sky-500 dark:focus:ring-blue-800"
                      >
                        <span className="relative px-11 py-2.5 transition-all ease-in duration-75 bg-blue-500 text-white rounded-md group-hover:bg-opacity-0">
                          Votar
                        </span>
                      </button>
                    )}
                  </div>
                </div>
              </>
            ) : (
              <h1>No existe el Comite</h1>
            )}
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};
