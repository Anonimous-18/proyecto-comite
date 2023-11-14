import DefaultLayout from "../../Layout/DefaultLayout";
import { Semaforo } from "../../components/util/semaforo";
import { Filtrocomite } from "../../components/util/filtocomite";
import { Carta } from "../../components/util/carta";
import { useContextApp } from "../../Context/ContextApp";
import { Modal } from "../../components/util/modal";

import { useEffect, useState } from "react";

export const HomeGestor = () => {
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
    window.scroll(0, 50);
  };

  useEffect(() => {
    window.scroll(0, 300);
    const getComites = async () => {
      const response = await contextApi.getComites();
      return response;
    };
    getComites()
      .then((res) => {
        setComites(res);
      })
      .catch((err) => {
        console.log("error ", err);
      });
  }, []);
  return (
    <DefaultLayout>
      <div className="max-w-full h-full flex flex-col items-center justify-center">
        

        <div className="grid grid-cols-1 2xl:grid-cols-3 xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-1 gap-4 py-11 w-full h-full items-center justify-center">
          {comites && comites.length !== 0 ? (
            <>
              {currentComites.map((comite, index) => (
                <Carta
                  key={index}
                  id={ comite.id }
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
      <Modal id={contextApi.idComite} />
    </DefaultLayout>
  );
};
