import DefaultLayout from "../../Layout/DefaultLayout";
import { BiBell } from "react-icons/bi";
import { Link } from "react-router-dom";


export const Home_Aprendiz = () => {
  return (
    <DefaultLayout>
      <div>
        <div className="  mx-auto w-96  pt-0 pb-32 sm:pt-48 sm:pb-46 adsolute transform  ">
          <div className="  bg-white border-2 h-auto max-w-full max-h-full flex flex-col items-center  p-5 place-content-evenly rounded-2xl space-y-2">
            <div className="  hover:translate-x-2 hover:translate-y-1 translate-x-0 translate-y-0 flex flex-row p-3  space-x-2 border-gray-400 border-2 rounded-t-lg rounded-r-lg rounded-l-lg ">
              {/* 
              <Link to="/novedadinvitado">
  { }
</Link> */}

              <Link to="/pruebaaprendiz">
                {
                  <button className=" duration-150 bg-yellow-500  hover:bg-yellow-300 p-2 flex flex-col items-center justify-center rounded-t-lg rounded-r-lg ">
                    <BiBell className=" w-8 h-8  flex flex-col items-center text-black" />
                    Subir rueba{" "}
                  </button>
                }
              </Link>

              <Link to="/notificacionaprendiz">
                {
                  <button className="duration-150  bg-green-500  hover:bg-green-300 p-2 flex flex-col items-center justify-center rounded-t-lg rounded-l-lg">
                    <BiBell className=" w-8 h-8  flex flex-col items-center text-black" />{" "}
                    Notificacion{" "}
                  </button>
                }
              </Link>
            </div>
            <hr />
            <div className="  hover:translate-x-2 hover:translate-y-1 translate-x-0 translate-y-0 bg-white flex flex-row h-auto p-3 space-x-2  border-gray-400 border-2 rounded-t-lg rounded-r-lg rounded-l-lg ">
              <Link to="/impugnacionesaprendiz">
                {
                  <button className=" duration-150 top-4 left-4 bg-red-500  hover:bg-red-300 p-2 flex flex-col items-center justify-center rounded-t-lg rounded-r-lg rounded-l-lg">
                    <BiBell className=" w-8 h-8  flex flex-col items-center text-black" />
                    Subir impugnacion{" "}
                  </button>
                }
              </Link>
              <button className="duration-150  bg-yellow-500  hover:bg-yellow-300 p-2 flex flex-col items-center justify-center rounded-t-lg rounded-r-lg ">
                <BiBell className=" w-8 h-8  flex flex-col items-center text-black" />
                plan mejoramiento{" "}
              </button>
            </div>
          </div>
          <div className="flex flex-row p-3    items-center justify-center ">
            <div
              className=" w-64 flex flex-row p-3  space-x-6  items-center justify-center  hover:translate-x-4 hover:translate-y-1 translate-x-0 translate-y-0
         bg-white border-2 h-auto max-w-full max-h-full   place-content-evenly rounded-2xl space-y-2 "
            >
              <Link to="/home">
                {
                  <button className=" duration-150 bg-red-500  hover:bg-red-300 p-2 flex flex-col items-center justify-center rounded-t-lg rounded-r-lg">
                    <BiBell className=" w-8 h-8  flex flex-col items-center text-black" />
                    Cerrar{" "}
                  </button>
                }
              </Link>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};
