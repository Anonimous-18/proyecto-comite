import { useState } from "react";

export const FormActa = () => {
  const textAreaStyle = {
    outline: "none",
  };
  const [divs, setDivs] = useState([]);

  const handleClick = () => {
    setDivs([...divs, divs.length]);
  };

  const handleDelete = (index) => {
    setDivs(divs.filter((_, i) => i !== index));
  };
  return (
    <div className="flex flex-col xl:flex-row min-h-screen bg-gray-100 ">
      <div className="m-auto">
        <div>
          <div className="mt-5 bg-white rounded-lg shadow">
            <div className="px-5 pb-5">
              <input
                placeholder="Numero acta"
                className="text-black placeholder-gray-600 px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400 m-auto w-3/12 "
              />

              <div className="flex gap-1 max-w-xl">
                <div className="flex-grow w-3/4">
                  <input
                    placeholder="Ciudad y fecha"
                    className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                  />
                </div>
                <div className="flex-grow">
                  <input
                    placeholder="Hora"
                    className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                  />
                </div>
                <div className="flex-grow">
                  <input
                    placeholder="Hora"
                    className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                  />
                </div>
              </div>
              <div className="flex gap-1">
                <div className="flex-grow">
                  <input
                    placeholder="Lugar y/o enlace"
                    className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                  />
                </div>
              </div>
            </div>

            <div className="flex">
              <div className="flex-1 py-5 pl-5 overflow-hidden">
                <h1 className="inline text-2xl font-semibold leading-none">
                  Agenda o puntos para desarrollar
                </h1>
              </div>
              <div className="flex-none pt-2.5 pr-2.5 pl-1"></div>
            </div>

            <div className="px-5 pb-5">
              <input
                placeholder="Programa"
                className="text-black placeholder-gray-600 px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400 m-auto w-3/12 mr-1"
              />
              <input
                placeholder="ficha"
                className="text-black placeholder-gray-600 px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400 m-auto"
              />
              <br />
              <input
                placeholder="Instructor(res) que cita(n) "
                className="text-black placeholder-gray-600 px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400 m-auto w-3/6 "
              />
              <br />
              <input
                placeholder="Gestor ficha"
                className="text-black placeholder-gray-600 px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400 m-auto w-3/12 "
              />
            </div>

            <div className="flex">
              <div className="flex-1 py-5 pl-5 overflow-hidden">
                <p className="inline text-2xl font-semibold leading-none">
                  Caso 1
                </p>
                <br />
                <p className="inline text-xl font-semibold leading-none">
                  Santiago CON DOCUMENTO DE IDENTIDAD TI No 106947
                </p>
                <br />

                <p className="inline text-2xl font-semibold leading-none">
                  Contrato De Aprendizaje:
                </p>
                <input
                  className="text-black placeholder-gray-600 px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400 m-auto w-[] "
                  defaultValue={"No"}
                />
                <br />
                <textarea
                  name=""
                  id=""
                  cols="55"
                  rows="2"
                  defaultValue={"Sin historial"}
                  style={textAreaStyle}
                  className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"></textarea>
              </div>
              <div className="flex-none pt-2.5 pr-2.5 pl-1"></div>
            </div>
            <div className="flex">
              <div className="flex-1 py-5 pl-5 overflow-hidden">
                <p className="inline text-2xl font-semibold leading-none">
                  {"Objetivo(s) de la reunion"}
                </p>
              </div>
              <div className="flex-none pt-2.5 pr-2.5 pl-1"></div>
            </div>
            <div className="flex justify-center">
               
            </div>

            <hr className="mt-4" />
            <div className="flex flex-row-reverse p-3">
              <div className="flex-initial pl-3">
                <button
                  type="button"
                  className="flex items-center px-5 py-2.5 font-medium tracking-wide text-white capitalize bg-black rounded-md hover:bg-gray-800  focus:outline-none focus:bg-gray-900  transition duration-300 transform active:scale-95 ease-in-out">
                  <span className="pl-2 mx-1">Save</span>
                </button>
              </div>
              <div className="flex-initial">
                <button
                  type="button"
                  className="flex items-center px-5 py-2.5 font-medium tracking-wide text-black capitalize rounded-md  hover:bg-red-200 hover:fill-current hover:text-red-600  focus:outline-none  transition duration-300 transform active:scale-95 ease-in-out">
                  <span className="pl-2 mx-1">Delete</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="m-auto">
        <div>
          <div className="mt-5 bg-white rounded-lg shadow ">
            <div className="px-5 pb-5">
              <div className="flex">
                <div className="flex-1 py-5 pl-5 overflow-hidden">
                  <h1 className="inline text-2xl font-semibold leading-none">
                    Desarrollo de la reunion
                  </h1>
                </div>
                <div className="flex-none pt-2.5 pr-2.5 pl-1"></div>
              </div>
              <div>
                <button
                  onClick={handleClick}
                  className="flex items-center px-5 py-2.5 font-medium tracking-wide text-white capitalize bg-black rounded-md hover:bg-gray-800  focus:outline-none focus:bg-gray-900  transition duration-300 transform active:scale-95 ease-in-out">
                  Agregar opinion
                </button>
                {divs.map((div, index) =>  (
                  <div key={div} className="flex flex-col ">
                    <hr className="mt-4" />
                    <div className="flex flex-col sm:flex-row gap-2 m-5">
                    <select className="p-3 w-60 sm:w-96">
                      <option value="COORDINADORA ACADEMICA">
                        COORDINADORA ACADEMICA
                      </option>
                      <option value="REPRESENTANTE DE BIENESTAR AL APRENDIZ">
                        REPRESENTANTE DE BIENESTAR AL APRENDIZ
                      </option>
                      <option value="INSTRUCTOR">INSTRUCTOR</option>
                      <option value="APOYO ADMINISTRATIVO A COORDINACIÓN ACADÉMICA DEL CENTRO">
                        APOYO ADMINISTRATIVO A COORDINACIÓN ACADÉMICA DEL CENTRO
                      </option>
                      <option value="GESTOR FICHA">GESTOR FICHA</option>
                      <option value="APRENDIZ">APRENDIZ</option>
                    </select>
                    <button
                      onClick={() => handleDelete(index)}
                      className="flex items-center px-5 py-2.5 font-medium tracking-wide text-white capitalize bg-black rounded-md hover:bg-gray-800  focus:outline-none focus:bg-gray-900  transition duration-300 transform active:scale-95 ease-in-out text-center max-w-[120px]">
                      <span className="w-full text-center">Eliminar</span>
                    </button>
                    </div>
                    <textarea name="" id="" rows="4" className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"></textarea>
                  </div>
                ))}
              </div>
              <hr className="mt-4" />
              <div className="flex flex-row-reverse p-3">
                <div className="flex-initial pl-3">
                  <button
                    type="button"
                    className="flex items-center px-5 py-2.5 font-medium tracking-wide text-white capitalize bg-black rounded-md hover:bg-gray-800  focus:outline-none focus:bg-gray-900  transition duration-300 transform active:scale-95 ease-in-out">
                    <span className="pl-2 mx-1 ">Crear acta</span>
                  </button>
                </div>
                <div className="flex-initial">
                  <button
                    type="button"
                    className="flex items-center px-5 py-2.5 font-medium tracking-wide text-black capitalize rounded-md  hover:bg-red-200 hover:fill-current hover:text-red-600  focus:outline-none  transition duration-300 transform active:scale-95 ease-in-out">
                    <span className="pl-2 mx-1">Delete</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
