import DefaultLayout from "../../Layout/DefaultLayout";
import { BiBell } from "react-icons/bi";
import { Link } from "react-router-dom";

export const Home_Aprendiz = () => {
  return (
    <DefaultLayout>
      <div className=" ">
        <main className="bg-white w-full h-full p-4 sm:p-20 border-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-4">
            <div className="bg-white  border-2 py-10 flex flex-row justify-center items-center">
              <section className="gap-4">
                <Link to="/pruebaaprendiz">
                  <button className=" w-52  h-52 border-2 duration-150 bg-blue-500 hover:bg-yellow-300 flex flex-col items-center justify-center rounded-lg">
                    <BiBell className="w-32 h-16 text-black" />
                    Ver solicitudes a comite 
                  </button>
                </Link>
              </section>
            </div>

            <div className="bg-white  border-2 py-10 flex flex-row justify-center items-center">
              <section className="gap-4">
                <Link to="/pruebaaprendiz">
                  <button className="border-2 w-52  h-52  duration-150 bg-yellow-500 hover:bg-yellow-300 flex flex-col items-center justify-center rounded-lg">
                    <BiBell className="w-32 h-16 text-black" />
                    impugnacion
                  </button>
                </Link>
              </section>
            </div>

            <div className="bg-white  border-2 py-10 flex flex-row justify-center items-center">
              <section className="gap-4">
                <Link to="/pruebaaprendiz">
                  <button className="border-2 w-52  h-52 duration-150 bg-red-500 hover:bg-yellow-300 flex flex-col items-center justify-center rounded-lg">
                    <BiBell className="w-32 h-16 text-black" />
                   Antecedentes
                  </button>
                </Link>
              </section>
            </div>
            <div className="bg-white  border-2 py-10 flex flex-row justify-center items-center">
              <section className="gap-4">
                <Link to="/pruebaaprendiz">
                  <button className="border-2 w-52  h-52  duration-150 bg-blue-500 hover:bg-yellow-300 flex flex-col items-center justify-center rounded-lg">
                    <BiBell className="w-32 h-16 text-black" />
                    Subir prueba
                  </button>
                </Link>
              </section>
            </div>

            <div className="bg-white  border-2 py-10 flex flex-row justify-center items-center">
              <section className="gap-4">
                <Link to="/pruebaaprendiz">
                  <button className="border-2 w-52  h-52 duration-150 bg-yellow-500 hover:bg-yellow-300 flex flex-col items-center justify-center rounded-lg">
                    <BiBell className="w-32 h-16 text-black" />
                    Plan de mejoramiento
                  </button>
                </Link>
              </section>
            </div>
            <div className="bg-white  border-2 py-10 flex flex-row justify-center items-center">
              <section className="gap-4">
                <Link to="/pruebaaprendiz">
                  <button className="border-2 w-52  h-52  duration-150 bg-red-500 hover:bg-yellow-300 flex flex-col items-center justify-center rounded-lg">
                    <BiBell className="w-32 h-16 text-black" />
                   Notificaciones
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
