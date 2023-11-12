import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { ImMail } from "react-icons/im";
import { CgDetailsMore } from "react-icons/cg";
import { IoSearchCircle } from "react-icons/io5";
import { HiIdentification } from "react-icons/hi";

import DefaultLayout from "../../Layout/DefaultLayout";
import { Spinner } from "../../components/util/Spinner";
import { useContextApp } from "../../Context/ContextApp";

export const TablaAntencedentesInstructor = () => {
  const contextApi = useContextApp();
  const [filtrado, setFiltrado] = useState(null);
  const [aprendices, setAprendices] = useState(null);
  const [documento, setDocumento] = useState({
    documento: "",
  });

  useEffect(() => {
    window.scroll(0, 0);

    const getAprendices = async () => {
      const res = await contextApi.getAprendices();

      if (res && res.length !== 0) {
        setAprendices(res);
      }
    };

    getAprendices();
  }, [contextApi]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (documento.documento && documento.documento.length !== 0) {
      const aprendiz = aprendices.filter(
        (aprendiz) => aprendiz.documento === documento.documento
      );

      if (aprendiz && aprendiz.length !== 0) {
        setFiltrado(aprendiz);
      } else {
        setFiltrado(null);
      }
    }
  };

  const onChange = (e) => {
    setDocumento({ ...documento, [e.target.name]: e.target.value });
  };

  return (
    <DefaultLayout>
      <div className="h-full w-full flex flex-col items-center bg-gray-50 place-content-evenly rounded-2xl ">
        <div>
          <p className="flex flex-col items-center p-2 text-blue-800 text-2xl">
            Filtrar por:
          </p>
          <div className=" text-base p-2">
            <form
              onSubmit={(e) => handleSubmit(e)}
              className=" space-x-2 flex flex-row p-2 border rounded-md "
            >
              <div className="">
                <input
                  onChange={(e) => onChange(e)}
                  className="border flex rounded-md p-3"
                  type="number"
                  name="documento"
                  placeholder="Identificación"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <button type="submit" className="text-3xl hover:text-blue-700 ">
                  <IoSearchCircle />
                </button>
              </div>
            </form>
          </div>
        </div>
        {aprendices && aprendices !== null ? (
          <div className="overflow-hidden bg-white shadow sm:rounded-md w-full h-full">
            <ul role="list" className="divide-y divide-gray-200">
              {aprendices && filtrado === null ? (
                aprendices.map((aprendiz) => (
                  <li key={aprendiz.id}>
                    <div className="block hover:bg-gray-50">
                      <div className="flex items-center px-4 py-4 sm:px-6">
                        <div className="flex min-w-0 flex-1 items-center">
                          <div className="flex-shrink-0">
                            <img
                              className="h-12 w-12 rounded-full"
                              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                              alt=""
                            />
                          </div>
                          <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                            <div>
                              <p className="truncate text-sm font-medium text-indigo-600">
                                {aprendiz.nombre_completo}
                              </p>
                              <p className="mt-2 flex items-center text-sm text-gray-500">
                                <ImMail
                                  className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                                  aria-hidden="true"
                                />
                                <span className="truncate">
                                  {aprendiz.email}
                                </span>
                              </p>
                            </div>
                            <div className="hidden md:block">
                              <div>
                                <p className="text-sm text-gray-900">
                                  Registrado el{" "}
                                  <time
                                    dateTime={aprendiz.creado.replace(
                                      /T.*/,
                                      ""
                                    )}
                                  >
                                    {aprendiz.creado.replace(/T.*/, "")}
                                  </time>
                                </p>
                                <p className="mt-2 flex items-center text-sm text-gray-500">
                                  <HiIdentification
                                    className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                                    aria-hidden="true"
                                  />
                                  <span className="inline-block">
                                    {"Identificación " + aprendiz.documento}
                                  </span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <Link
                            className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:ring-2 focus:outline-none transition duration-300 transform active:scale-95 ease-in-out"
                            to={`/antecedente-aprendiz/${aprendiz.id}`}
                          >
                            Detalles
                            <CgDetailsMore
                              className="ml-3 -mr-1 h-5 w-5"
                              aria-hidden="true"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
                ))
              ) : (
                <li key={filtrado[0].id}>
                  <div className="block hover:bg-gray-50">
                    <div className="flex items-center px-4 py-4 sm:px-6">
                      <div className="flex min-w-0 flex-1 items-center">
                        <div className="flex-shrink-0">
                          <img
                            className="h-12 w-12 rounded-full"
                            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                        </div>
                        <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                          <div>
                            <p className="truncate text-sm font-medium text-indigo-600">
                              {filtrado[0].nombre_completo}
                            </p>
                            <p className="mt-2 flex items-center text-sm text-gray-500">
                              <ImMail
                                className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                                aria-hidden="true"
                              />
                              <span className="truncate">
                                {filtrado[0].email}
                              </span>
                            </p>
                          </div>
                          <div className="hidden md:block">
                            <div>
                              <p className="text-sm text-gray-900">
                                Registrado el{" "}
                                <time
                                  dateTime={filtrado[0].creado.replace(
                                    /T.*/,
                                    ""
                                  )}
                                >
                                  {filtrado[0].creado.replace(/T.*/, "")}
                                </time>
                              </p>
                              <p className="mt-2 flex items-center text-sm text-gray-500">
                                <HiIdentification
                                  className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                                  aria-hidden="true"
                                />
                                <span className="inline-block">
                                  {"Identificación " + filtrado[0].documento}
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <Link
                          className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                          to={`/antecedente-aprendiz/${filtrado[0].id}`}
                        >
                          Detalles
                          <CgDetailsMore
                            className="ml-3 -mr-1 h-5 w-5"
                            aria-hidden="true"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>
              )}
            </ul>
          </div>
        ) : (
          <Spinner />
        )}
      </div>
    </DefaultLayout>
  );
};
