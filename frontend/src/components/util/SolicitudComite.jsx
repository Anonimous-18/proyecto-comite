import { Semaforo } from "./semaforo";
import { useContextApp } from "../../Context/ContextApp";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export const SolicitudComite = () => {
  const [reglamento, setReglamento] = useState([]);
  const [articulosSeleccionados, setArticulosSeleccionados] = useState([]);

  const [data, setData] = useState({
    capitulo: "1",
    articulo: "",
    tipo_falta: "",
    descripcion_falta: "",
    anexos: "",
    identificaciones: [],
  });

  const { getReglamento, orderReglamento, protectedRoutes, validateToken } =
    useContextApp();
  const navigate = useNavigate();
  const tokenExist = protectedRoutes();

  useEffect(() => {
    /**-------------------------------------------------------
     * |  Validamos el token de sesión
     -------------------------------------------------------*/
    if (!tokenExist) {
      navigate(`/`);
    } else if (validateToken()) {
      navigate(`/`);
    } else {
      const Reglamento = async () => {
        const token = JSON.parse(localStorage.getItem("newToken"));
        const res = await getReglamento(token.token);

        if (res !== null || res !== undefined) {
          setReglamento(res);
        }
      };

      Reglamento();
    }
  }, [getReglamento, validateToken, navigate, tokenExist, data.capitulo]);

  const agregarArticulo = () => {
    /**-------------------------------------------------------
     * |  Agregamos un nuevo articulo al estado
     -------------------------------------------------------*/
    if (data.articulo !== "") {
      setArticulosSeleccionados([...articulosSeleccionados, data.articulo]);
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

  const onChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const getArticulos = (reglamentoCompleto) => {
    /**-------------------------------------------------------------
     * |  Obtenemos los articulos para un capitulo en especifico(id)
     -------------------------------------------------------------*/
    return reglamentoCompleto.find(
      (item) => item.cap_id === parseInt(data.capitulo)
    );
  };

  if (reglamento === null || reglamento === undefined) {
    return <div>Loading...</div>;
  } else if (reglamento.length === 0) {
    return <div>Loading...</div>;
  }
  const result = orderReglamento(reglamento);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    /**-------------------------------------------------------
     * |  Eliminamos los elementos repetidos en el array
     -------------------------------------------------------*/
    const artRequest = [...new Set(articulosSeleccionados)];
    let capitulos = [];
    artRequest.map((e) => capitulos.push(getCapitulos(e).cap_id));

    const capRequest = [...new Set(capitulos)];
    const identificaciones = [...new Set(data.identificaciones)];

    /**-----------------------------------
     * |  Eliminamos los valores vacios
     -----------------------------------*/
    const idenRequest = identificaciones.filter((valor) => valor !== "");

    console.log("ARTICULOS ", artRequest);
    console.log("CAPITULOS ", capRequest);
    console.log("IDENTIFICACIONES ", idenRequest);
    console.log("DESCRIPCIONFALTA ", data.descripcion_falta);
    console.log("TIPOFALTA ", data.tipo_falta);
    console.log("ANEXOS ", data.anexos);

    const body = {
      aprendices_implicados: idenRequest,
      articulos: artRequest,
      instructor_fk: 191,
      tipo_falta: data.tipo_falta,
      descripcion_solicitud: data.descripcion_falta,
      carpeta_anexos: data.anexos,
    };
  };

  return (
    <main className=" h-full w-full flex flex-col items-center">
      <Semaforo />
      <div className="h-full w-full flex flex-col items-center ">
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="border border-black  p-2 rounded-xl text-sm font-medium text-gray-900"
        >
          <h2 className="mb-4 text-xl font-bold text-blue-800 flex flex-col items-center">Crear Solicitud Comite</h2>
          <div>
            <label className="h-full w-full flex flex-col">
              Capitulo del Reglamento
            </label>
            <div>
              <select
                onChange={(e) => onChange(e)}
                id="capitulo"
                name="capitulo"
                value={data.capitulo}
                required
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
              </select>
            </div>
          </div>
          <div>
            <label className="">Articulo del Reglamento</label>
            <div>
              <select
                onChange={(e) => onChange(e)}
                id="articulo"
                name="articulo"
                value={data.articulo}
                className="bg-blue-400 h-100 w-full flex flex-col rounded-xl border-2"
              >
                <option value="">Seleccione un Articulo</option>
                {getArticulos(result).contenido.map((articulo, index) => (
                  <option key={index} value={`${articulo.art_id}`}>
                    Articulo {articulo.art_id} {articulo.art_titulo}
                  </option>
                ))}
              </select>
              <div className="place-content-center flex p-1">
                <button
                  type="button"
                  className=" right-0 ml-3 relative inline-flex items-center rounded-md border border-transparent bg-blue-700 px-10 py-2 text-xs font-bold text-white shadow-xl transition duration-300 ease-in-out hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2"
                  onClick={agregarArticulo}
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
                  type="text"
                  value={identificacion}
                  onChange={(e) =>
                    actualizarIdentificacion(index, e.target.value)
                  }
                  className="border border-black  p-2 rounded-xl"
                  placeholder="Identificacion"
                />
              </div>
            ))}
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
            <textarea
              name="descripcion_falta"
              required
              onChange={(e) => onChange(e)}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
          <div>
            <label className="">Tipo de Falta</label>
            <select
              onChange={(e) => onChange(e)}
              id="tipo_falta"
              name="tipo_falta"
              value={data.tipo_falta}
              required
              className="bg-blue-400  h-100 w-full flex flex-col rounded-xl border-2"
            >
              <option value="">Seleccione el Tipo de Falta</option>
              <option value="Academica">Academica</option>
              <option value="Disciplinaria">Disciplinaria</option>
            </select>
          </div>
          <div className="w-full">
            <label
              for="brand"
              className="block mb-2 text-sm font-medium text-gray-900 ">
              Adjuntar evidencias
            </label>
            <input
              type="file"
              name="brand"
              id="brand"
              placeholder="Link de la carpeta"
              onChange={(e) => onChange(e)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
            />
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
              <button className="right-0 ml-3 relative inline-flex items-center rounded-md border border-transparent bg-blue-700 px-10 py-2 text-xs font-bold text-white shadow-xl transition duration-300 ease-in-out hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2">
                Crear Solicitud
              </button>
            </div>


          </div>


        </form>
      </div>
    </main>
  );
};
