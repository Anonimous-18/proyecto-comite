import { Fragment, useEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { BiSolidFoodMenu } from "react-icons/bi";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { FaStreetView } from "react-icons/fa";
import { IoNotificationsSharp } from "react-icons/io5";
import { SlMenu } from "react-icons/sl";
import { GiCancel } from "react-icons/gi";
import { BsJournalBookmarkFill } from "react-icons/bs";
import { Popover, Transition } from "@headlessui/react";
import { BsFillPersonFill } from "react-icons/bs";

import PulseLoader from "react-spinners/PulseLoader";

import hooks from "../hooks/useFunction";

export const NavBar = () => {
  const [userName, setUserName] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("newToken"));

    if (token) {
      const decodedToken = hooks.useDecodedToken(token.token);
      setUserName(decodedToken.user.nombre_completo);
    }
  }, []);

  const handleClick = () => {
    localStorage.clear();
    sessionStorage.clear();
    navigate("/");
  };

  // Funcion para identificar el scroll
  window.onscroll = () => {
    scrollfuction();
  };

  const scrollfuction = () => {
    if (document.getElementById("navbar")) {
      // Si el scroll es mayor a 50 agregale una clase a el id navbar en caso contrario remueve las clases
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        document.getElementById("navbar").classList.add("shadow-navbar");
        document.getElementById("navbar").classList.add("bg-white");
      } else {
        document.getElementById("navbar").classList.remove("shadow-navbar");
        document.getElementById("navbar").classList.remove("bg-white");
      }
    }
  };

  return (
    <nav
      id="navbar"
      className="w-full py-4 top-0 z-40 fixed shadow-lg bg-gradient-to-t from-white via-white to-blue-100 "
    >
      <div className="px-4 sm:px-6 ">
        <div
          className="flex flex-col justify-between items-center px-2
        sm:-ml-4 sm:-mt-2 sm:flex-row sm:flex-nowrap md:px-12"
        >
          <div className="ml-4 mt-2">
            <Link
              to={`/home-${
                localStorage.getItem("instructor")
                  ? "instructor"
                  : localStorage.getItem("aprendiz")
                  ? "aprendiz"
                  : localStorage.getItem("invitado")
                  ? "invitado"
                  : "admin"
              }`}
            >
              <img
                className="darlin"
                src="../../public/logoSena.png"
                width={70}
                height={60}
              />
            </Link>
          </div>
          <div className="w-72 sm:w-2/6 flex flex-row items-center justify-center">
            <NavLink
              to="/reglamento"
              className="w-2/6   text-lg flex flex-col items-center justify-center text-center font-medium text-gray-900 border-b-2 border-transparent hover:border-blue-800 transition duration-200 ease-in-out mx-3 relative"
            >
              <BsJournalBookmarkFill className="w-10 h-10 text-black" />
              <div className="w-32 text-xs font-bold hover:border-blue-800 transition duration-200 ease-in-out">
                Reglamento
              </div>
            </NavLink>
            <div className="w-2/6   flex flex-col items-center justify-center text-center mr-10 border-b-2 border-transparent hover:border-blue-800 transition duration-200 ease-in-out mx-3 relative">
              <BsFillPersonFill className="w-10 h-10 text-black" />
              <div className="w-32 text-xs font-bold hover:border-blue-800 transition duration-200 ease-in-out">
                {userName && userName ? userName : "Sin nombre"}
              </div>
            </div>
            <Popover className="w-2/6 relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={`
                ${open ? "" : "text-opacity-90"}
                focus:ring-none focus:outline-none`}
                  >
                    {open ? (
                      <GiCancel className="w-10 h-10" />
                    ) : (
                      <SlMenu className="w-10 h-10" />
                    )}
                  </Popover.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 mt-3 w-screen max-w-xl -translate-x-64 transform px-6 ">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 ">
                        <div className="relative grid grid-cols-1 gap-4 bg-white p-7 ">
                          {localStorage.getItem("instructor") ||
                          localStorage.getItem("admin") ? (
                            <NavLink
                              to="/antecedentes"
                              className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-transparent hover:border-blue-800 transition duration-200 ease-in-out mx-3"
                            >
                              <div className="flex h-10 w-10 shrink-0 items-center justify-center shadow-lg border-2 rounded-lg text-gray-100 sm:h-12 sm:w-12">
                                <BiSolidFoodMenu className="max-w-xs text-5xl text-blue-800 flex flex-col items-center justify-center" />
                              </div>
                              <div className="ml-4">
                                <p className="text-sm font-medium text-gray-900">
                                  Antecedente Aprendiz
                                </p>
                                <p className="text-sm text-gray-500">
                                  Descripcion Antecedente Aprendiz
                                </p>
                              </div>
                            </NavLink>
                          ) : (
                            <></>
                          )}
                          <NavLink
                            to={`/notificaciones/${
                              localStorage.getItem("admin")
                                ? "admin"
                                : localStorage.getItem("instructor")
                                ? "instructor"
                                : localStorage.getItem("aprendiz")
                                ? "aprendiz"
                                : "sin usuario"
                            }`}
                            className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-transparent hover:border-blue-800 transition duration-200 ease-in-out mx-3"
                          >
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center shadow-lg border-2 rounded-lg text-gray-100 sm:h-12 sm:w-12">
                              <IoNotificationsSharp className="max-w-xs text-5xl text-blue-800 flex flex-col items-center justify-center" />
                            </div>
                            <div className="ml-4">
                              <p className="text-sm font-medium text-gray-900">
                                Notificaciones
                              </p>
                              <p className="text-sm text-gray-500">
                                Descripcion Notificaciones
                              </p>
                            </div>
                          </NavLink>
                          <NavLink
                            to="/"
                            className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-transparent hover:border-blue-800 transition duration-200 ease-in-out mx-3"
                          >
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center shadow-lg border-2 rounded-lg text-gray-100 sm:h-12 sm:w-12">
                              <FaStreetView className="max-w-xs text-5xl text-blue-800 flex flex-col items-center justify-center" />
                            </div>
                            <div className="ml-4">
                              <p className="text-sm font-medium text-gray-900">
                                Instructores
                              </p>
                              <p className="text-sm text-gray-500">
                                Descripcion Instructores
                              </p>
                            </div>
                          </NavLink>
                          {localStorage.getItem("instructor") ||
                          localStorage.getItem("admin") ? (
                            <NavLink
                              to="/novedades-instructor"
                              className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-transparent hover:border-blue-800 transition duration-200 ease-in-out mx-3"
                            >
                              <div className="flex h-10 w-10 shrink-0 items-center justify-center shadow-lg border-2 rounded-lg text-gray-100 sm:h-12 sm:w-12">
                                <BsFillJournalBookmarkFill className="max-w-xs text-5xl text-blue-800 flex flex-col items-center justify-center" />
                              </div>
                              <div className="ml-4">
                                <p className="text-sm font-medium text-gray-900">
                                  Novedades
                                </p>
                                <p className="text-sm text-gray-500">
                                  Descripcion novedades
                                </p>
                              </div>
                            </NavLink>
                          ) : (
                            <></>
                          )}
                          {localStorage.getItem("admin") ? (
                            <NavLink
                              to="/roles"
                              className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-transparent hover:border-blue-800 transition duration-200 ease-in-out mx-3"
                            >
                              <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                                <IconOne aria-hidden="true" />
                              </div>
                              <div className="ml-4">
                                <p className="text-sm font-medium text-gray-900">
                                  Roles
                                </p>
                                <p className="text-sm text-gray-500">
                                  Roles solo admin
                                </p>
                              </div>
                            </NavLink>
                          ) : (
                            <></>
                          )}
                        </div>
                        <div className="bg-gray-50 p-4">
                          <button
                            onClick={() => handleClick()}
                            className="ml-3 relative inline-flex items-center rounded-md border border-transparent bg-blue-800 px-10 py-2 text-lg font-bold text-white shadow-xl transition duration-300 ease-in-out hover:bg-black focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2"
                          >
                            Cerrar sesion
                            <PulseLoader
                              className="ml-3"
                              loading={true}
                              size={5}
                              color="#ffffff"
                            />
                          </button>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </div>
        </div>
      </div>
    </nav>
  );
};

function IconOne() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M24 11L35.2583 17.5V30.5L24 37L12.7417 30.5V17.5L24 11Z"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.7417 19.8094V28.1906L24 32.3812L31.2584 28.1906V19.8094L24 15.6188L16.7417 19.8094Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.7417 22.1196V25.882L24 27.7632L27.2584 25.882V22.1196L24 20.2384L20.7417 22.1196Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  );
}
