import { Routes, Route } from "react-router-dom";
import { useContextApp } from "./Context/ContextApp";
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";

import { Reglamento } from "./components/Reglamento/Reglamento";
import { Homesubdirector } from "./pages/subdirector/homesubdirector";
import { Login } from "./components/InicioSesion/Login";
import { Register } from "./components/InicioSesion/Register";
import Recuperacion from "./components/InicioSesion/Recuperacion";
import { Votoinstructor } from "./pages/instructor/votoinstructor";
import { Homeinvitado } from "./pages/invitado/Homeinvitado";
import { NovedadInvitado } from "./pages/invitado/NovedadInvitado";
import { Informacioncomiteinst } from "./pages/instructor/informacioncomiteinst";
import { Home_Aprendiz } from "./pages/aprendiz/home_Aprendiz";
import { ImpugnacionesAprendiz } from "./pages/aprendiz/ImpugnacionesAprendiz";
import { Pruebas_Aprendiz } from "./pages/aprendiz/Pruebas_Aprendiz";
import { SolicitudIntructor } from "./pages/instructor/solicitudinstructor";
import { Homeinstructor } from "./pages/instructor/homeinstructor";
import { Home } from "./pages/admin/Home";
import { Roles } from "./pages/admin/Roles";
import { FormularioRoles } from "./pages/admin/Form/FormularioRoles";
import { Infocomitesub } from "./pages/subdirector/infocomitesub";
import { RolesDetails } from "./components/Roles/RolesDetails";
import { Antecedente } from "./pages/subdirector/Antecedente";
import { Notificaciones } from "./components/util/Notificaciones";
import { Historiacomite } from "./components/util/Historiacomite";
import { TablaAntencedentesInstructor } from "./pages/instructor/TablaAntencedentesInstructor";
import { NovedadInstructor } from "./pages/instructor/NovedadInstructor";
import { HomeGestor } from "./pages/gestorcomite/homegestor";
import { RutasProtegidas } from "./components/RutasProtegidas/RutasProtegidas";
import Prueba from "./components/pruebas/Prueba";

const Router = () => {
  const { usuario,decode } = useContextApp();
  let usuarioRoles = usuario;

  useEffect(() => {
    if (sessionStorage.getItem("Datos")) {
      const token = decode(sessionStorage.getItem("Datos"));
      const usuarioToken = jwt_decode(token);
      if (usuarioToken) {
        usuarioRoles = usuarioToken.user; 
      }
    }
  }, [location.pathname]);

  return (
    <>
      {(usuarioRoles && Object.keys(usuarioRoles).length > 0) || location.pathname === "/" ? (
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route
            path="/"
            element={
              <RutasProtegidas
                permitido={!!usuarioRoles && usuarioRoles.rol_id === 1}
              />
            }
          >
            <Route path="roles" element={<Roles />} />
            <Route path="form-roles" element={<FormularioRoles />} />
            <Route
              path="/form-roles/:params/:id"
              element={<FormularioRoles />}
            />
            <Route path="/see-roles/:id" element={<RolesDetails />} />
            <Route path="/mi-perfil" element={<Roles />} />
          </Route>

          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/recuperacion-contraseña" element={<Recuperacion />} />
          <Route path="/pruebas" element={<Prueba />} />
          <Route path="/homeaprendiz" element={<Home_Aprendiz />} />
          <Route path="/home-invitado" element={<Homeinvitado />} />
          <Route path="/homeinstructor" element={<Homeinstructor />} />
          <Route path="/voto-comite/:comite" element={<Votoinstructor />} />
          <Route path="/homesubdirector" element={<Homesubdirector />} />
          <Route path="/novedades-instructor" element={<NovedadInstructor />} />
          <Route path="/reglamento" element={<Reglamento />} />
          <Route
            path="/infocomiteinstrutor/:comite_id"
            element={<Informacioncomiteinst />}
          />
          <Route
            path="/impugnacionesaprendiz"
            element={<ImpugnacionesAprendiz />}
          />
          <Route path="/pruebaaprendiz" element={<Pruebas_Aprendiz />} />
          <Route path="/solicitudinstructor" element={<SolicitudIntructor />} />
          <Route path="/novedadinvitado" element={<NovedadInvitado />} />
          <Route path="/infocomitesub" element={<Infocomitesub />} />
          <Route
            path="/antecedentes"
            element={<TablaAntencedentesInstructor />}
          />
          <Route
            path="/solicitud-comite-instructor"
            element={<SolicitudIntructor />}
          />
          <Route path="/Antecedenteaprendiz/:id" element={<Antecedente />} />
          <Route path="/notificaciones/:usuario" element={<Notificaciones />} />
          <Route path="/historiasdecomite" element={<Historiacomite />} />
          <Route path="/home-gestor" element={<HomeGestor />} />
        </Routes>
      ) : (
        <div className="mx-auto">Cargando...</div>
      )}
    </>
  );
};

export default Router;
