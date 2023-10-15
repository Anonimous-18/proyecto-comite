import DefaultLayout from "../../../Layout/DefaultLayout";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useContextApp } from "../../../Context/ContextApp";

export const FormularioRoles = () => {
  const [nombre, setNombre] = useState(null);
  const [permisos, setPermisos] = useState([]);
  const [selectedValues, setSelectedValues] = useState([]);

  // Función para manejar el cambio de un checkbox
  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    // Si el checkbox está marcado, agrega el valor al array de selección
    if (checked) {
      setSelectedValues([...selectedValues, value]);
    } else {
      // Si el checkbox está desmarcado, elimina el valor del array de selección
      const updatedValues = selectedValues.filter((item) => item !== value);
      setSelectedValues(updatedValues);
    }
  };
  const { params, id } = useParams();
  const {
    createRoles,
    updateRoles,
    validateToken,
    protectedRoutes,
    getPermisos,
    asignarPermisos
  } = useContextApp();
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
    const cargarPermisos = async () => {
      const token = JSON.parse(localStorage.getItem("newToken"));
      const res = await getPermisos(token.token);
      if (res) {
        setPermisos(res);
      }
    };
    cargarPermisos();
  }, [navigate, tokenExist, validateToken]);

  const onChange = (e) => {
    setNombre(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const admin = localStorage.getItem("admin");
    const token = JSON.parse(localStorage.getItem("newToken"));
    console.log(selectedValues);

    if (admin && nombre.length !== 0) {
      if (params && id) {
        await updateRoles(token.token, id, { nombre });
        navigate(-1);
      } else {
        await createRoles(token.token, { nombre });
        await asignarPermisos(token.token, { rol:nombre, permisosNombres:permisos })
        navigate(-1);
      }
    } else {
      navigate(`/home`);
    }
  };
  return (
    <DefaultLayout>
      <form
        className="w-full flex justify-center"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="w-full md:w-4/6 shadow-lg shadow-zinc-400  p-4  font-medium text-gray-900 border rounded-xl text-5xl">
          <h2 className="mb-4 font-bold text-blue-800 flex flex-col items-center ">
            Crear Rol
          </h2>
          <div className="w-full flex">
            <div className="border-r-2 p-5 w-1/3">
              <label
                htmlFor="first_name"
                className="block mb-2 font-medium text-gray-900 dark:text-gray-300 text-3xl"
              >
                Rol
              </label>
              <input
                type="text"
                id="first_name"
                onChange={(e) => onChange(e)}
                className="bg-gray-50  border-gray-500 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Nombre del nuevo rol"
                required
              />
            </div>
            <div className="flex flex-col w-3/6 border-r-2">
              {permisos.map((e,i) => (
                <div className="flex  w-full p-5" key={i}>
                  <label htmlFor={`${e}`} className="w-44 text-2xl">{e}</label>
                  <input type="checkbox" className="h-10 w-10" name={`${e}`} id={`${e}`} value={`${e}`} onChange={handleCheckboxChange} />
                </div>
              ))}
            </div>
          </div>

          <div className="p-2 sm:col-span-2 flex flex-row place-content-center">
            <div>
              <button className="right-0 ml-3 relative inline-flex items-center rounded-md border border-transparent bg-blue-700 px-10 py-2 text-lg font-bold  text-white shadow-xl transition duration-300 ease-in-out hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2">
                Crear Rol
              </button>
            </div>
          </div>
        </div>
      </form>
    </DefaultLayout>
  );
};
