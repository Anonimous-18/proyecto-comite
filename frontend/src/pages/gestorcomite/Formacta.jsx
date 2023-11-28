import { useState } from "react";
import { useForm } from "react-hook-form";

export const FormActa = () => {
  const dataApi = {
    implicados: [
      {
        documento: 32,
        tipo_documento: "CC",
        index: 1,
        contrato: "no",
        nombre: "aprendiz Dos",
        fcComite: "Sin comites",
        descripcion: "No hay descripccion",
      },
      {
        documento: 33,
        tipo_documento: "CC",
        index: 2,
        contrato: "si",
        nombre: "aprendiz Tres",
        fcComite: "Sin comites",
        descripcion: "No hay descripccion",
      },
    ],
    datosBd: {
      programaNom: "ADSI",
      ficha: "250678453",
      gestorFicha: "Brayan Gomez Noguera",
      InstructoresCita: "Alejandro Toro",
    },
  };
  const implicados = dataApi.implicados;
  const datosBd = dataApi.datosBd;
  const { register, handleSubmit } = useForm();
  const textAreaStyle = {
    all: "unset",
    fontWeight: "bold",
  };
  const [divs, setDivs] = useState([]);
  const [casoOption, setCasoOption] = useState(false);
  const [ocultar, setOcultar] = useState(false);

  const handleClick = () => {
    setDivs([...divs, divs.length]);
  };

  const handleDelete = (index) => {
    setDivs(divs.filter((_, i) => i !== index));
  };
  const handleSelect = (e) => {
    if (e.target.value === "CASO") {
      setCasoOption(true);
    } else {
      setCasoOption(false);
    }
  };
  const handleOcultar = () => {
    setOcultar(!ocultar);
  };

  console.log(implicados);
  return (
    <form
      onSubmit={handleSubmit((datos) => {
        console.log(datos);
      })}
      className="flex flex-col xl:flex-row min-h-screen bg-gray-100 "
    >
     
      <div
        className={ocultar ? " hidden" : "m-auto "}
      >
         <button
          onClick={handleOcultar}
          className="flex items-center px-5 py-2.5 font-medium tracking-wide text-white capitalize bg-black sm:rounded-md hover:bg-gray-800  focus:outline-none focus:bg-gray-900  transition duration-300 transform active:scale-95 ease-in-out m-3"
        >
          Ocultar formulario
        </button>
        <div className="flex-col justify-center overflow-y-auto max-h-[700px]">
          <div className="mt-5 bg-white sm:rounded-lg shadow ">
            <div className="px-5 pb-5 ">
              <div className="flex">
                <div className="flex-1 py-5 pl-5 overflow-hidden">
                  <h2 className="inline text-2xl font-semibold leading-none">
                    Comité de evaluación y seguimiento
                  </h2>
                </div>
                <div className="flex-none pt-2.5 pr-2.5 pl-1"></div>
              </div>
              <input
                {...register("actaNumero")}
                placeholder="Numero acta"
                className="text-black placeholder-gray-600 min-w-[100px] max-w-[300px] px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent sm:rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400 m-auto w-3/12 "
              />

              <div className="flex gap-1 max-w-xl">
                <div className="flex-grow w-3/4">
                  <input
                    {...register("ciudadFecha")}
                    placeholder="Ciudad y fecha"
                    className="text-black placeholder-gray-600 min-w-[100px] max-w-[300px] w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent sm:rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                  />
                </div>
                <div className="flex-grow">
                  <input
                    {...register("HoraUno")}
                    placeholder="Hora"
                    className="text-black placeholder-gray-600 min-w-[100px] max-w-[300px] w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent sm:rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                  />
                </div>
                <div className="flex-grow">
                  <input
                    {...register("HoraDos")}
                    placeholder="Hora"
                    className="text-black placeholder-gray-600 min-w-[100px] max-w-[300px] w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent sm:rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                  />
                </div>
              </div>
              <div className="flex gap-1">
                <div className="flex-grow ">
                  <input
                    {...register("lugarEnlace")}
                    placeholder="Lugar y/o enlace"
                    className="text-black placeholder-gray-600 min-w-[100px] max-w-[300px] w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent sm:rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400 max-w-[150px]"
                  />
                </div>
              </div>
            </div>

            <div className="flex">
              <div className="flex-1 py-5 pl-5 overflow-hidden">
                <h2 className="inline text-2xl font-semibold leading-none">
                  Agenda o puntos para desarrollar
                </h2>
              </div>
              <div className="flex-none pt-2.5 pr-2.5 pl-1"></div>
            </div>

            <div className="px-5 pb-5 flex flex-col justify-center sm:flex-row">
              <div>
                <label
                  htmlFor="programaNom"
                  className="inline text-lg font-semibold leading-none mr-1"
                >
                  Programa:
                </label>
                <br />
                <input
                  {...register("programaNom")}
                  placeholder="Programa"
                  className="text-black placeholder-gray-600 min-w-[100px] max-w-[300px] px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent sm:rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400 m-auto mr-1"
                  defaultValue={datosBd.programaNom}
                />
              </div>

              <div>
                <label
                  htmlFor="ficha"
                  className="inline text-lg font-semibold leading-none mr-1"
                >
                  Ficha:
                </label>
                <br />
                <input
                  {...register("ficha")}
                  placeholder="Ficha"
                  className="text-black placeholder-gray-600 min-w-[100px] max-w-[300px] px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent sm:rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400 m-auto"
                  defaultValue={datosBd.ficha}
                />
              </div>
            </div>

            {implicados.map((implicado, index) => {
              return (
                <div key={index} className="flex mt-1">
                  <div className="flex-1 py-5 pl-5 overflow-hidden">
                    <div className="flex flex-col justify-center sm:flex-row w-full">
                      <div>
                        <label
                          htmlFor={`caso${implicado.index}`}
                          className="inline text-lg font-semibold leading-none "
                        >
                          Caso:
                        </label>
                        <br />
                        <input
                          {...register(`caso${implicado.index}`)}
                          className="text-black placeholder-gray-600 min-w-[100px] max-w-[300px] px-4 py-2.5 text-base transition duration-500 ease-in-out transform border-transparent sm:rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400 m-auto ml-1 flex-grow"
                          defaultValue={`Caso ${implicado.index}`}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor={`nombre${implicado.index}`}
                          className="inline text-lg font-semibold leading-none "
                        >
                          Nombre:
                        </label>
                        <br />
                        <input
                          {...register(`nombre${implicado.index}`)}
                          className="text-black placeholder-gray-600 min-w-[100px] max-w-[300px] px-4 py-2.5 text-base transition duration-500 ease-in-out transform border-transparent sm:rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400 m-auto ml-1"
                          defaultValue={implicado.nombre}
                        />
                      </div>
                    </div>
                    <label
                      htmlFor={`contrato${implicado.index}`}
                      className="inline text-lg font-semibold leading-none "
                    >
                      Contrato De Aprendizaje:
                    </label>
                    <input
                      {...register(`contrato${implicado.index}`)}
                      className="text-black placeholder-gray-600 min-w-[100px] max-w-[300px] px-4 py-2.5 text-base transition duration-500 ease-in-out transform border-transparent sm:rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400 m-auto ml-1 w-[89px] mt-1 "
                      defaultValue={implicado.contrato}
                    />
                    <br />
                    <label
                      htmlFor={`fcComite${implicado.index}`}
                      className="inline text-lg font-semibold leading-none "
                    >
                      {" "}
                      Fecha del ultimo comite:{" "}
                    </label>
                    <br />
                    <input
                      {...register(`fcComite${implicado.index}`)}
                      type="text"
                      className="text-black placeholder-gray-600 min-w-[100px] max-w-[300px] w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent sm:rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                      defaultValue={implicado.fcComite}
                    />
                    <div>
                      <label
                        htmlFor={`descripccion${implicado.index}`}
                        className="inline text-lg font-semibold leading-none "
                      >
                        Descripccion falta:
                      </label>
                      <textarea
                        name={`descripccion${implicado.index}`}
                        id={`descripccion${implicado.index}`}
                        rows="4"
                        {...register(`descripccion${implicado.index}`)}
                        className="text-black placeholder-gray-600 px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent sm:rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400 w-[90%]"
                        placeholder="Opinion o descripcion de caso"
                        defaultValue={implicado.descripcion}
                      ></textarea>
                    </div>
                  </div>
                  <div className="flex-none pt-2.5 pr-2.5 pl-1"></div>
                </div>
              );
            })}
            <div className="flex">
              <div className="flex-1 py-5 pl-5 overflow-hidden">
                <p className="inline text-2xl font-semibold leading-none">
                  {"Objetivo(s) de la reunion"}
                </p>
              </div>
              <div className="flex-none pt-2.5 pr-2.5 pl-1"></div>
            </div>
            <div className="flex justify-center"></div>
            <div className="flex justify-center">
              <textarea
                {...register(`objtivoRenion`)}
                name="objtivoRenion"
                id="objtivoRenion"
                rows="2"
                className="text-black placeholder-gray-600 min-w-[100px]  px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent sm:rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400 w-[90%] mx-auto"
              ></textarea>
            </div>
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>

      <div className="m-auto relative ">
        <button
          onClick={handleOcultar}
          className={!ocultar ? " hidden" : "flex items-center px-5 py-2.5 font-medium tracking-wide text-white capitalize bg-black sm:rounded-md hover:bg-gray-800  focus:outline-none focus:bg-gray-900  transition duration-300 transform active:scale-95 ease-in-out"}
        >
          Mostrar formulario
        </button>
        <div className="overflow-y-auto max-h-[700px]">
          <div className="mt-2 bg-white sm:rounded-lg shadow ">
            <div className="px-5 pb-5 min-w-[320px]">
              <div className="flex">
                <div className="flex-1 py-5 pl-5 overflow-hidden">
                  <h2 className="inline text-2xl font-semibold leading-none">
                    Desarrollo de la reunion
                  </h2>
                </div>
                <div className="flex-none pt-2.5 pr-2.5 pl-1"></div>
              </div>
              <div>
                <button
                  onClick={handleClick}
                  className="flex items-center px-5 py-2.5 font-medium tracking-wide text-white capitalize bg-black sm:rounded-md hover:bg-gray-800  focus:outline-none focus:bg-gray-900  transition duration-300 transform active:scale-95 ease-in-out"
                >
                  Agregar opinion
                </button>
                {divs.map((div, index) => (
                  <div key={div} className="flex flex-col ">
                    <hr className="mt-4" />
                    <div className="flex flex-col sm:flex-row gap-2 m-5">
                      <select
                        className="p-3 w-60 sm:w-96"
                        onChange={handleSelect}
                      >
                        <option value="COORDINADORA ACADEMICA">
                          COORDINADORA ACADEMICA
                        </option>
                        <option value="REPRESENTANTE DE BIENESTAR AL APRENDIZ">
                          REPRESENTANTE DE BIENESTAR AL APRENDIZ
                        </option>
                        <option value="INSTRUCTOR">INSTRUCTOR</option>
                        <option value="APOYO ADMINISTRATIVO A COORDINACIÓN ACADÉMICA DEL CENTRO">
                          APOYO ADMINISTRATIVO A COORDINACIÓN ACADÉMICA DEL
                          CENTRO
                        </option>
                        <option value="GESTOR FICHA">GESTOR FICHA</option>
                        <option value="APRENDIZ">APRENDIZ</option>
                        <option value="CASO">CASO</option>
                      </select>
                      <button
                        onClick={() => handleDelete(index)}
                        className="flex items-center px-5 py-2.5 font-medium tracking-wide text-white capitalize bg-black sm:rounded-md hover:bg-gray-800  focus:outline-none focus:bg-gray-900  transition duration-300 transform active:scale-95 ease-in-out text-center max-w-[120px]"
                      >
                        <span className="w-full text-center">Eliminar</span>
                      </button>
                    </div>
                    <input
                      {...register(`nombre_${div}`)}
                      type="text"
                      className="text-black placeholder-gray-600 min-w-[100px] max-w-[300px] w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent sm:rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                      placeholder={casoOption ? "Nombre aprendiz" : "Nombre"}
                    />
                    <textarea
                      name={`descripccionCaso_${div}`}
                      id={`descripccionCaso_${div}`}
                      cols="30"
                      rows="4"
                      {...register(`descripccionCaso_${div}`)}
                      className="text-black placeholder-gray-600 min-w-[100px] w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent sm:rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                      placeholder="Opinion o descripcion de caso"
                    ></textarea>
                  </div>
                ))}
              </div>
              <hr className="mt-4" />
              <div className="flex flex-row-reverse p-3">
                <div className="flex-initial pl-3">
                  <button
                    type="submit"
                    className="flex items-center px-5 py-2.5 font-medium tracking-wide text-white capitalize bg-black sm:rounded-md hover:bg-gray-800  focus:outline-none focus:bg-gray-900  transition duration-300 transform active:scale-95 ease-in-out"
                  >
                    <span className="pl-2 mx-1 ">Crear acta</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
