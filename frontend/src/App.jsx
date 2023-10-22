import "./App.css";
import { Route, Routes, RouterProvider } from "react-router-dom";
import { ContextAppProvider } from "./Context/ContextApp";
import Router from "./routes";

function App() {
  return (
    <ContextAppProvider>
      <Router/>
    </ContextAppProvider>
  );
}

export default App;
