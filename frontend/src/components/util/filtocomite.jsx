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
    <div className="py-12 px-4 sm:px-6 md:py-16 md:pr-0 md:pl-10 lg:pl-16">
      <form
        className="min-w-[400px] max-w-[500px] p-3 bg-zinc-100 shadow shadow-zinc-400 mt-9 rounded-sm"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="rounded-2xl flex flex-col py-3 items-center justify-center text-blue-800">
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
              className="block px-2 bg-blue-600 tracking-wide mt-4 py-2 rounded-2xl text-white capitalize font-semibold mb-2 focus:outline-none transition duration-300 transform active:scale-95 ease-in-out"
            >
              <span className="pl-2 mx-1">Filtrar</span>
            </button>
          </div>
          <div className="flex flex-row justify-center items-center w-full mt-2">
            <div className="p-1">
              <select
                onChange={(e) => onChange(e)}
                id="estado"
                name="estado"
                value={data.estado}
                className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
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
                className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
              />
            </div>
            <div className="p-1">
              <select
                name="tipo_falta"
                onChange={(e) => onChange(e)}
                value={data.tipo_falta}
                className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
              >
                <option value="">Tipo de Falta</option>
                <option value="academica">Academica</option>
                <option value="disciplinaria">Disiplinaria</option>
              </select>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
