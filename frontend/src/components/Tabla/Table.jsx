import { useEffect, useState } from "react";
import { useContextApp } from "../../Context/ContextApp";
import { Link, useNavigate } from "react-router-dom";

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
      <div className="h-full w-full mt-28">
        <div>
          <Link
            to={`/form-${nombre_tabla}`}
            className="bg-cyan-600 p-2"
            type="button">
            CREAR
          </Link>
        </div>
        {data.map((dato, index) => {
          const columnas = Object.keys(dato);
          return (
            <table key={index} className="bg-rose-500 border border-black">
              <thead>
                <tr>
                  {columnas.map((columna) => (
                    <th key={columna}>{columna.toUpperCase()}</th>
                  ))}
                  <th>ACCIONES</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  {columnas.map((columna) => (
                    <td className="px-11" key={columna}>
                      {dato[columna]}
                    </td>
                  ))}
                  <td className="">
                    <Link
                      to={`/see-${nombre_tabla}/${dato.id}`}
                      className="bg-cyan-600 p-2">
                      Ver
                    </Link>
                    <Link
                      to={`/form-${nombre_tabla}/update/${dato.id}`}
                      className="bg-purple-800 p-2">
                      Actualizar
                    </Link>
                    <button
                      onClick={() => handleDelete(dato.id)}
                      className="bg-orange-900 p-2"
                      type="button">
                      Eliminar
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          );
        })}
      </div>
    </>
  );
};
