import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { Spinner } from "./Spinner";
import DefaultLayout from "../../Layout/DefaultLayout";
import { useContextApp } from "../../Context/ContextApp";

export const Antecedenteaprendiz = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();

  const contextApi = useContextApp();

  useEffect(() => {
    window.scroll(0, 0);

    const getAntecedentesForAprendiz = async () => {
      const response = await contextApi.getAntecedentes(id);

      if (response) {
        setData(response);
      }
    };
    getAntecedentesForAprendiz();
  }, [contextApi, id]);

  const posts = [
    {
      title: "Boost your conversion rate",
      href: "#",
      category: {
        name: "Article",
        href: "#",
        color: "bg-indigo-100 text-indigo-800",
      },
      description:
        "Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      author: {
        name: "Paul York",
        href: "#",
        imageUrl:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      readingTime: "6 min",
    },
    {
      title: "How to use search engine optimization to drive sales",
      href: "#",
      category: {
        name: "Video",
        href: "#",
        color: "bg-pink-100 text-pink-800",
      },
      description:
        "Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.",
      date: "Mar 10, 2020",
      datetime: "2020-03-10",
      author: {
        name: "Dessie Ryan",
        href: "#",
        imageUrl:
          "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      readingTime: "4 min",
    },
    {
      title: "Improve your customer experience",
      href: "#",
      category: {
        name: "Case Study",
        href: "#",
        color: "bg-green-100 text-green-800",
      },
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab iure iusto fugiat commodi sequi.",
      date: "Feb 12, 2020",
      datetime: "2020-02-12",
      author: {
        name: "Easer Collins",
        href: "#",
        imageUrl:
          "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      readingTime: "11 min",
    },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  console.log(data);

  return (
    <DefaultLayout>
      {data && data.length !== 0 ? (
        // <div className=" bg-white border-2  max-w-5xl flex flex-col items-center h-auto justify-center rounded-2xl pt-10 pb-20">
        //   <div className="flex flex-col justify-center items-center w-f h-16 pt-4 pb-10 ">
        //     <h4 className=" flex flex-col justify-center items-center border-2  w-auto h-auto p-5  hover:bg-blue-500  hover:text-white text-black   rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-lg  ">
        //       Antecedentes Aprendiz
        //     </h4>
        //   </div>{" "}
        //   <Link
        //     to={`${
        //       localStorage.getItem("instructor")
        //         ? "/home-instructor"
        //         : localStorage.getItem("aprendiz")
        //         ? "/home-aprendiz"
        //         : localStorage.getItem("invitado")
        //         ? "/home-invitado"
        //         : localStorage.getItem("admin")
        //         ? "/home-admin"
        //         : "/"
        //     }`}
        //   >
        //     <button className="pt-6 md:p-8 text-center md:text-left space-y-4">
        //       <p className=" bg-gray-500 hover:bg-black text-white w-24 h-7 text-center flex flex-col justify-center items-center rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-lg">
        //         Volver
        //       </p>
        //     </button>
        //   </Link>
        //   <div className=" space-y-1 space-x-4">
        //     <div className=" space-x-2 space-y-2 items-center justify-center "></div>
        //     <div
        //       className="grid grid-cols-1 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 p-1 gap-1
        //    "
        //     >
        //       {data && data.aprendiz ? (
        //         <>
        //           <div>
        //             Nombre :
        //             <input
        //               className="  flex flex-col space-y-4"
        //               type="text"
        //               name="nombre"
        //               defaultValue={data.aprendiz.nombre_completo}
        //               disabled
        //               placeholder="Darlin Andres"
        //             />
        //           </div>
        //           <div>
        //             Identificacion :
        //             <input
        //               className="flex flex-col space-x-4 space-y-4"
        //               type="text"
        //               name="identificaion"
        //               defaultValue={data.aprendiz.documento}
        //               disabled
        //               placeholder="1076817752"
        //             />
        //           </div>
        //         </>
        //       ) : (
        //         <h2>Sin aprendiz</h2>
        //       )}
        //     </div>
        //   </div>
        //   {/* componente #3 para mover o dar espacio */}
        //   {/* grid grid-cols-1 2xl:grid-cols-3 xl:grid-cols-2 -> GRID SIRVE PARA ACOMODAR LAS
        // COLUMNAS QUE QUEREMOS LISTADAS EN UN TAMAÑO EN ESPECIFICO ej: 2xl = 1536px xl = 1280px lg = 1024 */}
        //   {/* gap = Espacio entre columnas y filas */}
        //   <div className="w-full h-full py-20 grid grid-cols-1 items-center justify-center gap-5">
        //     <div className=" space-x-40 space-y-20">
        //       <h1 className="">Historia de comites : </h1>
        //     </div>
        //     <div className="grid grid-cols-1 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-3 bg-white h-auto max-w-full items-center border-2 shadow-2xl p-5 place-content-evenly rounded-2xl">
        //       <div className=" bg-blue-200 hover:bg-white  h-auto max-w-full flex flex-row items-center  shadow-2xl p-5 place-content-evenly rounded-2xl">
        //         <div className="  bg-white hover:border-black border-2 hover:text-black rounded-xl shadow-black shadow-2xl">
        //           <button className="   flex flex-col items-center justify-center   space-y-2 hover:bg-blue-200 hover:text-black rounded-xl border-blue-500 shadow-black shadow-2xl ">
        //             <h2>instructores solicitantes :</h2>
        //             {data && data.instructorSolicitante.length !== 0 ? (
        //               data.instructorSolicitante.map((inst, index) => (
        //                 <button
        //                   key={index}
        //                   className="pt-2 flex flex-row items-center bg-blue-500 hover:bg-white border-2 shadow-2xl p-3 place-content-evenly rounded-2xl"
        //                 >
        //                   {inst.nombre_completo}
        //                 </button>
        //               ))
        //             ) : (
        //               <>Sin Instructores</>
        //             )}
        //           </button>
        //         </div>
        //       </div>

        //       <div className=" bg-blue-200 hover:bg-white  h-auto max-w-full flex flex-row items-center  shadow-2xl p-5 place-content-evenly rounded-2xl">
        //         <div className="  bg-white hover:border-black border-2 hover:text-black rounded-xl shadow-black shadow-2xl">
        //           <button className="   flex flex-col items-center justify-center   space-y-2 hover:bg-blue-200 hover:text-black rounded-xl border-blue-500 shadow-black shadow-2xl ">
        //             Anexos :
        //             {data && data.comites.length !== 0 ? (
        //               data.comites.map((comite, index) => (
        //                 <button
        //                   key={index}
        //                   className=" pt-2 flex flex-row items-center  bg-blue-500  hover:bg-white border-2 shadow-2xl p-3 place-content-evenly rounded-2xl"
        //                 >
        //                   {comite.carpeta_anexos === null
        //                     ? "sin anexos"
        //                     : comite.carpeta_anexos}
        //                 </button>
        //               ))
        //             ) : (
        //               <>Sin anexos</>
        //             )}
        //           </button>
        //         </div>
        //       </div>

        //       {/*  */}
        //       <div className=" bg-blue-200 hover:bg-white  h-auto max-w-full flex flex-row items-center  shadow-2xl p-5 place-content-evenly rounded-2xl">
        //         <div className=" bg-white hover:border-black border-2 hover:text-black rounded-xl  shadow-black shadow-2xl">
        //           <button className="   flex flex-col items-center justify-center   space-y-2 hover:bg-blue-200 hover:text-black rounded-xl border-blue-500 shadow-black shadow-2xl ">
        //             Acta :
        //             {data && data.comites.length !== 0 ? (
        //               data.comites.map((comite, index) => (
        //                 <button
        //                   key={index}
        //                   className=" pt-2 flex flex-row items-center  bg-blue-500  hover:bg-white border-2 shadow-2xl p-3 place-content-evenly rounded-2xl"
        //                 >
        //                   {comite.acta === null ? "sin acta" : comite.acta}
        //                 </button>
        //               ))
        //             ) : (
        //               <>Sin anexos</>
        //             )}
        //           </button>
        //         </div>
        //       </div>
        //       {/*  */}
        //       <div className=" bg-blue-200 hover:bg-white h-auto max-w-full flex flex-row items-center  shadow-2xl p-5 place-content-evenly rounded-2xl">
        //         <div className=" bg-white  hover:border-black border-2 hover:text-black rounded-xl  shadow-black shadow-2xl">
        //           <button className="   flex flex-col items-center justify-center   space-y-2 hover:bg-blue-200 hover:text-black rounded-xl border-blue-500 shadow-black shadow-2xl ">
        //             Recomendacion:
        //             {data && data.comites.length !== 0 ? (
        //               data.comites.map((comite, index) => (
        //                 <button
        //                   key={index}
        //                   className=" pt-2 flex flex-row items-center  bg-blue-500  hover:bg-white border-2 shadow-2xl p-3 place-content-evenly rounded-2xl"
        //                 >
        //                   {comite.recomendacion === null
        //                     ? "sin recomendacion"
        //                     : comite.recomendacion}
        //                 </button>
        //               ))
        //             ) : (
        //               <>Sin anexos</>
        //             )}
        //           </button>
        //         </div>
        //       </div>
        //     </div>
        //     {/* hhhhh */}
        //     {/*  2xl:grid-cols-3 xl:grid-cols-2 */}

        //     <div className=" space-x-4 space-y-2  items-center justify-center "></div>
        //     <div
        //       className="grid grid-cols-1 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  gap-10 p-4
        //    items-center justify-center"
        //     >
        //       {data && data.aprendiz ? (
        //         <>
        //           <div>
        //             Cargo :
        //             <input
        //               className="  flex flex-col space-y-4  "
        //               type="text"
        //               name="cargo"
        //               disabled
        //               defaultValue={`Aprendiz`}
        //               placeholder="Calle 68 #35 A 134"
        //             />
        //           </div>
        //           <div>
        //             Email :
        //             <input
        //               className="flex flex-col  w-60"
        //               type="text"
        //               name="email"
        //               defaultValue={data.aprendiz.email}
        //               disabled
        //               placeholder="darlinandresrivas@gmail.com"
        //             />
        //           </div>
        //           <div>
        //             Telefono :
        //             <input
        //               className="flex flex-col space-x-4 space-y-4"
        //               type="text"
        //               name="telefono"
        //               defaultValue={data.aprendiz.telefono}
        //               disabled
        //               placeholder="3136349799"
        //             />
        //           </div>
        //         </>
        //       ) : (
        //         <>Sin aprendiz</>
        //       )}
        //     </div>

        //     <div className=" space-x-40 space-y-20">
        //       <h1 className="">Novedades : </h1>
        //     </div>
        //     <div className="grid grid-cols-1 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-3 bg-white h-auto max-w-full items-center border-2 shadow-2xl p-5 place-content-evenly rounded-2xl">
        //       <div className=" bg-blue-200 hover:bg-white  h-full max-w-full flex flex-row items-center  shadow-2xl p-5 place-content-evenly rounded-2xl">
        //         <div className=" bg-white  hover:bg-blue-400 hover:text-black rounded-xl border-2 hover:border-black  shadow-black shadow-2xl">
        //           <button className="  flex flex-col items-center justify-center  space-y-2 hover:bg-blue-500 hover:text-black rounded-xl border-blue-500 shadow-black shadow-2xl ">
        //             <h4>
        //               instrurtor <br /> solicitantes:
        //             </h4>
        //             {data && data.instructorSolicitanteNovedad.length !== 0 ? (
        //               data.instructorSolicitanteNovedad.map(
        //                 (instructor, index) => (
        //                   <button
        //                     key={index}
        //                     className=" pt-2 flex flex-row items-center  bg-blue-500  hover:bg-white border-2 shadow-2xl p-3 place-content-evenly rounded-2xl"
        //                   >
        //                     {instructor.nombre_completo === null
        //                       ? "Sin Nombre"
        //                       : instructor.nombre_completo}
        //                   </button>
        //                 )
        //               )
        //             ) : (
        //               <>Sin instructor solicitante</>
        //             )}
        //           </button>
        //         </div>
        //       </div>
        //       {/*  */}
        //       <div className="  bg-blue-200 hover:bg-white  h-full max-w-full flex flex-row items-center  shadow-2xl p-5 place-content-evenly rounded-2xl">
        //         <div className="bg-white   hover:bg-blue-400 hover:text-black rounded-xl border-2 hover:border-black  shadow-black shadow-2xl">
        //           <button className="  flex flex-col items-center justify-center  space-y-2 hover:bg-blue-500 hover:text-black rounded-xl border-blue-500 shadow-black shadow-2xl ">
        //             <h4>
        //               Nombre <br /> Novedad:
        //             </h4>
        //             {data && data.novedades.length !== 0 ? (
        //               data.novedades.map((novedad, index) => (
        //                 <button
        //                   key={index}
        //                   className=" pt-2 flex flex-row items-center  bg-blue-500  hover:bg-white border-2 shadow-2xl p-3 place-content-evenly rounded-2xl"
        //                 >
        //                   {novedad.nombre_novedad === null
        //                     ? "Sin Nombre"
        //                     : novedad.nombre_novedad}
        //                 </button>
        //               ))
        //             ) : (
        //               <>Sin instructor solicitante</>
        //             )}
        //           </button>
        //         </div>
        //       </div>
        //       {/*  */}

        //       <div className=" bg-blue-200 hover:bg-white  h-full max-w-full flex flex-row items-center  shadow-2xl p-5 place-content-evenly rounded-2xl">
        //         <div className="bg-white   hover:bg-blue-400 hover:text-black rounded-xl border-2 hover:border-black  shadow-black shadow-2xl">
        //           <button className="  flex flex-col items-center justify-center  space-y-2 hover:bg-blue-500 hover:text-black rounded-xl border-blue-500 shadow-black shadow-2xl ">
        //             <h4>Descripcion :</h4>
        //             {data && data.novedades.length !== 0 ? (
        //               data.novedades.map((novedad, index) => (
        //                 <button
        //                   key={index}
        //                   className=" pt-2 flex flex-row items-center  bg-blue-500  hover:bg-white border-2 shadow-2xl p-3 place-content-evenly rounded-2xl"
        //                 >
        //                   {novedad.descripcion_novedad === null
        //                     ? "Sin Descripcion"
        //                     : novedad.descripcion_novedad}
        //                 </button>
        //               ))
        //             ) : (
        //               <>Sin instructor solicitante</>
        //             )}
        //           </button>
        //         </div>
        //       </div>
        //       {/*  */}

        //       <div className=" bg-blue-200  hover:bg-white   h-full max-w-full flex flex-row items-center  shadow-2xl p-5 place-content-evenly rounded-2xl">
        //         <div className=" bg-white   hover:bg-blue-400 hover:text-black rounded-xl border-2 hover:border-black  shadow-black shadow-2xl">
        //           <button className="  flex flex-col items-center justify-center  space-y-2 hover:bg-blue-500 hover:text-black rounded-xl border-blue-500 shadow-black shadow-2xl ">
        //             <h4>Fecha :</h4>
        //             {data && data.novedades.length !== 0 ? (
        //               data.novedades.map((novedad, index) => (
        //                 <button
        //                   key={index}
        //                   className=" pt-2 flex flex-row items-center  bg-blue-500  hover:bg-white border-2 shadow-2xl p-3 place-content-evenly rounded-2xl"
        //                 >
        //                   {novedad.createdAt === null
        //                     ? "Sin Fecha"
        //                     : novedad.createdAt.replace(/T.*/, "")}
        //                 </button>
        //               ))
        //             ) : (
        //               <>Sin instructor solicitante</>
        //             )}
        //           </button>
        //         </div>
        //       </div>
        //     </div>
        //   </div>
        // </div>
        <div className="relative overflow-hidden bg-white py-16">
          <div className="hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full lg:[overflow-anchor:none]">
            <div
              className="relative mx-auto h-full max-w-prose text-lg"
              aria-hidden="true"
            >
              <svg
                className="absolute top-12 left-full translate-x-32 transform"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
              >
                <defs>
                  <pattern
                    id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={384}
                  fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
                />
              </svg>
              <svg
                className="absolute top-1/2 right-full -translate-y-1/2 -translate-x-32 transform"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
              >
                <defs>
                  <pattern
                    id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={384}
                  fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
                />
              </svg>
              <svg
                className="absolute bottom-12 left-full translate-x-32 transform"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
              >
                <defs>
                  <pattern
                    id="d3eb07ae-5182-43e6-857d-35c643af9034"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={384}
                  fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
                />
              </svg>
            </div>
          </div>
          <div className="relative px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-prose text-lg">
              <h1>
                <span className="block text-center text-lg font-semibold text-indigo-600">
                  Antecedentes del Aprendiz
                </span>
                <span className="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                  {data && data.aprendiz
                    ? data.aprendiz.nombre_completo
                    : "|Error al obtener el nombre|"}
                </span>
              </h1>
              <p className="mt-8 text-xl leading-8 text-gray-500">
                Identificado con{" "}
                {data && data.aprendiz
                  ? data.aprendiz.tipo_documento
                  : "|Error al obtener la identificación|"}{" "}
                número{" "}
                {data && data.aprendiz
                  ? data.aprendiz.documento + "."
                  : "|Error al obtener el documento|"}
              </p>
            </div>
            <div className="prose prose-lg prose-indigo mx-auto mt-6 text-gray-500">
              <figure>
                <img
                  className="w-full rounded-lg"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3"
                  alt=""
                  width={1310}
                  height={873}
                />
                <figcaption>
                  {data && data.aprendiz
                    ? data.aprendiz.nombre_completo
                    : "|Error al obtener el nombre|"}
                </figcaption>
              </figure>
              <h1 className="text-black mt-4">Historial de Comites:</h1>
              <div className="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
                {posts.map((post) => (
                  <div key={post.title}>
                    <div>
                      <a href={post.category.href} className="inline-block">
                        <span
                          className={classNames(
                            post.category.color,
                            "inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium"
                          )}
                        >
                          {post.category.name}
                        </span>
                      </a>
                    </div>
                    <a href={post.href} className="mt-4 block">
                      <p className="text-xl font-semibold text-gray-900">
                        {post.title}
                      </p>
                      <p className="mt-3 text-base text-gray-500">
                        {post.description}
                      </p>
                    </a>
                    <div className="mt-6 flex items-center">
                      <div className="flex-shrink-0">
                        <a href={post.author.href}>
                          <span className="sr-only">{post.author.name}</span>
                          <img
                            className="h-10 w-10 rounded-full"
                            src={post.author.imageUrl}
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">
                          <a href={post.author.href}>{post.author.name}</a>
                        </p>
                        <div className="flex space-x-1 text-sm text-gray-500">
                          <time dateTime={post.datetime}>{post.date}</time>
                          <span aria-hidden="true">&middot;</span>
                          <span>{post.readingTime} read</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </DefaultLayout>
  );
};

// Generar un solo arreglo con los valores necesarios para dar informacion de los antecedentes
// de un aprendiz en especifico. Hacerlo desde el backend o desde el frontend.
