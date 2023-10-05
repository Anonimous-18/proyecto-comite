import { BsFillPersonLinesFill } from "react-icons/bs";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { BsFillPersonXFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillPersonDashFill } from "react-icons/bs";

export const Semaforo = () => {
  return (
    <div className="p-5 sm:p-48">

      <h2 className="flex flex-col items-center p-2 text-blue-800">
        Estado del comite
      </h2>
      <div className="flex space-x-5 p-4">
        <div>
          <BsFillPersonXFill className=" w-14 h-14  flex flex-col items-center text-red-600 " />
          <h4 className="flex flex-col items-center">Rechazado</h4>
        </div>
        <div>
          <BsFillPersonDashFill className=" w-14 h-14  flex flex-col text-blue-600 items-center" />
          <h4>En espera</h4>
        </div>
        <div>
          <BsFillPersonCheckFill className=" w-14 h-14 text-yellow-500  flex flex-col items-center " />
          <h4>Aceptado</h4>
        </div>
        <div>
          <BsFillPersonLinesFill className=" w-14 h-14 flex flex-col text-lime-500  items-center" />
          <h4>En ejecución</h4>
        </div>
        <div>
          <BsFillPersonFill className=" w-14 h-14 text-red-950 flex flex-col items-center" />
          <h4>Finalizado</h4>
        </div>
      </div>
    </div>
  );
};
