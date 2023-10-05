import DefaultLayout from "../../Layout/DefaultLayout";
import { BiBell } from "react-icons/bi";
import { Link } from "react-router-dom";

export const Home_Aprendiz = () => {
  return (
    <DefaultLayout>
      <div className=" ">
        <div className=" bg-white border-2  max-w-4xl  max-h-screen pl-4  mx-auto w-96  pr-4 pt-40 pb-20 sm:pt-48 sm:pb-46 adsolute transform f ">
          <div className="  bg-white border-2 h-auto max-w-full max-h-full   items-center  p-5 place-content-evenly rounded-2xl space-y-2">
            <div className="flex flex-col space-y-4">
              <div className=" space-y-10 flex flex-col justify-center items-center  hover:translate-x-2 hover:translate-y-1 translate-x-0 translate-y-0  space-x-2 border-gray-400  rounded-t-lg rounded-r-lg rounded-l-lg ">
                <Link to="/pruebaaprendiz">
                  {
                    <button className="duration-150 bg-yellow-500  hover:bg-yellow-300 flex flex-col items-center justify-center rounded-t-lg rounded-r-lg rounded-l-lg">
                      <BiBell className="  w-64  h-20  flex flex-col items-center justify-center text-black" />
                      Subir prueba
                    </button>
                  }
                </Link>

              </div>
              <div className="flex flex-col justify-center items-center space-y-10">
                <Link to="/notificacionaprendiz">
                  {
                    <button className=" duration-150  bg-green-500  hover:bg-green-300  flex flex-col items-center justify-center rounded-t-lg rounded-r-lg rounded-l-lg">
                      <BiBell className="   w-64 h-20  flex flex-col items-center text-black" />
                      Notificacion
                    </button>
                  }
                </Link>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center  space-y-4">
              <div className="  hover:translate hover:translate-y-1  bg-white flex flex-col h-auto   border-gray-400  rounded-t-lg rounded-r-lg rounded-l-lg ">
                <Link to="/impugnacionesaprendiz">
                  {
                    <button className=" duration-150 top-4 left-4 bg-red-500  hover:bg-red-300  flex flex-col items-center justify-center rounded-t-lg rounded-r-lg rounded-l-lg">
                      <BiBell className="   w-60  h-20  flex flex-col items-center text-black" />
                      Subir impugnacion
                    </button>
                  }
                </Link>
              </div>
              <div className=" space-y-2 flex flex-col justify-center items-center">
                <button className="duration-150  bg-blue-500  hover:bg-yellow-300  flex flex-col items-center justify-centerrounded-t-lg rounded-r-lg rounded-l-lg ">
                  <BiBell className="  w-60  h-20  flex flex-col items-center text-black" />
                  plan mejoramiento
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col p-3    items-center justify-center   space-y-10">
            <div
              className=" w-64 flex flex-col  p-3  space-x-6  items-center justify-center  hover:translate-x-4 hover:translate-y-1 translate-x-0 translate-y-0
         bg-white h-auto max-w-full max-h-full   place-content-evenly rounded-2xl space-y-2 ">
              <Link to="/home">
                {
                  <button className=" duration-150 bg-red-500  hover:bg-red-300 p-2 flex flex-col items-center justify-center rounded-t-lg rounded-r-lg rounded-l-lg ">
                    <BiBell className="  w-20  h-20  flex flex-col items-center text-black" />
                    Cerrar
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
