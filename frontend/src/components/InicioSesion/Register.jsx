import { useEffect } from "react";
import { useContextApp } from "../../Context/ContextApp";
import { Link, useNavigate } from "react-router-dom";

export const Register = () => {
  const { protectedRoutes } = useContextApp();
  const tokenExist = protectedRoutes();
  const navigate = useNavigate();

  useEffect(() => {
    if (tokenExist) {
      navigate(`/home`);
    }
  }, [navigate, tokenExist]);

  return (
    <>
     * <section className="bg-while-500 dark:bg--900">  {/* color de fondo de toda la pagina */}  
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
              href="#"
              className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"
            >
              
            </a>
          
          {/* borde del registro de lados derecho e izquierdo    tambien se puiede el fondo de todo*/}
          <div className="bg- w-full  border-4  border-x-sky-800 bg-sky-600 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                {/* color de texto del titulo del  regiistro */}
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-black-400 md:text-2xl dark:text-white italic underline">
                Registro invitado
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Tipo de documento
                  </label>
                  <input
                    type="text"
                    name="tipo_documento"
                    id="tipo_documento"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Cedula de Ciudadania / cedula de extrangeria / ..."
                    required=""
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Numero de documento
                  </label>
                  <input
                    type="text"
                    name="documento"
                    id="documento"
                    placeholder=""
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Numero de documento"
                    required=""
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="nom"
                    id="nom"
                    placeholder=""
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Nombre"
                    required=""
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Apellido
                  </label>
                  <input
                    type="text"
                    name="ape"
                    id="ape"
                    placeholder=""
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Apellidoo"
                    required=""
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Cargo
                  </label>
                  <input
                    type="text"
                    name="cargo"
                    id="cargo"
                    placeholder=""
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Cargo"
                    required=""
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Dependencia
                  </label>
                  <input
                    type="text"
                    name="dep"
                    id="dep"
                    placeholder=""
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Dependencia"
                    required=""
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    name="contra"
                    id="contra"
                    placeholder=""
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Contraseña"
                    required=""
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Confirmar Contraseña
                  </label>
                  <input
                    type="password"
                    name="con_contra"
                    id="con_contra"
                    placeholder=""
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Confirmar"
                    required=""
                  />
                </div>
                
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label className="font-light text-gray-200 dark:text-gray-300 ">
                      Acepta los{" "}
                      <a
                        className="font-medium text-primary-600 hover:underline dark:text-primary-500  text-gray-900 "
                        href="#"
                      >
                        Terminos y Condiciones
                      </a>
                    </label>
                  </div>
                </div>
                <button
                    type="submit"
                    className=" place-items-center flex flex-col items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900
                     rounded-lg group bg-gradient-to-br from-sk-600 to-blue-700 group-hover:from-cyan-400 group-hover:to-blue-600 hover:text-white dark:text-black focus:ring-4 
                     focus:outline-none focus:ring-sky-500 dark:focus:ring-blue-800"
                  >
                    <span className="relative px-11 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      Crear cuenta invitado
                    </span>
                  </button>
                    {/*  */}+
                <p className="text-sm font-light text-gray-200 dark:text-gray-400">
                  ¿Tienes cuanta?{" "}
                  <Link
                    to={`/`}
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500  text-gray-800"
                  >
                    ingresar
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
