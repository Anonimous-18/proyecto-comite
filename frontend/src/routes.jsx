import { Routes, Route, Navigate } from "react-router-dom";
import { useContextApp } from "./Context/ContextApp";
import { useEffect } from "react";
import jwt_decode from "jwt-decode";

import { Reglamento } from "./components/Reglamento/Reglamento";
import { Homesubdirector } from "./pages/subdirector/homesubdirector";
import { Login } from "./components/InicioSesion/Login";
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
import { Spinner } from "./components/util/Spinner";
import Prueba from "./components/pruebas/Prueba";
import { CitacionAprendiz } from "./components/util/CitacionAprendiz";

import { Register1 } from "./components/InicioSesion/Register1";
import { Login1 } from "./components/InicioSesion/Login1";

import { Example } from "./components/tailwind/overscrollX";

const Router = () => {
  const { usuario, decode } = useContextApp();
  let usuarioRoles = usuario;
  const rutaOpcion = {
    1: "/roles",
    2: "/homeinstructor",
    3: "/home-invitado",
  };
  let ruta = rutaOpcion[usuario.rol_id] || "/";
  console.log(ruta);

  useEffect(() => {
    if (sessionStorage.getItem("Datos")) {
      const token = decode(sessionStorage.getItem("Datos"));
      const usuarioToken = jwt_decode(token);
      if (usuarioToken) {
        usuarioRoles = usuarioToken.user;
        ruta = rutaOpcion[usuarioRoles.rol_id.toString()] || "/";
      }
    }
  }, [location.pathname]);

  return (
    <>
      {usuarioRoles && Object.keys(usuarioRoles).length > 0 ? (
        <Routes>
          {/* RUTA PARA PROBAR LOS COMPONENTES PREMIUM DE TAILWINDCSS UBICADOS EN: src/components/tailwind */}
          <Route path="/test" element={<Example />} />

          <Route path="/recuperacion-contraseña" element={<Recuperacion />} />
          <Route path="/" element={<Login />} />
          <Route
            path="/"
            element={
              <RutasProtegidas                // Por acomodar
                permitido={false}
                redireccionaA={`${ruta}`}
              />
            }
          >
            <Route path="/recuperacion-contraseña" element={<Recuperacion />} />
            <Route path="/" element={<Login />} />
            <Route path="/register-1" element={<Register1 />} />
          </Route>
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
          <Route path="/citacion-aprendiz" element={<CitacionAprendiz />} />
          <Route path="/home" element={<Home />} />
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
          <Route path="/antecedente-aprendiz/:id" element={<Antecedente />} />
          <Route path="/notificaciones/:usuario" element={<Notificaciones />} />
          <Route path="/historiasdecomite" element={<Historiacomite />} />

          <Route path="/home-gestor" element={<HomeGestor />} />

          <Route path="/register-1" element={<Register1 />} />
          <Route path="/login-1" element={<Login1 />} />

          <Route path="*" element={<Navigate to={`${ruta}`} replace />} />
          <Route path="*/*" element={<Navigate to={`${ruta}`} replace />} />
          <Route path="*/*/*" element={<Navigate to={`${ruta}`} replace />} />
        </Routes>
      ) : (
        <>
          <Spinner></Spinner>
          <Routes>
            <Route path="/recuperacion-contraseña" element={<Recuperacion />} />
            <Route path="/" element={<Login />} />
            <Route path="/register-1" element={<Register1 />} />
          </Routes>
        </>
      )}
    </>
  );
};

export default Router;
