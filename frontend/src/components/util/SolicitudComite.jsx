import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import * as Yup from "yup";
import { ErrorMessage, Field, Formik } from "formik";

import hooks from "../../hooks/useFunction";
import { Semaforo } from "./semaforo";
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
    console.log(err);
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

      const body = {
        aprendices_implicados: idenRequest,
        articulos: artRequest,
        instructor_fk: tokenDecoded.user.id,
        tipo_falta: values.tipo_falta,
        descripcion_solicitud: values.descripcion_falta,
        evidencia: values.evidencia,
      };

      if (body) {
        try {
          console.log(body);
          await contextApi.createComite(body);
          // navigate(`/homeinstructor`);
        } catch (error) {
          console.log(error);
        }
      }
    }
  };

  return (
    <main className="h-full w-full flex flex-col items-center gap-5 ">
      <Semaforo />
      <div className="h-full w-full flex flex-col items-center mb-3 ">
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
            <form
              onSubmit={formik.handleSubmit}
              className="border border-black p-2 rounded-xl text-sm font-medium text-gray-900"
            >
              <h2 className="mb-4 text-xl font-bold text-blue-800 flex flex-col items-center">
                Crear Solicitud Comite
              </h2>
              <div>
                <label className="h-full w-full flex flex-col">
                  Capitulo del Reglamento
                </label>
                <div>
                  <Field
                    as="select"
                    id="capitulo"
                    name="capitulo"
                    value={formik.values.capitulo}
                    className="bg-blue-400 h-100 w-full flex flex-col rounded-xl border-2"
                  >
                    {result.map((capitulo) => (
                      <option
                        key={capitulo.cap_id}
                        value={`${capitulo.cap_id}`}
                        className="h-100 p-14"
                      >
                        Capitulo {capitulo.cap_id} {capitulo.cap_titulo}
                      </option>
                    ))}
                  </Field>
                  <div className="text-red-600 font-bold">
                    <ErrorMessage name="capitulo" />
                  </div>
                </div>
              </div>
              <div>
                <label className="">Articulo del Reglamento</label>
                <div>
                  <Field
                    as="select"
                    id="articulo"
                    name="articulo"
                    value={formik.values.articulo}
                    className="bg-blue-400 h-100 w-full flex flex-col rounded-xl border-2"
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
                  <div className="text-red-600 font-bold">
                    <ErrorMessage name="articulo" />
                  </div>
                  <div className="place-content-center flex p-1">
                    <button
                      type="button"
                      className=" right-0 ml-3 relative inline-flex items-center rounded-md border border-transparent bg-blue-700 px-10 py-2 text-xs font-bold text-white shadow-xl transition duration-300 ease-in-out hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2"
                      onClick={() => agregarArticulo(formik.values)}
                    >
                      Agregar Articulo
                    </button>
                  </div>
                </div>
              </div>
              {articulosSeleccionados.length > 0 && (
                <div>
                  <h4>Articulos Seleccionados:</h4>
                  <ul>
                    {articulosSeleccionados.map((articuloId, index) => (
                      <li key={index} className="place-content-center flex p-1">
                        • {`Articulo ${articuloId}`}
                        <button
                          type="button"
                          className="right-0 ml-3 relative inline-flex items-center rounded-md border border-transparent bg-blue-700 px-10 py-2 text-xs font-bold text-white shadow-xl transition duration-300 ease-in-out hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2"
                          onClick={() => quitarArticulo(index)}
                        >
                          Eliminar
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div>
                <h4>Aprendices Implicados:</h4>
                {data.identificaciones.map((identificacion, index) => (
                  <div key={index} className="p-1">
                    <input
                      type="number"
                      value={identificacion}
                      onChange={(e) =>
                        actualizarIdentificacion(index, e.target.value)
                      }
                      className={`border border-black  p-2 rounded-xl`}
                      placeholder="Identificacion"
                    />
                  </div>
                ))}
                {err ? (
                  <div className="text-red-600 font-bold">
                    La identificacion no puede estar vacia
                  </div>
                ) : (
                  <></>
                )}
                <div className="place-content-center flex p-1">
                  <button
                    type="button"
                    className=" right-0 ml-3 relative inline-flex items-center rounded-md border border-transparent bg-blue-700 px-10 py-2 text-xs font-bold text-white shadow-xl transition duration-300 ease-in-out hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2"
                    onClick={agregarIdentificacion}
                  >
                    {data.identificaciones.length !== 0 ? (
                      <>Agregar Otra Identificación</>
                    ) : (
                      <>Agregar Identificación</>
                    )}
                  </button>
                </div>
              </div>
              <div>
                <p>Descripcion de la Falta:</p>
                <Field
                  as="textarea"
                  name="descripcion_falta"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                />
                <div className="text-red-600 font-bold">
                  <ErrorMessage name="descripcion_falta" />
                </div>
              </div>
              <div>
                <label className="">Tipo de Falta</label>
                <Field
                  as="select"
                  id="tipo_falta"
                  name="tipo_falta"
                  value={formik.values.tipo_falta}
                  className="bg-blue-400  h-100 w-full flex flex-col rounded-xl border-2"
                >
                  <option value="">Seleccione el Tipo de Falta</option>
                  <option value="Academica">Academica</option>
                  <option value="Disciplinaria">Disciplinaria</option>
                </Field>
                <div className="text-red-600 font-bold">
                  <ErrorMessage name="tipo_falta" />
                </div>
              </div>
              <div className="w-full">
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  Adjuntar evidencias
                </label>
                <input
                  type="file"
                  name="evidencia"
                  onChange={(event) => {
                    formik.setFieldValue("evidencia", event.currentTarget.files[0]);
                  }}
                  placeholder="Link de la carpeta"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                />
                <div className="text-red-600 font-bold">
                  <ErrorMessage name="evidencia" />
                </div>
              </div>
              <div className="p-2 sm:col-span-2 flex flex-row place-content-center">
                <div>
                  <Link
                    to={`/home`}
                    className="right-0 ml-3 relative inline-flex items-center rounded-md border border-transparent bg-blue-700 px-10 py-2 text-xs font-bold text-white shadow-xl transition duration-300 ease-in-out hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2"
                  >
                    Cancelar
                  </Link>
                </div>
                <div>
                  <button
                    // disabled={formik.isSubmitting || !formik.isValid}
                    type="submit"
                    className="right-0 ml-3 relative inline-flex items-center rounded-md border border-transparent bg-blue-700 px-10 py-2 text-xs font-bold text-white shadow-xl transition duration-300 ease-in-out hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2"
                  >
                    Crear Solicitud
                  </button>
                </div>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </main>
  );
};
