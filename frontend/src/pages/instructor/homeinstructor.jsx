import { NavBar } from "../../Layout/NavBar";
import { Footer } from "../../Layout/Footer";
import { BsFillPersonLinesFill  } from "react-icons/bs"
import { BsFillPersonCheckFill   } from "react-icons/bs"
import { BsFillPersonXFill  } from "react-icons/bs"
import { BsFillPersonFill  } from "react-icons/bs"
import { BsFillPersonDashFill   } from "react-icons/bs"
import { Carta } from "../../components/util/carta";

export const Homeinstructor = () => {
    return (
        <div>
            <NavBar />
            <div className="mx-auto max-w-screen-xl pt-20 pb-32 sm:pt-48 sm:pb-40 ">
                <div className="h-auto max-w-full flex flex-col items-center  p-5 place-content-evenly rounded-2xl">
                    <div className=" flex space-x-2">
                        <div className="p-5">
                            <h2 className="flex flex-col items-center p-2 text-blue-800">Estado del comite</h2>
                            <div className="flex space-x-5 p-4">

                                <div>
                                    <BsFillPersonXFill  className=" w-14 h-14  flex flex-col items-center text-red-600" />
                                    <h4 className="flex flex-col items-center">Rechazado</h4>
                                </div>
                                <div>
                                    <BsFillPersonDashFill className=" w-14 h-14  flex flex-col text-blue-600 items-center" />
                                    <h4>En espera</h4>
                                </div>
                                <div>
                                    <BsFillPersonCheckFill  className=" w-14 h-14 text-yellow-500  flex flex-col items-center " />
                                    <h4>Aceptado</h4>
                                </div>
                                <div>
                                    <BsFillPersonLinesFill  className=" w-14 h-14 flex flex-col text-lime-500  items-center" />
                                    <h4>En ejecución</h4>
                                </div>
                                <div>
                                    <BsFillPersonFill className=" w-14 h-14 text-red-950 flex flex-col items-center" />
                                    <h4>Finalizado</h4>
                                </div>
                            </div>
                        </div>
                        <div className=" border-2 p-2  rounded-2xl flex flex-col items-center justify-center text-blue-800">
                            
                            <div className="flex ">
                                <div className="">
                                    <div className="relative flex w-full flex-wrap items-stretch">
                                        <div className="flex justify-between p-2">
                                               <h3 >Filtrar por:</h3> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex ">
                                <div className="p-1">
                                    <select
                                        id="estado"
                                        name="estado"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 ">
                                        <option value="">Estado</option>
                                        <option value="rechazado">Rechazado</option>
                                        <option value="espera">En espera</option>
                                        <option value="Caceptado">Aceptado</option>
                                        <option value="ejecucion">En ejecucion</option>
                                        <option value="finalizado">Finalizado</option>
                                    </select>
                                </div>
                                <div className="p-1">
                                    <input type="Date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 " />
                                </div>
                                <div className="p-1">
                                    <select
                                        id="tipo_documento"
                                        name="tipo_documento"
                                        required
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 ">
                                        <option value="">Tipo de Falta</option>
                                        <option value="academica">Academica</option>
                                        <option value="disiplinaria">Disiplinaria</option>
                                        
                                    </select>
                                </div>
                                
                            </div>
                            <div className="p-2">
                            <button
                            
                            className="ml-3 relative inline-flex items-center rounded-md border border-transparent bg-blue-700 px-10 py-2 text-lg font-bold text-white shadow-xl transition duration-300 ease-in-out hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2"
                            >
                            Filtrar
                            </button>
                            </div>
                            
                        </div>
                    </div>

                </div>
                
                <div className=" border-2">
                    <Carta />
                </div>
                <div className="p-2">
                <button className=" right-0 ml-3 relative inline-flex items-center rounded-md border border-transparent bg-blue-700 px-10 py-2 text-xs font-bold text-white shadow-xl transition duration-300 ease-in-out hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2" type="button">Crear Solicitud a Comite</button>
                </div>
            </div>
            
            <Footer />
        </div>
    );
};