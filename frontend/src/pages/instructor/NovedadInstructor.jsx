import * as Yup from "yup";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ErrorMessage, Field, Formik } from "formik";

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
      //console.log("BIEN");
    } else {
      //console.log("MAL");
    }
  };

  return (
    <DefaultLayout>
      {/* <div className="flex h-screen bg-rose-200"> */}
      <div className="flex h-auto py-11">
        <div className="m-auto">
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
              aprendiz_fk: Yup.string().required(
                "Debe seleccionar un aprendiz"
              ),
            })}
            onSubmit={async (values, { resetForm }) => {
              await handleSubmit(values);
              resetForm();
            }}
          >
            {(formik) => (
              <form onSubmit={formik.handleSubmit}>
                <div className="bg-gray-100 rounded-lg shadow">
                  <div className="flex">
                    <div className="flex-1 py-5 pl-5 overflow-hidden">
                      <h1 className="inline text-2xl font-semibold leading-none">
                        Novedad
                      </h1>
                    </div>
                  </div>
                  <div className="px-5 pb-5">
                    <Field
                      type="text"
                      name="nombre_novedad"
                      placeholder="Nombre de la Novedad"
                      className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400 text-center"
                    />
                    <div className="text-red-600 font-bold text-sm">
                      <ErrorMessage name="nombre_novedad" />
                    </div>
                    <Field
                      type="text"
                      name="descripcion_novedad"
                      placeholder="Descripción de la Novedad"
                      className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400 text-center"
                    />
                    <div className="text-red-600 font-bold text-sm">
                      <ErrorMessage name="descripcion_novedad" />
                    </div>
                  </div>
                  <div className="px-5 pb-5">
                    <Field
                      as="select"
                      name="aprendiz_fk"
                      placeholder="Aprendices"
                      className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                    >
                      <option className="text-sm text-white text-center font-bold" value="">Seleccione el Aprendiz</option>
                      {aprendices && aprendices.length > 0 ? (
                        aprendices.map((aprendiz) => (
                          <option className="text-sm text-white text-center" key={aprendiz.id} value={aprendiz.id}>
                            {aprendiz.nombre_completo}
                          </option>
                        ))
                      ) : (
                        <option value="" disabled>
                          Sin Aprendices
                        </option>
                      )}
                    </Field>
                    <div className="text-red-600 font-bold text-sm">
                      <ErrorMessage name="aprendiz_fk" />
                    </div>
                  </div>
                  <hr className="mt-4" />
                  <div className="flex flex-row-reverse p-3">
                    <div className="flex-initial pl-3">
                      <button
                        type="submit"
                        disabled={formik.isSubmitting}
                        className="flex items-center px-5 py-2.5 font-medium tracking-wide text-white capitalize bg-black rounded-md hover:bg-gray-800  focus:outline-none focus:bg-gray-900  transition duration-300 transform active:scale-95 ease-in-out"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24px"
                          viewBox="0 0 24 24"
                          width="24px"
                          fill="#FFFFFF"
                        >
                          <path d="M0 0h24v24H0V0z" fill="none"></path>
                          <path
                            d="M5 5v14h14V7.83L16.17 5H5zm7 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-8H6V6h9v4z"
                            opacity=".3"
                          ></path>
                          <path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm2 16H5V5h11.17L19 7.83V19zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM6 6h9v4H6z"></path>
                        </svg>
                        <span className="pl-2 mx-1">Registrar Novedad</span>
                      </button>
                    </div>
                    <div className="flex-initial">
                      <Link
                        to={`${
                          localStorage.getItem("instructor")
                            ? "/home-instructor"
                            : localStorage.getItem("aprendiz")
                            ? "/home-aprendiz"
                            : localStorage.getItem("invitado")
                            ? "/home-invitado"
                            : localStorage.getItem("admin")
                            ? "/home-admin"
                            : "/"
                        }`}
                        className="flex items-center px-5 py-2.5 font-medium tracking-wide text-black capitalize rounded-md  hover:bg-red-200 hover:fill-current hover:text-red-600  focus:outline-none  transition duration-300 transform active:scale-95 ease-in-out"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24px"
                          viewBox="0 0 24 24"
                          width="24px"
                        >
                          <path d="M0 0h24v24H0V0z" fill="none"></path>
                          <path d="M8 9h8v10H8z" opacity=".3"></path>
                          <path d="M15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z"></path>
                        </svg>
                        <span className="pl-2 mx-1">Cancelar</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </DefaultLayout>
  );
};
