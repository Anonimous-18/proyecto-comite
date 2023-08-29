import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContextApp } from "../../Context/ContextApp";

export const Login = () => {
  const [data, setData] = useState({
    email: "",
    contrasenia: "",
  });
  const [err, setErr] = useState(false);

  const navigate = useNavigate();
  const { isLogged } = useContextApp();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await isLogged(data);
    if (response) navigate(`/home`);
    setErr(true);
    setTimeout(() => {
      setErr(false);
    }, 2000);
  };

  // const { email, contrasenia } = data;

  const onChange = (e) =>
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });

  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900">
        {err ? (
          <div className="bg-teal-500 absolute flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="text-ls font-bold w-96 h-60 text-center text-white">
              Error
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a
              href="#"
              className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
              <img
                className="w-11 h-11 mr-2"
                src="https://placekitten.com/100/100"
                alt="logo"
              />
              <span className="text-transparent bg-clip-text bg-gradient-to-r to-sky-300 from-blue-800">
                SE-JustApp
              </span>
            </a>
            <div className="w-full bg-gradient-to-r from-cyan-200 to-blue-700 border-4  border-x-sky-300  rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white italic underline">
                  Inicio de sesion
                </h1>
                <form
                  onSubmit={(e) => handleSubmit(e)}
                  className="space-y-4 md:space-y-6">
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Correo:
                    </label>
                    <input
                      type="email"
                      name="email"
                      onChange={(e) => onChange(e)}
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Contraseña:
                    </label>
                    <input
                      type="password"
                      name="contrasenia"
                      onChange={(e) => onChange(e)}
                      id="password"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="remember"
                          aria-describedby="remember"
                          type="checkbox"
                          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                          required=""
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label className="text-gray-500 dark:text-gray-300">
                          Recuerdame
                        </label>
                      </div>
                    </div>
                    <a
                      href="#"
                      className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
                      ¿Olvidaste tu contraseña?
                    </a>
                  </div>
                  <button
                    type="submit"
                    className=" place-items-center flex flex-col items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-400 to-blue-600 group-hover:from-cyan-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-sky-500 dark:focus:ring-blue-800">
                    <span className="relative px-11 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      Inicio de Sesion
                    </span>
                  </button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Tienes cuenta?{" "}
                    <Link
                      to={`/register`}
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                      Registrarse
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};
