import { FaGears } from "react-icons/fa6";
import { AiFillCheckCircle } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { GiSandsOfTime } from "react-icons/gi";

export const Semaforo = () => {
  const estados = [
    {
      id: 1,
      name: "Rechazado",
      icono: (
        <MdCancel className="h-full w-full object-cover object-center group-hover:opacity-75 text-red-600" />
      ),
    },
    {
      id: 2,
      name: "Espera",
      icono: (
        <GiSandsOfTime className="h-full w-full object-cover object-center group-hover:opacity-75 text-blue-800" />
      ),
    },
    {
      id: 3,
      name: "Aceptado",
      icono: (
        <AiFillCheckCircle className="h-full w-full object-cover object-center group-hover:opacity-75 text-green-700" />
      ),
    },
    {
      id: 4,
      name: "Ejecución",
      icono: (
        <FaGears className="h-full w-full object-cover object-center group-hover:opacity-75 text-green-700" />
      ),
    },
    {
      id: 5,
      name: "Finalizado",
      icono: (
        <IoCheckmarkDoneCircleSharp className="w-full h-full object-cover object-center group-hover:opacity-75 text-black" />
      ),
    },
  ];

  return (
    <div className="bg-white w-full 2xl:w-[800px] xl:w-[800px] lg:w-[500px] md:w-[500px] sm:w-[500px]">
      <div className="py-24 bg-gray-50 mx-auto max-w-6xl px-6">
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-0">
          <h2 className="text-xl 2xl:text-2xl xl:text-2xl lg:text-2xl md:text-2xl sm:text-xl font-bold tracking-tight text-gray-900">
            Estados de una Citación a Comite
          </h2>
        </div>

        <div className="relative mt-8">
          <div className="relative -mb-24 w-full overflow-x-auto pb-6">
            <ul
              role="list"
              className="mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:grid lg:grid-cols-5 lg:gap-x-8 lg:space-x-0"
            >
              {estados.map((estado) => (
                <li
                  key={estado.id}
                  className="inline-flex w-24 flex-col text-center justify-center items-center lg:w-auto"
                >
                  <div className="group relative">
                    <div className="aspect-w-1 aspect-h-1 w-20 h-20 overflow-hidden rounded-md bg-gray-200">
                      {estado.icono}
                    </div>
                    <div className="mt-2 flex items-center justify-center">
                      <h3 className="mt-1 font-semibold text-sm text-gray-900">
                        {estado.name}
                      </h3>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
