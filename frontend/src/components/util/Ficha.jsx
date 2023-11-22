import { CgDetailsMore } from "react-icons/cg";
import { HiIdentification } from "react-icons/hi";
import { Link } from "react-router-dom";

export const Ficha = ({ ficha }) => {
  return (
    <li>
      <div className="block hover:bg-gray-50">
        <div className="flex items-center px-4 py-4 sm:px-6">
          <div className="flex min-w-0 flex-1 items-center">
            <div className="flex-shrink-0">
              <img
                className="h-12 w-12 rounded-full"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
              <div>
                <p className="truncate text-sm font-medium text-indigo-600">
                  {ficha.programa}
                </p>
                <p className="mt-2 flex items-center text-sm text-gray-500">
                  <span className="truncate">{"Codigo " + ficha.codigo}</span>
                </p>
              </div>
              <div className="hidden md:block">
                <div>
                  <p className="text-sm text-gray-900">
                    {ficha.inicioLectiva.replace(/T.*/, "")}
                  </p>
                  <p className="mt-2 flex items-center text-sm text-gray-500">
                    <HiIdentification
                      className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="inline-block">
                      Identificación + filtrado[0].documento
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Link
              className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              // to={`/antecedente-aprendiz/${filtrado[0].id}`}
            >
              Detalles
              <CgDetailsMore
                className="ml-3 -mr-1 h-5 w-5"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </div>
    </li>
  );
};
