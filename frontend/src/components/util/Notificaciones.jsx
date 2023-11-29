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
            className="flex flex-col p-8 bg-gray-800 shadow-md hover:shodow-lg rounded-2xl"
            key={notificacion.id}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
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
                <div className="flex flex-col ml-3">
                  <div className="font-bold leading-none text-gray-100">
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
                className="flex-no-shrink bg-red-500 px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-red-500 text-white rounded-full"
              >
                Ver
              </button>
            </div>
          </div>
        ))
      ) : (
        <Spinner />
      )}
    </DefaultLayout>
  );
};
