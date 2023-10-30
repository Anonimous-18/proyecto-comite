import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {SlPeople} from"react-icons/sl";
import { useContextApp } from "../../Context/ContextApp";
import { Formik, Field, Form } from "formik";
import { BiErrorAlt } from "react-icons/bi";

export const Login1 = () => {
  const { isLogged, protectedRoutes, validateToken, filterRol } =
    useContextApp();
  const tokenExist = protectedRoutes();
  const navigate = useNavigate();

  useEffect(() => {
    if (tokenExist && !validateToken()) {
      if (localStorage.getItem("admin")) {
        navigate(`/roles`);
      } else if (localStorage.getItem("invitado")) {
        navigate(`/home-invitado`);
      } else if (localStorage.getItem("instructor")) {
        navigate(`/homeinstructor`);
      } else if (localStorage.getItem("aprendiz")) {
        navigate(`/homeaprendiz`);
      }
    }
  }, [navigate, tokenExist, validateToken, filterRol]);

  const [data, setData] = useState({
    documento: "",
    contrasenia: "",
  });
  const [err, setErr] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await isLogged(data);
    if (response) {
      const token = JSON.parse(localStorage.getItem("newToken"));

      const instructor = await filterRol(token.token, "Instructor");
      const aprendiz = await filterRol(token.token, "Aprendiz");
      const invitado = await filterRol(token.token, "Invitado");
      const admin = await filterRol(token.token, "Administrador");

      console.log("instructor", instructor);
      console.log("aprendiz", aprendiz);
      console.log("invitado", invitado);
      console.log("admin", admin);
      if (admin) {
        localStorage.setItem("admin", admin);
        navigate(`/roles`);
      } else if (invitado) {
        localStorage.setItem("invitado", invitado);
        navigate(`/home-invitado`);
      } else if (instructor) {
        localStorage.setItem("instructor", instructor);
        navigate(`/homeinstructor`);
      } else if (aprendiz) {
        localStorage.setItem("aprendiz", aprendiz);
        navigate(`/homeaprendiz`);
      }
    } else {
      setErr(true);
      setTimeout(() => {
        setErr(false);
      }, 3000);
      console.log(err);
    }
  };

  return (
    <>
      <section className="dalinComoFondo dark:bg-gray-900">
        {err ? (
          <div className="bg-opacity-95 absolute flex flex-col items-center justify-center px-6 py-8 mx-auto h-full w-full lg:py-0">
            <div className="text-ls font-bold w-96 h-60 flex flex-col justify-center items-center text-center">
              <div
                id="alert-additional-content-2"
                className="px-4 mb-4 text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800"
                role="alert"
              >
                <BiErrorAlt className=" w-64 h-36 md:h-auto  rounded-xl mx-auto border-2 " />
                <div className="mt-2 mb-4 text-sm">
                  Correo o contraseña incorrectas intente nuevamente
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="rounded py-16 px-12 m-16 flex flex-col items-center justify-center">
            <SlPeople className="rounded-full h-32 w-32 bg-blue-500 p-2 shadow-2xl "/>
            <Formik
              initialValues={{
                documento: "",
                contrasenia: "",
              }}
              onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 500));
                alert(JSON.stringify(values, null, 2));
              }}
            >
              {({ handleChange }) => (
                <Form className=" bg-gray-200 p-5 rounded-md shadow-xl mt-2 mb-4" onSubmit={(e) => handleSubmit(e)}>
                  <div className="mb-4">
                    <div>
                      <label className="flex flex-col items-center justify-center">Numero de Documento</label> 
                    </div>
                    
                    <Field
                      className="border-solid border border-gray-400 rounded px-2 py-3"
                      type="number"
                      autoFocus
                      name="documento"
                      id="documento"
                      required
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <div>
                      <label className="flex flex-col items-center justify-center">Contraseña</label>
                    </div>
                    
                    <Field
                      className="border-solid border border-gray-400 rounded px-2 py-3"
                      type="password"
                      name="contrasenia"
                      id="password"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="my-4 flex items-center">
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
                      to={`/register-1`}
                      className="font-medium text-primary-600 hover:underline text-blue-800"
                    >
                      Registrarse
                    </Link>
                  </p>
                </Form>
              )}
            </Formik>
          </div>
        )}
      </section>
    </>
  );
};
