import { NavBar } from "../../Layout/NavBar";
import { Footer } from "../../Layout/Footer";
import { Link } from "react-router-dom";
import { GrBook } from "react-icons/gr";
import {GrDocumentUser} from "react-icons/gr"

export const Homeinvitado = () => {
  return (
    <div>
      <NavBar />
      <div className="mx-auto max-w-4xl  pt-20 pb-32 sm:pt-48 sm:pb-40 ">
        <div className="h-auto max-w-full flex flex-col items-center border-2 shadow-2xl p-5 place-content-evenly rounded-2xl">
          <Link to={"/novedadinvitado"} className="p-4">
            <button className=" hover:bg-blue-200 rounded-xl border-blue-500 shadow-xl ">
              <figure className="md:flex border-gray-200 border-2 rounded-xl p-3 md:p-0 max-w-2xl">
                <GrDocumentUser className=" w-64 h-36 md:h-auto  rounded-xl mx-auto border-2  bg-gray-200 p-2"/>
                <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                  <blockquote>
                    <div className="text-blue-800 text-lg font-bold">
                      Ingresar Novedad
                    </div>
                  </blockquote>
                  <blockquote>
                    <p className="text-sm">
                      Podrás ingresar novedades sobre diferentes aprendices,
                      teniendo en cuenta el reglamento del aprendiz.
                    </p>
                  </blockquote>
                  <blockquote>
                    <p className="text-xs text-gray-600">SENA</p>
                    <p className="text-xs text-gray-600">Regional Caladas</p>
                    <p className="text-xs text-gray-600">
                      Centro de Automatizacion
                    </p>
                  </blockquote>
                </div>
              </figure>
            </button>
          </Link>

          <Link to={"/reglamento"}>
            <button className="hover:bg-blue-200 rounded-xl border-blue-500 shadow-xl">
              <figure className="md:flex border-gray-200 border-2 rounded-xl p-3 md:p-0 max-w-2xl">
                <GrBook className=" w-64 h-36 md:h-auto  rounded-xl mx-auto border-2  bg-gray-200 p-2" height="350"/>
                <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                  <blockquote>
                    <div className="text-blue-800 text-lg font-bold">
                      Reglamento del Aprendiz
                    </div>
                  </blockquote>
                  <blockquote>
                    <p className="text-sm">
                      Son los derechos y las obligaciones que tienen las
                      personas matriculadas en alguno de los cursos del SENA. .
                    </p>
                  </blockquote>
                  <blockquote>
                    <p className="text-xs text-gray-600">SENA</p>
                    <p className="text-xs text-gray-600">Regional Caladas</p>
                    <p className="text-xs text-gray-600">
                      Centro de Automatizacion
                    </p>
                  </blockquote>
                </div>
              </figure>
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};
