import DefaultLayout from "../../../Layout/DefaultLayout";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useContextApp } from "../../../Context/ContextApp";

export const FormularioRoles = () => {
  const [nombre, setNombre] = useState({
    nombre: "",
  });
  const { params, id } = useParams();
  const { createRoles, updateRoles, validateToken, protectedRoutes } =
    useContextApp();
  const tokenExist = protectedRoutes();
  const navigate = useNavigate();

  useEffect(() => {
    if (!tokenExist) {
      navigate(`/`);
    } else if (validateToken()) {
      navigate(`/`);
    } else if (!localStorage.getItem("admin")) {
      navigate(`/home`);
    }
  }, [navigate, tokenExist, validateToken]);

  const onChange = (e) => {
    setNombre({
      ...nombre,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const admin = localStorage.getItem("admin");
    const token = JSON.parse(localStorage.getItem("newToken"));

    if (admin) {
      if (nombre.length !== 0) {
        if (params && id) {
          await updateRoles(token.token, id, nombre);
          navigate(-1);
        } else {
          await createRoles(token.token, nombre);
          navigate(-1);
        }
      }
    } else {
      navigate(`/home`);
    }
  };

  return (
    <DefaultLayout>
      <div className="h-full w-full md:w-1/2">
        <form>
          <div className="shadow-lg shadow-zinc-400  p-4 rounded-xl text-sm font-medium text-gray-900">
            <h2 className="mb-4 text-xl font-bold text-blue-800 flex flex-col items-center">
              Crear Rol
            </h2>
            <div>
              <div>
                <label
                  for="first_name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Nombre rol
                </label>
                <input
                  type="text"
                  id="first_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="John"
                  required
                />
              </div>
            </div>
            <div className="p-2 sm:col-span-2 flex flex-row place-content-center">
              <div>
                <button className="right-0 ml-3 relative inline-flex items-center rounded-md border border-transparent bg-blue-700 px-10 py-2 text-xs font-bold text-white shadow-xl transition duration-300 ease-in-out hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2">
                  Crear Solicitud
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </DefaultLayout>
  );
};
