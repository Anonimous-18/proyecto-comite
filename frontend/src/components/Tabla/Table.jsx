import { NavBar } from "../../Layout/NavBar";
import { Footer } from "../../Layout/Footer";
import { useNavigate } from "react-router-dom";
import { useContextApp } from "../../Context/ContextApp";
import { useEffect, useState } from "react";

export const Table = () => {
  const [roles, setRoles] = useState();
  const { getRoles, filterRol, protectedRoutes, validateToken } =
    useContextApp();
  const navigate = useNavigate();
  const tokenExist = protectedRoutes();

  useEffect(() => {
    if (!tokenExist) {
      navigate(`/`);
    } else if (validateToken()) {
      navigate(`/`);
    } else {
      const token = JSON.parse(localStorage.getItem("newToken"));
      const admin = localStorage.getItem("admin");
      if (admin) {
        const getRol = async () => {
          const res = await getRoles(token.token);
          if (res !== null || res !== undefined) {
            setRoles(res);
          }
        };

        getRol();
      }
    }
  }, [navigate, tokenExist, filterRol, getRoles, validateToken]);

  return (
    <>
      <NavBar />
      <div className="h-full w-full mt-28">
        {/* <ul>

        {
            roles.map((rol.id) => (
                <li key={id}></li>
                ))
            }
            </ul> */}
      </div>
      <Footer />
    </>
  );
};
