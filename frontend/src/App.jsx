import "./App.css";
import { Route, Routes } from "react-router-dom";

import { Login } from "./components/InicioSesion/Login";
import { Register } from "./components/InicioSesion/Register";
import Recuperacion from "./components/InicioSesion/Recuperacion";

import { Home } from "./pages/Home";
import { ContextAppProvider } from "./Context/ContextApp";
import { Reglamento } from "./components/Reglamento/Reglamento";
import { Home_Aprendiz } from "./pages/aprendiz/home_Aprendiz";
import { Homeinvitado } from "./pages/invitado/Homeinvitado";
import { NovedadInvitado } from "./pages/invitado/NovedadInvitado";
import { ImpugnacionesAprendiz } from "./pages/aprendiz/ImpugnacionesAprendiz";
import { Pruebas_Aprendiz } from "./pages/aprendiz/Pruebas_Aprendiz";
import { Homeinstructor } from "./pages/instructor/homeinstructor";
import { Table } from "./components/Tabla/Table";

function App() {
  return (
    <ContextAppProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/recuperacion-contraseña" element={<Recuperacion />} />

        <Route path="/home" element={<Home />} />
        <Route path="/homeaprendiz" element={<Home_Aprendiz />} />
        <Route path="/homeinvitado" element={<Homeinvitado />} />
        <Route path="/homeinstructor" element={<Homeinstructor />} />

        <Route path="/reglamento" element={<Reglamento />} />

        <Route
          path="/impugnacionesaprendiz"
          element={<ImpugnacionesAprendiz />}
        />
        <Route path="/pruebaaprendiz" element={<Pruebas_Aprendiz />} />

        <Route path="/novedadinvitado" element={<NovedadInvitado />} />

        <Route path="/tabla" element={<Table />} />
      </Routes>
    </ContextAppProvider>
  );
}

export default App;
