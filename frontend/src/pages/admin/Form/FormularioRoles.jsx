import { Footer } from "../../../Layout/Footer";
import { NavBar } from "../../../Layout/NavBar";
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
    <>
      <NavBar />

      <main className="mt-28 h-full w-full flex flex-col">
        <div className="mx-auto max-w-screen-xl pt-20 pb-32 sm:pt-48 sm:pb-40 ">
          <div className="h-auto max-w-full flex flex-col items-center  p-5 place-content-evenly rounded-2xl">
            <h1 className="mt-2  p-2 text-lg font-bold  text-blue-800  w-36 h-7 flex flex-col items-center rounded-l-lg pb-8">{params ? <>{params} Rol</> : <>Crear Rol</>}</h1>
            <form
              className="bg-gray-300 border-2 flex flex-col items-center p-2 rounded-lg "
              onSubmit={(e) => handleSubmit(e)}
            >
              <label>Nombre: </label>
              <input name="nombre" onChange={(e) => onChange(e)} type="text" className="rounded-lg p-2"/>
              <button className=" mt-2 place-items-center flex flex-col items-center justify-center p-2 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-blue-600 to-blue-800 group-hover:from-blue-600 group-hover:to-blue-800 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-sky-500 dark:focus:ring-blue-800" type="submit">
                {params ? <>{params}</> : <>Crear</>}
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
