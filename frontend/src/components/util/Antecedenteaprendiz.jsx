import { Link } from "react-router-dom";
export const Antecedenteaprendiz = () => {
  return (
    <div className=" bg-white border-2 mx-auto max-w-4xl pt-20 pb-32  sm:pt-40 sm:pb-20 rounded-2xl">
      <h4 className="flex flex-row justify-center items-center border-2 w-full bg-blue-600 text-white ">Antecedentes Aprendiz</h4>
      <Link to={"/homeaprendiz"}>
        <button className="pt-6 md:p-8 text-center md:text-left space-y-4 ">
          <blockquote>
            <p className="      bg-gray-500 hover:bg-black text-white w-24 h-7 text-center rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-lg">
              Volver
            </p>
          </blockquote>
        </button>
      </Link>
      <div>
      <div className=" space-x-4 space-y-4 items-center justify-center"></div>
        <div className=" flex flex-row  items-center justify-center">
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
        <div className=" flex flex-row items-center justify-center  ">
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

      <div className=" space-x-40 space-y-20">
        <h1 className="flex justify-center items-centerv">
          Historia de comites :{" "}
        </h1>
      </div>
      {/* componente #3 para mover o dar espacio */}
      <div className=" space-x-4 space-y-10">
        <div className=" bg-white h-auto max-w-full flex flex-row items-center border-2 shadow-2xl p-5 place-content-evenly rounded-2xl">
          <div className=" h-auto max-w-full flex flex-row items-center  shadow-2xl p-5 place-content-evenly rounded-2xl">
            <div className=" bg-white  hover:bg-blue-800 hover:text-black rounded-xl border-2 hover:border-black  shadow-black shadow-2xl">
              <button className="  flex flex-col items-center justify-center  space-y-2 hover:bg-blue-500 hover:text-black rounded-xl border-blue-500 shadow-black shadow-2xl ">
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
            <div className="  bg-white hover:border-black border-2 hover:text-black rounded-xl shadow-black shadow-2xl">
              <button className="   flex flex-col items-center justify-center   space-y-2 hover:bg-blue-500 hover:text-black rounded-xl border-blue-500 shadow-black shadow-2xl ">
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
            <div className=" bg-white hover:border-black border-2 hover:text-black rounded-xl  shadow-black shadow-2xl">
              <button className="   flex flex-col items-center justify-center   space-y-2 hover:bg-blue-500 hover:text-black rounded-xl border-blue-500 shadow-black shadow-2xl ">
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
            <div className=" bg-white  hover:border-black border-2 hover:text-black rounded-xl  shadow-black shadow-2xl">
              <button className="   flex flex-col items-center justify-center   space-y-2 hover:bg-blue-500 hover:text-black rounded-xl border-blue-500 shadow-black shadow-2xl ">
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
        <div className=" flex flex-row  items-center justify-center">
          <div>
            Nombre :
            <input
              className="  flex flex-col space-y-4 w-44"
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
              className="flex flex-col w-60"
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
        <div className=" flex flex-row   items-center justify-center">
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

        <div className="">
          Novedades :
          <div className=" bg-white h-auto max-w-full flex flex-row border-2 shadow-2xl p-5 place-content-evenly rounded-2xl">
            <div className="  flex flex-row items-center justify-center  bg-white hover:text-black rounded-xl border-blue-500 shadow-black shadow-2xl">
              <button className=" w-40  flex flex-col items-center justify-center hover:bg-blue-500 hover:text-black rounded-xl border-blue-500 shadow-black shadow-2xl ">
                instructor:
                <button className=" flex flex-row items-center justify-center w-36 bg-blue-600  text-white border-2 shadow-2xl p-3 place-content-evenly rounded-2xl">
                  Rosa quintero
                </button>
                <button className="flex flex-row items-center justify-center w-36 bg-blue-600 text-white border-2 shadow-2xl p-3 place-content-evenly rounded-2xl">
                  Rosa quintero
                </button>
              </button>
            </div>
            {/*  */}
            <div className=" bg-white  hover:bg-black hover:text-black rounded-xl border-blue-500 shadow-black shadow-2xl">
              <button className=" w-40  flex flex-col items-center justify-center hover:bg-blue-500 space-y-2 hover:text-black rounded-xl border-blue-500 shadow-black shadow-2xl ">
                Nombre novedad:
                <button className=" flex flex-col items-center justify-center w-36  bg-blue-600 text-white border-2 shadow-2xl p-3 place-content-evenly rounded-2xl">
                  nombre
                </button>
                <button className="flex flex-col items-center justify-center w-36 bg-blue-600 text-white  border-2 shadow-2xl p-3 place-content-evenly rounded-2xl">
                  nombre
                </button>
              </button>
            </div>
            {/*  */}

            <div className=" bg-white   hover:bg-black hover:text-black rounded-xl border-blue-500 shadow-black shadow-2xl">
              <button className= "  w-40  flex flex-col items-center justify-center hover:bg-blue-500 space-y-2 hover:text-black rounded-xl border-blue-500 shadow-black shadow-2xl ">
                Descripcion:
                <button className="  flex flex-col items-center justify-center w-36 bg-blue-600 text-white border-2 shadow-2xl p-3 place-content-evenly rounded-2xl">
                  Descripcion
                </button>
                <button className="flex flex-col items-center justify-center w-36 bg-blue-600 text-white border-2 shadow-2xl p-3 place-content-evenly rounded-2xl">
                  Descripcion
                </button>
              </button>
            </div>
            {/*  */}

            <div className=" bg-white hover:bg-black hover:text-black rounded-xl border-blue-500 shadow-black shadow-2xl">
              <button className= " w-40  flex flex-col items-center justify-center hover:bg-blue-500 space-y-2 hover:text-black rounded-xl border-blue-500 shadow-black shadow-2xl ">
                Fecha:
                <button className=" flex flex-row items-center justify-center w-36 bg-blue-600  text-white border-2 shadow-2xl p-3 place-content-evenly rounded-2xl">
                  2021-08-23
                </button>
                <button className="flex flex-row items-center justify-center w-36 bg-blue-600 text-white border-2 shadow-2xl p-3 place-content-evenly rounded-2xl">
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
