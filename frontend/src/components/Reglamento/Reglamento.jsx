import { NavBar } from "../../Layout/NavBar";
import { Footer } from "../../Layout/Footer";
import { Articulos } from "./Articulos";
import { useNavigate } from "react-router-dom";
import { useContextApp } from "../../Context/ContextApp";
import { useEffect, useState } from "react";

export const Reglamento = () => {
  const [reglamento, setReglamento] = useState([]);
  const { getReglamento, orderReglamento, protectedRoutes, validateToken } =
    useContextApp();
  const navigate = useNavigate();
  const tokenExist = protectedRoutes();

  useEffect(() => {
    if (!tokenExist || validateToken()) {
      navigate(`/`);
    } else {
      const Reglamento = async () => {
        const res = await getReglamento();

        if (res !== null || res !== undefined) {
          setReglamento(res);
        }
      };

      Reglamento();
    }
  }, [getReglamento, validateToken, navigate, tokenExist]);

  if (reglamento === null || reglamento === undefined) {
    return <div>Loading...</div>;
  } else if (reglamento.length === 0) {
    return <div>Loading...</div>;
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
                              <div className="mx-auto max-w-7xl pt-20 pb-32 sm:pt-48 sm:pb-40">
                                <img src={"../../../img/logo-sena-negro-png-2022.png"} alt="logo" width="350" height="350" />
                                <h2>Reglamento del aprendiz SENA</h2>
                                <ul>
                                  {result.map((capitulo, index) => (
                                    <li key={index}>
                                      <article>
                                        <h1>
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
