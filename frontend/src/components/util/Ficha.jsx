import { useState } from "react";
import { Link } from "react-router-dom";
import { CgDetailsMore } from "react-icons/cg";
import { ClimbingBoxLoader } from "react-spinners";

import { useContextApp } from "../../Context/ContextApp";

export const Ficha = ({ ficha }) => {
  const [open, setOpen] = useState(false);
  const [details, setDetails] = useState(null);
  const contextApi = useContextApp();

  const getDetails = async (id) => {
    const res = await contextApi.getDetailsFicha(id);

    if (res) setDetails(res);
  };

  return (
    <li>
      <div
        className={`fixed z-50 inset-0 flex items-center justify-center ${
          open ? "" : "hidden"
        }`}
      >
        <div className="fixed inset-0 bg-black opacity-50"></div>
        <div className="fixed z-60 w-[95%] inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-center justify-center">
              <div className="mt-3 text-center flex flex-col items-center justify-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3
                  className="text-lg leading-6 font-medium text-gray-900"
                  id="modal-headline"
                >
                  Detalles de Ficha
                </h3>
                <div className="mt-2">
                  <div>
                    {details && details ? (
                      <div className="antialiased font-sans">
                        <div className="max-w-6xl mx-auto">
                          <div className="flex items-center justify-center">
                            <div className="max-w-sm w-full sm:w-full lg:w-full py-6 px-3">
                              <div className="bg-white shadow-xl rounded-lg overflow-hidden">
                                <div
                                  className="bg-cover bg-center h-56 p-4"
                                  style={{
                                    backgroundImage: `url(https://oei.int/downloads/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBalVZIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--ada39e3ca828e4eec98acd60281f4ed73838f549/curso-virtual-jpg)`,
                                  }}
                                ></div>
                                <div className="p-4">
                                  <p className="uppercase tracking-wide text-sm font-bold text-gray-700">
                                    {details.programa && details.programa}
                                  </p>
                                  <p className="text-3xl text-gray-900">
                                    {details.codigo && details.codigo}
                                  </p>
                                  <p className="text-gray-700">
                                    {"Instructor " + details.usuario &&
                                      details.usuario.nombre_completo}
                                  </p>
                                </div>
                                <div className="grid grid-cols-2 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 p-4 border-t border-gray-300 text-gray-700">
                                  <div className="flex-1 inline-flex items-center">
                                    <p>
                                      <span className="text-gray-900 font-bold">
                                        Jornada
                                      </span>{" "}
                                      {details.jornada && details.jornada}
                                    </p>
                                  </div>
                                  <div className="flex-1 inline-flex items-center">
                                    <p>
                                      <span className="text-gray-900 font-bold">
                                        Modalidad
                                      </span>{" "}
                                      {details.modalidad && details.modalidad}
                                    </p>
                                  </div>
                                  <div className="flex-1 inline-flex items-center">
                                    <p>
                                      <span className="text-gray-900 font-bold">
                                        Inicio Lectiva
                                      </span>{" "}
                                      {details.inicioLectiva &&
                                        details.inicioLectiva.replace(
                                          /T.*/,
                                          ""
                                        )}
                                    </p>
                                  </div>
                                </div>
                                <div className="flex items-center justify-between p-4 bg-gray-200">
                                  <div>
                                    <p className="text-sm text-gray-600">
                                      Dependencia
                                    </p>
                                    <p className="text-xs text-gray-900">
                                      {details.usuario &&
                                        details.usuario.dependencia}
                                    </p>
                                  </div>
                                  <div>
                                    <p className="text-sm text-gray-600">
                                      Creado el
                                    </p>
                                    <p className="text-xs text-gray-900">
                                      {details.createdAt &&
                                        details.createdAt.replace(/T.*/, "")}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <>
                        <ClimbingBoxLoader
                          color="#160ccc"
                          size={16}
                          loading={true}
                          className="inline-block"
                        />
                        <small className="inline-flex">Cargando</small>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 gap-4 px-4 py-3 flex flex-row-reverse">
            <Link
              to={`/actualizar-ficha/${ficha.id}`}
              className="inline-flex items-center rounded-md border border-transparent bg-blue-800 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-900 focus:ring-2 focus:outline-none transition duration-300 transform active:scale-95 ease-in-out"
            >
              Editar
            </Link>
            <button
              type="button"
              className="inline-flex items-center rounded-md border border-transparent bg-white px-6 py-3 text-base font-medium text-black shadow-sm hover:bg-gray-100 focus:ring-2 focus:outline-none transition duration-300 transform active:scale-95 ease-in-out"
              onClick={() => setOpen(!open)}
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
      <div
        className={`${open === false ? "" : "hidden"}block hover:bg-gray-50`}
      >
        <div className="flex items-center px-4 py-4 sm:px-6">
          <div className="flex min-w-0 flex-1 items-center">
            <div className="flex-shrink-0">
              <img
                className="h-12 w-12 rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUAoLyIRZgPD4xHOiEytCSXNbzlFrc23fdnw&usqp=CAU"
                alt=""
              />
            </div>
            <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
              <div>
                <p className="truncate text-sm font-medium text-indigo-600">
                  {ficha.programa}
                </p>
                <p className="mt-2 flex items-center text-sm text-gray-500">
                  <span className="truncate">{"Codigo " + ficha.codigo}</span>
                </p>
              </div>
              <div className="hidden md:block">
                <div>
                  <p className="text-sm text-gray-900">
                    {"Inicia el " + ficha.inicioLectiva.replace(/T.*/, "")}
                  </p>
                  <p className="mt-2 flex items-center text-sm text-gray-500">
                    <span className="inline-block">
                      {ficha.modalidad + "-" + ficha.jornada}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div
              onClick={() => {
                getDetails(ficha.id);
                setOpen(!open);
              }}
              className="inline-flex items-center rounded-md border border-transparent bg-blue-800 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-900 focus:ring-2 focus:outline-none transition duration-300 transform active:scale-95 ease-in-out"
            >
              Detalles
              <CgDetailsMore
                className="ml-3 -mr-1 h-5 w-5"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
