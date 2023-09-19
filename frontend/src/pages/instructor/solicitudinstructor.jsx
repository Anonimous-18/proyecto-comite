import { Footer } from "../../Layout/Footer";
import { NavBar } from "../../Layout/NavBar";
import { Semaforo } from "../../components/util/semaforo";
import { SolicitudComite } from "../../components/util/SolicitudComite";

export const SolicitudIntructor = () => {
  return (
    <div>
      <NavBar />
      <div className="mx-auto max-w-screen-xl pt-20 pb-32 sm:pt-20 sm:pb-40 ">
        <div className="h-auto max-w-full flex flex-col items-center  p-5 place-content-evenly rounded-2xl">
        
            <SolicitudComite/>
     
            
        </div>
      </div>
      <Footer />
    </div>
  );
};
