import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ClimbingBoxLoader } from "react-spinners";

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

  return (
    <DefaultLayout>
      {data && data.length !== 0 ? (
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
              <h1 className="text-black mt-12">Historial de Comites:</h1>
              <div className="mt-4 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
                {data && data.comites && data.comites.length !== 0 ? (
                  data.comites.map((comite) => (
                    <div key={comite.id}>
                      <div>
                        <div className="inline-block">
                          <span
                            className={
                              "bg-pink-100 text-pink-800 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium"
                            }
                          >
                            {comite.createdAt.replace(/T.*/, "")}
                          </span>
                        </div>
                      </div>
                      <div className="mt-4 block">
                        <p className="text-xl font-semibold text-gray-900">
                          {"Falta " + comite.tipo_falta}
                        </p>
                        <p className="mt-3 text-base text-gray-500">
                          {comite.descripcion_solicitud}
                        </p>
                      </div>
                      <div className="mt-6 flex items-center">
                        <div className="flex-shrink-0">
                          <span className="sr-only">{comite.instructor}</span>
                          <img
                            className="h-10 w-10 rounded-full"
                            src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-900">
                            <span>{comite.instructor}</span>
                          </p>
                          <div className="flex space-x-1 text-sm text-gray-500">
                            <span>{comite.emailInstructor}</span>
                            <span aria-hidden="true">&middot;</span>
                            <span>{comite.dependenciaInstructor}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div>
                    <ClimbingBoxLoader
                      color="#160ccc"
                      size={16}
                      loading={true}
                      className="inline-block"
                    />
                    <small className="inline-flex">Sin comites</small>
                  </div>
                )}
              </div>
              <h1 className="text-black mt-12">Novedades:</h1>
              <div className="mt-4 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
                {data && data.novedades && data.novedades.length !== 0 ? (
                  data.novedades.map((novedad) => (
                    <div key={novedad.id}>
                      <div>
                        <div className="inline-block">
                          <span
                            className={
                              "bg-pink-100 text-pink-800 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium"
                            }
                          >
                            {novedad.createdAt.replace(/T.*/, "")}
                          </span>
                        </div>
                      </div>
                      <div className="mt-4 block">
                        <p className="text-xl font-semibold text-gray-900">
                          {novedad.nombre_novedad}
                        </p>
                        <p className="mt-3 text-base text-gray-500">
                          {novedad.descripcion_novedad}
                        </p>
                      </div>
                      <div className="mt-6 flex items-center">
                        <div className="flex-shrink-0">
                          <span className="sr-only">{novedad.instructor}</span>
                          <img
                            className="h-10 w-10 rounded-full"
                            src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-900">
                            <span>{novedad.instructor}</span>
                          </p>
                          <div className="flex space-x-1 text-sm text-gray-500">
                            <span>{novedad.emailInstructor}</span>
                            <span aria-hidden="true">&middot;</span>
                            <span>{novedad.dependenciaInstructor}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div>
                    <ClimbingBoxLoader
                      color="#160ccc"
                      size={16}
                      loading={true}
                      className="inline-block"
                    />
                    <small className="inline-flex">Sin novedades</small>
                  </div>
                )}
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
