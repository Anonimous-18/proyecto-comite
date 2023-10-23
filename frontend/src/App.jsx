import "./App.css";
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
