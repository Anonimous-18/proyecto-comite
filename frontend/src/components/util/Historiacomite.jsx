import DefaultLayout from "../../Layout/DefaultLayout";
import { Link } from "react-router-dom";

export const Historiacomite = () => {
  return (
    <DefaultLayout>
      <div>
        <div className="mx-auto max-w-4xl pt-20 pb-32 sm:pt-40 sm:pb-20 rounded-2xl">
          <h1 className="flex justify-center items-center">
            Antecedentes Aprendiz{" "}
          </h1>
          <Link to={"/homeaprendiz"}>
            <button className="pt-6 md:p-8 text-center md:text-left space-y-4 ">
              <blockquote>
                <p className="     bg-gray-500 text-white w-24 h-7 text-center rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-lg">
                  Volver
                </p>
              </blockquote>
            </button>
          </Link>
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


          </div >
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
          </div>
      </div>
    </DefaultLayout>
  );
};
