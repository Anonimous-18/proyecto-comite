import { NavBar } from "../../Layout/NavBar";
import { Footer } from "../../Layout/Footer";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useContextApp } from "../../Context/ContextApp";

export const Home = () => {
  const { validateToken, protectedRoutes } = useContextApp();
  const navigate = useNavigate();
  const tokenExist = protectedRoutes();

  useEffect(() => {
    window.scroll(0, 0);
    if (!tokenExist) {
      navigate(`/`);
    } else if (validateToken()) {
      navigate(`/`);
    } else if (localStorage.getItem("invitado")) {
      navigate(`/home-invitado`);
    } else if (localStorage.getItem("instructor")) {
      navigate(`/homeinstructor`);
    } else if (localStorage.getItem("aprendiz")) {
      navigate(`/homeaprendiz`);
    }
  }, [navigate, tokenExist, validateToken]);

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex justify-center items-center h-4/5 w-2/3 text-8xl text-white animate-pulse transform rotate-3 py-4 px-6 rounded-lg bg-gradient-to-r from-blue-400 to-blue-600 shadow-xl border-4 border-double tracking-wider hover:text-gray-200 hover:scale-105 hover:rotate-6 transition-all duration-300 mix-blend-overlay hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 hover:shadow-2xl 3d rotate-x-12 rotate-y-12 rotate-z-12">
        {" "}
        <span className="animate-bounce">Cargando</span>
      </div>
    </div>
  );
};
