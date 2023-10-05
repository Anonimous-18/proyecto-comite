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
      instructor_fk: "",
      tipo_falta: "",
      descripcion_solicitud: "",
      carpeta_anexos: "",
      acta: null,
      recomendacion: null,
      anexar_plan_mejoramiento: null,
      resultado_plan_mejoramiento: null,
    };
  };

  return (
    <main className=" h-full w-full flex flex-col items-center">
      <Semaforo />
      <div className="h-full w-full flex flex-col items-center ">
        <form onSubmit={(e) => handleSubmit(e)} className="border border-black  p-2 rounded-xl">
          <h2 className="font-bold">Crear Solicitud Comite</h2>
          <div>
            <label className="h-full w-full flex flex-col">Capitulo del Reglamento</label>
            <div>
              <select
                onChange={(e) => onChange(e)}
                id="capitulo"
                name="capitulo"
                value={data.capitulo}
                required
                className="bg-blue-400 h-100 w-auto flex flex-col rounded-xl border-2"
              >
                {result.map((capitulo) => (
                  <option key={capitulo.cap_id} value={`${capitulo.cap_id}`} className="h-100 p-14">
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
                className="bg-rose-200"
              >
                <option value="">Seleccione un Articulo</option>
                {getArticulos(result).contenido.map((articulo, index) => (
                  <option key={index} value={`${articulo.art_id}`}>
                    Articulo {articulo.art_id} {articulo.art_titulo}
                  </option>
                ))}
              </select>
              <button
                type="button"
                className=" place-items-center flex flex-col items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-blue-600 to-blue-800 group-hover:from-blue-600 group-hover:to-blue-800 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-sky-500 dark:focus:ring-blue-800"
                onClick={agregarArticulo}
              >
                Agregar Articulo
              </button>
            </div>
          </div>
          {articulosSeleccionados.length > 0 && (
            <div>
              <h4>Articulos Seleccionados:</h4>
              <ul>
                {articulosSeleccionados.map((articuloId, index) => (
                  <li key={index}>
                    {`Articulo ${articuloId}`}
                    <button
                      type="button"
                      className="bg-purple-900"
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
              <div key={index}>
                <input
                  type="text"
                  value={identificacion}
                  onChange={(e) =>
                    actualizarIdentificacion(index, e.target.value)
                  }
                  className="border border-black"
                  placeholder="Identificacion"
                />
              </div>
            ))}
            <button
              type="button"
              className=" place-items-center flex flex-col items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-blue-600 to-blue-800 group-hover:from-blue-600 group-hover:to-blue-800 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-sky-500 dark:focus:ring-blue-800"
              onClick={agregarIdentificacion}
            >
              {data.identificaciones.length !== 0 ? (
                <>Agregar Otra Identificación</>
              ) : (
                <>Agregar Identificación</>
              )}
            </button>
          </div>
          <div>
            <p>Descripcion de la Falta:</p>
            <textarea
              name="descripcion_falta"
              required
              onChange={(e) => onChange(e)}
              className="border border-black"
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
              className="bg-rose-200"
            >
              <option value="">Seleccione el Tipo de Falta</option>
              <option value="Academica">Academica</option>
              <option value="Disciplinaria">Disciplinaria</option>
            </select>
          </div>
          <div>
            <p>Carpeta Anexos:</p>
            <input
              type="text"
              name="anexos"
              placeholder="Link de la carpeta"
              onChange={(e) => onChange(e)}
              className="border border-black"
            />
          </div>
          <Link
            to={`/home`}
            className=" place-items-center flex flex-col items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-blue-600 to-blue-800 group-hover:from-blue-600 group-hover:to-blue-800 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-sky-500 dark:focus:ring-blue-800"
          >
            Cancelar
          </Link>
          <button className=" place-items-center flex flex-col items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-blue-600 to-blue-800 group-hover:from-blue-600 group-hover:to-blue-800 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-sky-500 dark:focus:ring-blue-800">
            Crear Solicitud
          </button>
        </form>
      </div>
    </main>
  );
};
