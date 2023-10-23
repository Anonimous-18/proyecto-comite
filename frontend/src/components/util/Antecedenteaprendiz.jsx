import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import DefaultLayout from "../../Layout/DefaultLayout";
import { useContextApp } from "../../Context/ContextApp";

export const Antecedenteaprendiz = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();

  const contextApi = useContextApp();

  useEffect(() => {
    const getAntecedentesForAprendiz = async () => {
      const response = await contextApi.getAntecedentes(id);

      if (response) {
        setData(response);
      }
    };
    getAntecedentesForAprendiz();
  }, [contextApi, id]);

  return (
    <DefaultLayout>
      {data && data.length !== 0 ? (
        <div className=" bg-white border-2  max-w-5xl flex flex-col items-center h-auto justify-center rounded-2xl pt-10 pb-20">
          <div className="flex flex-col justify-center items-center w-f h-16 pt-4 pb-10 ">
            <h4 className=" flex flex-col justify-center items-center border-2  w-auto h-auto p-5  hover:bg-blue-500  hover:text-white text-black   rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-lg  ">
              Antecedentes Aprendiz
            </h4>
          </div>{" "}
          <Link to={"/home"}>
            <button className="pt-6 md:p-8 text-center md:text-left space-y-4">
              <p className=" bg-gray-500 hover:bg-black text-white w-24 h-7 text-center flex flex-col justify-center items-center rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-lg">
                Volver
              </p>
            </button>
          </Link>
          <div className=" space-y-1 space-x-4">
            <div className=" space-x-2 space-y-2 items-center justify-center "></div>
            <div
              className="grid grid-cols-1 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 p-1 gap-1 
           "
            >
              {data && data.aprendiz ? (
                <>
                  <div>
                    Nombre :
                    <input
                      className="  flex flex-col space-y-4"
                      type="text"
                      name="nombre"
                      defaultValue={data.aprendiz.nombre_completo}
                      disabled
                      placeholder="Darlin Andres"
                    />
                  </div>
                  <div>
                    Identificacion :
                    <input
                      className="flex flex-col space-x-4 space-y-4"
                      type="text"
                      name="identificaion"
                      defaultValue={data.aprendiz.documento}
                      disabled
                      placeholder="1076817752"
                    />
                  </div>
                </>
              ) : (
                <h2>Sin aprendiz</h2>
              )}
            </div>
          </div>
          {/* componente #3 para mover o dar espacio */}
          {/* grid grid-cols-1 2xl:grid-cols-3 xl:grid-cols-2 -> GRID SIRVE PARA ACOMODAR LAS 
        COLUMNAS QUE QUEREMOS LISTADAS EN UN TAMAÑO EN ESPECIFICO ej: 2xl = 1536px xl = 1280px lg = 1024 */}
          {/* gap = Espacio entre columnas y filas */}
          <div className="w-full h-full py-20 grid grid-cols-1 items-center justify-center gap-5">
            <div className=" space-x-40 space-y-20">
              <h1 className="">Historia de comites : </h1>
            </div>
            <div className="grid grid-cols-1 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-3 bg-white h-auto max-w-full items-center border-2 shadow-2xl p-5 place-content-evenly rounded-2xl">
              <div className=" bg-blue-200 hover:bg-white  h-auto max-w-full flex flex-row items-center  shadow-2xl p-5 place-content-evenly rounded-2xl">
                <div className="  bg-white hover:border-black border-2 hover:text-black rounded-xl shadow-black shadow-2xl">
                  <button className="   flex flex-col items-center justify-center   space-y-2 hover:bg-blue-200 hover:text-black rounded-xl border-blue-500 shadow-black shadow-2xl ">
                    <h2>instructores solicitantes :</h2>
                    {data && data.instructorSolicitante.length !== 0 ? (
                      data.instructorSolicitante.map((inst, index) => (
                        <button
                          key={index}
                          className="pt-2 flex flex-row items-center bg-blue-500 hover:bg-white border-2 shadow-2xl p-3 place-content-evenly rounded-2xl"
                        >
                          {inst.nombre_completo}
                        </button>
                      ))
                    ) : (
                      <>Sin Instructores</>
                    )}
                  </button>
                </div>
              </div>

              <div className=" bg-blue-200 hover:bg-white  h-auto max-w-full flex flex-row items-center  shadow-2xl p-5 place-content-evenly rounded-2xl">
                <div className="  bg-white hover:border-black border-2 hover:text-black rounded-xl shadow-black shadow-2xl">
                  <button className="   flex flex-col items-center justify-center   space-y-2 hover:bg-blue-200 hover:text-black rounded-xl border-blue-500 shadow-black shadow-2xl ">
                    Anexos :
                    {data && data.comites.length !== 0 ? (
                      data.comites.map((comite, index) => (
                        <button
                          key={index}
                          className=" pt-2 flex flex-row items-center  bg-blue-500  hover:bg-white border-2 shadow-2xl p-3 place-content-evenly rounded-2xl"
                        >
                          {comite.carpeta_anexos === null
                            ? "sin anexos"
                            : comite.carpeta_anexos}
                        </button>
                      ))
                    ) : (
                      <>Sin anexos</>
                    )}
                  </button>
                </div>
              </div>

              {/*  */}
              <div className=" bg-blue-200 hover:bg-white  h-auto max-w-full flex flex-row items-center  shadow-2xl p-5 place-content-evenly rounded-2xl">
                <div className=" bg-white hover:border-black border-2 hover:text-black rounded-xl  shadow-black shadow-2xl">
                  <button className="   flex flex-col items-center justify-center   space-y-2 hover:bg-blue-200 hover:text-black rounded-xl border-blue-500 shadow-black shadow-2xl ">
                    Acta :
                    {data && data.comites.length !== 0 ? (
                      data.comites.map((comite, index) => (
                        <button
                          key={index}
                          className=" pt-2 flex flex-row items-center  bg-blue-500  hover:bg-white border-2 shadow-2xl p-3 place-content-evenly rounded-2xl"
                        >
                          {comite.acta === null ? "sin acta" : comite.acta}
                        </button>
                      ))
                    ) : (
                      <>Sin anexos</>
                    )}
                  </button>
                </div>
              </div>
              {/*  */}
              <div className=" bg-blue-200 hover:bg-white h-auto max-w-full flex flex-row items-center  shadow-2xl p-5 place-content-evenly rounded-2xl">
                <div className=" bg-white  hover:border-black border-2 hover:text-black rounded-xl  shadow-black shadow-2xl">
                  <button className="   flex flex-col items-center justify-center   space-y-2 hover:bg-blue-200 hover:text-black rounded-xl border-blue-500 shadow-black shadow-2xl ">
                    Recomendacion:
                    {data && data.comites.length !== 0 ? (
                      data.comites.map((comite, index) => (
                        <button
                          key={index}
                          className=" pt-2 flex flex-row items-center  bg-blue-500  hover:bg-white border-2 shadow-2xl p-3 place-content-evenly rounded-2xl"
                        >
                          {comite.recomendacion === null
                            ? "sin recomendacion"
                            : comite.recomendacion}
                        </button>
                      ))
                    ) : (
                      <>Sin anexos</>
                    )}
                  </button>
                </div>
              </div>
            </div>
            {/* hhhhh */}
            {/*  2xl:grid-cols-3 xl:grid-cols-2 */}

            <div className=" space-x-4 space-y-2  items-center justify-center "></div>
            <div
              className="grid grid-cols-1 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  gap-10 p-4
           items-center justify-center"
            >
              {data && data.aprendiz ? (
                <>
                  <div>
                    Cargo :
                    <input
                      className="  flex flex-col space-y-4  "
                      type="text"
                      name="cargo"
                      disabled
                      defaultValue={`Aprendiz`}
                      placeholder="Calle 68 #35 A 134"
                    />
                  </div>
                  <div>
                    Email :
                    <input
                      className="flex flex-col  w-60"
                      type="text"
                      name="email"
                      defaultValue={data.aprendiz.email}
                      disabled
                      placeholder="darlinandresrivas@gmail.com"
                    />
                  </div>
                  <div>
                    Telefono :
                    <input
                      className="flex flex-col space-x-4 space-y-4"
                      type="text"
                      name="telefono"
                      defaultValue={data.aprendiz.telefono}
                      disabled
                      placeholder="3136349799"
                    />
                  </div>
                </>
              ) : (
                <>Sin aprendiz</>
              )}
            </div>

            <div className=" space-x-40 space-y-20">
              <h1 className="">Novedades : </h1>
            </div>
            <div className="grid grid-cols-1 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-3 bg-white h-auto max-w-full items-center border-2 shadow-2xl p-5 place-content-evenly rounded-2xl">
              <div className=" bg-blue-200 hover:bg-white  h-full max-w-full flex flex-row items-center  shadow-2xl p-5 place-content-evenly rounded-2xl">
                <div className=" bg-white  hover:bg-blue-400 hover:text-black rounded-xl border-2 hover:border-black  shadow-black shadow-2xl">
                  <button className="  flex flex-col items-center justify-center  space-y-2 hover:bg-blue-500 hover:text-black rounded-xl border-blue-500 shadow-black shadow-2xl ">
                    <h4>
                      instrurtor <br /> solicitantes:
                    </h4>
                    {data && data.instructorSolicitanteNovedad.length !== 0 ? (
                      data.instructorSolicitanteNovedad.map(
                        (instructor, index) => (
                          <button
                            key={index}
                            className=" pt-2 flex flex-row items-center  bg-blue-500  hover:bg-white border-2 shadow-2xl p-3 place-content-evenly rounded-2xl"
                          >
                            {instructor.nombre_completo === null
                              ? "Sin Nombre"
                              : instructor.nombre_completo}
                          </button>
                        )
                      )
                    ) : (
                      <>Sin instructor solicitante</>
                    )}
                  </button>
                </div>
              </div>
              {/*  */}
              <div className="  bg-blue-200 hover:bg-white  h-full max-w-full flex flex-row items-center  shadow-2xl p-5 place-content-evenly rounded-2xl">
                <div className="bg-white   hover:bg-blue-400 hover:text-black rounded-xl border-2 hover:border-black  shadow-black shadow-2xl">
                  <button className="  flex flex-col items-center justify-center  space-y-2 hover:bg-blue-500 hover:text-black rounded-xl border-blue-500 shadow-black shadow-2xl ">
                    <h4>
                      Nombre <br /> Novedad:
                    </h4>
                    {data && data.novedades.length !== 0 ? (
                      data.novedades.map((novedad, index) => (
                        <button
                          key={index}
                          className=" pt-2 flex flex-row items-center  bg-blue-500  hover:bg-white border-2 shadow-2xl p-3 place-content-evenly rounded-2xl"
                        >
                          {novedad.nombre_novedad === null
                            ? "Sin Nombre"
                            : novedad.nombre_novedad}
                        </button>
                      ))
                    ) : (
                      <>Sin instructor solicitante</>
                    )}
                  </button>
                </div>
              </div>
              {/*  */}

              <div className=" bg-blue-200 hover:bg-white  h-full max-w-full flex flex-row items-center  shadow-2xl p-5 place-content-evenly rounded-2xl">
                <div className="bg-white   hover:bg-blue-400 hover:text-black rounded-xl border-2 hover:border-black  shadow-black shadow-2xl">
                  <button className="  flex flex-col items-center justify-center  space-y-2 hover:bg-blue-500 hover:text-black rounded-xl border-blue-500 shadow-black shadow-2xl ">
                    <h4>Descripcion :</h4>
                    {data && data.novedades.length !== 0 ? (
                      data.novedades.map((novedad, index) => (
                        <button
                          key={index}
                          className=" pt-2 flex flex-row items-center  bg-blue-500  hover:bg-white border-2 shadow-2xl p-3 place-content-evenly rounded-2xl"
                        >
                          {novedad.descripcion_novedad === null
                            ? "Sin Descripcion"
                            : novedad.descripcion_novedad}
                        </button>
                      ))
                    ) : (
                      <>Sin instructor solicitante</>
                    )}
                  </button>
                </div>
              </div>
              {/*  */}

              <div className=" bg-blue-200  hover:bg-white   h-full max-w-full flex flex-row items-center  shadow-2xl p-5 place-content-evenly rounded-2xl">
                <div className=" bg-white   hover:bg-blue-400 hover:text-black rounded-xl border-2 hover:border-black  shadow-black shadow-2xl">
                  <button className="  flex flex-col items-center justify-center  space-y-2 hover:bg-blue-500 hover:text-black rounded-xl border-blue-500 shadow-black shadow-2xl ">
                    <h4>Fecha :</h4>
                    {data && data.novedades.length !== 0 ? (
                      data.novedades.map((novedad, index) => (
                        <button
                          key={index}
                          className=" pt-2 flex flex-row items-center  bg-blue-500  hover:bg-white border-2 shadow-2xl p-3 place-content-evenly rounded-2xl"
                        >
                          {novedad.createdAt === null
                            ? "Sin Fecha"
                            : novedad.createdAt.replace(/T.*/, "")}
                        </button>
                      ))
                    ) : (
                      <>Sin instructor solicitante</>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h2>Sin datos</h2>
      )}
    </DefaultLayout>
  );
};
