import { Link } from "react-router-dom";
import DefaultLayout from "../../Layout/DefaultLayout";
export const Antecedenteaprendiz = () => {
  return (
    <DefaultLayout>
      <div className=" bg-white border-2  max-w-5xl flex flex-col items-center h-auto justify-center rounded-2xl">
        <div className="flex flex-col justify-center items-center w-f h-16">
          <h4 className="flex flex-col justify-center items-center border-2  w-auto h-auto p-5  hover:bg-blue-500  hover:text-white text-black   rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-lg  ">
            Antecedentes Aprendiz
          </h4>
        </div>{" "}
        <Link to={"/homeaprendiz"}>
          <button className="pt-6 md:p-8 text-center md:text-left space-y-4">
            <p className=" bg-gray-500 hover:bg-black text-white w-24 h-7 text-center flex flex-col justify-center items-center rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-lg">
              Volver
            </p>
          </button>
        </Link>
        <div className=" space-y-1 space-x-4">
          <div className=" space-x-4 space-y-2 items-center justify-center "></div>
          <div className="grid grid-cols-1 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 p-1 gap-2 q bg-lime-500">
            <div>
              Nombre :
              <input
                className="  flex flex-col space-y-4"
                type="text"
                id="nombre"
                name="nombre"
                required
                placeholder="Darlin Andres"
              />
            </div>
            <div>
              Apellido :
              <input
                className="flex flex-col"
                type="text"
                id="apellido"
                name="apellido"
                required
                placeholder="Rivas Lemus"
              />
            </div>
            <div>
              Identificacion :
              <input
                className="flex flex-col space-x-4 space-y-4"
                type="text"
                id="identificaion"
                name="identificaion"
                required
                placeholder="1076817752"
              />
            </div>
          </div>
        </div>
        <div className=" space-x-40 space-y-20">
          <h1 className="">Historia de comites : </h1>
        </div>
        {/* componente #3 para mover o dar espacio */}
        {/* grid grid-cols-1 2xl:grid-cols-3 xl:grid-cols-2 -> GRID SIRVE PARA ACOMODAR LAS 
        COLUMNAS QUE QUEREMOS LISTADAS EN UN TAMAÑO EN ESPECIFICO ej: 2xl = 1536px xl = 1280px lg = 1024 */}
        {/* gap = Espacio entre columnas y filas */}
        <div className="w-full h-full py-20 grid grid-cols-1 items-center justify-center gap-5 bg-yellow-300">
          <div className="grid grid-cols-1 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-3 bg-red-900 h-auto max-w-full items-center border-2 shadow-2xl p-5 place-content-evenly rounded-2xl">
            <div className=" bg-slate-500 h-full max-w-full flex flex-row items-center  shadow-2xl p-5 place-content-evenly rounded-2xl">
              <div className=" bg-blue-200  hover:bg-blue-800 hover:text-black rounded-xl border-2 hover:border-black  shadow-black shadow-2xl">
                <button className="  flex flex-col items-center justify-center  space-y-2 hover:bg-blue-500 hover:text-black rounded-xl border-blue-500 shadow-black shadow-2xl ">
                  <h4>
                    instructores <br /> solicitantes:
                  </h4>
                  <button className=" pt-2 flex flex-row items-center bg-blue-500  border-2 shadow-2xl p-3 place-content-evenly rounded-2xl">
                    Rosa quintero
                  </button>
                  <button className="space-y-2 pt-2 flex flex-row items-center bg-blue-500  border-2 shadow-2xl p-3 place-content-evenly rounded-2xl">
                    Rosa quintero
                  </button>
                </button>
              </div>
            </div>

            {/*  */}
            <div className="bg-red-500  h-auto max-w-full flex flex-row items-center  shadow-2xl p-5 place-content-evenly rounded-2xl">
              <div className="  bg-white hover:border-black border-2 hover:text-black rounded-xl shadow-black shadow-2xl">
                <button className="   flex flex-col items-center justify-center   space-y-2 hover:bg-blue-500 hover:text-black rounded-xl border-blue-500 shadow-black shadow-2xl ">
                  instructores <br /> solicitantes :
                  <button className=" pt-2 flex flex-row items-center  bg-blue-500  border-2 shadow-2xl p-3 place-content-evenly rounded-2xl">
                    Rosa quintero
                  </button>
                  <button className="space-y-2 pt-2 flex flex-row items-center  bg-blue-500  border-2 shadow-2xl p-3 place-content-evenly rounded-2xl">
                    Rosa quintero
                  </button>
                </button>
              </div>
            </div>
            {/*  */}
            <div className="bg-red-500  h-auto max-w-full flex flex-row items-center  shadow-2xl p-5 place-content-evenly rounded-2xl">
              <div className=" bg-white hover:border-black border-2 hover:text-black rounded-xl  shadow-black shadow-2xl">
                <button className="   flex flex-col items-center justify-center   space-y-2 hover:bg-blue-500 hover:text-black rounded-xl border-blue-500 shadow-black shadow-2xl ">
                  instructores <br /> solicitantes :
                  <button className=" pt-2 flex flex-row items-center   bg-blue-500  border-2 shadow-2xl p-3 place-content-evenly rounded-2xl">
                    Rosa quintero
                  </button>
                  <button className="space-y-2 pt-2 flex flex-row items-center  bg-blue-500  border-2 shadow-2xl p-3 place-content-evenly rounded-2xl">
                    Rosa quintero
                  </button>
                </button>
              </div>
            </div>
            {/*  */}
            <div className="bg-red-500 h-auto max-w-full flex flex-row items-center  shadow-2xl p-5 place-content-evenly rounded-2xl">
              <div className=" bg-white  hover:border-black border-2 hover:text-black rounded-xl  shadow-black shadow-2xl">
                <button className="   flex flex-col items-center justify-center   space-y-2 hover:bg-blue-500 hover:text-black rounded-xl border-blue-500 shadow-black shadow-2xl ">
                  instructores <br /> solicitantes :
                  <button className=" pt-2 flex flex-row items-center bg-blue-500  border-2 shadow-2xl p-3 place-content-evenly rounded-2xl">
                    Rosa quintero
                  </button>
                  <button className="space-y-2 pt-2 flex flex-row items-center  bg-blue-500  border-2 shadow-2xl p-3 place-content-evenly rounded-2xl">
                    Rosa quintero
                  </button>
                </button>
              </div>
            </div>
          </div>
          {/* hhhhh */}
          {/*  2xl:grid-cols-3 xl:grid-cols-2 */}

          <div className=" w-full items-center justify-center  grid grid-cols-1 2xl:grid-cols-3 xl:grid-cols-3  lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-1 bg-orange-500 ">
            <div>
              Direccion :
              <input
                className="  flex flex-col space-x-4 space-y-4  w-44 "
                type="text"
                id="direccion"
                name="direccion"
                required
                placeholder="Calle 68 # 25 A 164"
              />
            </div>
            <div>
              Email :
              <input
                className="flex flex-col space-x-4  space-y-4   w-60"
                type="text"
                id="email"
                name="email"
                required
                placeholder="darlinandresrivas@gmail.com"
              />
            </div>
            <div className="">
              telefono :
              <input
                className="flex flex-col space-x-4 space-y-4"
                type="text"
                id="telefono"
                name="telefono"
                required
                placeholder="3136349799"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-3 bg-purple-900 h-auto max-w-full items-center border-2 shadow-2xl p-5 place-content-evenly rounded-2xl">
          <div className=" bg-slate-500 h-full max-w-full flex flex-row items-center  shadow-2xl p-5 place-content-evenly rounded-2xl">
              <div className=" bg-blue-200  hover:bg-blue-800 hover:text-black rounded-xl border-2 hover:border-black  shadow-black shadow-2xl">
                <button className="  flex flex-col items-center justify-center  space-y-2 hover:bg-blue-500 hover:text-black rounded-xl border-blue-500 shadow-black shadow-2xl ">
                  <h4>
                    instructores <br /> solicitantes:
                  </h4>
                  <button className=" pt-2 flex flex-row items-center bg-blue-500  border-2 shadow-2xl p-3 place-content-evenly rounded-2xl">
                    Rosa quintero
                  </button>
                  <button className="space-y-2 pt-2 flex flex-row items-center bg-blue-500  border-2 shadow-2xl p-3 place-content-evenly rounded-2xl">
                    Rosa quintero
                  </button>
                </button>
              </div>
            </div>
            {/*  */}
            <div className=" bg-slate-500 h-full max-w-full flex flex-row items-center  shadow-2xl p-5 place-content-evenly rounded-2xl">
              <div className=" bg-blue-200  hover:bg-blue-800 hover:text-black rounded-xl border-2 hover:border-black  shadow-black shadow-2xl">
                <button className="  flex flex-col items-center justify-center  space-y-2 hover:bg-blue-500 hover:text-black rounded-xl border-blue-500 shadow-black shadow-2xl ">
                  <h4>
                    instructores <br /> solicitantes:
                  </h4>
                  <button className=" pt-2 flex flex-row items-center bg-blue-500  border-2 shadow-2xl p-3 place-content-evenly rounded-2xl">
                    Rosa quintero
                  </button>
                  <button className="space-y-2 pt-2 flex flex-row items-center bg-blue-500  border-2 shadow-2xl p-3 place-content-evenly rounded-2xl">
                    Rosa quintero
                  </button>
                </button>
              </div>
            </div>
            {/*  */}

            <div className=" bg-slate-500 h-full max-w-full flex flex-row items-center  shadow-2xl p-5 place-content-evenly rounded-2xl">
              <div className=" bg-blue-200  hover:bg-blue-800 hover:text-black rounded-xl border-2 hover:border-black  shadow-black shadow-2xl">
                <button className="  flex flex-col items-center justify-center  space-y-2 hover:bg-blue-500 hover:text-black rounded-xl border-blue-500 shadow-black shadow-2xl ">
                  <h4>
                    instructores <br /> solicitantes:
                  </h4>
                  <button className=" pt-2 flex flex-row items-center bg-blue-500  border-2 shadow-2xl p-3 place-content-evenly rounded-2xl">
                    Rosa quintero
                  </button>
                  <button className="space-y-2 pt-2 flex flex-row items-center bg-blue-500  border-2 shadow-2xl p-3 place-content-evenly rounded-2xl">
                    Rosa quintero
                  </button>
                </button>
              </div>
            </div>
            {/*  */}

            <div className=" bg-slate-500 h-full max-w-full flex flex-row items-center  shadow-2xl p-5 place-content-evenly rounded-2xl">
              <div className=" bg-blue-200  hover:bg-blue-800 hover:text-black rounded-xl border-2 hover:border-black  shadow-black shadow-2xl">
                <button className="  flex flex-col items-center justify-center  space-y-2 hover:bg-blue-500 hover:text-black rounded-xl border-blue-500 shadow-black shadow-2xl ">
                  <h4>
                    instructores <br /> solicitantes:
                  </h4>
                  <button className=" pt-2 flex flex-row items-center bg-blue-500  border-2 shadow-2xl p-3 place-content-evenly rounded-2xl">
                    Rosa quintero
                  </button>
                  <button className="space-y-2 pt-2 flex flex-row items-center bg-blue-500  border-2 shadow-2xl p-3 place-content-evenly rounded-2xl">
                    Rosa quintero
                  </button>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};
