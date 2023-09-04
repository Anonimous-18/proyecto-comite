import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContextApp } from "../../Context/ContextApp";

export const Login = () => {
  const { isLogged, protectedRoutes } = useContextApp();
  const tokenExist = protectedRoutes();
  const navigate = useNavigate();

  useEffect(() => {
    if (tokenExist) {
      navigate(`/home`);
    }
  }, [navigate, tokenExist]);

  const [data, setData] = useState({
    email: "",
    contrasenia: "",
  });
  const [err, setErr] = useState(false);

  console.log(`LOGIN: ${localStorage.getItem("newToken")}`);
  console.log(localStorage.getItem("newToken"));

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await isLogged(data);
    if (response) {
      navigate(`/home`);
    }
    setErr(true);
    setTimeout(() => {
      setErr(false);
    }, 2000);
    console.log(err);
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
            <div className="text-ls font-bold w-96 -h-60 text-center text-white">
              Error
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center px-6 py-4 mx-auto md:h-screen lg:py-0">
            
            <div className="w-auto rounded-lg  dark:border md:mt-0 sm:max-w-md xl:p-0 shadow-xl bg-blue-800">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-1">
              <h3 class=" text-center mt-4 mb-4 text-sm font-extrabold text-white md:text-5xl lg:text-xl"> Bienvenido a <span class="text-transparent bg-clip-text bg-gradient-to-r to-sky-500 from-sky-400">SE-JustApp</span></h3>
                <form
                  onSubmit={(e) => handleSubmit(e)}
                  className="space-y-4 md:space-y-6"
                >
                  <div className="bg-white w-full h-full sm:p-7 border-blue-700 border-2 rounded-lg">
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 ">
                        Correo
                      </label>
                      <input
                        type="email"
                        name="email"
                        onChange={(e) => onChange(e)}
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                        required=""
                      />
              
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 ">
                        Contraseña:
                      </label>
                      <input
                        type="password"
                        name="contrasenia"
                        onChange={(e) => onChange(e)}
                        id="password"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                        required=""
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      
                      
                      <Link
                        to={`/recuperacion-contraseña`}
                        className=" text-blue-800 text-sm font-medium text-primary-600 hover:underline pt-3 pb-4"
                      >
                        ¿Olvidaste tu contraseña?
                      </Link>
                    </div>
                    <button
                      type="submit"
                      className=" place-items-center flex flex-col items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-blue-600 to-blue-800 group-hover:from-blue-600 group-hover:to-blue-800 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-sky-500 dark:focus:ring-blue-800"
                    >
                      <span className="relative px-11 py-2.5 transition-all ease-in duration-75 bg-blue-500 text-white rounded-md group-hover:bg-opacity-0">
                        Inicio de Sesion
                      </span>
                    </button>
                    <p className="text-sm font-light text-gray-700  pt-1 pb-2">
                      Tienes cuenta?{" "}
                      <Link
                        to={`/register`}
                        className="font-medium text-primary-600 hover:underline text-blue-800"
                      >
                        Registrarse
                      </Link>
                    </p>
                    </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};
