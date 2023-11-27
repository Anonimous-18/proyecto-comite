import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { BiSolidUser } from "react-icons/bi";

import hooks from "../../hooks/useFunction";
import DefaultLayout from "../../Layout/DefaultLayout";
import { useContextApp } from "../../Context/ContextApp";

export const Notificaciones = () => {
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

  return (
    <DefaultLayout>
      <main className="max-w-full h-full flex flex-col items-center justify-center">
        <article className="w-full h-full flex flex-row items-center justify-start">
          <h1 className="text-white text-center p-4 cursor-pointer bg-black rounded-bl-2xl">
            RECIBIDOS
          </h1>
        </article>
        <figure className="bg-transparent border border-black shadow shadow-black rounded-l-xl rounded-tr-xl flex flex-col 2xl:flex-row xl:flex-row lg:flex-row md:flex-col items-center justify-center w-full h-full">
          <div className="rounded-xl bg-gray-200 flex flex-col items-center justify-center text-center text-black w-32 2xl:w-72 xl:w-72 lg:w-72 md:w-72 sm:w-44 h-full">
            <BiSolidUser className="w-20 h-20 2xl:w-36 2xl:h-36 xl:w-36 xl:h-36 lg:w-36 lg:h-36 md:w-36 md:h-36 sm:w-24 sm:h-24" />
            <h1>nombre</h1>
          </div>

          {/* <div className="h-40 w-4/5 relative overflow-x-auto"> */}
          <div className="h-40 w-full relative overflow-x-auto">
            <p className="text-base p-11 w-30 text-black ">Sin mensajes...</p>
          </div>
        </figure>
        <div className="flex flex-row gap-3 items-start justify-start w-full h-16 mt-11">
          <Link
            to={`${
              localStorage.getItem("instructor")
                ? "/home-instructor"
                : localStorage.getItem("aprendiz")
                ? "/home-aprendiz"
                : localStorage.getItem("invitado")
                ? "/home-invitado"
                : localStorage.getItem("admin")
                ? "/home-admin"
                : "/"
            }`}
          >
            <button className="relative inline-flex items-center rounded-md border border-transparent bg-blue-700 px-10 py-2 font-bold text-white shadow-xl transition duration-300 ease-in-out hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2">
              Volver
            </button>
          </Link>
        </div>
      </main>
    </DefaultLayout>
  );
};
