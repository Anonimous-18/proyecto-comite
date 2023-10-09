import { Tab } from "../../components/Tabla/Tab";
import { useNavigate } from "react-router-dom";
import { useContextApp } from "../../Context/ContextApp";
import { useEffect, useState } from "react";
import DefaultLayout from "../../Layout/DefaultLayout";

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

  if (roles && roles.length !== 0) {
    return (
      <DefaultLayout>
        <Tab datos={roles} fun_ver={getRolesById} fun_eliminar={deleteRoles} nombre_tabla={"roles"}/>
      </DefaultLayout>
    );
  } else {
    return <div>NO AUTORIZADO</div>;
  }
};
