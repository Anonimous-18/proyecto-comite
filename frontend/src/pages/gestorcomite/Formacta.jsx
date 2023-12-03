import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

import { useContextApp } from "../../Context/ContextApp";

export const FormActa = () => {
  const contextApp = useContextApp();
  const [implicados, setImplicados] = useState([]);
  const [datosBd, setDatosBd] = useState([]);
  const [divs, setDivs] = useState([null]);
  const [casoOption, setCasoOption] = useState(false);
  const [ocultar, setOcultar] = useState(false);
  const [cont, setCont] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    const datosFormulario = async (id) => {
      const prueba = await contextApp.actaCasos({ idComite: id });
      if (prueba && prueba.length !== 0) {
        setImplicados(prueba.data.implicados);
        setDatosBd(prueba.data.datosBd);
      }
    };
    datosFormulario(id);
  }, [contextApp, id]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  // console.log(errors);
  const handleClick = () => {
    setDivs([...divs, divs.length]);
    console.log(divs);
  };
  // Obtener la hora actual
  const ahora = new Date();

  // Formatear la hora actual como HH:MM (formato requerido para input tipo time)
  const horaActual =
    ahora.getHours().toString().padStart(2, "0") +
    ":" +
    ahora.getMinutes().toString().padStart(2, "0");

  const handleDelete = (index) => {
    const newDivs = divs.map((div) => (div === index ? null : div));
    setDivs(newDivs);
    console.log(newDivs);
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
  const handleCont = () => {
    setCont(cont + 1);
  };

  const onSubmit = handleSubmit((data) => {
    //eliminar datos que no se encuentran en el array de divs
    Object.keys(data).map((key) => {
      const guion = key.slice(-2, -1);
      if (guion === "_") {
        const numeroDivString = key.slice(-1);
        const numeroDiv = parseInt(numeroDivString);
        !divs.includes(numeroDiv) ? delete data[`${key}`] : null;
      }
    });
    let desrrolloReunion = [];

    let i = 0;
    while (data) {
      if (divs[i]) {
        let reunion = {};
        Object.keys(data).map((key) => {
          const guion = key.slice(-2, -1);
          if (guion === "_") {
            const numeroDivString = key.slice(-1);
            const numeroDiv = parseInt(numeroDivString);
            if (numeroDiv === i) {
              reunion[`${key}`] = data[`${key}`];
              delete data[`${key}`];
            }
          }
        });
        desrrolloReunion.push(reunion);
      } else if (i === divs.length) {
        break;
      }
      i++;
    }
    data.desrrolloReunion = desrrolloReunion;

    if (cont < 6) {
      contextApp.crearActa(data);
      contextApp
        .updateComite(
          {
            estado: "ejecucion",
          },
          id
        )
        .then((res) => {
          console.log(res);
          navigate('home-gestor')
        })
        .catch((err) => {
          console.log(err);
          navigate("home-gestor");
        });
    }
  });

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col xl:flex-row min-h-screen bg-gray-100 "
    >
      <div className={ocultar ? " hidden" : "m-auto "}>
        <button
          onClick={handleOcultar}
          className="inline-flex items-center rounded-md border border-transparent bg-blue-800 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-900 focus:ring-2 focus:outline-none transition duration-300 transform active:scale-95 ease-in-out mt-3"
        >
          Ocultar formulario
        </button>
        <div className="flex-col justify-center ">
          <div className="mt-5 bg-white sm:rounded-lg shadow hover:overflow-auto overflow-hidden transition-transform duration-300 ease-in-out max-h-[700px]">
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
                {...register("actaNumero", {
                  required: {
                    value: true,
                    message: "Este campo es requerido",
                  },
                })}
                placeholder="Numero acta"
                className="text-black placeholder-gray-600 min-w-[100px] max-w-[300px] px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent sm:rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400 m-auto w-3/12 "
                defaultValue={"1"}
              />
              <br />
              {errors.actaNumero && (
                <span className="text-red-500 text-sm">
                  {errors.actaNumero.message}
                </span>
              )}

              <div className="flex gap-1 max-w-xl">
                <div className="flex-grow w-3/4">
                  <input
                    {...register("ciudadFecha", {
                      required: {
                        value: true,
                        message: "Este campo es requerido",
                      },
                    })}
                    placeholder="Ciudad y fecha"
                    className="text-black placeholder-gray-600 min-w-[100px] max-w-[300px] w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent sm:rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                    defaultValue={"Manizales, 24 de noviembre de 2023"}
                  />
                  <br />
                  {errors.ciudadFecha && (
                    <span className="text-red-500 text-sm">
                      {errors.ciudadFecha.message}
                    </span>
                  )}
                </div>
                <div className="flex-grow">
                  <input
                    {...register("HoraUno", {
                      required: {
                        value: true,
                        message: "Este campo es requerido",
                      },
                    })}
                    placeholder="Hora"
                    type="time"
                    className="text-black placeholder-gray-600 min-w-[100px] max-w-[300px] w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent sm:rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                    defaultValue={horaActual}
                  />
                  <br />
                  {errors.HoraUno && (
                    <span className="text-red-500 text-sm">
                      {errors.HoraUno.message}
                    </span>
                  )}
                </div>
                <div className="flex-grow">
                  <input
                    {...register("HoraDos", {
                      required: {
                        value: true,
                        message: "Este campo es requerido",
                      },
                    })}
                    placeholder="Hora"
                    type="time"
                    className="text-black placeholder-gray-600 min-w-[100px] max-w-[300px] w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent sm:rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                    defaultValue={horaActual}
                  />
                  <br />
                  {errors.HoraDos && (
                    <span className="text-red-500 text-sm">
                      {errors.HoraDos.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex gap-1">
                <div className="flex-grow ">
                  <input
                    {...register("lugarEnlace", {
                      required: {
                        value: true,
                        message: "Este campo es requerido",
                      },
                    })}
                    placeholder="Lugar y/o enlace"
                    className="text-black placeholder-gray-600 min-w-[100px] max-w-[300px] w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent sm:rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                    defaultValue={"https://meet..."}
                  />
                  <br />
                  {errors.lugarEnlace && (
                    <span className="text-red-500 text-sm">
                      {errors.lugarEnlace.message}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="flex mt-4">
              <div className="flex-1 py-5 pl-5 overflow-hidden">
                <h2 className="inline text-2xl font-semibold leading-none ml-4">
                  Agenda o puntos para desarrollar
                </h2>
              </div>
              <div className="flex-none pt-2.5 pr-2.5 pl-1"></div>
            </div>

            <div className="px-5 pb-5 flex flex-col justify-center sm:flex-row">
              <div>
                <label
                  htmlFor="programaNom"
                  className="inline text-[18px] font-semibold leading-none mr-1"
                >
                  Programa:
                </label>
                <br />
                <input
                  {...register("programaNom", {
                    required: {
                      value: true,
                      message: "Este campo es requerido",
                    },
                  })}
                  placeholder="Programa"
                  className="text-black placeholder-gray-600 min-w-[100px] max-w-[300px] px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent sm:rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400 m-auto mr-1"
                  defaultValue={datosBd.programaNom}
                />
                <br />
                {errors.programaNom && (
                  <span className="text-red-500 text-sm">
                    {errors.programaNom.message}
                  </span>
                )}
              </div>

              <div>
                <label
                  htmlFor="ficha"
                  className="inline text-[18px] font-semibold leading-none mr-1"
                >
                  Ficha:
                </label>
                <br />
                <input
                  {...register("ficha", {
                    required: {
                      value: true,
                      message: "Este campo es requerido",
                    },
                  })}
                  placeholder="Ficha"
                  className="text-black placeholder-gray-600 min-w-[100px] max-w-[300px] px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent sm:rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400 m-auto"
                  defaultValue={datosBd.ficha}
                />
                <br />
                {errors.ficha && (
                  <span className="text-red-500 text-sm">
                    {errors.ficha.message}
                  </span>
                )}
              </div>
            </div>

            <div className="px-5 pb-5 flex flex-col justify-center sm:flex-row">
              <div>
                <label
                  htmlFor="gestorFicha"
                  className="inline text-[18px] font-semibold leading-none mr-1"
                >
                  Gestor comite:
                </label>
                <br />
                <input
                  {...register("gestorFicha", {
                    required: {
                      value: true,
                      message: "Este campo es requerido",
                    },
                  })}
                  placeholder="Gestor ficha"
                  className="text-black placeholder-gray-600 min-w-[100px] max-w-[300px] px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent sm:rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400 m-auto mr-1"
                  defaultValue={datosBd.gestorFicha}
                />
                <br />
                {errors.gestorFicha && (
                  <span className="text-red-500 text-sm">
                    {errors.gestorFicha.message}
                  </span>
                )}
              </div>

              <div>
                <label
                  htmlFor="InstructoresCita"
                  className="inline text-[18px] font-semibold leading-none mr-1"
                >
                  {"Instructor(es) que Cita(n)"}
                </label>
                <br />
                <input
                  {...register("InstructoresCita", {
                    required: {
                      value: true,
                      message: "Este campo es requerido",
                    },
                  })}
                  placeholder="Instructor(es) que Cita(n)"
                  className="text-black placeholder-gray-600 min-w-[100px] max-w-[300px] px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent sm:rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400 m-auto"
                  defaultValue={datosBd.InstructoresCita}
                />
                <br />
                {errors.InstructoresCita && (
                  <span className="text-red-500 text-sm">
                    {errors.InstructoresCita.message}
                  </span>
                )}
              </div>
            </div>

            <div className="flex mt-4">
              <div className="flex-1 py-5 pl-5 overflow-hidden">
                <h2 className="inline text-2xl font-semibold leading-none ml-4">
                  Casos
                </h2>
              </div>
              <div className="flex-none pt-2.5 pr-2.5 pl-1"></div>
            </div>
            {implicados.map((implicado, index) => {
              return (
                <div key={index} className="flex ">
                  <div className="flex-1 py-5 pl-5 overflow-hidden">
                    <div>
                      <div>
                        <input
                          {...register(`caso${implicado.index}`, {
                            required: {
                              value: true,
                              message: "Este campo es requerido",
                            },
                          })}
                          className="text-black placeholder-gray-600 min-w-[100px] max-w-[300px] px-4 py-2.5 text-base transition duration-500 ease-in-out transform border-transparent sm:rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400 m-auto ml-1 flex-grow"
                          defaultValue={`Caso ${implicado.index}`}
                        />
                        <br />
                        {errors[`caso${implicado.index}`] && (
                          <span className="text-red-500 text-sm">
                            {errors[`caso${implicado.index}`].message}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row w-full">
                      <div className="flex-grow w-5/4 ">
                        <label
                          htmlFor={`nombre${implicado.index}`}
                          className="inline text-[18px] font-semibold leading-none "
                        >
                          Nombre:
                        </label>
                        <br />
                        <input
                          {...register(`nombre${implicado.index}`, {
                            required: {
                              value: true,
                              message: "Este campo es requerido",
                            },
                          })}
                          className="text-black placeholder-gray-600 min-w-[100px] max-w-[300px] px-4 py-2.5 text-base transition duration-500 ease-in-out transform border-transparent sm:rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400 m-auto ml-1 "
                          defaultValue={implicado.nombre}
                        />
                        <br />
                        {errors[`nombre${implicado.index}`] && (
                          <span className="text-red-500 text-sm">
                            {errors[`nombre${implicado.index}`].message}
                          </span>
                        )}
                      </div>
                      <div className="flex-grow w-2/5">
                        <label
                          htmlFor={`contrato${implicado.index}`}
                          className="inline text-[18px] font-semibold leading-none "
                        >
                          Contranto:
                        </label>
                        <br />
                        <input
                          {...register(`contrato${implicado.index}`, {
                            required: {
                              value: true,
                              message: "Este campo es requerido",
                            },
                          })}
                          className="text-black placeholder-gray-600 min-w-[100px] max-w-[300px] px-4 py-2.5 text-base transition duration-500 ease-in-out transform border-transparent sm:rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400 m-auto ml-1 w-[89px] "
                          defaultValue={implicado.contrato}
                        />
                        <br />
                        {errors[`contrato${implicado.index}`] && (
                          <span className="text-red-500 text-sm">
                            {errors[`contrato${implicado.index}`].message}
                          </span>
                        )}
                      </div>
                    </div>

                    <br />
                    <label
                      htmlFor={`fcComite${implicado.index}`}
                      className="inline text-[18px] font-semibold leading-none "
                    >
                      {" "}
                      Fecha del ultimo comite:{" "}
                    </label>
                    <br />
                    <input
                      {...register(`fcComite${implicado.index}`, {
                        required: {
                          value: true,
                          message: "Este campo es requerido",
                        },
                      })}
                      type="text"
                      className="text-black placeholder-gray-600 min-w-[100px] max-w-[300px] w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent sm:rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                      defaultValue={implicado.fcComite}
                    />
                    <br />
                    {errors[`fcComite${implicado.index}`] && (
                      <span className="text-red-500 text-sm">
                        {errors[`fcComite${implicado.index}`].message}
                      </span>
                    )}
                    <div>
                      <label
                        htmlFor={`descripccion${implicado.index}`}
                        className="inline text-[18px] font-semibold leading-none "
                      >
                        Descripccion falta:
                      </label>
                      <textarea
                        name={`descripccion${implicado.index}`}
                        id={`descripccion${implicado.index}`}
                        rows="4"
                        {...register(`descripccion${implicado.index}`, {
                          required: {
                            value: true,
                            message: "Este campo es requerido",
                          },
                        })}
                        className="text-black placeholder-gray-600 px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent sm:rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400 w-[90%]"
                        placeholder="Opinion o descripcion de caso"
                        defaultValue={implicado.descripcion}
                      ></textarea>
                      <br />
                      {errors[`descripccion${implicado.index}`] && (
                        <span className="text-red-500 text-sm">
                          {errors[`descripccion${implicado.index}`].message}
                        </span>
                      )}
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
            <div className="flex flex-col justify-center">
              <textarea
                {...register(`objtivoRenion`, {
                  required: {
                    value: true,
                    message: "Este campo es requerido",
                  },
                })}
                name="objtivoRenion"
                id="objtivoRenion"
                rows="2"
                className="text-black placeholder-gray-600 min-w-[100px]  px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent sm:rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400 w-[90%] mx-auto"
                defaultValue={
                  "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500"
                }
              ></textarea>
              {errors.objtivoRenion && (
                <span className="text-red-500 text-sm ml-9">
                  {errors.objtivoRenion.message}
                </span>
              )}
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
          className={
            !ocultar
              ? " hidden"
              : "inline-flex items-center rounded-md border border-transparent bg-blue-800 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-900 focus:ring-2 focus:outline-none transition duration-300 transform active:scale-95 ease-in-out"
          }
        >
          Mostrar formulario
        </button>
        <div>
          <div className="mt-2 bg-white sm:rounded-lg shadow hover:overflow-auto overflow-hidden transition-transform duration-300 ease-in-out max-h-[700px]">
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
                  className="inline-flex items-center rounded-md border border-transparent bg-blue-800 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-900 focus:ring-2 focus:outline-none transition duration-300 transform active:scale-95 ease-in-out"
                >
                  Agregar opinion
                </button>
                {divs.map(
                  (div) =>
                    div && (
                      <div key={div} className="flex flex-col ">
                        <hr className="mt-4" />
                        <div className="flex flex-col sm:flex-row gap-2 m-5">
                          <select
                            className="p-3 w-60 sm:w-96"
                            onChange={handleSelect}
                            {...register(`cargoCaso_${div}`, {
                              required: {
                                value: true,
                                message: "Este campo es requerido",
                              },
                            })}
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
                            onClick={() => handleDelete(div)}
                            className="inline-flex items-center rounded-md border border-transparent bg-blue-800 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-900 focus:ring-2 focus:outline-none transition duration-300 transform active:scale-95 ease-in-out text-center max-w-[120px]"
                          >
                            <span className="w-full text-center">Eliminar</span>
                          </button>
                        </div>
                        {errors[`cargoCaso_${div}`] && (
                          <span className="text-red-500 text-sm">
                            {errors[`cargoCaso_${div}`].message}
                          </span>
                        )}
                        <input
                          {...register(`nombre_${div}`, {
                            required: {
                              value: true,
                              message: "Este campo es requerido",
                            },
                          })}
                          type="text"
                          className="text-black placeholder-gray-600 min-w-[100px] max-w-[300px] w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent sm:rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                          placeholder={
                            casoOption ? "Nombre aprendiz" : "Nombre"
                          }
                        />
                        {errors[`nombre_${div}`] && (
                          <span className="text-red-500 text-sm">
                            {errors[`nombre_${div}`].message}
                          </span>
                        )}
                        <textarea
                          name={`descripccionCaso_${div}`}
                          id={`descripccionCaso_${div}`}
                          cols="30"
                          rows="4"
                          {...register(`descripccionCaso_${div}`, {
                            required: {
                              value: true,
                              message: "Este campo es requerido",
                            },
                          })}
                          className="text-black placeholder-gray-600 min-w-[100px] w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent sm:rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                          placeholder="Opinion o descripcion de caso"
                        ></textarea>
                        {errors[`descripccionCaso_${div}`] && (
                          <span className="text-red-500 text-sm">
                            {errors[`descripccionCaso_${div}`].message}
                          </span>
                        )}
                      </div>
                    )
                )}
              </div>
              <hr className="mt-4" />
              <div className="flex flex-row-reverse p-3">
                <div className="flex-initial pl-3">
                  <button
                    type="submit"
                    onClick={handleCont}
                    className="inline-flex items-center rounded-md border border-transparent bg-blue-800 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-900 focus:ring-2 focus:outline-none transition duration-300 transform active:scale-95 ease-in-out"
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
