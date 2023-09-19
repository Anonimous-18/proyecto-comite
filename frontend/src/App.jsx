import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ContextAppProvider } from "./Context/ContextApp";
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

import Prueba from "./components/pruebas/Prueba";
import { RolesDetails } from "./components/Roles/RolesDetails";
import { SolicitudComite } from "./components/util/SolicitudComite";

function App() {
  return (
    <ContextAppProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/recuperacion-contraseña" element={<Recuperacion />} />
        <Route path="/pruebas" element={<Prueba />} />
        <Route path="/votoinstructor" element={<Votoinstructor/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/homeaprendiz" element={<Home_Aprendiz />} />
        <Route path="/homeinvitado" element={<Homeinvitado />} />
        <Route path="/homeinstructor" element={<Homeinstructor />} />
        <Route path="/homesubdirector" element={<Homesubdirector />}/>
        <Route path="/reglamento" element={<Reglamento />} />
        <Route path="/infocomiteinstrutor" element={<Informacioncomiteinst/>}/>
        <Route path="/impugnacionesaprendiz"element={<ImpugnacionesAprendiz />}/>
        <Route path="/pruebaaprendiz" element={<Pruebas_Aprendiz />} />
        <Route path="/solicitudinstructor" element={<SolicitudIntructor/>}/>
        <Route path="/novedadinvitado" element={<NovedadInvitado />} />

        <Route path="/roles" element={<Roles />} />
        <Route path="/form-roles" element={<FormularioRoles />} />
        <Route path="/form-roles/:params/:id" element={<FormularioRoles />} />
        <Route path="/see-roles/:id" element={<RolesDetails />} />
        <Route path="/solicitud-comite" element={<SolicitudComite />} />
      </Routes>
    </ContextAppProvider>
  );
}

export default App;
