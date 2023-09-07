import { NavBar } from "../../Layout/NavBar";
import { Footer } from "../../Layout/Footer";
import { FaCircle } from "react-icons/fa";

export const Homeinstructor = () => {
    return (
        <div>
            <NavBar />
            <div className="mx-auto max-w-screen-xl pt-20 pb-32 sm:pt-48 sm:pb-40 ">
                <div className="h-auto max-w-full flex flex-col items-center  p-5 place-content-evenly rounded-2xl">
                    <div className=" flex space-x-2">
                        <div className="border-2 p-5">
                            <h2 className="flex flex-col items-center p-2">Estado del comite</h2>
                            <div className="flex space-x-5 p-4">

                                <div>
                                    <FaCircle className=" w-14 h-14 text-red-700 flex flex-col items-center border-2" />
                                    <h4 className="flex flex-col items-center">Rechazado</h4>
                                </div>
                                <div>
                                    <FaCircle className=" w-14 h-14 text-yellow-300 flex flex-col items-center border-2" />
                                    <h4>En espera</h4>
                                </div>
                                <div>
                                    <FaCircle className=" w-14 h-14 text-lime-400 flex flex-col items-center border-2" />
                                    <h4>Aceptado</h4>
                                </div>
                                <div>
                                    <FaCircle className=" w-14 h-14 text-green-500 flex flex-col items-center border-2" />
                                    <h4>En ejecución</h4>
                                </div>
                                <div>
                                    <FaCircle className=" w-14 h-14 text-black flex flex-col items-center border-2" />
                                    <h4>Finalizado</h4>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h2>Solicitudes de comite</h2>
                            </div>
                            <div>
                                <form>
                                    <div class="flex">
                                        
                                        <button id="dropdown-button" data-dropdown-toggle="dropdown" className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" type="button">All categories <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                        </svg></button>
                                        <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                                                <li>
                                                    <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mockups</button>
                                                </li>
                                                <li>
                                                    <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Templates</button>
                                                </li>
                                                <li>
                                                    <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Design</button>
                                                </li>
                                                <li>
                                                    <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Logos</button>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="relative w-full">
                                            <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search Mockups, Logos, Design Templates..." required />
                                                <button type="submit" className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                                    </svg>
                                                    <span class="sr-only">Search</span>
                                                </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    );
};