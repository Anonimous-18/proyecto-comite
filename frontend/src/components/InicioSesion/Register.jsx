import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
            href="#"
            className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            <img className="w-11 h-11 mr-2" src="https://placekitten.com/100/100" alt="logo"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-sky-300 from-blue-800">SE-JustApp</span>
            
          </a>
          <div className="w-full bg-gradient-to-r from-blue-600 to-blue-900 border-4  border-x-sky-300 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white italic underline uppercase">
                Crear cuenta
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
              <div>
                  <label
                    
                    className="block mb-2 text-sm font-medium text-gray-100 dark:text-white">
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="nom"
                    id="nom"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    
                    required=""
                  />
                </div>
                <div>
                  <label
                    
                    className="block mb-2 text-sm font-medium text-gray-100 dark:text-white">
                    Apellido
                  </label>
                  <input
                    type="text"
                    name="ape"
                    id="ape"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    
                    required=""
                  />
                </div>
                <div>
                  <label
                    
                    className="block mb-2 text-sm font-medium text-gray-100 dark:text-white">
                    Correo
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    
                    required=""
                  />
                </div>
                <div>
                  <label
                    
                    className="block mb-2 text-sm font-medium text-gray-100 dark:text-white">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                <div>
                  <label
                    className="block mb-2 text-sm font-medium text-gray-100 dark:text-white">
                    Confirmar contraseña
                  </label>
                  <input
                    type="confirm-password"
                    name="confirm-password"
                    id="confirm-password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                    <label
                
                      className="font-light text-gray-100 dark:text-gray-300">
                      Acepta los{" "}
                      <a
                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                        href="#">
                        terminos y condiciones
                      </a>
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className=" place-items-center flex flex-col items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-400 to-blue-600 group-hover:from-cyan-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-sky-500 dark:focus:ring-blue-800">
                  <span className="relative px-11 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Crear cuenta Invitado
                  </span>
                </button>
                <p className="text-sm font-light text-gray-100 dark:text-gray-400">
                  ¿Ya tienes cuenta?{" "}
                  <Link
                    to={`/`}
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                    Inicion de sesion
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
