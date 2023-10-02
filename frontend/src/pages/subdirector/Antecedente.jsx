import { Footer } from "../../Layout/Footer";
import { NavBar } from "../../Layout/NavBar";
import { Antecedenteaprendiz } from "../../components/util/Antecedenteaprendiz";
import { Historiacomite } from "../../components/util/Historiacomite";

export const Antecedente = () => {
  return (
    <div>
      <NavBar />
      
      <Historiacomite />
      <Antecedenteaprendiz />
      
      <Historiacomite />

      <Footer />
    </div>
  );
};