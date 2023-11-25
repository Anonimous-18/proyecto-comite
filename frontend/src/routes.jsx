/**---------------------------
 * | Importaciones generales
 * ---------------------------*/
import { useEffect } from "react";
import jwt_decode from "jwt-decode";
import { Routes, Route, Navigate } from "react-router-dom";

/**-----------------
 * | Para Todos
 * -----------------*/
import Prueba from "./components/pruebas/Prueba";
import { Spinner } from "./components/util/Spinner";
import { useContextApp } from "./Context/ContextApp";
import { Example } from "./components/tailwind/overscrollX";
import { Login } from "./components/InicioSesion/Login";
import { FichaList } from "./components/util/FichaList";
import { Register1 } from "./components/InicioSesion/Register1";
import { Reglamento } from "./components/Reglamento/Reglamento";
import Recuperacion from "./components/InicioSesion/Recuperacion";
import { RutasProtegidas } from "./components/RutasProtegidas/RutasProtegidas";

/**-----------------
 * | Instructor
 * -----------------*/
import { Notificaciones } from "./components/util/Notificaciones";
import { Historiacomite } from "./components/util/Historiacomite";
import { Homeinstructor } from "./pages/instructor/homeinstructor";
import { Votoinstructor } from "./pages/instructor/votoinstructor";
import { NovedadInstructor } from "./pages/instructor/NovedadInstructor";
import { SolicitudIntructor } from "./pages/instructor/solicitudinstructor";
import { Informacioncomiteinst } from "./pages/instructor/informacioncomiteinst";
import { TablaAntencedentesInstructor } from "./pages/instructor/TablaAntencedentesInstructor";

/**-----------------
 * | Admin
 * -----------------*/
import { Roles } from "./pages/admin/Roles";
import { RolesDetails } from "./components/Roles/RolesDetails";
import { FormularioRoles } from "./pages/admin/Form/FormularioRoles";

/**-----------------
 * | Aprendiz
 * -----------------*/
import { Home_Aprendiz } from "./pages/aprendiz/home_Aprendiz";
import { Pruebas_Aprendiz } from "./pages/aprendiz/Pruebas_Aprendiz";
import { CitacionAprendiz } from "./components/util/CitacionAprendiz";
import { ImpugnacionesAprendiz } from "./pages/aprendiz/ImpugnacionesAprendiz";

/**-----------------
 * | Subdirector
 * -----------------*/
import { Antecedente } from "./pages/subdirector/Antecedente";
import { Infocomitesub } from "./pages/subdirector/infocomitesub";
import { Homesubdirector } from "./pages/subdirector/homesubdirector";

/**-----------------
 * | Invitado
 * -----------------*/
import { Homeinvitado } from "./pages/invitado/Homeinvitado";
import { NovedadInvitado } from "./pages/invitado/NovedadInvitado";

/**-----------------
 * | Gestor
 * -----------------*/
import { HomeGestor } from "./pages/gestorcomite/homegestor";
import { Error404 } from "./components/util/erro404";
import { FormActa } from "./pages/gestorcomite/Formacta";

const Router = () => {
  const { usuario, decode } = useContextApp();
  let usuarioRoles = usuario;

  const rutaOpcion = {
    1: "/home-admin",
    2: "/home-instructor",
    3: "/home-invitado",
  };

  let ruta = rutaOpcion[usuario.rol_id] || "/";
  // //console.log(ruta);

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
          {/* Rutas Generales */}
          <Route path="/" element={<Login />} />
          <Route path="/test" element={<Example />} />
          <Route path="/pruebas" element={<Prueba />} />
          <Route path="/reglamento" element={<Reglamento />} />
          <Route path="/recuperacion-contraseña" element={<Recuperacion />} />
          <Route path="/antecedente-aprendiz/:id" element={<Antecedente />} />
          <Route path="/register" element={<Register1 />} />
          <Route
            path="/"
            element={
              <RutasProtegidas permitido={false} redireccionaA={`${ruta}`} />
            }
          >
            <Route path="/recuperacion-contraseña" element={<Recuperacion />} />
          </Route>
          <Route path="/historiasdecomite" element={<Historiacomite />} />
          <Route path="/notificaciones/:usuario" element={<Notificaciones />} />

          {/* Rutas de Administrador */}
          <Route
            path="/"
            element={
              <RutasProtegidas
                permitido={!!usuarioRoles && usuarioRoles.rol_id === 1}
              />
            }
          >
            <Route path="/home-admin" element={<Roles />} />
            <Route path="form-roles" element={<FormularioRoles />} />
            <Route
              path="/form-roles/:params/:id"
              element={<FormularioRoles />}
            />
            <Route path="/see-roles/:id" element={<RolesDetails />} />
          </Route>

          {/* Rutas de Aprendiz */}
          <Route path="/home-aprendiz" element={<Home_Aprendiz />} />
          <Route path="/pruebaaprendiz" element={<Pruebas_Aprendiz />} />
          <Route path="/citacion-aprendiz" element={<CitacionAprendiz />} />
          <Route
            path="/impugnacionesaprendiz"
            element={<ImpugnacionesAprendiz />}
          />

          {/* Rutas de Invitado */}
          <Route path="/home-invitado" element={<Homeinvitado />} />
          <Route path="/novedadinvitado" element={<NovedadInvitado />} />

          {/* Rutas de Instructor */}
          <Route path="/home-instructor" element={<Homeinstructor />} />
          <Route path="/voto-comite/:comite" element={<Votoinstructor />} />
          <Route
            path="/solicitud-instructor"
            element={<SolicitudIntructor />}
          />
          <Route path="/novedades-instructor" element={<NovedadInstructor />} />
          <Route
            path="/antecedentes"
            element={<TablaAntencedentesInstructor />}
          />
          <Route
            path="/solicitud-comite-instructor"
            element={<SolicitudIntructor />}
          />
          <Route
            path="/informacion-comite/:comite_id"
            element={<Informacioncomiteinst />}
          />

          {/* Rutas de Subdirector */}
          <Route path="/home-subdirector" element={<Homesubdirector />} />
          <Route path="/infocomitesub" element={<Infocomitesub />} />

          {/* Rutas de Gestor */}
          <Route path="/home-gestor" element={<HomeGestor />} />
          <Route path="/fichas" element={<FichaList />} />
          <Route path="/acta" element={<FormActa />} />

          <Route path="*" element={<Navigate to={`${ruta}`} replace />} />
        </Routes>
      ) : (
        <>
          <Spinner />
          <Routes>
            <Route path="/recuperacion-contraseña" element={<Recuperacion />} />
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register1 />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </>
      )}
    </>
  );
};

export default Router;
