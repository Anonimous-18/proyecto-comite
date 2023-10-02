import { useEffect, useState } from "react";
import { useContextApp } from "../../Context/ContextApp";
import { Link, useNavigate } from "react-router-dom";
import { AiFillDelete } from"react-icons/ai";
import {GrUpdate} from"react-icons/gr"
import {AiOutlineEye} from"react-icons/ai"

export const Table = ({ datos, fun_eliminar, nombre_tabla }) => {
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
    return <div>Loading...</div>;
  } else if (datos.length === 0) {
    return <div>Loading...</div>;
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
  console.log(datos);
  return (
    <>
      <div className="mx-auto max-w-screen-sm pb-32 sm:pt-20 sm:pb-40 ">
        <div className="h-auto max-w-full flex flex-col items-center  p-5 place-content-evenly rounded-2xl">
          <div className="h-full w-full mt-28">
            <div className="p-2">
            
              <Link
                to={`/form-${nombre_tabla}`}
                className="place-items-center flex flex-col items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-blue-600 to-blue-800 group-hover:from-blue-600 group-hover:to-blue-800 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-sky-500 dark:focus:ring-blue-800"
                type="button"
              >
                CREAR
              </Link>
            </div>
            {data.map((dato, index) => {
              const columnas = Object.keys(dato);
              return (
                <table key={index} className="bg-blue-300 border-2 border-black max-w-full flex flex-col">
                  <thead>
                    <tr className="h-auto max-w-full flex flex-row items-center ">
                      {columnas.map((columna) => (
                        <th className="px-5 " key={columna}>{columna.toUpperCase()}</th>
                      ))}
                      
                    </tr>
                  </thead>
                  <tbody>
                    <tr className=" flex flex-row tems-center">
                      {columnas.map((columna) => (
                        <td className=" px-5" key={columna}>
                          {dato[columna]}
                        </td>
                      ))}
                      <td className="flex flex-row-reverse items-end ml-10">
                        <Link
                          to={`/see-${nombre_tabla}/${dato.id}`}
                          className=" p-2"
                        >
                          <AiOutlineEye/>
                        </Link>
                        <Link
                          to={`/form-${nombre_tabla}/update/${dato.id}`}
                          className="p-2"
                        >
                          <GrUpdate />
                        </Link>
                        <button
                          onClick={() => handleDelete(dato.id)}
                          className="p-2"
                          type="button"
                        >
                          <AiFillDelete/>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
