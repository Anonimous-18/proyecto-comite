import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { IoSearchCircle } from "react-icons/io5";

import DefaultLayout from "../../Layout/DefaultLayout";
import { useContextApp } from "../../Context/ContextApp";

export const TablaAntencedentesInstructor = () => {
  const contextApi = useContextApp();
  const [filtrado, setFiltrado] = useState(null);
  const [aprendices, setAprendices] = useState(null);
  const [documento, setDocumento] = useState({
    documento: "",
  });

  useEffect(() => {
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
      <div className="mx-auto max-w-screen-xl">
        <div className="h-auto max-w-full flex flex-col items-center  p-5 place-content-evenly rounded-2xl ">
          <div>
            <p className="flex flex-col items-center p-2 text-blue-800 text-2xl">Filtrar por:</p>
            <div className=" text-base p-2">
              <form onSubmit={(e) => handleSubmit(e)} className=" space-x-2 flex flex-row p-2 border rounded-md ">
                <div className="">
                  <input
                    onChange={(e) => onChange(e)}
                    className="border flex rounded-md"
                    type="number"
                    name="documento"
                    placeholder="Identificación"
                  />
                </div>
                <div>
                  <button type="submit" className=" text-3xl flex hover:text-blue-700 ">
                    <IoSearchCircle />
                  </button>
                </div>
              </form>
            </div>
          </div>
          {aprendices && aprendices !== null ? (
            <table className="w-full place-content-center ">
              <tbody className="w-full md:w-4/6 shadow-lg shadow-zinc-400  p-4 justify-center text-gray-900 border-3 rounded-md items-center ">
                <tr className=" justify-center ">
                  <th className="border-2 justify-center items-center">Identificación</th>
                  <th className="border-2 justify-center items-center">Nombre Completo</th>
                  <th className="border-2 justify-center items-center">Email</th>
                  <th className="border-2 justify-center items-center">Telefono</th>
                  <th className="border-2 justify-center items-center">Acción</th>
                </tr>
                {aprendices && filtrado === null ? (
                  aprendices.map((aprendiz) => (
                    <tr key={aprendiz.id}>
                      <td className="border-2 justify-center items-center">{aprendiz.documento}</td>
                      <td className="border-2 justify-center items-center">{aprendiz.nombre_completo}</td>
                      <td className="border-2 justify-center items-center">{aprendiz.email}</td>
                      <td className="border-2 justify-center items-center">{aprendiz.telefono}</td>
                      <td className="border-2 justify-center items-center">
                        <Link
                          className="rounded-md bg-teal-500 items-center flex justify-center"
                          to={`/Antecedenteaprendiz/${aprendiz.id}`}
                        >
                          Ver
                        </Link>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr key={filtrado[0].id}>
                    <td className="border-2 justify-center items-center">{filtrado[0].documento}</td>
                    <td className="border-2 justify-center items-center">{filtrado[0].nombre_completo}</td>
                    <td className="border-2 justify-center items-center">{filtrado[0].email}</td>
                    <td className="border-2 justify-center items-center">{filtrado[0].telefono}</td>
                    <td className="border-2 justify-center items-center">
                      <Link
                        className="rounded-md bg-teal-500"
                        to={`/Antecedenteaprendiz/${filtrado[0].id}`}
                      >
                        Ver
                      </Link>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          ) : (
            <h2>Sin aprendices</h2>
          )}
        </div>
      </div>
    </DefaultLayout>
  );
};
