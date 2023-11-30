import DefaultLayout from "../../Layout/DefaultLayout";
// import { Semaforo } from "../../components/util/semaforo";
// import { Filtrocomite } from "../../components/util/filtocomite";
import { Carta } from "../../components/util/carta";
import { useContextApp } from "../../Context/ContextApp";
import { Modal } from "../../components/util/Modal";

import { useEffect, useState } from "react";
import { Spinner } from "../../components/util/Spinner";

export const HomeGestor = () => {
  const contextApp = useContextApp();
  const [comites, setComites] = useState([]);
  const [carga, setCarga] = useState(true);
  // const [filtrar, setFiltrar] = useState(null);

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
    window.scroll(0, 300);
    const getComites = async () => {
      const response = await contextApp.getComites();
      return response;
    };
    getComites()
      .then((res) => {
        setComites(res);
        setCarga(false);
      })
      .catch((err) => {
        console.log("error ", err);
      });
  }, [contextApp]);
  return (
    <DefaultLayout>
      <div className="max-w-full h-full flex flex-col items-center justify-center">
        <div className="grid grid-cols-1 2xl:grid-cols-3 xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-1 gap-4 py-11 w-full h-full items-center justify-center">
          {carga ? (
            <>
              <Spinner />
            </>
          ) : comites && comites.length !== 0 ? (
            <>
              {currentComites.map((comite, index) => (
                <Carta
                  key={index}
                  id={comite.id}
                  comite_id={comite.id}
                  tipo_falta={comite.tipo_falta}
                  descripcion_solicitud={comite.descripcion_solicitud}
                  instructor={comite.instructor_fk}
                  fecha={comite.createdAt.replace(/T.*/, "")}
                  estado={comite.estado}
                  gestor={true}
                />
              ))}
            </>
          ) : (
            <h1>Sin Comites</h1>
          )}
        </div>
      </div>
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
      <Modal
        isOpen={contextApp.state.activado}
        estilosAceptar={contextApp.state.modo}
        id={contextApp.state.id}
      />
    </DefaultLayout>
  );
};
