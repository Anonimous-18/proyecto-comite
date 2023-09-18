import { useEffect, useState } from "react";
import { Footer } from "../../Layout/Footer";
import { NavBar } from "../../Layout/NavBar";
import { useContextApp } from "../../Context/ContextApp";
import { useNavigate } from "react-router-dom";

export const SolicitudComite = () => {
  const [reglamento, setReglamento] = useState([]);
  const [data, setData] = useState({
    capitulo: 1,
  });
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
  }, [getReglamento, validateToken, navigate, tokenExist, data.capitulo]);

  const onChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  if (reglamento === null || reglamento === undefined) {
    return <div>Loading...</div>;
  } else if (reglamento.length === 0) {
    return <div>Loading...</div>;
  }
  const result = orderReglamento(reglamento);

  return (
    <main className="mt-24 h-full w-full">
      <NavBar />
      <div className="h-full w-full">
        <form>
          <h1>Crear Solicitud Comite</h1>
          <div>
            <label className="">Capitulo</label>
            <select
              onChange={(e) => onChange(e)}
              id="capitulo"
              name="capitulo"
              value={data.capitulo}
              required
              className="bg-rose-200">
              {result.map((capitulo, index) => (
                <option key={index} value={`${capitulo.cap_id}`}>
                  Capitulo {capitulo.cap_id} {capitulo.cap_titulo}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="">Articulo</label>
            <select
              // onChange={(e) => onChange(e)}
              id="articulo"
              name="articulo"
              // value={data.tipo_documento}
              required
              className="bg-rose-200">
              <option value="articulo 1">Articulo</option>;
            </select>
          </div>
          <div>
            <h4>Aprendices Implicados:</h4>
            <input type="text" name="" className="border border-black" />
          </div>
          <div>
            <p>Descripcion de la Falta:</p>
            <textarea name="" className="border border-black" />
          </div>
          <div>
            <label className="">Tipo de Falta</label>
            <select
              // onChange={(e) => onChange(e)}
              id="tipo_falta"
              name="tipo_falta"
              // value={data.tipo_documento}
              required
              className="bg-rose-200">
              <option value="academica">Academica</option>
            </select>
          </div>
          <div>
            <p>Carpeta Anexos:</p>
            <input type="text" name="" className="border border-black" />
          </div>
          <div className="bg-rose-500 inline-block cursor-pointer">
            Cancelar
          </div>
          <button className="bg-blue-500">Crear Solicitud</button>
        </form>
      </div>
      <Footer />
    </main>
  );
};
