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
      <section className="bg-while-500 dark:bg--900 mt-11 mb-11 flex flex-col items-center justify-center">
        {" "}
        {/* color de fondo de toda la pagina */}
        <div className="flex flex-col items-center justify-center px-6 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="mb-4 text-xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"
          ></a>

          {/* borde del registro de lados derecho e izquierdo    tambien se puiede el fondo de todo*/}
          <div className="w-full h-auto border-4  border-x-sky-800 bg-blue-700 rounded-lg shadow sm:max-w-md xl:p-0 flex flex-col items-center justify-center">
            <div className="p-4 space-y-2 md:space-y-1 sm:p-4">
              {/* color de texto del titulo del  regiistro */}
              <h3 className=" text-center mt-4 mb-4 text-sm font-extrabold text-white md:text-5xl lg:text-2xl mx-19">
                {" "}
                Registrarse en 
                <span className="text-transparent bg-clip-text bg-gradient-to-r to-sky-200 from-sky-400 mx-2">
                  SE-
                </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r to-sky-200 from-sky-500 ">
                  JustApp
                </span>
              </h3>

              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Tipo de documento
                  </label>
                  <input
                    type="text"
                    name="tipo_documento"
                    id="tipo_documento"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5
                     dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                    placeholder="Numero de documento"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="nom"
                    id="nom"                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                    placeholder="Nombre"
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
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300  dark:focus:ring-primary-600 dark:ring-offset-gray-800"
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
                  className=" place-items-center flex flex-col items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-blue-600 to-white group-hover:from-blue-600 group-hover:to-blue-800 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-sky-500 dark:focus:ring-blue-800"
                >
                  <span className="relative px-11 py-2.5 transition-all ease-in duration-75 bg-blue-500 text-white rounded-md group-hover:bg-opacity-0">
                    Crear cuenta invitado
                  </span>
                </button>
                {/*  */}
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
