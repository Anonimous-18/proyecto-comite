import { useContextApp } from "../../Context/ContextApp";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Register = () => {
  const { protectedRoutes, registerUser } = useContextApp();
  const tokenExist = protectedRoutes();
  const navigate = useNavigate();

  const [data, setData] = useState({
    tipo_documento: "CC",
    documento: "",
    nombre_completo: "",
    cargo: "",
    email: "",
    telefono: "",
    dependencia: "",
    contrasenia: "",
    rol_id: null,
  });

  useEffect(() => {
    if (tokenExist) {
      navigate(`/home`);
    }
  }, [navigate, tokenExist]);

  const onChange = (e) =>
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (data) {
      const result = await registerUser(data);

      if (result) {
        navigate(`/home`)
      }
    }
  };

  return (
    <>
      <section className="bg-while-500 dark:bg--900 mt-11 mb-11 flex flex-col items-center justify-center">
        {" "}
        {/* color de fondo de toda la pagina */}
        <div className="flex flex-col items-center justify-center px-6 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="mb-4 text-xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"></a>

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

              <form
                className="space-y-4 md:space-y-6"
                onSubmit={(e) => handleSubmit(e)}>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 ">
                    Tipo de Documento
                  </label>
                  <select
                    onChange={(e) => onChange(e)}
                    id="tipo_documento"
                    name="tipo_documento"
                    value={data.tipo_documento}
                    required
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 ">
                    <option value="CC">Cedula de Ciudadania</option>
                    <option value="TI">Tarjeta de Identidad</option>
                    <option value="CE">Cedula de Extranjeria</option>
                    <option value="PASAPORTE">Pasaporte</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Numero de documento
                  </label>
                  <input
                    type="text"
                    onChange={(e) => onChange(e)}
                    name="documento"
                    id="documento"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                    placeholder="Numero de documento"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    onChange={(e) => onChange(e)}
                    name="nombre_completo"
                    id="nom"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                    placeholder="Nombre"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Cargo
                  </label>
                  <input
                    type="text"
                    onChange={(e) => onChange(e)}
                    name="cargo"
                    id="cargo"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Cargo"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    onChange={(e) => onChange(e)}
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Email"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Telefono
                  </label>
                  <input
                    type="number"
                    onChange={(e) => onChange(e)}
                    name="telefono"
                    id="telefono"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Telefono"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Dependencia
                  </label>
                  <input
                    type="text"
                    onChange={(e) => onChange(e)}
                    name="dependencia"
                    id="dep"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Dependencia"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    onChange={(e) => onChange(e)}
                    name="contrasenia"
                    id="contra"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Contraseña"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className=" place-items-center flex flex-col items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-blue-600 to-white group-hover:from-blue-600 group-hover:to-blue-800 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-sky-500 dark:focus:ring-blue-800">
                  <span className="relative px-11 py-2.5 transition-all ease-in duration-75 bg-blue-500 text-white rounded-md group-hover:bg-opacity-0">
                    Crear cuenta invitado
                  </span>
                </button>
                {/*  */}
                <p className="text-sm font-light text-gray-200 dark:text-gray-400">
                  ¿Tienes cuanta?{" "}
                  <Link
                    to={`/`}
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500  text-gray-800">
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
