import * as Yup from "yup";
import { ErrorMessage, Field, Formik } from "formik";
import { useEffect, useState } from "react";

import hooks from "../../hooks/useFunction";
import DefaultLayout from "../../Layout/DefaultLayout";
import { useContextApp } from "../../Context/ContextApp";

export const NovedadInstructor = () => {
  const [aprendices, setAprendices] = useState(null);
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

  const handleSubmit = async (values) => {
    const response = await context.createNovedad(values);

    if (response && response === 204) {
      console.log("BIEN");
    } else {
      console.log("MAL");
    }
  };

  return (
    <DefaultLayout>
      <main>
        <Formik
          initialValues={{
            nombre_novedad: "",
            descripcion_novedad: "",
            aprendiz_fk: "",
            instructor_fk: tokenDecoded.user.id,
          }}
          validationSchema={Yup.object({
            nombre_novedad: Yup.string()
              .min(4, "Minimo 4 caracteres")
              .required("El nombre de la novedad es requerido"),
            descripcion_novedad: Yup.string().required(
              "La descripción de la novedad es requerido"
            ),
            aprendiz_fk: Yup.string().required("Debe seleccionar un aprendiz"),
          })}
          onSubmit={async (values, { resetForm }) => {
            await handleSubmit(values);
            resetForm();
          }}
        >
          {(formik) => (
            <form onSubmit={formik.handleSubmit}>
              <div>
                <label htmlFor="nombre_novedad">Nombre de la Novedad: </label>
                <Field
                  type="text"
                  id="nombre_novedad"
                  placeholder="Ingrese el nombre de la novedad"
                  name="nombre_novedad"
                />
                <div className="text-red-600 font-bold">
                  <ErrorMessage name="nombre_novedad" />
                </div>
              </div>
              <div>
                <label htmlFor="descripcion_novedad">
                  Descripción de la Novedad:{" "}
                </label>
                <Field
                  type="text"
                  id="descripcion_novedad"
                  name="descripcion_novedad"
                  placeholder="Descripción de la Novedad"
                />
                <div className="text-red-600 font-bold">
                  <ErrorMessage name="descripcion_novedad" />
                </div>
              </div>
              <div>
                <label htmlFor="aprendiz_fk">Aprendices</label>
                <Field id="aprendiz_fk" as="select" name="aprendiz_fk">
                  <option value="">Seleccione el Aprendiz</option>
                  {aprendices && aprendices.length > 0 ? (
                    aprendices.map((aprendiz) => (
                      <option key={aprendiz.id} value={aprendiz.id}>
                        {aprendiz.nombre_completo}
                      </option>
                    ))
                  ) : (
                    <option value="" disabled>
                      Sin Aprendices
                    </option>
                  )}
                </Field>
                <div className="text-red-600 font-bold">
                  <ErrorMessage name="aprendiz_fk" />
                </div>
              </div>
              <button
                type="submit"
                disabled={formik.isSubmitting || !formik.isValid}
              >
                Registrar Novedad
              </button>
            </form>
          )}
        </Formik>
      </main>
    </DefaultLayout>
  );
};
