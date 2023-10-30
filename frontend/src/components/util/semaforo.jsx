import { FaGears } from "react-icons/fa6";
import { AiFillCheckCircle } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { GiSandsOfTime } from "react-icons/gi";

export const Semaforo = () => {
  
  return (
    <div className="flex flex-col items-center justify-center px-1 w-full h-full bg-white py-2 gap-1  md:min-w-[400px] md:max-w-[550px] max-w-[340px] min-w-[250px] mr-10">
      <h2 className="text-blue-800 w-full text-xl font-bold text-center mb-4">
        Estados
      </h2>
      <div className="grid grid-cols-5 gap-5 justify-around items-start">
        <div className="px-9 py-4 md:px-14 md:py-4 flex flex-col justify-center items-center bg-white  ring-black ring-opacity-75 shadow-sm shadow-zinc-800 rounded-full">
          <MdCancel className="w-6 h-6 md:w-14 md:h-14  flex flex-col items-center text-red-600 " />
          <h4 className="font-bold text-xs md:text-base">Rechazado</h4>
        </div>
        <div className="px-9 py-4 md:px-14 md:py-4 flex flex-col justify-center items-center bg-white  ring-black ring-opacity-75 shadow-sm shadow-zinc-800 rounded-full">
          <GiSandsOfTime className="w-6 h-6 md:w-14 md:h-14  flex flex-col text-blue-800 items-center" />
          <h4 className="font-bold text-xs md:text-base">Espera</h4>
        </div>
        <div className="px-9 py-4 md:px-14 md:py-4 flex flex-col justify-center items-center bg-white  ring-black ring-opacity-75 shadow-sm shadow-zinc-800 rounded-full">
          <AiFillCheckCircle className="w-6 h-6 md:w-14 md:h-14 text-green-700  flex flex-col items-center " />
          <h4 className="font-bold text-xs md:text-base">Aceptado</h4>
        </div>
        <div className="px-9 py-4 md:px-14 md:py-4 flex flex-col justify-center items-center bg-white  ring-black ring-opacity-75 shadow-sm shadow-zinc-800 rounded-full">
          <FaGears className="w-6 h-6 md:w-14 md:h-14 flex flex-col text-green-700  items-center" />
          <h4 className="font-bold text-xs md:text-base">Ejecución</h4>
        </div>
        <div className="px-9 py-4 md:px-14 md:py-4 flex flex-col justify-center items-center bg-white  ring-black ring-opacity-75 shadow-sm shadow-zinc-800 rounded-full">
          <IoCheckmarkDoneCircleSharp className="w-6 h-6 md:w-14 md:h-14 text-black flex flex-col items-center" />
          <h4 className="font-bold text-xs md:text-base">Finalizado</h4>
        </div>
      </div>
    </div>
  );
};
