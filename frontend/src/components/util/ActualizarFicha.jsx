import * as Yup from "yup";
import { useEffect, useState } from "react";
import { ErrorMessage, Field, Formik } from "formik";
import { Link, useNavigate, useParams } from "react-router-dom";

import { Spinner } from "./Spinner";
import hooks from "../../hooks/useFunction";
import DefaultLayout from "../../Layout/DefaultLayout";
import { useContextApp } from "../../Context/ContextApp";

export const ActualizarFicha = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const contextApi = useContextApp();
  const [ficha, setFicha] = useState(null);

  const token = JSON.parse(localStorage.getItem("newToken"));
  const tokenDecoded = hooks.useDecodedToken(token.token);

  useEffect(() => {
    if (id && id) {
      const getFicha = async () => {
        const res = await contextApi.getDetailsFicha(id);

        if (res && res) setFicha(res);
      };

      getFicha();
    }
  }, [contextApi, id]);

  const handleCreate = async (values) => {
    await contextApi.updateFicha(values, id);
    navigate(`/fichas`)
  };

  return (
    <DefaultLayout>
      <div className="flex h-auto py-11">
        <div className="m-auto">
          {ficha && ficha ? (
            <Formik
              initialValues={{
                codigo: ficha.codigo,
                inicioLectiva: ficha.inicioLectiva.replace(/T.*/, ""),
                finLectiva: ficha.finLectiva.replace(/T.*/, ""),
                inicioProductiva: ficha.inicioProductiva.replace(/T.*/, ""),
                finProductiva: ficha.finProductiva.replace(/T.*/, ""),
                modalidad: ficha.modalidad,
                jornada: ficha.jornada,
                programa: ficha.programa,
                instructor_id: tokenDecoded.user.id,
              }}
              validationSchema={Yup.object({
                codigo: Yup.string().required(
                  "El codigo de la ficha es requerido"
                ),
                inicioLectiva: Yup.date().required(
                  "La fecha de inicio es requerida"
                ),
                finLectiva: Yup.date()
                  .min(
                    Yup.ref("inicioLectiva"),
                    "La fecha de fin no puede ser anterior a la fecha de inicio"
                  )
                  .required("La fecha de fin es requerida"),
                inicioProductiva: Yup.date().required(
                  "La fecha de inicio es requerido"
                ),
                finProductiva: Yup.date()
                  .min(
                    Yup.ref("inicioProductiva"),
                    "La fecha de fin no puede ser anterior a la fecha de inicio"
                  )
                  .required("La fecha fin es requerido"),
                modalidad: Yup.string().required("La modalidad es requerido"),
                jornada: Yup.string().required("La jornada es requerido"),
                programa: Yup.string()
                  .min(4, "Minimo 4 caracteres")
                  .required("El nombre del programa es requerido"),
              })}
              onSubmit={async (values, { resetForm }) => {
                await handleCreate(values);
                resetForm();
              }}
            >
              {(formik) => (
                <form onSubmit={formik.handleSubmit}>
                  <div className="bg-gray-100 rounded-lg shadow">
                    <div className="flex">
                      <div className="flex-1 py-5 pl-5 overflow-hidden">
                        <h1 className="inline text-2xl font-semibold leading-none">
                          Actualizar Ficha
                        </h1>
                      </div>
                    </div>
                    <div className="px-5 pb-5">
                      <Field
                        type="text"
                        name="codigo"
                        //   value={formik.values.codigo}
                        placeholder="Codigo de la Ficha"
                        className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                      />
                      <div className="text-red-600 font-bold text-sm">
                        <ErrorMessage name="codigo" />
                      </div>
                      <small className="mt-3 inline-block text-xs font-bold">
                        Fecha de Inicio Lectiva:
                      </small>
                      <Field
                        type="date"
                        name="inicioLectiva"
                        placeholder="Fecha de Inicio"
                        className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                      />
                      <div className="text-red-600 font-bold text-sm">
                        <ErrorMessage name="inicioLectiva" />
                      </div>
                      <small className="mt-3 inline-block text-xs font-bold">
                        Fecha Fin Lectiva:
                      </small>
                      <Field
                        type="date"
                        name="finLectiva"
                        placeholder="Fecha Fin"
                        className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                      />
                      <div className="text-red-600 font-bold text-sm">
                        <ErrorMessage name="finLectiva" />
                      </div>
                      <small className="mt-3 inline-block text-xs font-bold">
                        Fecha de Inicio Productiva:
                      </small>
                      <Field
                        type="date"
                        name="inicioProductiva"
                        placeholder="Fecha de Inicio"
                        className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                      />
                      <div className="text-red-600 font-bold text-sm">
                        <ErrorMessage name="inicioProductiva" />
                      </div>
                      <small className="mt-3 inline-block text-xs font-bold">
                        Fecha Fin Productiva:
                      </small>
                      <Field
                        type="date"
                        name="finProductiva"
                        placeholder="Fecha Fin"
                        className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                      />
                      <div className="text-red-600 font-bold text-sm">
                        <ErrorMessage name="finProductiva" />
                      </div>
                      <Field
                        type="text"
                        name="modalidad"
                        placeholder="Modalidad del Programa"
                        className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                      />
                      <div className="text-red-600 font-bold text-sm">
                        <ErrorMessage name="modalidad" />
                      </div>
                      <Field
                        type="text"
                        name="jornada"
                        placeholder="Jornada del Programa"
                        className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                      />
                      <div className="text-red-600 font-bold text-sm">
                        <ErrorMessage name="jornada" />
                      </div>
                      <Field
                        type="text"
                        name="programa"
                        placeholder="Nombre del Programa"
                        className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                      />
                      <div className="text-red-600 font-bold text-sm">
                        <ErrorMessage name="programa" />
                      </div>
                    </div>
                    <hr className="mt-4" />
                    <div className="flex flex-row-reverse p-3">
                      <div className="flex-initial pl-3">
                        <button
                          type="submit"
                          disabled={formik.isSubmitting}
                          className="flex px-5 py-2.5 font-medium tracking-wide text-white capitalize bg-blue-800 rounded-md hover:bg-blue-900  focus:outline-none focus:bg-blue-950  transition duration-300 transform active:scale-95 ease-in-out"
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
                          <span className="pl-2 mx-1">Actualizar Ficha</span>
                        </button>
                      </div>
                      <div className="flex-initial">
                        <Link
                          to={`/fichas`}
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
          ) : (
            <Spinner />
          )}
        </div>
      </div>
    </DefaultLayout>
  );
};
