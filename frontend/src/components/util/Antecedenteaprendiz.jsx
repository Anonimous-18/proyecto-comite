
import { Link } from "react-router-dom";


export const Antecedenteaprendiz = () => {
  return (
    <div className="mx-auto max-w-4xl pt-20 pb-32 sm:pt-40 sm:pb-20 rounded-2xl">
      <h1 className="flex justify-center items-center">Antecedentes Aprendiz </h1>
      <Link to={"/homeaprendiz"}>
        <button className="pt-6 md:p-8 text-center md:text-left space-y-4 ">
          <blockquote>
            <p
              className="       bg-gray-500 text-white w-24 h-7 text-center rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-lg"
            >
              Volver
            </p>
          </blockquote>
        </button>

      </Link>

      <div className=" bg-white   h-auto max-w-full flex flex-col ms-center border-2 shadow-2xl p-5 place-content-evenly rounded-2xl">
        <div className=" rounded-xl border-blue-500 shadow-black h-auto max-w-full flex flex-row items-center bg-white  shadow-2xl p-5 place-content-evenly ">
         

          Nombre :
          <button className="  items-center  bg-blue-100 justify-center space-y-2 spa hover:text-black rounded-xl border-blue-500 shadow-black shadow-2xl ">

            <button className=" pt-2 flex flex-col items-center  hover:bg-blue-800 bg-blue-500  border-2 shadow-2xl p-3 place-content-evenly rounded-2xl">
              Darlin Andres
            </button>
          </button>
          {/*  */}
          <div className=" space-x-4 rounded-xl border-blue-500 shadow-black h-auto max-w-full flex flex-row items-center bg-white  shadow-2xl p-5 place-content-evenly ">

            Apellido :
            <button className="  items-center  bg-blue-100 justify-center space-y-2 spa hover:text-black rounded-xl border-blue-500 shadow-black shadow-2xl ">

              <button className=" pt-2 flex flex-col items-center  hover:bg-blue-800 bg-blue-500   border-2 shadow-2xl p-3 place-content-evenly rounded-2xl">
                Rivas Lemus
              </button>
            </button>
            {/*  */}
            <div className="   space-x-4 rounded-xl border-blue-500 shadow-black h-auto max-w-full flex flex-row items-center bg-white  shadow-2xl p-5 place-content-evenly ">

              Identificacion :
              <button className="  items-center  bg-blue-100 justify-center space-y-2 spa hover:text-black rounded-xl border-blue-500 shadow-black shadow-2xl ">

                <button className=" pt-2 flex flex-col items-center  hover:bg-blue-800 bg-blue-500  border-2 shadow-2xl p-3 place-content-evenly rounded-2xl">
                  1076815567
                </button>
              </button>
            </div>

          </div>
        </div>



        Historia de comites  :
        <div className=" bg-blue-500 h-auto max-w-full flex flex-row items-center border-2 shadow-2xl p-5 place-content-evenly rounded-2xl">
          <div className=" h-auto max-w-full flex flex-row items-center  shadow-2xl p-5 place-content-evenly rounded-2xl">
            <div className=" bg-red-600 hover:bg-blue-800 hover:text-black rounded-xl border-blue-500 shadow-black shadow-2xl">
              <button className="  items-center  justify-center space-y-2 hover:bg-blue-800 hover:text-black rounded-xl border-blue-500 shadow-black shadow-2xl ">
                instructores solicitantes :
                <button className=" pt-2 flex flex-row items-center bg-slate-600  border-2 shadow-2xl p-3 place-content-evenly rounded-2xl">
                  Rosa quintero
                </button>
                <button className="space-y-2 pt-2 flex flex-row items-center bg-slate-600  border-2 shadow-2xl p-3 place-content-evenly rounded-2xl">
                  Rosa quintero
                </button>
              </button>
            </div>
          </div>


          {/*  */}
          <div className="  h-auto max-w-full flex flex-row items-center  shadow-2xl p-5 place-content-evenly rounded-2xl">
            <div className=" bg-red-600 hover:bg-blue-800 hover:text-black rounded-xl border-blue-500 shadow-black shadow-2xl">
              <button className="  items-center  space-y-2 hover:bg-blue-800 hover:text-black rounded-xl border-blue-500 shadow-black shadow-2xl ">
                instructores solicitantes :
                <button className=" pt-2 flex flex-row items-center bg-slate-600  border-2 shadow-2xl p-3 place-content-evenly rounded-2xl">
                  Rosa quintero
                </button>
                <button className="space-y-2 pt-2 flex flex-row items-center bg-slate-600  border-2 shadow-2xl p-3 place-content-evenly rounded-2xl">
                  Rosa quintero
                </button>
              </button>
            </div>
          </div>
          {/*  */}
          <div className=" bg-blue-500 h-auto max-w-full flex flex-row items-center  shadow-2xl p-5 place-content-evenly rounded-2xl">
            <div className=" bg-red-600 hover:bg-blue-800 hover:text-black rounded-xl border-blue-500 shadow-black shadow-2xl">
              <button className="  items-center  space-y-2 hover:bg-blue-800 hover:text-black rounded-xl border-blue-500 shadow-black shadow-2xl ">
                instructores solicitantes :
                <button className=" pt-2 flex flex-row items-center bg-slate-600  border-2 shadow-2xl p-3 place-content-evenly rounded-2xl">
                  Rosa quintero
                </button>
                <button className="space-y-2 pt-2 flex flex-row items-center bg-slate-600   shadow-2xl p-3 place-content-evenly rounded-2xl">
                  Rosa quintero
                </button>
              </button>
            </div>
          </div>
          {/*  */}
          <div className=" bg-blue-500 h-auto max-w-full flex flex-row items-center  shadow-2xl p-5 place-content-evenly rounded-2xl">
            <div className=" bg-red-600 hover:bg-blue-800 hover:text-black rounded-xl border-blue-500 shadow-black shadow-2xl">
              <button className="  items-center  space-y-2 hover:bg-blue-800 hover:text-black rounded-xl border-blue-500 shadow-black shadow-2xl ">
                instructores solicitantes :
                <button className=" pt-2 flex flex-row items-center bg-slate-600  border-2 shadow-2xl p-3 place-content-evenly rounded-2xl">
                  Rosa quintero
                </button>
                <button className="space-y-2 pt-2 flex flex-row items-center bg-slate-600  border-2 shadow-2xl p-3 place-content-evenly rounded-2xl">
                  Rosa quintero
                </button>
              </button>
            </div>
          </div>
        </div>
        {/* hhhhh */}


        <div className=" rounded-xl border-blue-500 shadow-black h-auto max-w-full flex flex-row items-center bg-white  shadow-2xl p-5 place-content-evenly ">

         Direccion :
          <button className="  items-center  bg-blue-100 justify-center space-y-2 spa hover:text-black rounded-xl border-blue-500 shadow-black shadow-2xl ">

            <button className=" pt-2 flex flex-col items-center  hover:bg-blue-800 bg-blue-500  border-2 shadow-2xl p-3 place-content-evenly rounded-2xl">
             Calle 68 # 35 A 128
            </button>
          </button>
          {/*  */}
          <div className=" rounded-xl border-blue-500 shadow-black h-auto max-w-full flex flex-row items-center bg-white  shadow-2xl p-5 place-content-evenly ">

           correo :
            <button className="  items-center  bg-blue-100 justify-center space-y-2 spa hover:text-black rounded-xl border-blue-500 shadow-black shadow-2xl ">

              <button className=" pt-2 flex flex-col items-center  hover:bg-blue-800 bg-blue-500  border-2 shadow-2xl p-3 place-content-evenly rounded-2xl">
                darlinandresrivas@gmail.com
              </button>
            </button>
            {/*  */}
            <div className=" rounded-xl border-blue-500 shadow-black h-auto max-w-full flex flex-row items-center bg-white  shadow-2xl p-5 place-content-evenly ">

             Telefono :
              <button className="  items-center  bg-blue-100 justify-center space-y-2 spa hover:text-black rounded-xl border-blue-500 shadow-black shadow-2xl ">

                <button className=" pt-2 flex flex-col items-center  hover:bg-blue-800 bg-blue-500  border-2 shadow-2xl p-3 place-content-evenly rounded-2xl">
                  3136349798
                </button>
              </button>
            </div>

          </div>
        </div>


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
  );
};


