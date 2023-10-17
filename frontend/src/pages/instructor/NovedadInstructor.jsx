import { useEffect, useState } from "react";

import hooks from "../../hooks/useFunction";
import DefaultLayout from "../../Layout/DefaultLayout";
import { useContextApp } from "../../Context/ContextApp";

export const NovedadInstructor = () => {
  const [aprendices, setAprendices] = useState(null);
  const [body, setBody] = useState({
    descripcion_novedad: "",
    nombre_novedad: "",
    instructor_fk: null,
    aprendiz_fk: null,
  });
  const context = useContextApp();

  const token = JSON.parse(localStorage.getItem("newToken"));
  const tokenDecoded = hooks.useDecodedToken(token.token);

  useEffect(() => {
    const getAprendices = async () => {
      const res = await context.getAprendices();

      if (res && res.length !== 0) {
        setAprendices(res);
      }
    };

    getAprendices();
  }, [context]);

  const onChange = (e) => {
    setBody({
      ...body,
      [e.target.name]: e.target.value,
      instructor_fk: tokenDecoded.user.id,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    /**-----------------------------------------------------------------------------
     * | Falta validar que se llenen todos los campos antes de mandar al backend
     * -----------------------------------------------------------------------------*/
    const response = await context.createNovedad(body);

    if (response && response === 204) {
      console.log("BIEN");
    } else {
      console.log("MAL");
    }
  };

  return (
    <DefaultLayout>
      <main>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            onChange={(e) => onChange(e)}
            type="text"
            name="nombre_novedad"
            placeholder="Nombre de la Novedad"
          />
          <input
            onChange={(e) => onChange(e)}
            type="text"
            name="descripcion_novedad"
            placeholder="Descripción de la Novedad"
          />
          <div>
            <label>Aprendices</label>
            <select
              onChange={(e) => onChange(e)}
              name="aprendiz_fk"
              value={body.aprendiz_fk || ""}
              required
            >
              <option value={undefined}>Seleccione el Aprendiz</option>
              {aprendices && aprendices ? (
                aprendices.map((aprendiz) => (
                  <option key={aprendiz.id} value={aprendiz.id}>
                    {aprendiz.nombre_completo}
                  </option>
                ))
              ) : (
                <>
                  <option value={null}>Sin Aprendices</option>
                </>
              )}
            </select>
          </div>
          <button type="submit">Registrar Novedad</button>
        </form>
      </main>
    </DefaultLayout>
  );
};
