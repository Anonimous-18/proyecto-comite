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
    <div> culo </div>
  );
};
