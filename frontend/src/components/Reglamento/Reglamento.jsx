import { useEffect, useState } from "react";

import { Articulos } from "./Articulos";
import { Spinner } from "../util/Spinner";
import { NavBar } from "../../Layout/NavBar";
import { Footer } from "../../Layout/Footer";
import { useNavigate } from "react-router-dom";
import { useContextApp } from "../../Context/ContextApp";

export const Reglamento = () => {
  const [reglamento, setReglamento] = useState([]);
  const { getReglamento, orderReglamento, protectedRoutes, validateToken } =
    useContextApp();
  const navigate = useNavigate();
  const tokenExist = protectedRoutes();

  useEffect(() => {
    if (!tokenExist) {
      navigate(`/`);
    } else if (validateToken()) {
      navigate(`/`);
    } else {
      const Reglamento = async () => {
        const token = JSON.parse(localStorage.getItem("newToken"));
        const res = await getReglamento(token.token);

        if (res !== null || res !== undefined) {
          setReglamento(res);
        }
      };

      Reglamento();
    }
  }, [getReglamento, validateToken, navigate, tokenExist]);

  if (reglamento === null || reglamento === undefined) {
    return <Spinner />;
  } else if (reglamento.length === 0) {
    return <Spinner />;
  }
  const result = orderReglamento(reglamento);
  console.log(result);

  return (
    <div>
      <NavBar />
      <main>
        <div className="mx-auto max-w-7xl pt-20 pb-32 sm:pt-48 sm:pb-40 ">
          <div className="border-2 shadow-2xl p-5 place-content-evenly rounded-2xl">
            <div className="relative px-6 lg:px-8 ">
              <div className="mx-auto max-w-7xl pt-0 pb-32 sm:pt-0 sm:pb-40">
                <div className="h-auto max-w-full rounded-lg flex flex-col items-center bg-slate-200 p-2">
                  <img
                    src={"../../../img/logo-sena-negro-png-2022.png"}
                    alt="logo"
                    width="350"
                    height="350"
                  />
                </div>
                <br />
                <div className="text-base font-bold text-blue-800 italic font-serif flex-1 mb-4 flex flex-col items-center">
                  <h2>Reglamento del aprendiz SENA</h2>
                </div>

                <ul>
                  {result.map((capitulo, index) => (
                    <li key={index}>
                      <br />
                      <article>
                        <h1 className="text-base font-bold text-blue-800 italic font-serif flex-1 mb-4 flex flex-col items-center">
                          <strong>
                            Capitulo
                            <strong>{capitulo.cap_id}</strong>
                          </strong>
                          <p>{capitulo.cap_titulo}</p>
                        </h1>
                        <div>
                          {/* Esto es un componente */}
                          <Articulos articulos={capitulo.contenido} />
                        </div>
                      </article>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
