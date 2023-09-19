export const Filtrocomite = () => {
  return (
    <div className=" border-2 p-2  rounded-2xl flex flex-col items-center justify-center text-blue-800">
      <div className="flex ">
        <div className="">
          <div className="relative flex w-full flex-wrap items-stretch">
            <div className="flex justify-between p-2">
              <h3>Filtrar por:</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="flex ">
        <div className="p-1">
          <select
            id="estado"
            name="estado"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
          >
            <option value="">Estado</option>
            <option value="rechazado">Rechazado</option>
            <option value="espera">En espera</option>
            <option value="Caceptado">Aceptado</option>
            <option value="ejecucion">En ejecucion</option>
            <option value="finalizado">Finalizado</option>
          </select>
        </div>
        <div className="p-1">
          <input
            type="Date"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
          />
        </div>
        <div className="p-1">
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
      <div className="p-2">
        <button className="ml-3 relative inline-flex items-center rounded-md border border-transparent bg-blue-700 px-10 py-2 text-lg font-bold text-white shadow-xl transition duration-300 ease-in-out hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2">
          Filtrar
        </button>
      </div>
    </div>
  );
};
