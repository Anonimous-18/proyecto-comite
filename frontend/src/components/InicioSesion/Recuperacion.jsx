import { Link } from "react-router-dom";
import { useState } from "react";
import { useContextApp } from "../../Context/ContextApp";

const Recuperacion = () => {
  const [loading, setLoading] = useState(false);
  const { resetPassword } = useContextApp();
  const [email, setEmail] = useState({
    email: "",
  });
  const onChange = (e) =>
    setEmail({
      ...email,
      [e.target.name]: e.target.value,
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email) {
      setLoading(true);
      const result = await resetPassword(email);
      console.log(result);

      if (result) {
        setLoading(false);
        alert("MIRE SU CORREO");
      } else {
        setLoading(false);
        alert("EL CORREO NO EXISTE");
      }
    }
  };
  return (
    <div className="bg-black h-screen w-full">
      <section className="bg-gray-50 ">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-gradient-to-r bg-blue-800  rounded-lg  dark:border md:mt-0 sm:max-w-md xl:p-0 shadow-xl  ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-1">
              <h3 className=" text-center mt-4 mb-4 text-sm font-extrabold text-white md:text-5xl lg:text-3xl">
                {" "}
                Recuperacion de contraseña
                <span className="text-transparent bg-clip-text bg-gradient-to-r to-sky-500 from-sky-400">
                  {" "}
                  SE-JustApp
                </span>
              </h3>

              <form
                onSubmit={(e) => handleSubmit(e)}
                className="space-y-4 md:space-y-6"
              >
                <div className="bg-white w-full h-full sm:p-7 border-blue-700 border-2 rounded-lg place-items-center items-center justify-center">
                  <div>
                    <label className="block mb-2 pt-4 text-sm font-medium text-gray-900 ">
                      Digite el correo registrado:
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
                  <br />
                  {loading ? (
                    <></>
                  ) : (
                    <button
                      type="submit"
                      className=" place-items-center flex flex-col items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-blue-600 to-blue-800 group-hover:from-blue-600 group-hover:to-blue-800 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-sky-500 dark:focus:ring-blue-800"
                    >
                      <span className="relative px-11 py-2.5 transition-all ease-in duration-75 bg-blue-500 text-white rounded-md group-hover:bg-opacity-0">
                        Registrar
                      </span>
                    </button>
                  )}
                  <p className="text-sm font-light text-gray-700  pt-1 pb-2">
                    ¿Ya tienes cuenta?{" "}
                    <Link
                      to={`/`}
                      className="font-medium text-primary-600 hover:underline text-blue-800"
                    >
                      Regresar a login
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Recuperacion;
