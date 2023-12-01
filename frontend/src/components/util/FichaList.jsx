import { Ficha } from "./Ficha";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ClimbingBoxLoader } from "react-spinners";

import DefaultLayout from "../../Layout/DefaultLayout";
import { useContextApp } from "../../Context/ContextApp";

export const FichaList = () => {
  const [fichas, setFichas] = useState(null);
  const contextApi = useContextApp();

  useEffect(() => {
    window.scroll(0, 0);

    const getFichas = async () => {
      const res = await contextApi.getFichas();

      if (res) setFichas(res);
    };

    getFichas();
  }, [contextApi]);
  console.log(fichas);

  return (
    <DefaultLayout>
      <div className="overflow-hidden bg-white shadow sm:rounded-md">
        <Link
          to={`/crear-ficha`}
          className="inline-flex items-center rounded-md border border-transparent bg-blue-800 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-900 focus:ring-2 focus:outline-none transition duration-300 transform active:scale-95 ease-in-out m-2"
        >
          Crear Ficha
        </Link>
        <ul role="list" className="divide-y divide-gray-200">
          {fichas ? (
            fichas.map((ficha) => <Ficha key={ficha.id} ficha={ficha} />)
          ) : (
            <div className="flex flex-col items-center justify-center">
              <ClimbingBoxLoader
                color="#160ccc"
                size={16}
                loading={true}
                className="inline-block"
              />
              <small className="inline-flex">Sin Fichas</small>
            </div>
          )}
        </ul>
      </div>
    </DefaultLayout>
  );
};
