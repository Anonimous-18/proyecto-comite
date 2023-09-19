import { NavBar } from "../../Layout/NavBar";
import { Footer } from "../../Layout/Footer";
import { Semaforo } from "../../components/util/semaforo";
import { Carta } from "../../components/util/carta";
import { Link } from "react-router-dom";
import { Filtrocomite } from "../../components/util/filtocomite";

export const Homeinstructor = () => {
  return (
    <div>
      <NavBar />
      <div className="mx-auto max-w-screen-xl pt-20 pb-32 sm:pt-48 sm:pb-40 ">
        <div className="h-auto max-w-full flex flex-col items-center  p-5 place-content-evenly rounded-2xl">
          <div className=" flex space-x-2">
            {/* flex space-x-4 para columas */}
            <Semaforo />
            <Filtrocomite />
          </div>
        </div>

        <div className=" border-2">
          <Carta />
        </div>
        <div className="p-2">
          <Link
          to={`/solicitud-comite`}
            className=" right-0 ml-3 relative inline-flex items-center rounded-md border border-transparent bg-blue-700 px-10 py-2 text-xs font-bold text-white shadow-xl transition duration-300 ease-in-out hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2"
            type="button">
            Crear Solicitud a Comite
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};
