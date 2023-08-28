import "./App.css";
import { Login } from "./components/InicioSesion/Login";
import { Register } from "./components/InicioSesion/Register";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} /> 
      <Route path="/register" element={<Register />} /> 
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}

export default App;
