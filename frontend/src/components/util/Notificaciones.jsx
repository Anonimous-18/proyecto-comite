import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { Spinner } from "./Spinner";
import hooks from "../../hooks/useFunction";
import DefaultLayout from "../../Layout/DefaultLayout";
import { useContextApp } from "../../Context/ContextApp";

export const Notificaciones = () => {
  const navigate = useNavigate();
  const contextApi = useContextApp();
  const [noti, setNoti] = useState(null);

  const token = JSON.parse(localStorage.getItem("newToken"));
  const tokenDecoded = hooks.useDecodedToken(token.token);

  useEffect(() => {
    window.scroll(0, 0);

    const getRolDetails = async () => {
      const res = await contextApi.getRolesById(
        token.token,
        tokenDecoded.user.rol_id
      );

      if (res && res !== null) {
        /**-----------------------------------------------
         * | Validamos que sea un Administrador (Gestor)
         * | Y consultamos sus notificaciones
         * -----------------------------------------------*/

        if (res.nombre && res.nombre === "Administrador") {
          contextApi.socket.emit("gestorConectado");
          const notificaciones = await contextApi.getNotificacionesByUser(
            tokenDecoded.user.id
          );

          if (!noti && notificaciones) {
            setNoti(notificaciones);
          }
        }
      }
    };

    getRolDetails();

    return () => {
      contextApi.socket.off("gestorConectado");
    };
  }, [contextApi, tokenDecoded, token, noti]);

  const handleClick = async (fecha) => {
    const response = await contextApi.getDetallesComiteNotificadoRequest(fecha);

    if (response && response.id) {
      navigate(`/informacion-comite/${response.id}`);
    }
  };

  return (
    <DefaultLayout>
      {noti && noti ? (
        noti.map((notificacion) => (
          <div
            className="flex flex-col w-full p-8 bg-gray-800 shadow-md hover:shodow-lg rounded-2xl"
            key={notificacion.id}
          >
            <div className="flex items-center justify-between w-full">
              <div className="flex flex-col 2xl:flex-row xl:flex-row lg:flex-row gap-4 w-full items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-16 h-16 rounded-2xl p-3 border border-gray-800 text-blue-400 bg-gray-900"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <div className="flex flex-col m-3 w-full ">
                  <div className="font-bold leading-none text-gray-100 text-sm 2xl:text-lg xl:text-base">
                    {"Asunto: " + notificacion.titulo}
                  </div>
                  <div className="text-gray-100 text-sm mt-1">
                    {"Por " + notificacion.remitente.nombre_completo}
                  </div>
                  <p className="text-sm text-gray-500 leading-none mt-1">
                    {notificacion.descripcion}
                  </p>
                  <div className="text-gray-100 text-sm mt-1">
                    {"Enviado el " + notificacion.createdAt.replace(/T.*/, "")}
                  </div>
                </div>
              </div>
              <button
                onClick={() => handleClick(notificacion.createdAt)}
                className="cursor-pointer inline-flex items-center rounded-md border border-transparent bg-blue-800 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-900 focus:ring-2 focus:outline-none transition duration-300 transform active:scale-95 ease-in-out"
              >
                Ver
              </button>
            </div>
            <button
              onClick={() => handleClick(notificacion.createdAt)}
              className="cursor-pointer w-full text-center inline-flex items-center justify-center rounded-md border border-transparent bg-rose-800 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-rose-900 focus:ring-2 focus:outline-none transition duration-300 transform active:scale-95 ease-in-out"
            >
              Eliminar
            </button>
          </div>
        ))
      ) : (
        <Spinner />
      )}
    </DefaultLayout>
  );
};
