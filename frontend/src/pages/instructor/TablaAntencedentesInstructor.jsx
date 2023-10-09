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
      <div>
        <p>Filtrar por:</p>
        <div>
          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              onChange={(e) => onChange(e)}
              type="number"
              name="documento"
              placeholder="Identificación"
            />
            <button type="submit">
              <IoSearchCircle />
            </button>
          </form>
        </div>
      </div>
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
            {aprendices && filtrado === null ? (
              aprendices.map((aprendiz) => (
                <tr key={aprendiz.id}>
                  <td>{aprendiz.documento}</td>
                  <td>{aprendiz.nombre_completo}</td>
                  <td>{aprendiz.email}</td>
                  <td>{aprendiz.telefono}</td>
                  <td>
                    <Link
                      className="rounded-md bg-teal-500"
                      to={`/Antecedenteaprendiz/${aprendiz.id}`}
                    >
                      Ver
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr key={filtrado[0].id}>
                <td>{filtrado[0].documento}</td>
                <td>{filtrado[0].nombre_completo}</td>
                <td>{filtrado[0].email}</td>
                <td>{filtrado[0].telefono}</td>
                <td>
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
    </DefaultLayout>
  );
};
