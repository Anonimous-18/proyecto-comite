import { Table } from "../../components/Tabla/Table";
import { NavBar } from "../../Layout/NavBar";
import { Footer } from "../../Layout/Footer";
import { useNavigate } from "react-router-dom";
import { useContextApp } from "../../Context/ContextApp";
import { useEffect, useState } from "react";

export const Roles = () => {
  const [roles, setRoles] = useState([]);
  const { getRoles, filterRol, protectedRoutes, validateToken, deleteRoles, getRolesById } =
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
      } else {
        setTimeout(() => {
          navigate(`/home`);
        }, 1000);
      }
    }
  }, [navigate, tokenExist, filterRol, getRoles, validateToken]);

  if (roles.length !== 0) {
    return (
      <>
        <NavBar />
        <Table datos={roles} fun_ver={getRolesById} fun_eliminar={deleteRoles} nombre_tabla={"roles"}/>;
        <Footer />
      </>
    );
  } else {
    return <div>NO AUTORIZADO</div>;
  }
};
