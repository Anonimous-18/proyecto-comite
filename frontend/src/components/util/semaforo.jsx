import { BsFillPersonLinesFill } from "react-icons/bs";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { BsFillPersonXFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillPersonDashFill } from "react-icons/bs";

export const Semaforo = () => {
  return (
    <div className="flex flex-col items-start justify-start px-1 bg-green-600 w-full h-full py-2 gap-1">
      <h1 className="text-blue-800 text-left w-full text-xl font-bold bg-rose-600">
        Estado del comite:
      </h1>
      <div className="grid grid-cols-5 bg-blue-400 gap-5 justify-around items-start">
        <div className="p-4 rounded-md flex flex-col justify-center items-center shadow-md shadow-black bg-gray-500">
          <BsFillPersonXFill className="w-14 h-14  flex flex-col items-center text-red-600 " />
          <h4 className="font-bold">Rechazado</h4>
        </div>
        <div className="p-4 rounded-md flex flex-col justify-center items-center shadow-md shadow-black bg-gray-500">
          <BsFillPersonDashFill className="w-14 h-14  flex flex-col text-blue-600 items-center" />
          <h4 className="font-bold">En espera</h4>
        </div>
        <div className="p-4 rounded-md flex flex-col justify-center items-center shadow-md shadow-black bg-gray-500">
          <BsFillPersonCheckFill className="w-14 h-14 text-yellow-500  flex flex-col items-center " />
          <h4 className="font-bold">Aceptado</h4>
        </div>
        <div className="p-4 rounded-md flex flex-col justify-center items-center shadow-md shadow-black bg-gray-500">
          <BsFillPersonLinesFill className="w-14 h-14 flex flex-col text-lime-500  items-center" />
          <h4 className="font-bold">En ejecución</h4>
        </div>
        <div className="p-4 rounded-md flex flex-col justify-center items-center shadow-md shadow-black bg-gray-500">
          <BsFillPersonFill className="w-14 h-14 text-red-950 flex flex-col items-center" />
          <h4 className="font-bold">Finalizado</h4>
        </div>
      </div>
    </div>
  );
};
