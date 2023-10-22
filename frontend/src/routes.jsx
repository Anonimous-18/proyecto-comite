import { Routes,Route } from "react-router-dom";

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
import DefaultLayout from "./Layout/DefaultLayout";
import { Antecedente } from "./pages/subdirector/Antecedente";
import { Notificaciones } from "./components/util/Notificaciones";
import { Historiacomite } from "./components/util/Historiacomite";
import { TablaAntencedentesInstructor } from "./pages/instructor/TablaAntencedentesInstructor";
import { NovedadInstructor } from "./pages/instructor/NovedadInstructor";
import { HomeGestor } from "./pages/gestorcomite/homegestor";
import Prueba from "./components/pruebas/Prueba";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/recuperacion-contraseña" element={<Recuperacion />} />
      <Route path="/pruebas" element={<Prueba />} />
      <Route path="/home" element={<Home />} />
      <Route path="/homeaprendiz" element={<Home_Aprendiz />} />
      <Route path="/home-invitado" element={<Homeinvitado />} />
      <Route path="/homeinstructor" element={<Homeinstructor />} />
      <Route path="/voto-comite/:comite" element={<Votoinstructor />} />
      <Route path="/homesubdirector" element={<Homesubdirector />} />
      <Route path="/novedades-instructor" element={<NovedadInstructor />} />
      <Route path="/reglamento" element={<Reglamento />} />
      <Route path="/infocomiteinstrutor/:comite_id" element={<Informacioncomiteinst />} />
      <Route path="/impugnacionesaprendiz" element={<ImpugnacionesAprendiz />} />
      <Route path="/pruebaaprendiz" element={<Pruebas_Aprendiz />} />
      <Route path="/solicitudinstructor" element={<SolicitudIntructor />} />
      <Route path="/novedadinvitado" element={<NovedadInvitado />} />
      <Route path="/infocomitesub" element={<Infocomitesub />} />
      <Route path="/roles" element={<Roles />} />
      <Route path="/antecedentes" element={<TablaAntencedentesInstructor />} />
      <Route path="/form-roles" element={<FormularioRoles />} />
      <Route path="/form-roles/:params/:id" element={<FormularioRoles />} />
      <Route path="/see-roles/:id" element={<RolesDetails />} />
      <Route path="/solicitud-comite-instructor" element={<SolicitudIntructor />} />
      <Route path="/Antecedenteaprendiz/:id" element={<Antecedente />} />
      <Route path="/notificaciones/:usuario" element={<Notificaciones />} />
      <Route path="/historiasdecomite" element={<Historiacomite />} />
      <Route path="/home-gestor" element={<HomeGestor />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default Router;
