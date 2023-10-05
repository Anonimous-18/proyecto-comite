import { BiSolidUser } from "react-icons/bi";
import { Link } from "react-router-dom";

export const Notificaciones = () => {
  return (
    <div className="mx-auto max-w-4xl pt-20 pb-32 sm:pt-40 sm:pb-20 rounded-2xl">
      <div className="mx-auto max-w-3xl pt-10 pb-22 sm:pt-38 sm:pb-20">
        <button className=" md:p-2 text-center  ">
          <blockquote>
            <h1 className=" bg-black text-white w-24 h-9 text-center rounded-tl-lg rounded-br-lg   ">
              RECIBIDOS
            </h1>
          </blockquote>
        </button>
        <div className="h-auto max-w-full flex flex-col items-center border-2 shadow-2xl p-5 place-content-evenly rounded-2xl">
          <button className="hover:bg-blue-200 hover:text-black rounded-xl border-blue-500 shadow-black shadow-2xl ">
            <figure className="md:flex border-gray-200 border-2 rounded-xl p-3 md:p-0 max-w-2xl">
              <div className="rounded-xl mx-auto border-2 bg-gray-200 p-2 text-black">
                <BiSolidUser className="w-36 h-36 md:h-auto" />
                <h1>nombre</h1>
              </div>

              <div className="pt-6 md:p-8 text-center md:text-left space-y-4 bg-white">
                <blockquote>
                  <p className="w-20 text-blue-800 text-lg font-bold">TITULO</p>
                </blockquote>
                <blockquote>
                  <p className="text-sm p-0 w-30">Descripcion</p>
                </blockquote>
                <blockquote>
                  <p className="text-sm p-0 w-30 text-gray-500">
                    Fecha de recibido
                    hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
                    hhhhhhhhhhhhhhhhhhhh
                  </p>
                </blockquote>
              </div>
            </figure>
          </button>
          <blockquote></blockquote>
        </div>

        <Link to={"/homeaprendiz"}>
          <button className="pt-6 md:p-8 text-center md:text-left space-y-4 ">
            <blockquote>
              <p className="       bg-blue-700 text-white w-24 h-7 text-center rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-lg">
                Volver
              </p>
            </blockquote>
          </button>
        </Link>
      </div>
    </div>
  );
};
