import * as Yup from "yup";
import { ErrorMessage, Field, Formik } from "formik";

import { useState } from "react";
import { Link } from "react-router-dom";
import { BiErrorAlt } from "react-icons/bi";

import { useContextApp } from "../../Context/ContextApp";

export const Login = () => {
  const { isLogged } = useContextApp();

  const [err, setErr] = useState(false);

  const handleSubmit = async (values) => {
    const response = await isLogged(values);
    if (response) {
      console.log("er");
    } else {
      setErr(true);
      setTimeout(() => {
        setErr(false);
      }, 3000);
      console.log(err);
    }
  }

  return (
    <>
      <section className="dalinComoFondo dark:bg-gray-900">
        {err ? (
          <div className="bg-opacity-95 absolute flex flex-col items-center justify-center px-6 py-8 mx-auto h-full w-full lg:py-0">
            <div className="text-ls font-bold w-96 h-60 flex flex-col justify-center items-center text-center">
              <div
                id="alert-additional-content-2"
                className="px-4 mb-4 text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800"
                role="alert"
              >
                <BiErrorAlt className=" w-64 h-36 md:h-auto  rounded-xl mx-auto border-2 " />
                <div className="mt-2 mb-4 text-sm">
                  Correo o contraseña incorrectas intente nuevamente
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center mx-auto h-screen">
            <div className="w-auto rounded-lg  dark:border md:mt-0 sm:max-w-md xl:p-0 shadow-xl bg-blue-800">
              <div className="p-1 space-y-4 md:space-y-6 sm:p-1">
                <h3 className="text-center mt-4 mb-4 text-sm font-extrabold text-white lg:text-5xl md:text-4xl">
                  {" "}
                  Bienvenido a{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r to-sky-500 from-sky-400">
                    SE-JustApp
                  </span>
                </h3>
                <Formik
                  initialValues={{
                    documento: "",
                    contrasenia: "",
                  }}
                  validationSchema={Yup.object({
                    documento: Yup.number()
                      .min(1, "Minimo 15 caracteres")
                      .required("El documento es requerido"),
                    contrasenia: Yup.string()
                      .min(1, "Minimo 8 caracteres")
                      .required("La contraseña es requerida"),
                  })}
                  onSubmit={async (values, { resetForm }) => {
                    await handleSubmit(values);
                    resetForm();
                  }}
                  className="space-y-4 md:space-y-6"
                >
                  {(formik) => (
                    <form onSubmit={formik.handleSubmit}>
                      <div className="bg-white w-full h-full sm:p-7 rounded-lg p-4">
                        <div>
                          <label className="block mb-2 text-sm font-medium text-gray-900 ">
                            Documento
                          </label>
                          <Field
                            type="number"
                            autoFocus
                            name="documento"
                            id="documento"
                            className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                          />
                          <div className="text-red-600 font-bold">
                            <ErrorMessage name="documento" />
                          </div>
                        </div>
                        <div>
                          <label className="block mb-2 text-sm font-medium text-gray-900 ">
                            Contraseña:
                          </label>
                          <Field
                            type="password"
                            name="contrasenia"
                            id="password"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                          />
                          <div className="text-red-600 font-bold">
                            <ErrorMessage name="contrasenia" />
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <Link
                            to={`/recuperacion-contraseña`}
                            className=" text-blue-800 text-sm font-medium text-primary-600 hover:underline pt-3 pb-4"
                          >
                            ¿Olvidaste tu contraseña?
                          </Link>
                        </div>
                        <button
                          // disabled={formik.isSubmitting || !formik.isValid}
                          type="submit"
                          className=" place-items-center flex flex-col items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-blue-600 to-blue-800 group-hover:from-blue-600 group-hover:to-blue-800 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-sky-500 dark:focus:ring-blue-800"
                        >
                          <span className="relative px-11 py-2.5 transition-all ease-in duration-75 bg-blue-500 text-white rounded-md group-hover:bg-opacity-0">
                            Inicio de Sesion
                          </span>
                        </button>
                        <p className="text-sm font-light text-gray-700  pt-1 pb-2">
                          Tienes cuenta?{" "}
                          <Link
                            to={`/register`}
                            className="font-medium text-primary-600 hover:underline text-blue-800"
                          >
                            Registrarse
                          </Link>
                        </p>
                      </div>
                    </form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};
