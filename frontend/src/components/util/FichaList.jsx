import { Ficha } from "./Ficha";
import { Spinner } from "../util/Spinner";
import { useEffect, useState } from "react";
import DefaultLayout from "../../Layout/DefaultLayout";
import { useContextApp } from "../../Context/ContextApp";

export const FichaList = () => {
  const [fichas, setFichas] = useState(null);
  const contextApi = useContextApp();

  useEffect(() => {
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
        <ul role="list" className="divide-y divide-gray-200">
          {fichas ? (
            fichas.map((ficha) => <Ficha key={ficha.id} ficha={ficha} />)
          ) : (
            <Spinner />
          )}
        </ul>
      </div>
    </DefaultLayout>
  );
};
