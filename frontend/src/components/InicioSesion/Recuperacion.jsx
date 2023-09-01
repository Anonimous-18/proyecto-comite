import { useState } from "react";
import { useContextApp } from "../../context/ContextApp";
const Recuperacion = () => {
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
      const result = await resetPassword(email);

      console.log(result);
      if (result) {
        alert("MIRE SU CORREO");
      } else {
        console.log(result);
        alert("EL CORREO NO EXISTE");
      }
    }
  };
  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-gradient-to-r from-white   rounded-lg  dark:border md:mt-0 sm:max-w-md xl:p-0 shadow-xl dark:bg-gray-800 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 md:text-3xl dark:text-white italic text-center">
                Recuperacion de contraseña
              </h1>
              <form
                onSubmit={(e) => handleSubmit(e)}
                className="space-y-4 md:space-y-6">
                <div>
                  <label className="block mb-2 pt-4 text-sm font-medium text-gray-900 dark:text-white">
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
                <button
                  type="submit"
                  className="place-items-center flex flex-col bg-blue-700 items-center border justify-center  mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 bg- rounded-lg ">
                  <span className="relative px-11 py-2.5 transition-all ease-in duration-75 bg-blue-600 text-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Enviar
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Recuperacion;
