import { NavBar } from "../../Layout/NavBar";
import { Footer } from "../../Layout/Footer";
import { useEffect, useState } from "react";

export const Table = ({ datos }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    if (datos) {
      setData(datos);
    }
  }, [datos]);

  if (datos.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <NavBar />
      <div className="h-full w-full mt-28">
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
                  <td>
                    <button className="bg-cyan-600 p-2" type="button">
                      Ver
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          );
        })}
      </div>
      <Footer />
    </>
  );
};
