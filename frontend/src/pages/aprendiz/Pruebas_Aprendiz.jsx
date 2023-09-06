import { NavBar } from "../../Layout/NavBar";
import { Footer } from "../../Layout/Footer";

export const Pruebas_Aprendiz = () => {
    return (
        <div>
            <NavBar />
            <div className="mx-auto max-w-lg pt-20 pb-32 sm:pt-48 sm:pb-40 ">
                <div className="border-2 shadow-2xl p-5 place-content-evenly rounded-2xl">
                    <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                        <h2 className="mb-4 text-xl font-bold text-blue-800 flex flex-col items-center">Subir Pruebas</h2>
                        
                        <form action="#" className="border-2 border-blue-800 border-dashed p-5 place-content-evenly rounded-2xl" >
                            <div className="sm:col-span-2">
                                <label for="description" className="block mb-2 text-sm font-medium text-gray-900 ">Descripcion</label>
                                <textarea id="description" rows="8" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 " placeholder="Ingrese su descripcion aqui..."></textarea>
                            </div>
                            <div className="w-full">
                                <label for="brand" className="block mb-2 text-sm font-medium text-gray-900 ">Adjuntar evidencias</label>
                                <input type="file" name="brand" id="brand" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " />

                            </div>
                            <div className="p-2 flex flex-col items-center">
                                <button
                                    type="submit"
                                    className=" place-items-center flex flex-col items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-blue-600 to-blue-800 group-hover:from-blue-600 group-hover:to-blue-800 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-sky-500 dark:focus:ring-blue-800"
                                >
                                    <span className="relative px-11 py-2.5 transition-all ease-in duration-75 bg-blue-500 text-white rounded-md group-hover:bg-opacity-0">
                                         Cancelar
                                    </span>
                                </button>
                                <button
                                    type="submit"
                                    className=" place-items-center flex flex-col items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-blue-600 to-blue-800 group-hover:from-blue-600 group-hover:to-blue-800 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-sky-500 dark:focus:ring-blue-800"
                                >
                                    <span className="relative px-11 py-2.5 transition-all ease-in duration-75 bg-blue-500 text-white rounded-md group-hover:bg-opacity-0">
                                        Enviar
                                    </span>
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}