import "./App.css";
import { Route, Routes } from "react-router-dom";

import { Login } from "./components/InicioSesion/Login";
import { Register } from "./components/InicioSesion/Register";
import Recuperacion from "./components/InicioSesion/Recuperacion";

import { Home } from "./pages/Home";
import { ContextAppProvider } from "./Context/ContextApp";
import { Reglamento } from "./components/Reglamento/Reglamento";

function App() {
  return (
    <ContextAppProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/reglamento" element={<Reglamento />} />
        <Route path="/recuperacion-contraseña" element={<Recuperacion />} />
      </Routes>
    </ContextAppProvider>
  );
}

export default App;
