import { useState } from "react";
import { useContextApp } from "../../Context/ContextApp";

export const Filtrocomite = () => {
  const contextApi = useContextApp();

  const [data, setData] = useState({
    estado: "",
    fecha: "",
    tipo_falta: "",
  });

  const onChange = (e) =>
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      (data && data.estado.length !== 0) ||
      data.fecha.length !== 0 ||
      data.tipo_falta.length !== 0
    ) {
      contextApi.filtro(data);
    }

    setData({
      estado: "",
      fecha: "",
      tipo_falta: "",
    });
  };

  return (
    <form className="p-3 w-full 2xl:w-[800px] xl:w-[800px] lg:w-[500px] md:w-[500px] sm:w-[500px] bg-gray-50" onSubmit={(e) => handleSubmit(e)}>
      <div className="w-full flex flex-row items-center justify-around">
        <div className="">
          <h3 className="font-bold text-black">Filtrar por:</h3>
        </div>
        {/* <button
              className="right-0 ml-3 relative inline-flex items-center rounded-md border border-transparent bg-blue-700 px-10 py-2 text-xs font-bold text-white shadow-xl transition duration-300 ease-in-out hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2"
              type="submit"
            >
              Filtrar
            </button> */}
        <button
          type="submit"
          // className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
          className="block px-2 bg-indigo-600 tracking-wide mt-4 py-2 rounded-2xl text-white capitalize font-semibold mb-2 focus:outline-none transition duration-300 transform active:scale-95 ease-in-out"
        >
          <span className="pl-2 mx-1">Filtrar</span>
        </button>
      </div>
      <div className="grid grid-cols-2 gap-3 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 justify-center items-center w-full mt-2">
        <div className="p-1">
          <select
            onChange={(e) => onChange(e)}
            id="estado"
            name="estado"
            value={data.estado}
            className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-32 p-2.5 "
          >
            <option value="">Todos</option>
            <option value="rechazado">Rechazado</option>
            <option value="espera">En espera</option>
            <option value="aceptado">Aceptado</option>
            <option value="ejecucion">En ejecucion</option>
            <option value="finalizado">Finalizado</option>
          </select>
        </div>
        <div className="p-1">
          <input
            type="Date"
            name="fecha"
            onChange={(e) => onChange(e)}
            value={data.fecha}
            className="bg-gray-50 w-32 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block p-2.5 "
          />
        </div>
        <div className="p-1">
          <select
            name="tipo_falta"
            onChange={(e) => onChange(e)}
            value={data.tipo_falta}
            className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-32 p-2.5 "
          >
            <option value="">Tipo de Falta</option>
            <option value="academica">Academica</option>
            <option value="disciplinaria">Disiplinaria</option>
          </select>
        </div>
      </div>
    </form>
  );
};
