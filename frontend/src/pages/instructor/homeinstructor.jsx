import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { Carta } from "../../components/util/carta";
import DefaultLayout from "../../Layout/DefaultLayout";
import { Spinner } from "../../components/util/Spinner";
import { Semaforo } from "../../components/util/semaforo";
import { Filtrocomite } from "../../components/util/filtocomite";

import { useContextApp } from "../../Context/ContextApp";

import hooks from "../../hooks/useFunction";

export const Homeinstructor = () => {
  const contextApi = useContextApp();
  const [comites, setComites] = useState([]);
  const [filtrar, setFiltrar] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [comitesPerPage] = useState(9);

  const indexOfLastComite = currentPage * comitesPerPage;
  const indexOfFirstComite = indexOfLastComite - comitesPerPage;
  const currentComites = comites.slice(indexOfFirstComite, indexOfLastComite);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scroll(0, 0);
  };

  useEffect(() => {
    window.scroll(0, 0);

    const getAllComites = async () => {
      const response = await contextApi.getComites();

      if (response && response !== null) {
        const token = JSON.parse(localStorage.getItem("newToken"));

        if (token) {
          setFiltrar(contextApi.camposFil);
          // //console.log("Filtrar", filtrar);
          const decodedToken = hooks.useDecodedToken(token.token);

          const comitesByUser = response.filter(
            (comite) => comite.instructor_fk === decodedToken.user.id
          );

          if (filtrar && filtrar !== null) {
            const comitesFiltrados = comitesByUser.filter((comite) => {
              if (
                filtrar.estado.length !== 0 &&
                filtrar.fecha.length === 0 &&
                filtrar.tipo_falta.length === 0
              ) {
                return filtrar.estado === comite.estado;
              } else if (
                filtrar.fecha.length !== 0 &&
                filtrar.estado.length === 0 &&
                filtrar.tipo_falta.length === 0
              ) {
                return filtrar.fecha === comite.createdAt.replace(/T.*/, "");
              } else if (
                filtrar.tipo_falta.length !== 0 &&
                filtrar.estado.length === 0 &&
                filtrar.fecha.length === 0
              ) {
                return filtrar.tipo_falta === comite.tipo_falta;
              } else if (
                filtrar.estado.length !== 0 &&
                filtrar.fecha.length !== 0 &&
                filtrar.tipo_falta.length === 0
              ) {
                return (
                  filtrar.estado === comite.estado &&
                  filtrar.fecha === comite.createdAt.replace(/T.*/, "")
                );
              } else if (
                filtrar.estado.length !== 0 &&
                filtrar.fecha.length === 0 &&
                filtrar.tipo_falta.length !== 0
              ) {
                return (
                  filtrar.estado === comite.estado &&
                  filtrar.tipo_falta === comite.tipo_falta
                );
              } else if (
                filtrar.fecha.length !== 0 &&
                filtrar.estado.length === 0 &&
                filtrar.tipo_falta.length !== 0
              ) {
                return (
                  filtrar.fecha === comite.createdAt.replace(/T.*/, "") &&
                  filtrar.tipo_falta === comite.tipo_falta
                );
              } else {
                return (
                  filtrar.fecha === comite.createdAt.replace(/T.*/, "") &&
                  filtrar.tipo_falta === comite.tipo_falta &&
                  filtrar.estado === comite.estado
                );
              }
            });
            setComites(comitesFiltrados);
          } else {
            setComites(comitesByUser);
          }
        }
      }
    };

    getAllComites();
  }, [contextApi, filtrar]);

  return (
    <DefaultLayout>
      <div className="max-w-full h-full flex flex-col items-center justify-center">
        <div className="w-full flex flex-col gap-28 2xl:flex-row xl:flex-row lg:flex-col 2xl:items-start xl:items-start lg:items-center items-center justify-center">
          <Semaforo />
          <Filtrocomite />
        </div>

        {/* <div className="grid grid-cols-1 2xl:grid-cols-3 xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-1 gap-4 py-11 w-full h-full items-center justify-center"> */}
        {/* <div className="mx-auto mt-12 grid grid-cols-1 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 max-w-lg gap-5 lg:max-w-none"> */}
        <div className="mx-auto mt-12 grid grid-cols-1 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 max-w-full gap-5 lg:max-w-full">
          {comites && comites.length !== 0 ? (
            <>
              {currentComites.map((comite) => (
                <Carta
                  key={comite.id}
                  comite_id={comite.id}
                  tipo_falta={comite.tipo_falta}
                  descripcion_solicitud={comite.descripcion_solicitud}
                  instructor={comite.instructor_fk}
                  fecha={comite.createdAt.replace(/T.*/, "")}
                  estado={comite.estado}
                />
              ))}
            </>
          ) : (
            <Spinner />
          )}
        </div>
        <div className="flex flex-row w-full h-32 items-center justify-between">
          <ul className="flex flex-row justify-center items-center">
            {Array.from({
              length: Math.ceil(comites.length / comitesPerPage),
            }).map((_, index) => (
              <li key={index}>
                <button
                  onClick={() => paginate(index + 1)}
                  className={`bg-gray-200 text-black px-3 py-1 rounded-md ${
                    currentPage === index + 1 ? "bg-gray-500" : ""
                  }`}
                >
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>
          <div className="p-2">
            <Link
              to={`/solicitud-instructor`}
              className="block w-full px-3 bg-indigo-600 tracking-wide mt-4 py-2 rounded-2xl text-white capitalize font-semibold mb-2 focus:outline-none transition duration-300 transform active:scale-95 ease-in-out"
            >
              <span className="pl-2 mx-1">Crear Solicitud</span>
            </Link>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};
