import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import DefaultLayout from "../../Layout/DefaultLayout";
import { useContextApp } from "../../Context/ContextApp";

export const TablaAntencedentesInstructor = () => {
  const contextApi = useContextApp();
  const [aprendices, setAprendices] = useState(null);

  useEffect(() => {
    const getAprendices = async () => {
      const res = await contextApi.getAprendices();

      if (res && res.length !== 0) {
        setAprendices(res);
      }
    };

    getAprendices();
  }, [contextApi]);

  return (
    <DefaultLayout>
      {aprendices && aprendices !== null ? (
        <table>
          <tbody>
            <tr>
              <th>Identificación</th>
              <th>Nombre Completo</th>
              <th>Email</th>
              <th>Telefono</th>
              <th>Acción</th>
            </tr>
            {aprendices.map((aprendiz) => (
              <tr key={aprendiz.id}>
                <td>{aprendiz.documento}</td>
                <td>{aprendiz.nombre_completo}</td>
                <td>{aprendiz.email}</td>
                <td>{aprendiz.telefono}</td>
                <td>
                  <Link className="rounded-md bg-teal-500" to={`#`}>
                    Ver
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h2>Sin aprendices</h2>
      )}
    </DefaultLayout>
  );
};
