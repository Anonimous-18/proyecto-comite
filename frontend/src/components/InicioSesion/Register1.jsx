import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import * as Yup from "yup";
import { ErrorMessage, Field, Formik } from "formik";

import { useContextApp } from "../../Context/ContextApp";

export const Register1 = () => {
  const contextApi = useContextApp();
  const tokenExist = contextApi.protectedRoutes();
  const navigate = useNavigate();

  useEffect(() => {
    if (tokenExist) {
      navigate(
        `${
          localStorage.getItem("instructor")
            ? "/home-instructor"
            : localStorage.getItem("aprendiz")
            ? "/home-aprendiz"
            : localStorage.getItem("invitado")
            ? "/home-invitado"
            : localStorage.getItem("admin")
            ? "/home-admin"
            : "/"
        }`
      );
    }
  }, [navigate, tokenExist]);

  const handleSubmit = async (values) => {
    if (values) {
      const result = await contextApi.registerUser(values);

      if (result) {
        navigate(`/`);
      }
    }
  };

  return (
    <>
      <section className="bg-while dark:bg--900 mt-11 mb-11 flex flex-col items-center justify-center">
        <Formik
          initialValues={{
            tipo_documento: "CC",
            documento: "",
            nombre_completo: "",
            cargo: "",
            email: "",
            telefono: "",
            dependencia: "",
            contrasenia: "",
            rol_id: null,
          }}
          validationSchema={Yup.object({
            tipo_documento: Yup.string().required("Seleccione un documento"),
            documento: Yup.number()
              .min(1, "Minimo 15 caracteres")
              .required("El documento es requerido"),
            nombre_completo: Yup.string().required("El nombre es requerido"),
            cargo: Yup.string()
              .min(3, "Minimo 3 caracteres")
              .required("El cargo es requerido"),
            email: Yup.string()
              .email("Ingrese un correo electrónico válido")
              .required("El correo electrónico es obligatorio"),
            telefono: Yup.number()
              .min(1, "Minimo 10 caracteres")
              .required("Debe ingresar el telefono"),
            dependencia: Yup.string().required("Debe ingresar la dependencia"),
            contrasenia: Yup.string()
              .min(1, "Minimo 8 caracteres")
              .required("La contraseña es requerida"),
          })}
          onSubmit={async (values, { resetForm }) => {
            await handleSubmit(values);
            resetForm();
          }}
        >
          {(formik) => (
            <form
              className="w-full max-w-lg bg-gray-100 p-8 shadow rounded-lg"
              onSubmit={formik.handleSubmit}
            >
              <div className="flex flex-row -mx-3 mb-6">
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-black text-lg font-bold mb-2">
                    REGISTRATE
                  </label>
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3  ">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    tipo documento
                  </label>
                  <Field
                    id="tipo_documento"
                    name="tipo_documento"
                    as="select"
                    value={formik.values.tipo_documento}
                    // className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded focus:outline-none focus:bg-blue-200 focus:border-blue-500"
                    className="w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 rounded focus:outline-none focus:bg-blue-200 focus:border-blue-500"
                  >
                    <option value="CC">Cedula de Ciudadania</option>
                    <option value="TI">Tarjeta de Identidad</option>
                    <option value="CE">Cedula de Extranjeria</option>
                    <option value="PASAPORTE">Pasaporte</option>
                  </Field>
                  <div className="text-red-600 text-sm font-bold">
                    <ErrorMessage name="tipo_documento" />
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Número de documento
                  </label>
                  <Field
                    name="documento"
                    id="documento"
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-blue-200 focus:border-blue-500"
                    type="number"
                    placeholder="XXX XXXX XXXX XXXX"
                  />
                  <div className="text-red-600 text-sm font-bold">
                    <ErrorMessage name="documento" />
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Nombre completo
                  </label>
                  <Field
                    type="text"
                    name="nombre_completo"
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-blue-200 focus:border-blue-500"
                    placeholder=""
                  />
                  <div className="text-red-600 text-sm font-bold">
                    <ErrorMessage name="nombre_completo" />
                  </div>
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    telefono
                  </label>
                  <Field
                    type="number"
                    name="telefono"
                    id="telefono"
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-blue-200 focus:border-blue-500"
                    placeholder="300000000"
                  />
                  <div className="text-red-600 text-sm font-bold">
                    <ErrorMessage name="telefono" />
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Correo
                  </label>
                  <Field
                    type="email"
                    name="email"
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-blue-200 focus:border-blue-500"
                    placeholder="correo@ejemplo.com"
                  />
                  <div className="text-red-600 text-sm font-bold">
                    <ErrorMessage name="email" />
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    contraseña
                  </label>
                  <Field
                    type="password"
                    name="contrasenia"
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-blue-200 focus:border-blue-500"
                    placeholder="****************"
                  />
                  <div className="text-red-600 text-sm font-bold">
                    <ErrorMessage name="contrasenia" />
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Dependencia
                  </label>
                  <Field
                    type="text"
                    name="dependencia"
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-blue-200 focus:border-blue-500"
                    placeholder=""
                  />
                  <div className="text-red-600 text-sm font-bold">
                    <ErrorMessage name="dependencia" />
                  </div>
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    cargo
                  </label>
                  <Field
                    type="text"
                    name="cargo"
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-blue-200 focus:border-blue-500"
                    placeholder=""
                  />
                  <div className="text-red-600 text-sm font-bold">
                    <ErrorMessage name="cargo" />
                  </div>
                </div>
                <div className="w-full md:w1/2 px-3">
                  <div className="w-full px-3">
                    <button
                      type="submit"
                      disabled={formik.isSubmitting}
                      className="block w-full bg-indigo-600 tracking-wide mt-4 py-2 rounded-2xl text-white capitalize font-semibold mb-2 focus:outline-none transition duration-300 transform active:scale-95 ease-in-out"
                    >
                      <span className="pl-2 mx-1">Crear cuenta invitado</span>
                    </button>
                  </div>
                  <div className="w-full px-3">
                    <p className="text-sm font-light text-gray-800 dark:text-gray-400">
                      ¿Tienes cuanta?{" "}
                      <Link
                        to={`/`}
                        className="text-sm ml-2 text-blue-500 hover:text-blue-700"
                      >
                        ingresar
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </form>
          )}
        </Formik>
      </section>
    </>
  );
};
