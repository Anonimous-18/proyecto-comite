import { useEffect, useState } from "react";
import { useContextApp } from "../../Context/ContextApp";
import { Link, useNavigate } from "react-router-dom";

export function Tabla({ datos, fun_eliminar, nombre_tabla }) {
  const [data, setData] = useState([]);
  const { validateToken } = useContextApp();
  const navigate = useNavigate();
  useEffect(() => {
    if (validateToken()) {
      navigate(`/`);
    } else if (datos) {
      setData(datos);
    }
  }, [datos, navigate, validateToken]);
  if (datos === null || datos === undefined) {
    return <div className="">Cargando...</div>;
  } else if (datos.length === 0) {
    return <div>Cargando...</div>;
  }
  const handleDelete = async (id) => {
    console.log("ELIMINAR");
    const admin = localStorage.getItem("admin");
    const token = JSON.parse(localStorage.getItem("newToken"));

    if (admin) {
      await fun_eliminar(token.token, id);
      navigate(0);
    } else {
      navigate(`/home`);
    }
  };
  return (
    <div className="flex justify-center items-center w-full">
      <div className="mx-auto w-full min-w-[300px] max-w-5xl">
        <div className="relative overflow-x-auto border shadow-lg sm:rounded-lg">
          <div className="flex justify-between p-4 relative">
            <div className="relative mt-1">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none  h-11">
                <svg
                  className="w-5 h-5 text-gray-500 dark:text-gray-400 m-auto"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="table-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                placeholder="Buscar" />
            </div>
            <div className="relative flex items-center rounded-md ml-40 bg-blue-700 px-10 py-2 text-lg font-bold text-white shadow-xl transition duration-300 ease-in-out hover:text-white hover:bg-blue-400 focus:outline-none text-center ">
              <Link
                className="text-center w-full p-2 text-xl uppercase dark:bg-gray-700 dark:text-gray-400"
                to={`/form-${nombre_tabla}`}
                type="button"
              >
                Crear
              </Link>
            </div>
          </div>
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-blue-700 uppercase bg-blue-100 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="p-4">
                  <div className="flex items-center"></div>
                </th>
                <th scope="col" className="px-6 py-3">
                  #
                </th>
                <th scope="col" className="px-6 py-3">
                  nombre
                </th>
                <th scope="col" className="px-6 py-3">
                  creado
                </th>
                <th scope="col" className="px-15 py-">
                  <span className="sr-only">Eliminar</span>
                  <span className="sr-only">Editar</span>
                  <span className="sr-only">Ver</span>
                </th>
              </tr>
            </thead>

            <tbody>
              {data.map((item, index) => (
                <tr key={item.id}>
                  <td className="w-4 p-4">
                    <div className="flex items-center"></div>
                  </td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                  >
                    {index + 1}
                  </th>
                  <td className="px-6 py-4">{item.nombre}</td>
                  <td className="px-6 py-4">
                    {item.creado.replace(/T.*/, "")}
                  </td>

                  <td className="px-6 py-4 text-right flex justify-center gap-4  ">
                    <div className="flex justify-center items-center ml-3 relative rounded-md w-1/4 bg-blue-100 px-5 py-1  text-lg font-bold shadow-md transition duration-300 ease-in-out focus:outline-none text-center  text-blue-700 hover:text-white hover:bg-blue-400">
                      <Link
                        to={`/see-${nombre_tabla}/${item.id}`}
                        className="p-2 text-xs uppercase dark:bg-gray-700 dark:text-gray-400"
                        type="button"
                      >
                        ver
                      </Link>
                    </div>
                    <div className="flex justify-center items-center ml-3 relative rounded-md w-1/4 bg-blue-200 px-5 py-1  text-lg font-bold shadow-md transition duration-300 ease-in-out focus:outline-none text-center  text-blue-700 hover:text-white hover:bg-blue-400">
                      <Link
                        to={`/form-${nombre_tabla}/update/${item.id}`}
                        className="p-2 text-xs uppercase dark:bg-gray-700 dark:text-gray-400"
                      >
                        gestion permisos
                      </Link>
                    </div>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="flex justify-center items-center ml-3 relative rounded-md w-1/4 bg-blue-700 px-5 py-1  text-xs font-bold shadow-md transition duration-300 ease-in-out  focus:outline-none text-center  text-white uppercase hover:text-white hover:bg-blue-400"
                      type="button"
                    >
                      eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
