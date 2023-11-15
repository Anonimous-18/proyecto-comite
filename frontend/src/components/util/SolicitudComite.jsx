import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import * as Yup from "yup";
import { ErrorMessage, Field, Formik } from "formik";

import hooks from "../../hooks/useFunction";
import { useContextApp } from "../../Context/ContextApp";

export const SolicitudComite = () => {
  const [reglamento, setReglamento] = useState([]);
  const [articulosSeleccionados, setArticulosSeleccionados] = useState([]);
  const [err, setErr] = useState(false);

  const [data, setData] = useState({
    capitulo: "1",
    articulo: "",
    tipo_falta: "",
    descripcion_falta: "",
    anexos: "",
    identificaciones: [],
  });

  const contextApi = useContextApp();
  const navigate = useNavigate();
  const tokenExist = contextApi.protectedRoutes();

  useEffect(() => {
    window.scroll(0, 0);
    /**-------------------------------------------------------
     * |  Validamos el token de sesión
     -------------------------------------------------------*/
    if (!tokenExist) {
      navigate(`/`);
    } else if (contextApi.validateToken()) {
      navigate(`/`);
    } else {
      const Reglamento = async () => {
        const token = JSON.parse(localStorage.getItem("newToken"));
        const res = await contextApi.getReglamento(token.token);

        if (res !== null || res !== undefined) {
          setReglamento(res);
        }
      };

      Reglamento();
    }
  }, [navigate, contextApi, tokenExist, err]);

  const agregarArticulo = (values) => {
    /**-------------------------------------------------------
     * |  Agregamos un nuevo articulo al estado
     -------------------------------------------------------*/
    if (values.articulo !== "") {
      setArticulosSeleccionados([...articulosSeleccionados, values.articulo]);
      // setData({ ...data, articulo: "" });
    }
  };

  const quitarArticulo = (index) => {
    /**-------------------------------------------------------
     * |  Eliminamos un articulo splice(desde, hasta)
     -------------------------------------------------------*/
    const nuevosArticulos = [...articulosSeleccionados];
    nuevosArticulos.splice(index, 1);
    setArticulosSeleccionados(nuevosArticulos);
  };

  const getArticulos = (reglamentoCompleto, values) => {
    /**-------------------------------------------------------------
     * |  Obtenemos los articulos para un capitulo en especifico(id)
     -------------------------------------------------------------*/
    return reglamentoCompleto.find(
      (item) => item.cap_id === parseInt(values.capitulo)
    );
  };

  if (reglamento === null || reglamento === undefined) {
    return <div>Loading...</div>;
  } else if (reglamento.length === 0) {
    return <div>Loading...</div>;
  }
  const result = contextApi.orderReglamento(reglamento);

  const agregarIdentificacion = () => {
    setData({
      ...data,
      /**-------------------------------------------------------
     * |  Agrega una nueva identificación vacia
     -------------------------------------------------------*/
      identificaciones: [...data.identificaciones, ""],
    });
  };

  const actualizarIdentificacion = (index, value) => {
    const nuevasIdentificaciones = [...data.identificaciones];
    nuevasIdentificaciones[index] = value;

    setData({
      ...data,
      identificaciones: nuevasIdentificaciones,
    });
  };

  const getCapitulos = (elemento) => {
    /**----------------------------------------------------------
     * |  Obtenemos el capitulo al que pertenece un articulo id
     ----------------------------------------------------------*/
    return result.find(
      (objeto) =>
        objeto.contenido &&
        objeto.contenido.some((i) => i.art_id === parseInt(elemento))
    );
  };

  const handleSubmit = async (values) => {
    /**-------------------------------------------------------
     * |  Eliminamos los elementos repetidos en el array
     -------------------------------------------------------*/
    const artRequest = [...new Set(articulosSeleccionados)];
    let capitulos = [];
    artRequest.map((e) => capitulos.push(getCapitulos(e).cap_id));

    // const capRequest = [...new Set(capitulos)];
    const identificaciones = [...new Set(data.identificaciones)];

    /**-----------------------------------
     * |  Eliminamos los valores vacios
     -----------------------------------*/
    const idenRequest = identificaciones.filter((valor) => valor !== "");

    setErr(false);
    if (idenRequest && idenRequest.length === 0) {
      setErr(true);
    } else {
      const token = JSON.parse(localStorage.getItem("newToken"));
      const tokenDecoded = hooks.useDecodedToken(token.token);

      const formData = new FormData();
      formData.append("aprendices_implicados", idenRequest);
      formData.append("articulos", artRequest);
      formData.append("instructor_fk", tokenDecoded.user.id);
      formData.append("tipo_falta", values.tipo_falta);
      formData.append("descripcion_solicitud", values.descripcion_falta);
      formData.append("evidencia", values.evidencia);

      if (formData) {
        try {
          await contextApi.createComite(formData);
          navigate(`/home-instructor`);
        } catch (error) {
          console.log(error);
        }
      }
    }
  };

  return (
    <div className="flex shadow">
      <div className="m-auto">
        <div>
          <Formik
            initialValues={{
              capitulo: "1",
              articulo: "",
              tipo_falta: "",
              descripcion_falta: "",
              evidencia: null,
            }}
            validationSchema={Yup.object({
              capitulo: Yup.string().required("Seleccione un capitulo"),
              articulo: Yup.string().required("Seleccione un articulo"),
              tipo_falta: Yup.string().required("Seleccione un tipo de falta"),
              descripcion_falta: Yup.string()
                .min(10, "Minimo 10 caracteres")
                .required("La descripción de la falta es requerida"),
              evidencia: Yup.mixed().required("Seleccione un archivo"),
            })}
            onSubmit={async (values) => {
              await handleSubmit(values);
            }}
          >
            {(formik) => (
              <form onSubmit={formik.handleSubmit}>
                <div className="bg-white rounded-lg shadow">
                  <div className="flex">
                    <div className="flex-1 py-5 pl-5 overflow-hidden">
                      <h1 className="inline text-2xl font-semibold leading-none">
                        Solicitud de Comite
                      </h1>
                    </div>
                  </div>
                  <div className="px-5 pb-5">
                    <Field
                      as="select"
                      id="capitulo"
                      name="capitulo"
                      placeholder="Capitulo del Reglamento"
                      value={formik.values.capitulo}
                      className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:text-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                    >
                      {result.map((capitulo) => (
                        <option
                          key={capitulo.cap_id}
                          value={`${capitulo.cap_id}`}
                          // className="h-100 p-14"
                        >
                          Capitulo {capitulo.cap_id} {capitulo.cap_titulo}
                        </option>
                      ))}
                    </Field>
                    {/* <div className="text-red-600 font-bold text-sm">
                      <ErrorMessage name="capitulo" />
                    </div> */}
                    <Field
                      as="select"
                      id="articulo"
                      name="articulo"
                      value={formik.values.articulo}
                      className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:text-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                    >
                      <option value="">Seleccione un Articulo</option>
                      {getArticulos(result, formik.values).contenido.map(
                        (articulo, index) => (
                          <option key={index} value={`${articulo.art_id}`}>
                            Articulo {articulo.art_id} {articulo.art_titulo}
                          </option>
                        )
                      )}
                    </Field>
                    <div className="text-red-600 font-bold text-sm">
                      <ErrorMessage name="articulo" />
                    </div>
                    <div className="flex flex-row-reverse p-3">
                      <div className="flex-initial pl-3">
                        <button
                          type="button"
                          className="flex items-center px-5 py-2.5 font-medium tracking-wide text-white capitalize bg-black rounded-md hover:bg-gray-800  focus:outline-none focus:bg-gray-900  transition duration-300 transform active:scale-95 ease-in-out"
                          onClick={() => agregarArticulo(formik.values)}
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
                          <span className="pl-2 mx-1">Agregar Articulo</span>
                        </button>
                      </div>
                    </div>
                    {articulosSeleccionados &&
                      articulosSeleccionados.length > 0 && (
                        <div>
                          <h4>Articulos Seleccionados:</h4>
                          <ul className="grid grid-cols-1 2xl:grid-cols-5 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 w-full h-full my-4 gap-5 items-center justify-center">
                            {articulosSeleccionados.map((articuloId, index) => (
                              <li
                                key={index}
                                className="place-content-center items-center justify-center bg-gray-100 flex p-1"
                              >
                                • {`Articulo ${articuloId}`}
                                <button
                                  type="button"
                                  className="ml-4 flex items-center px-5 py-2.5 font-medium tracking-wide text-white capitalize bg-black rounded-md hover:bg-gray-800  focus:outline-none focus:bg-gray-900  transition duration-300 transform active:scale-95 ease-in-out"
                                  onClick={() => quitarArticulo(index)}
                                >
                                  Eliminar
                                </button>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    {data.identificaciones.map((identificacion, index) => (
                      <div key={index} className="p-1">
                        <input
                          type="number"
                          value={identificacion}
                          onChange={(e) =>
                            actualizarIdentificacion(index, e.target.value)
                          }
                          className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:text-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                          placeholder="Identificacion"
                        />
                      </div>
                    ))}
                    {err ? (
                      <div className="text-red-600 font-bold text-sm">
                        La identificacion no puede estar vacia
                      </div>
                    ) : (
                      <></>
                    )}
                    <div className="place-content-center flex p-1">
                      <button
                        type="button"
                        className="ml-4 flex items-center px-5 py-2.5 font-medium tracking-wide text-white capitalize bg-black rounded-md hover:bg-gray-800  focus:outline-none focus:bg-gray-900  transition duration-300 transform active:scale-95 ease-in-out"
                        onClick={agregarIdentificacion}
                      >
                        {data.identificaciones &&
                        data.identificaciones.length !== 0 ? (
                          <>Agregar Otra Identificación</>
                        ) : (
                          <>Agregar Identificación</>
                        )}
                      </button>
                    </div>
                    <Field
                      as="textarea"
                      name="descripcion_falta"
                      className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white focus:text-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                      placeholder="Descripción de la Falta"
                    />
                    <div className="text-red-600 font-bold text-sm">
                      <ErrorMessage name="descripcion_falta" />
                    </div>
                    <Field
                      as="select"
                      id="tipo_falta"
                      name="tipo_falta"
                      value={formik.values.tipo_falta}
                      className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white focus:text-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                    >
                      <option value="">Seleccione el Tipo de Falta</option>
                      <option value="Academica">Academica</option>
                      <option value="Disciplinaria">Disciplinaria</option>
                    </Field>
                    <div className="text-red-600 font-bold text-sm">
                      <ErrorMessage name="tipo_falta" />
                    </div>
                    <small className="inline-block mt-4 text-center">
                      Adjunte Evidencias:
                    </small>
                    <input
                      type="file"
                      name="evidencia"
                      onChange={(event) => {
                        formik.setFieldValue(
                          "evidencia",
                          event.currentTarget.files[0]
                        );
                      }}
                      placeholder="Adjunte Evidencias"
                      className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white focus:text-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                    />
                    <div className="text-red-600 font-bold text-sm">
                      <ErrorMessage name="evidencia" />
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
                        <span className="pl-2 mx-1">Enviar Solicitud</span>
                      </button>
                    </div>
                    <div className="flex-initial">
                      <Link
                        className="flex items-center px-5 py-2.5 font-medium tracking-wide text-black capitalize rounded-md  hover:bg-red-200 hover:fill-current hover:text-red-600  focus:outline-none  transition duration-300 transform active:scale-95 ease-in-out"
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
    </div>
  );
};
