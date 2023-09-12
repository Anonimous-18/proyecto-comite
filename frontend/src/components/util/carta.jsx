import { BsFillPersonLinesFill  } from "react-icons/bs"

export const Carta = () => {
    return (
        <div className="p-2">
            
              <figure className="md:flex border-gray-200  p-3 md:p-0 max-w-lg bg-gray-200 rounded-xl">
                <div className="flex  max-w-xl bg-gray-400">
                    <BsFillPersonLinesFill  className="w-36 h-36 md:h-auto  mx-auto  flex  items-center p-2"/>
                </div>
                <div className="p-2">
                    <h1 className="text-blue-800 text-lg font-bold">Tipo de falta</h1>
                    <p className="text-sm p-2">Descripcion</p>
                    <p className="text-sm p-2 font-bold">Nombre instructor</p>
                    <p className="text-sm p-2">año - mes - dia</p>
                    <div className="flex p-2">
                        <div className="p-2 ">
                            <button className="ml-3 relative inline-flex items-center rounded-md border border-transparent bg-blue-700 px-10 py-2 text-xs font-bold text-white shadow-xl transition duration-300 ease-in-out hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2" type="button">Anexar Plan</button>
                        </div>
                        <div className="p-2 ">
                            <button className="ml-3 relative inline-flex items-center rounded-md border border-transparent bg-blue-700 px-10 py-2 text-xs font-bold text-white shadow-xl transition duration-300 ease-in-out hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2" type="button">Ver mas</button>
                        </div>
                    </div>
                </div>
              </figure>
            
        </div>
    );
};
// icono aceptado    ->  BsFillPersonCheckFill      -|
// icono rechazado   -> BsFillPersonXFill           -|
// icono finalizado  ->  BsFillPersonFill           -|-- todos son bs     
// icono espera   -> BsFillPersonDashFill           -|
// icono ejecucion  ->  BsFillPersonLinesFill       -|