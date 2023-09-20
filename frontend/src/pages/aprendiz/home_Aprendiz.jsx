import { NavBar } from "../../Layout/NavBar";
import { Footer } from "../../Layout/Footer";

import { BiBell} from "react-icons/bi";


export const Home_Aprendiz = () => {
  return (
    <div>
      <NavBar />

      <div className=" mx-auto w-96  pt-0 pb-32 sm:pt-48 sm:pb-40">
        <div className=" bg-white border-2 h-auto max-w-full flex flex-col items-center  p-5 place-content-evenly rounded-2xl space-y-2">
          <div className="flex flex-row p-3  space-x-2 border-blue-400 border-2 rounded-t-lg rounded-r-lg rounded-l-lg ">
            <button className=" bg-fuchsia-700 p-2  flex flex-col items-center justify-center ">
            <BiBell className=" w-8 h-8   text-red-600" />Subir prueba</button>
            <button className=" bg-blue-400 p-2 flex flex-col items-center justify-center"> 
            <BiBell className=" w-8 h-8  flex flex-col items-center text-red-600" /> Subir impugnacion</button>
            <button className=" bg-neutral-800 p-2 flex flex-col items-center justify-center"> 
            <BiBell className=" w-8 h-8  flex flex-col items-center text-red-600" /> Notificacion </button>
          </div>
          <hr />
          <div className="flex flex-row p-3 space-x-2  border-blue-400 border-2 rounded-t-lg rounded-r-lg rounded-l-lg ">
            <button className=" bg-fuchsia-700 p-2 flex flex-col items-center justify-center"> 
            <BiBell className=" w-8 h-8  flex flex-col items-center text-red-600" />plan de mejoramiento </button>
            <button className=" bg-blue-400 p-2 flex flex-col items-center justify-center"> 
            <BiBell className=" w-8 h-8  flex flex-col items-center text-red-600" /> Notificacion d</button>
            <button className=" bg-neutral-800 p-2 flex flex-col items-center justify-center"> 
            <BiBell className=" w-8 h-8  flex flex-col items-center text-red-600" /> Notificacion </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
