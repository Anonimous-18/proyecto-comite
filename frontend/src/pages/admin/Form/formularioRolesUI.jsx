import DefaultLayout from "../../../Layout/DefaultLayout";

export const FormularioRolesUI = ({
  permisos,
  handleCheckboxChange,
  onChange,
  handleSubmit,
  params,
  selectedValues
}) => {
  return (
    <DefaultLayout>
      <form
        className="w-full flex justify-center"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="w-full md:w-4/6 shadow-lg shadow-zinc-400  p-4  font-medium text-gray-900 border rounded-xl text-5xl">
          <h2 className="mb-4 font-bold text-blue-800 flex flex-col items-center ">
            {params === "update" ? "Actualizar usuario" : "Crear rol"}
          </h2>
          <div className="w-full flex">
            <div className="border-r-2 p-5 w-1/3">
              <label
                htmlFor="first_name"
                className="block mb-2 font-medium text-gray-900 dark:text-gray-300 text-3xl"
              >
                Rol
              </label>
              <input
                type="text"
                id="first_name"
                onChange={(e) => onChange(e)}
                className="bg-gray-50  border-gray-500 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Nombre del nuevo rol"
                required
              />
            </div>
            <div className="flex flex-col w-3/6 border-r-2">
              {permisos.map((e, i) => (
                <div className="flex  w-full p-5" key={i}>
                  <label htmlFor={`${e}`} className="w-44 text-2xl">
                    {e}
                  </label>
                  <input
                    type="checkbox"
                    className="h-10 w-10"
                    name={`${e}`}
                    id={`${e}`}
                    value={`${e}`}
                    onChange={handleCheckboxChange}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="p-2 sm:col-span-2 flex flex-row place-content-center">
            <div>
              <button className="right-0 ml-3 relative inline-flex items-center rounded-md border border-transparent bg-blue-700 px-10 py-2 text-lg font-bold  text-white shadow-xl transition duration-300 ease-in-out hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2">
                {params === "update" ? "Actualizar" : "Crear"}
              </button>
            </div>
          </div>
        </div>
      </form>
    </DefaultLayout>
  );
};
