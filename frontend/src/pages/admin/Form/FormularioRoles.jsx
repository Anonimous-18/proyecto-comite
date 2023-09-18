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
      <main className="mt-28 h-full w-full flex">
        <h1>{params ? <>{params} Rol</> : <>crear Rol</>}</h1>
        <form
          className="bg-rose-500 flex flex-col items-center"
          onSubmit={(e) => handleSubmit(e)}
        >
          <label>Nombre: </label>
          <input name="nombre" onChange={(e) => onChange(e)} type="text" />
          <button className="bg-green-500 p-3" type="submit">
            {params ? <>{params}</> : <>crear</>}
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
};