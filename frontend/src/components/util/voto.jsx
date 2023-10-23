import { Link } from "react-router-dom";

export const Voto = () => {
  return (
    <div className=" mx-auto w-60 pt-0 pb-32 sm:pt-48 sm:pb-40">
      <div className=" bg-white border-2 h-auto max-w-full flex flex-col items-center  p-5 place-content-evenly rounded-2xl">
        <p className=" mt-2  p-2 text-lg font-bold  text-blue-800  w-36 h-7 flex flex-col items-center rounded-l-lg rounded-r-lg  ">
          Voto
        </p>
        <label htmlFor="opciones" className="text-gray-600 mt-4">
          Selecciona una opcción
        </label>
        <select
          id="opciones"
          name="opciones"
          className="border-2 border-gray-600 mt-2 bg-blue-400 hover:bg-blue-600  hover:text-white text-black"
        >
          <option value=" ">Selecionar</option>
          <option value="opcion1 ">Option 1</option>
          <option value="opcion2">Option 2</option>
        </select>
        <p className=" mt-2">Observacion del comite:</p>
        <div className=" mt-2 border-spacing-4  border-2 border-blue-700 rounded-t-lg rounded-r-lg rounded-b-lg rounded-l-lg ">
          <textarea
            id="description"
            rows="8"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 "
            placeholder=" Ingrse la observacion"
          ></textarea>
        </div>

        <div className=" mt-4 flex flex-row gap-2 items-center justify-center w-full h-full">
          <Link to={`/home`}>
            <button className=" w-24 bg-blue-700 hover:bg-blue-900 text-white rounded-l-lg rounded-r-lg  h">
              Cancelar
            </button>
          </Link>

          <button className=" w-24 bg-blue-700 hover:bg-blue-900 text-white rounded-l-lg rounded-r-lg ">
            Votar
          </button>
        </div>
      </div>
    </div>
  );
};
