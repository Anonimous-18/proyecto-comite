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

  return (
    <>
      <div className="mx-auto max-w-screen-sm pb-32 sm:pt-20 sm:pb-40 ">
        <div className="h-auto max-w-full flex flex-col items-center  p-5 place-content-evenly rounded-2xl">
          <div className="h-full w-full mt-28">
            <div className="p-2">
              <Link
                to={`/form-${nombre_tabla}`}
                className="bg-cyan-600 p-2"
                type="button"
              >
                CREAR
              </Link>
            </div>
            {data.map((dato, index) => {
              const columnas = Object.keys(dato);
              return (
                <table key={index} className="bg-rose-500 border border-black max-w-full flex flex-col">
                  <thead>
                    <tr className="h-auto max-w-full flex flex-row items-center ">
                      {columnas.map((columna) => (
                        <th className="px-5" key={columna}>{columna.toUpperCase()}</th>
                      ))}
                      
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      {columnas.map((columna) => (
                        <td className=" px-5" key={columna}>
                          {dato[columna]}
                        </td>
                      ))}
                      <td className="flex flex-row-reverse">
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
