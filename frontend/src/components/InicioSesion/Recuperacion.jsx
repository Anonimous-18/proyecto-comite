import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import * as Yup from "yup";
import { ErrorMessage, Field, Formik } from "formik";

import { useContextApp } from "../../Context/ContextApp";

const Recuperacion = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const contextApi = useContextApp();

  const handleSubmit = async (values) => {
    if (values.email) {
      setLoading(true);
      const result = await contextApi.resetPassword({ email: values.email });

      if (result) {
        setLoading(false);
        alert("MIRE SU CORREO");
        navigate(`/`);
      } else {
        setLoading(false);
        alert("EL CORREO NO EXISTE");
      }
    }
  };
  return (
    <div className="h-screen bg-white">
      <div className="container mx-auto">
        <div className="flex justify-center items-center px-6 my-12">
          <div className="w-full xl:w-3/4 lg:w-3/4 flex justify-center items-center">
            <div className=" w-full 2xl:w-1/2 xl:w-1/2 lg:w-8/12 md:w-8/12 sm:w-8/12 bg-gray-100 shadow p-5 rounded-lg lg:rounded-l-none">
              <div className="px-8 mb-4 text-center">
                <h3 className="pt-4 mb-2 text-2xl">
                  ¿Olvidaste tu contraseña?
                </h3>
                <p className="mb-4 text-sm text-gray-700">
                  Lo entendemos, suceden ese tipo de cosas. ¡Simplemente ingrese
                  su dirección de correo electrónico a continuación!
                </p>
              </div>
              <Formik
                initialValues={{
                  email: "",
                }}
                validationSchema={Yup.object({
                  email: Yup.string()
                    .email("Ingrese un correo electrónico válido")
                    .required("El correo electrónico es obligatorio"),
                })}
                onSubmit={async (values, { resetForm }) => {
                  await handleSubmit(values);
                  resetForm();
                }}
              >
                {(formik) => (
                  <form
                    onSubmit={formik.handleSubmit}
                    className="px-8 pt-6 pb-8 mb-4 bg-white rounded"
                  >
                    <div className="mb-4">
                      <label
                        className="block mb-2 text-sm font-bold text-gray-700"
                        htmlFor="email"
                      >
                        Correo electrónico
                      </label>
                      <Field
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Ingrese su correo electrónico"
                        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      />
                      <div className="text-red-600 font-bold text-sm">
                        <ErrorMessage name="email" />
                      </div>
                    </div>
                    <div className="mb-6 text-center">
                      <button
                        type={`${loading ? "button" : "submit"}`}
                        disabled={formik.isSubmitting}
                        className="block w-full bg-indigo-600 tracking-wide mt-4 py-2 rounded-2xl text-white capitalize font-semibold mb-2 focus:outline-none transition duration-300 transform active:scale-95 ease-in-out"
                      >
                        <span className="pl-2 mx-1">
                          Restablecer Contraseña
                        </span>
                      </button>
                    </div>
                    <hr className="mb-6 border-t" />
                    {/* <div className="text-center">
                      <Link
                        className="text-sm ml-2 text-blue-500 hover:text-blue-700"
                        to="/register"
                      >
                        ¡Crear cuenta!
                      </Link>
                    </div> */}
                    <div className="text-center">
                      <span className="text-sm">¿Ya tienes una cuenta?</span>
                      <apan className="inline-block">
                        <Link
                          className="text-sm ml-2 text-blue-500 hover:text-blue-700"
                          to="/"
                        >
                          ¡Ingresa!
                        </Link>
                      </apan>
                    </div>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recuperacion;
