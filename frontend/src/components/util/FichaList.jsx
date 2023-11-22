import { Ficha } from "./Ficha";
import { useEffect, useState } from "react";
import DefaultLayout from "../../Layout/DefaultLayout";
import { useContextApp } from "../../Context/ContextApp"; 

const applications = [
  {
    applicant: {
      name: "Ricardo Cooper",
      email: "ricardo.cooper@example.com",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    date: "2020-01-07",
    dateFull: "January 7, 2020",
    stage: "Completed phone screening",
    href: "#",
  },
  {
    applicant: {
      name: "Kristen Ramos",
      email: "kristen.ramos@example.com",
      imageUrl:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    date: "2020-01-07",
    dateFull: "January 7, 2020",
    stage: "Completed phone screening",
    href: "#",
  },
  {
    applicant: {
      name: "Ted Fox",
      email: "ted.fox@example.com",
      imageUrl:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    date: "2020-01-07",
    dateFull: "January 7, 2020",
    stage: "Completed phone screening",
    href: "#",
  },
];

export const FichaList = () => {
  const [fichas, setFichas] = useState(null);
  const contextApi = useContextApp();

  useEffect(() => {
    const getFichas = async () => {
      const res = await contextApi.getFichas();

      if (res) setFichas(res);
    }
    
    getFichas();
  }, [contextApi]);
  console.log(fichas)
  
  return (
    <DefaultLayout>
      <div className="overflow-hidden bg-white shadow sm:rounded-md">
        <ul role="list" className="divide-y divide-gray-200">
          {
            fichas&&fichas.map((ficha) => {
              <Ficha key={ficha.id} ficha/>
            })
          }
          {applications.map((application) => (
            <Ficha
              key={application.applicant.email}
              application={application}
            />
          ))}
        </ul>
      </div>
    </DefaultLayout>
  );
};
