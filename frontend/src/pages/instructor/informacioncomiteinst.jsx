import DefaultLayout from "../../Layout/DefaultLayout";
import { Semaforo } from "../../components/util/semaforo";

export const Informacioncomiteinst = () => {
  return (
    <DefaultLayout>
            <div className="mx-auto max-w-screen-xl pt-20 pb-32 sm:pt-20 sm:pb-40 ">
        <div className="h-auto max-w-full flex flex-col items-center  p-5 place-content-evenly rounded-2xl">
          <h1 className="flex flex-col items-center p-2 text-blue-800 mt-5 text-xl">
            Informacion de comite
          </h1>
          <Semaforo />
          <div className=" flex space-x-2 border-2 mt-5">
            <div className="p-5">
              <div className="border-2 p-2">aqui imagen</div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 p-2">
                  Aprendicez implicados:
                </label>
                <input
                  type="number"
                  name="id_apre"
                  onChange={(e) => onChange(e)}
                  id="id_apre"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  required
                />
                <div className=" border-2 mt-2 p-2">
                  <h1 className="flex flex-col items-center p-2 text-blue-800  text-base">
                    Resultado plan de mejoramiento
                  </h1>
                  <input
                    type="text"
                    name="resultado_plan"
                    onChange={(e) => onChange(e)}
                    id="resultado_plan"
                    className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    required
                  />
                  <button
                    type="submit"
                    className="mt-2 place-items-center flex flex-col items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-blue-600 to-blue-800 group-hover:from-blue-600 group-hover:to-blue-800 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-sky-500 dark:focus:ring-blue-800"
                  >
                    <span className="relative px-11 py-2.5 transition-all ease-in duration-75 bg-blue-500 text-white rounded-md group-hover:bg-opacity-0">
                      Registrar
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="p-5">
              <div className="flex space-x-2">
                <div>
                  <button
                    type="submit"
                    className="mt-2 place-items-center flex flex-col items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-blue-600 to-blue-800 group-hover:from-blue-600 group-hover:to-blue-800 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-sky-500 dark:focus:ring-blue-800"
                  >
                    <span className="relative px-11 py-2.5 transition-all ease-in duration-75 bg-blue-500 text-white rounded-md group-hover:bg-opacity-0">
                      Cancelar Cambios
                    </span>
                  </button>
                </div>
                <div>
                  <button
                    type="submit"
                    className="mt-2 place-items-center flex flex-col items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-blue-600 to-blue-800 group-hover:from-blue-600 group-hover:to-blue-800 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-sky-500 dark:focus:ring-blue-800"
                  >
                    <span className="relative px-11 py-2.5 transition-all ease-in duration-75 bg-blue-500 text-white rounded-md group-hover:bg-opacity-0">
                      Editar
                    </span>
                  </button>
                </div>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  Instructor Solicitante:
                </label>
                <input
                  type="text"
                  name="name_ins"
                  onChange={(e) => onChange(e)}
                  id="name_ins"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  required
                />
              </div>
              <div className="flex space-x-2">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 ">
                    Fechade solicitud:
                  </label>
                  <input
                    type="Date"
                    name="fechasoli"
                    onChange={(e) => onChange(e)}
                    id="fechasoli"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900">
                    Tipo de Falta:
                  </label>
                  <select
                    id="tipo_documento"
                    name="tipo_documento"
                    required
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                  >
                    <option value="">Tipo de Falta</option>
                    <option value="academica">Academica</option>
                    <option value="disiplinaria">Disiplinaria</option>
                  </select>
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  for="description"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Descripcion
                </label>
                <textarea
                  id="description"
                  rows="8"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 "
                  placeholder="Ingrese su descripcion aqui..."
                ></textarea>
              </div>
              <div className="w-full p-2">
                <label
                  for="brand"
                  className="block mb-2 p-2 text-sm font-medium text-gray-900 "
                >
                  Adjuntar evidencias
                </label>
                <input
                  type="file"
                  name="brand"
                  id="brand"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                />
              </div>
              <div className="border-2 flex flex-col items-center p-2">
                <brockquote>
                  <p className=" mt-2  p-2 text-lg font-bold  text-blue-800  w-36 h-7 flex flex-col items-center rounded-l-lg rounded-r-lg  ">
                    Voto
                  </p>
                </brockquote>
                <label
                  htmlFor="opciones"
                  className="text-gray-600 mt-4 flex flex-col items-center p-2"
                >
                  Selecciona una opcción
                </label>
                <select
                  id="opciones"
                  name="opciones"
                  className=" p-2 flex flex-col items-center border-2 border-gray-600 mt-2 bg-blue-400 hover:bg-blue-600  hover:text-white text-black"
                >
                  <option value=" ">Selecionar</option>
                  <option value="opcion1 ">Option 1</option>
                  <option value="opcion2">Option 2</option>
                </select>
                <button
                  type="submit"
                  className="mt-2 place-items-center flex flex-col items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-blue-600 to-blue-800 group-hover:from-blue-600 group-hover:to-blue-800 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-sky-500 dark:focus:ring-blue-800"
                >
                  <span className="relative px-11 py-2.5 transition-all ease-in duration-75 bg-blue-500 text-white rounded-md group-hover:bg-opacity-0">
                    Votar
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>

  );
};
