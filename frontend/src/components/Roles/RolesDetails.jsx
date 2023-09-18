import { Footer } from "../../Layout/Footer";
import { NavBar } from "../../Layout/NavBar";
import { useContextApp } from "../../Context/ContextApp";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const RolesDetails = () => {
  const navigate = useNavigate();
  const [data, setData] = useState();
  const token = JSON.parse(localStorage.getItem("newToken"));
  const admin = localStorage.getItem("admin");

  const { id } = useParams();
  const { getRolesById } = useContextApp();

  useEffect(() => {
    if (admin) {
      const getDetails = async () => {
        const response = await getRolesById(token.token, id);
        setData(response);
      }
      getDetails();
    } else {
      navigate(`/home`)
    }
  }, [getRolesById, navigate])

  return (
    <>
      <NavBar />
      <div className="h-full w-full mt-4">
        <h1 className="mt-5">
          {data?<h1>Existen</h1>:<>No existen</>}
        </h1>
      </div>
      <Footer />
    </>
  );
};
