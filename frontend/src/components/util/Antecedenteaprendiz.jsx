import { Link } from "react-router-dom";
export const Antecedenteaprendiz = () => {
  return (
    <div className=" bg-gray-400 mx-auto max-w-4xl pt-20 pb-32 sm:pt-40 sm:pb-20 rounded-2xl">
      <h4>Antecedentes Aprendiz</h4>
      <Link to={"/homeaprendiz"}>
        <button className="pt-6 md:p-8 text-center md:text-left space-y-4 ">
          <blockquote>
            <p className="     bg-gray-500 text-white w-24 h-7 text-center rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-lg">
              Volver
            </p>
          </blockquote>
        </button>
      </Link>

      <div className=" space-x-4 space-y-40"></div>
      <div className=" flex flex-row ">
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
      <div>
        {/* mantenimiento */}
        <div className=" flex flex-row ">
          <div className=" flex flex-row">
            <div className="">
              Nombre :
              <input
                className="  flex flex-col"
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
            <div className="">
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
      </div>

      <div className=" space-x-3 space-y-20">
        <h1 className="flex justify-center items-centerv">
          Historia de comites :{" "}
        </h1>
      </div>
      {/* componente #3 para mover o dar espacio */}
      <div className=" space-x-4 space-y-10">
        <div className=" bg-white h-auto max-w-full flex flex-row items-center border-2 shadow-2xl p-5 place-content-evenly rounded-2xl">
          <div className=" h-auto max-w-full flex flex-row items-center  shadow-2xl p-5 place-content-evenly rounded-2xl">
            <div className=" bg-white  hover:bg-blue-800 hover:text-black rounded-xl border-blue-500 shadow-black shadow-2xl">
              <button className="  flex flex-col items-center justify-center  space-y-2 hover:bg-blue-800 hover:text-black rounded-xl border-blue-500 shadow-black shadow-2xl ">
                <h4>instructores <br/> solicitantes:</h4>
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
          <div className="  h-auto max-w-full flex flex-row items-center  shadow-2xl p-5 place-content-evenly rounded-2xl">
            <div className="  bg-white hover:bg-blue-800 hover:text-black rounded-xl border-blue-500 shadow-black shadow-2xl">
              <button className="   flex flex-col items-center justify-center   space-y-2 hover:bg-blue-800 hover:text-black rounded-xl border-blue-500 shadow-black shadow-2xl ">
                instructores <br/> solicitantes :
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
          <div className="  h-auto max-w-full flex flex-row items-center  shadow-2xl p-5 place-content-evenly rounded-2xl">
            <div className=" bg-white hover:bg-blue-800 hover:text-black rounded-xl border-blue-500 shadow-black shadow-2xl">
              <button className="   flex flex-col items-center justify-center   space-y-2 hover:bg-blue-800 hover:text-black rounded-xl border-blue-500 shadow-black shadow-2xl ">
                instructores <br/> solicitantes :
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
           <div className="  h-auto max-w-full flex flex-row items-center  shadow-2xl p-5 place-content-evenly rounded-2xl">
            <div className=" bg-white hover:bg-blue-800 hover:text-black rounded-xl border-blue-500 shadow-black shadow-2xl">
              <button className="   flex flex-col items-center justify-center   space-y-2 hover:bg-blue-800 hover:text-black rounded-xl border-blue-500 shadow-black shadow-2xl ">
                instructores <br/> solicitantes :
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

        <div className=" space-x-4 space-y-4"></div>
        <div className=" flex flex-row ">
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
        <div className=" flex flex-row  ">
          <div>
            Nombre :
            <input
              className="  flex flex-col"
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
          <div className="">
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

        <div className="">
          Novedades :
          <div className=" bg-blue-500 h-auto max-w-full flex flex-row items-center border-2 shadow-2xl p-5 place-content-evenly rounded-2xl">
            <div className=" bg-white hover:bg-blue-800 hover:text-black rounded-xl border-blue-500 shadow-black shadow-2xl">
              <button className="  items-center  space-y-2 hover:bg-blue-800 hover:text-black rounded-xl border-blue-500 shadow-black shadow-2xl ">
                instructor:
                <button className=" pt-2 flex flex-row items-center bg-blue-600  text-white border-2 shadow-2xl p-3 place-content-evenly rounded-2xl">
                  Rosa quintero
                </button>
                <button className="space-y-2 pt-2 flex flex-row items-center bg-blue-600 text-white border-2 shadow-2xl p-3 place-content-evenly rounded-2xl">
                  Rosa quintero
                </button>
              </button>
            </div>
            {/*  */}
            <div className="bg-white hover:bg-blue-800 hover:text-black rounded-xl border-blue-500 shadow-black shadow-2xl">
              <button className="hover:bg-blue-800 space-y-2 hover:text-black rounded-xl border-blue-500 shadow-black shadow-2xl ">
                instructor:
                <button className=" pt-2 flex flex-row items-center bg-blue-600 text-white border-2 shadow-2xl p-3 place-content-evenly rounded-2xl">
                  nombre
                </button>
                <button className="space-y-2 pt-2 flex flex-row items-center bg-blue-600 text-white  border-2 shadow-2xl p-3 place-content-evenly rounded-2xl">
                  nombre
                </button>
              </button>
            </div>
            {/*  */}

            <div className=" bg-white  hover:bg-blue-800 hover:text-black rounded-xl border-blue-500 shadow-black shadow-2xl">
              <button className="hover:bg-blue-800 space-y-2 hover:text-black rounded-xl border-blue-500 shadow-black shadow-2xl ">
                Descripcion:
                <button className=" pt-2 flex flex-row items-center bg-blue-600 text-white border-2 shadow-2xl p-3 place-content-evenly rounded-2xl">
                  Descripcion
                </button>
                <button className="space-y-2 pt-2 flex flex-row items-center bg-blue-600 text-white border-2 shadow-2xl p-3 place-content-evenly rounded-2xl">
                  Descripcion
                </button>
              </button>
            </div>
            {/*  */}

            <div className=" bg-white hover:bg-blue-800 hover:text-black rounded-xl border-blue-500 shadow-black shadow-2xl">
              <button className="hover:bg-blue-800 space-y-2 hover:text-black rounded-xl border-blue-500 shadow-black shadow-2xl ">
                Fecha:
                <button className=" pt-2 flex flex-row items-center bg-blue-600  text-white border-2 shadow-2xl p-3 place-content-evenly rounded-2xl">
                  2021-08-23
                </button>
                <button className="space-y-2 pt-2 flex flex-row items-center bg-blue-600 text-white border-2 shadow-2xl p-3 place-content-evenly rounded-2xl">
                  2021-02-29
                </button>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
