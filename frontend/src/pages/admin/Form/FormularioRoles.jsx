import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useContextApp } from "../../../Context/ContextApp";
import { FormularioRolesUI } from "./formularioRolesUI";

export const FormularioRoles = () => {
  const [nombre, setNombre] = useState(null);
  const [permisos, setPermisos] = useState([]);
  const [selectedValues, setSelectedValues] = useState([]);
  const { params, id } = useParams();
  const {
    createRoles,
    updateRoles,
    validateToken,
    protectedRoutes,
    getPermisos,
    asignarPermisos,
    getPermisosRol,
  } = useContextApp();
  const tokenExist = protectedRoutes();
  const navigate = useNavigate()

  // Función para manejar el cambio de un checkbox
  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    // Si el checkbox está marcado, agrega el valor al array de selección
    if (checked) {
      console.log(selectedValues);
      setSelectedValues([...selectedValues, value]);
    } else {
      // Si el checkbox está desmarcado, elimina el valor del array de selección
      const updatedValues = selectedValues.filter((item) => item !== value);
      setSelectedValues(updatedValues);
    }
  };;

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
      const res2 = await getPermisosRol(token.token, 10);
      console.log(res2);
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
        console.log(selectedValues);
        await asignarPermisos(token.token, {
          rol: nombre,
          permisosNombres: selectedValues,
        });
        navigate(-1);
      }
    } else {
      navigate(`/home`);
    }
  };
  return (
    <FormularioRolesUI
      nombre={nombre}
      permisos={permisos}
      selectedValues={selectedValues}
      handleCheckboxChange={handleCheckboxChange}
      onChange={onChange}
      handleSubmit={handleSubmit}
      params={params}
      rol={id}
    />
  );
};
