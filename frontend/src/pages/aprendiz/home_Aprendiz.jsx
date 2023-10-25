import DefaultLayout from "../../Layout/DefaultLayout";
import {TbAlignBoxRightTop} from "react-icons/tb";
import {TiGroup} from "react-icons/ti";
import {VscHistory} from "react-icons/vsc"
import {IoDocumentOutline} from "react-icons/io5"
import {HiDocumentDuplicate} from "react-icons/hi"
import {MdNotificationsActive} from "react-icons/md"
import { Link } from "react-router-dom";

export const Home_Aprendiz = () => {
  return (
    <DefaultLayout>
      <div className=" ">
        <main className="bg-white w-full h-full p-2 sm:p-20 border-2 rounded-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-4 bg-white">
            <div className="bg-white   py-10 flex flex-row justify-center items-center">
              <section className="gap-4">
                <Link to="/pruebaaprendiz">
                  <button className=" w-52  h-52 shadow-2xl border-gray-400 duration-150 border text-black hover:text-gray-200 bg-gray-400 hover:bg-gray-600 flex flex-col items-center justify-center rounded-lg">
                    <TiGroup className=" text-9xl " />
                    <div className=" bg-blue-500 rounded-b-lg w-full h-20 items-center justify-center hover:bg-blue-600 ">
                      <p className="mt-2 text-xl">Ver solicitudes a comite</p>
                    </div>
                     
                  </button>
                </Link>
              </section>
            </div>

            <div className="bg-white   py-10 flex flex-row justify-center items-center">
              <section className="gap-4">
                <Link to="/pruebaaprendiz">
                  <button className=" w-52  h-52 shadow-2xl border-gray-200 duration-150 border text-black hover:text-gray-200 bg-gray-400 hover:bg-gray-800 flex flex-col items-center justify-center rounded-lg">
                    <TbAlignBoxRightTop  className=" text-9xl " />
                    <div className=" bg-blue-600 rounded-b-lg w-full h-20 items-center justify-center hover:bg-blue-800 ">
                      <p className="mt-2 text-xl">Impugnacion</p>
                    </div>
                    
                  </button>
                </Link>
              </section>
            </div>

            <div className="bg-white   py-10 flex flex-row justify-center items-center">
              <section className="gap-4">
                <Link to="/pruebaaprendiz">
                <button className=" w-52  h-52 shadow-2xl border-gray-200 duration-150 border text-black hover:text-gray-200 bg-gray-400 hover:bg-gray-800 flex flex-col items-center justify-center rounded-lg">
                    <VscHistory className=" text-9xl " />
                    <div className=" bg-blue-600 rounded-b-lg w-full h-20 items-center justify-center hover:bg-blue-800 ">
                      <p className="mt-2 text-xl">Mis antecedentes</p>
                    </div>
                     
                  </button>
                </Link>
              </section>
            </div>
            <div className="bg-white   py-10 flex flex-row justify-center items-center">
              <section className="gap-4">
                <Link to="/pruebaaprendiz">
                <button className=" w-52  h-52 shadow-2xl border-gray-200 duration-150 border text-black hover:text-gray-200 bg-gray-400 hover:bg-gray-800 flex flex-col items-center justify-center rounded-lg">
                    <IoDocumentOutline className=" text-9xl " />
                    <div className=" bg-blue-600 rounded-b-lg w-full h-20 items-center justify-center hover:bg-blue-800 ">
                      <p className="mt-2 text-xl">Subir pruebas</p>
                    </div>
                     
                  </button>
                </Link>
              </section>
            </div>

            <div className="bg-white   py-10 flex flex-row justify-center items-center">
              <section className="gap-4">
                <Link to="/pruebaaprendiz">
                <button className=" w-52  h-52 shadow-2xl border-gray-200 duration-150 border text-black hover:text-gray-200 bg-gray-400 hover:bg-gray-800 flex flex-col items-center justify-center rounded-lg">
                    <HiDocumentDuplicate className=" text-9xl " />
                    <div className=" bg-blue-600 rounded-b-lg w-full h-20 items-center justify-center hover:bg-blue-800 ">
                      <p className="mt-2 text-xl">Planes de mejoramiento</p>
                    </div>
                     
                  </button>
                </Link>
              </section>
            </div>
            <div className="bg-white   py-10 flex flex-row justify-center items-center">
              <section className="gap-4">
                <Link to="/pruebaaprendiz">
                <button className=" w-52  h-52 shadow-2xl border-gray-200 duration-150 border text-black hover:text-gray-200 bg-gray-400 hover:bg-gray-800 flex flex-col items-center justify-center rounded-lg">
                    <MdNotificationsActive className=" text-9xl " />
                    <div className=" bg-blue-600 rounded-b-lg w-full h-20 items-center justify-center hover:bg-blue-800 ">
                      <p className="mt-2 text-xl">Notificaciones</p>
                    </div>
                     
                  </button>
                </Link>
              </section>
            </div>

           
          </div>
          
        </main>
      </div>
    </DefaultLayout>
  );
};
