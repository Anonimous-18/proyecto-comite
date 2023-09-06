import { NavBar } from "../Layout/NavBar";
import { Footer } from "../Layout/Footer";



export const Homeinvitado= () => {
    
    return (
        <div>
            <NavBar /> 
            <div className="mx-auto max-w-lg pt-20 pb-32 sm:pt-48 sm:pb-40 ">
                <div className="border-2 shadow-2xl p-5 place-content-evenly rounded-2xl">
                    <button className=" hover:bg-blue-200 rounded-xl border-blue-500 shadow-xl ">
                        <figure className="md:flex border-gray-200 border-2 rounded-xl p-3 md:p-0 max-w-md" >
                        <img src={"../../img/logo-sena-negro-png-2022.png"} alt="" className=" w-36 h-24 md:h-auto  rounded-xl mx-auto border-2  bg-gray-200" width="350" height="350"/>
                        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                            <blockquote>
                            <div className="text-blue-800 text-lg font-bold">
                                Ingresar Novedad
                            </div>
                            </blockquote>
                            <blockquote>
                                <p className="text-sm">
                                    Podrás ingresar novedades sobre diferentes aprendices, teniendo en cuenta el reglamento del aprendiz.
                                </p>
                            </blockquote>
                            <blockquote>
                            <p className="text-xs text-gray-600">
                                    SENA
                                </p>
                                <p className="text-xs text-gray-600">
                                    Regional Caladas
                                </p>
                                <p className="text-xs text-gray-600">
                                    Centro de Automatizacion
                                </p>
                            </blockquote>
                        </div>
                        </figure>   
                    </button>
                    <br /><br />
                    <button className="hover:bg-blue-200 rounded-xl border-blue-500 shadow-xl">
                        <figure className="md:flex border-gray-200 border-2 rounded-xl p-3 md:p-0 max-w-md" >
                        <img src={"../../img/logo-sena-negro-png-2022.png"} alt="" className=" w-36 h-24 md:h-auto  rounded-xl mx-auto border-2  bg-gray-200" width="350" height="350"/>
                        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                            <blockquote>
                            <div className="text-blue-800 text-lg font-bold">
                                Reglamento del Aprendiz
                            </div>
                            </blockquote>
                            <blockquote>
                                <p className="text-sm">
                                    Son los derechos y las obligaciones que tienen las personas matriculadas en alguno de los cursos del SENA.   .
                                </p>
                            </blockquote>
                            <blockquote>
                                <p className="text-xs text-gray-600">
                                    SENA
                                </p>
                                <p className="text-xs text-gray-600">
                                    Regional Caladas
                                </p>
                                <p className="text-xs text-gray-600">
                                    Centro de Automatizacion
                                </p>
                            </blockquote>
                        </div>
                        </figure>   
                    </button>
                    
                </div>
            </div>
            <Footer /> 
        </div>
        
    );
};