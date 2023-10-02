import { Footer } from "../../Layout/Footer";
import { NavBar } from "../../Layout/NavBar";
import { Voto } from "../../components/util/voto";

export const Votoinstructor = () => {
  return (
    <div>
      <NavBar />
        <Voto />
      <Footer />
    </div>
  );
};