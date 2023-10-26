import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContextApp } from "../../Context/ContextApp";
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

  // const { email, contrasenia } = data;

  const onChange = (e) =>
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  return (
    <>
      <div class="bg-gray-200 rounded py-16 px-12 m-16 flex flex-col items-center justify-center">
        <img
          class="rounded-full h-32 w-32"
          src="https://ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="user avatar"
        />
        <form method="post" class="mt-8 mb-4">
          <div class="mb-4">
            <label for="userEmail" class="sr-only">
              Email address
            </label>
            <input
              class="border-solid border border-gray-400 rounded px-2 py-3"
              type="email"
              id="userEmail"
              placeholder="Email address"
              required
            />
          </div>
          <div>
            <label for="userEmail" class="sr-only">
              Password
            </label>
            <input
              class="border-solid border border-gray-400 rounded px-2 py-3"
              type="password"
              id="userPass"
              placeholder="Password"
              required
            />
          </div>
          <div class="my-4 flex items-center">
            <input class="h-4 w-4 mr-2" type="checkbox" id="userRemember" />
            <label for="userRemember">Remember me</label>
          </div>
          <button
            class="bg-gray-500 hover:bg-gray-600 text-white font-bold w-full py-3"
            type="submit"
          >
            Sign in
          </button>
        </form>
        <a href="#" class="self-start">
          Forgot the password?
        </a>
      </div>
    </>
  );
};
