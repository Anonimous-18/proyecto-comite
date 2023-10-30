import { useContextApp } from "../../Context/ContextApp";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {BsSkipBackwardCircle} from"react-icons/bs"

export const Register1 = () => {
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
        navigate(`/home`);
      }
    }
  };

  return (
    <>
      <section className="bg-while-500 dark:bg--900 mt-11 mb-11 flex flex-col items-center justify-center">
        <form
          className="w-full max-w-lg bg-gray-100 p-8 shadow-black border-blue-700 border-2 rounded-lg shadow-xl"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="flex flex-row -mx-3 mb-6">
            <div className="w-full px-3">
              <Link
                to={`/login`}
                className="font-medium text-primary-600 hover:underline text-blue-800 text-2xl"
              >
                <BsSkipBackwardCircle/>
              </Link>
            </div>
            <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-blue-800 text-lg font-bold mb-2">
                Registrate!
              </label>
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3  ">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                tipo documento
              </label>
              <select
                onChange={(e) => onChange(e)}
                id="tipo_documento"
                name="tipo_documento"
                value={data.tipo_documento}
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-blue-200 focus:border-blue-500"
              >
                <option value="CC">Cedula de Ciudadania</option>
                <option value="TI">Tarjeta de Identidad</option>
                <option value="CE">Cedula de Extranjeria</option>
                <option value="PASAPORTE">Pasaporte</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Número de documento
              </label>
              <input
                onChange={(e) => onChange(e)}
                name="documento"
                id="documento"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-blue-200 focus:border-blue-500"
                type="text"
                placeholder="XXX XXXX XXXX XXXX"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Nombre completo
              </label>
              <input
                type="text"
                onChange={(e) => onChange(e)}
                name="nombre_completo"
                id="nom"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-blue-200 focus:border-blue-500"
                placeholder=""
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                telefono
              </label>
              <input
                type="number"
                onChange={(e) => onChange(e)}
                name="telefono"
                id="telefono"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-blue-200 focus:border-blue-500"
                placeholder="300000000"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Correo
              </label>
              <input
                type="email"
                onChange={(e) => onChange(e)}
                name="email"
                id="email"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-blue-200 focus:border-blue-500"
                placeholder="correo@ejemplo.com"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                contraseña
              </label>
              <input
                type="password"
                onChange={(e) => onChange(e)}
                name="contrasenia"
                id="contra"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-blue-200 focus:border-blue-500"
                placeholder="****************"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Dependencia
              </label>
              <input
                type="text"
                onChange={(e) => onChange(e)}
                name="dependencia"
                id="dep"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-blue-200 focus:border-blue-500"
                placeholder=""
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                cargo
              </label>
              <input
                type="text"
                onChange={(e) => onChange(e)}
                name="cargo"
                id="cargo"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-blue-200 focus:border-blue-500"
                placeholder=""
              />
            </div>
            <div className="w-full md:w1/2 px-3">
              <div className="w-full px-3">
                <button
                  type="submit"
                  className=" hover:bg-blue-600 appearance-none block w-full bg-blue-400 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight "
                >
                  <span className="w-full px-3">Crear cuenta invitado</span>
                </button>
              </div>
              <div className="w-full px-3">
                <p className="text-sm font-light text-gray-800 dark:text-gray-400">
                  ¿Tienes cuanta?{" "}
                  <Link
                    to={`/`}
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500  text-blue-800"
                  >
                    ingresar
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};
