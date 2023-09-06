import { NavBar } from "../../Layout/NavBar";
import { Footer } from "../../Layout/Footer";

export const NovedadInvitado = () => {
    return (
        <div>
            <NavBar />
            <div className="mx-auto max-w-lg pt-20 pb-32 sm:pt-48 sm:pb-40 ">
                <div className="border-2 shadow-2xl p-5 place-content-evenly rounded-2xl">
                    <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                        <h2 className="mb-4 text-xl font-bold text-blue-800 flex flex-col items-center">Ingreso Novedad de Aprendiz</h2>
                        <form action="#">
                            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                                <div class="sm:col-span-2 ">
                                    <label for="name" className="block mb-2 text-sm font-medium text-gray-900 ">Nombre y Apellido</label>
                                    <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required="" />

                                </div>
                                <div>
                                    <label for="category" className="block mb-2 text-sm font-medium text-gray-900 ">Tipo de Documento</label>
                                    <select id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 ">
                                        <option selected="">Selecionar</option>
                                        <option value="CC">Cedula de Ciudadania</option>
                                        <option value="TI">Tarjeta de Identidad</option>
                                        <option value="CE">Cedula de Extranjeria</option>
                                        <option value="PASAPORTE">Pasaporte</option>

                                    </select>
                                </div>
                                <div className="w-full">
                                    <label for="brand" className="block mb-2 text-sm font-medium text-gray-900 ">Numero Documento </label>
                                    <input type="text" name="brand" id="brand" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required="" />

                                </div>
                                <div className="sm:col-span-2 flex flex-col items-center">
                                    <h4 className="mb-4 text-xl font-bold text-blue-800">Falta cometida</h4>
                                </div>
                                <div className="sm:col-span-2">

                                    <label for="category" className="block mb-2 text-sm font-medium text-gray-900 ">Capitulo</label>
                                    <select id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 ">
                                        <option selected="">Seleccionar</option>
                                        <option value="I">Capitulo I</option>
                                        <option value="II">Capitulo II</option>
                                        <option value="III">Capitulo III</option>
                                        <option value="IV">Capitulo IV</option>
                                        <option value="V">Capitulo V</option>
                                        <option value="VI">Capitulo VI</option>
                                        <option value="VII">Capitulo VII</option>
                                        <option value="VIII">Capitulo VIII</option>
                                        <option value="IX">Capitulo IX</option>
                                    </select>
                                </div>
                                <div>
                                    <label for="category" className="block mb-2 text-sm font-medium text-gray-900 ">Articulo</label>
                                    <select id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 ">
                                        <option selected="">Seleccionar</option>
                                        <option value="ar1">Articulo 1</option>
                                        <option value="ar">Articulo ...</option>

                                    </select>
                                </div>
                                <div>
                                    <label for="category" className="block mb-2 text-sm font-medium text-gray-900 ">Paragrafo</label>
                                    <select id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 ">
                                        <option selected="">Seleccionar</option>
                                        <option value="par1">Paragrafo 1</option>
                                        <option value="par">Paragrafo ...</option>

                                    </select>
                                </div>
                                <div class="sm:col-span-2">
                                    <label for="description" className="block mb-2 text-sm font-medium text-gray-900 ">Descripcion</label>
                                    <textarea id="description" rows="8" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 " placeholder="Ingrese su descripcion aqui..."></textarea>
                                </div>
                                <div className="w-full">
                                    <label for="brand" className="block mb-2 text-sm font-medium text-gray-900 ">Fecha de la falta</label>
                                    <input type="date" name="brand" id="brand" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required="" />

                                </div>
                                <div className="w-full">
                                    <label for="brand" className="block mb-2 text-sm font-medium text-gray-900 ">Adjuntar evidencias</label>
                                    <input type="file" name="brand" id="brand" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " />

                                </div>
                            </div>
                            <div className="p-2 flex flex-col items-center">
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
};