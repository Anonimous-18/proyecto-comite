import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { Carta } from "../../components/util/carta";
import { Semaforo } from "../../components/util/semaforo";
import { Filtrocomite } from "../../components/util/filtocomite";
import DefaultLayout from "../../Layout/DefaultLayout";

import { useContextApp } from "../../Context/ContextApp";

import hooks from "../../hooks/useFunction";

export const Homeinstructor = () => {
  const contextApi = useContextApp();
  const [comites, setComites] = useState([]);
  const [filtrar, setFiltrar] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [comitesPerPage] = useState(5);

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
          console.log("Filtrar", filtrar);
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
      <div>
        <div className="mx-auto max-w-screen-xl pt-20 pb-32 sm:pt-20 sm:pb-40 ">
          <div className="h-auto max-w-full flex flex-col items-center  p-5 place-content-evenly rounded-2xl">
            <div className=" flex space-x-2">
              {/* flex space-x-4 para columas */}
              <Semaforo />
              <Filtrocomite />
            </div>
          </div>

          <div className="flex flex-wrap justify-around border-2">
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
              <h1>Sin Comites</h1>
            )}
          </div>
          <div className="p-2">
            <Link
              to={`/solicitudinstructor`}
              className=" right-0 ml-3 relative inline-flex items-center rounded-md border border-transparent bg-blue-700 px-10 py-2 text-xs font-bold text-white shadow-xl transition duration-300 ease-in-out hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2"
              type="button"
            >
              Crear Solicitud a Comite
            </Link>
          </div>
        </div>
      </div>
      <ul>
        {Array.from({ length: Math.ceil(comites.length / comitesPerPage) }).map(
          (_, index) => (
            <li key={index}>
              <button
                onClick={() => paginate(index + 1)}
                className={`bg-blue-500 text-white rounded-full px-3 py-1 ${
                  currentPage === index + 1 ? "bg-yellow-500" : ""
                }`}
              >
                {index + 1}
              </button>
            </li>
          )
        )}
      </ul>
    </DefaultLayout>
  );
};
