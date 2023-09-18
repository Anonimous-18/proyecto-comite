import { Footer } from "../../Layout/Footer";
import { NavBar } from "../../Layout/NavBar";
import { useContextApp } from "../../Context/ContextApp";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const RolesDetails = () => {
  const navigate = useNavigate();
  const [data, setData] = useState();
  const admin = localStorage.getItem("admin");
  const token = JSON.parse(localStorage.getItem("newToken"));

  const { id } = useParams();
  const { getRolesById } = useContextApp();

  useEffect(() => {
    if (admin) {
      const getDetails = async () => {
        const response = await getRolesById(token.token, id);
        console.log(response);
        if (response !== undefined) {
          setData(response);
        }
      };
      getDetails();
    } else {
      navigate(`/home`);
    }
  }, [getRolesById, navigate]);

  // console.log(data);

  return (
    <>
      <NavBar />
      <div className="h-full w-full">
        <div className="mt-24 bg-red-600">
          {data ? (
            <div className="h-full w-full">
              <article className="mt-5 bg-cyan-600">
                <p>{data.id}</p>
                <p>{data.nombre}</p>
                <p>{data.creado}</p>
              </article>
            </div>
          ) : (
            <h1>No existen error</h1>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};
