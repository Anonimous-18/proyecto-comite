import "./App.css";
import { Route, Routes } from "react-router-dom";

import { Login } from "./components/InicioSesion/Login";
import { Register } from "./components/InicioSesion/Register";
import Recuperacion from "./components/InicioSesion/Recuperacion";

import { Home } from "./pages/Home";
import { ContextAppProvider } from "./context/ContextApp";

function App() {
  return (
    <ContextAppProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/recuperacion-contraseña" element={<Recuperacion />} />
      </Routes>
    </ContextAppProvider>
  );
}

export default App;
