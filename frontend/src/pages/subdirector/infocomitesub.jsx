import { NavBar } from "../../Layout/NavBar";
import { Footer } from "../../Layout/Footer";
import { Semaforo } from "../../components/util/semaforo";

export const Infocomitesub = () => {
  return (
    <div>
      <NavBar />
      <div className="mx-auto max-w-screen-xl pt-20 pb-32 sm:pt-20 sm:pb-40 ">
        <div className="h-auto max-w-full flex flex-col items-center  p-5 place-content-evenly rounded-2xl">
          <Semaforo />
          <h1 className="flex flex-col items-center p-2 text-blue-800 mt-5 text-xl">Información de Comite</h1>
            <div className="flex flex-col items-center space-x-2">
                <div className="border-2">
                    <div className="border-2">
                        <h1>Info </h1>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
