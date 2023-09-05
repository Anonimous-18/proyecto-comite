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
  // const navigate = useNavigate();
  // const tokenExist = protectedRoutes();

  useEffect(() => {
    // if (tokenExist && validateToken()) {
    //   navigate(`/`);
    // } else if (!tokenExist) {
    //   navigate(`/`);
    // } else if (tokenExist && !validateToken()) {
      const Reglamento = async () => {
        const res = await getReglamento();
        console.log(res, " 1")
        if (res !== null || res !== undefined) {
          console.log(res, " 2")
          setReglamento(res);
        }
        console.log(res, " 3")
      };

      Reglamento();
    // }
  }, [getReglamento, validateToken]);

  if (reglamento === null || reglamento === undefined) {
    console.log(reglamento, " 1");
    return <div>Loading...</div>;
  } else if (reglamento.length === 0) {
    console.log(reglamento, " 2");
    return <div>Loading...</div>;
  }
  const result = orderReglamento(reglamento);
  console.log(result, " 3");

  return (
    <div>
      <NavBar />
      <main>
        <div className="relative px-6 lg:px-8 ">
          <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
            <img src="" alt="logo" />
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
      </main>
      <Footer />
    </div>
  );
};
