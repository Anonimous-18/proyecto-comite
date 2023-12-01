import { Fragment, useEffect, useState } from "react";

import { SlMenu } from "react-icons/sl";
import { MdClass } from "react-icons/md";
import { GiCancel} from "react-icons/gi";
import { BiSolidFoodMenu } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineContacts } from "react-icons/ai";
// import { SiGoogleclassroom } from "react-icons/si";
import { IoNotificationsSharp } from "react-icons/io5";
import { BsJournalBookmarkFill } from "react-icons/bs";
import { Popover, Transition } from "@headlessui/react";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { NavLink, Link, useNavigate } from "react-router-dom";

import PulseLoader from "react-spinners/PulseLoader";

import hooks from "../hooks/useFunction";
import { useContextApp } from "../Context/ContextApp";

export const NavBar = () => {
  const navigate = useNavigate();
  const { decode } = useContextApp();
  const [user, setUser] = useState(null);
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    const token = decode(sessionStorage.getItem("Datos"));

    if (token) {
      const decodedToken = hooks.useDecodedToken(token);
      setUserName(decodedToken.user.nombre_completo);
      setUser(decodedToken.user);
    }
  }, [decode]);

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
      className={`w-full py-4 top-0 z-40 fixed shadow-md border-black bg-gradient-to-t from-blue-100 to-blue-300 transition`}
    >
      <div className="w-full flex flex-row justify-between">
        <div
          // className="flex flex-col justify-between items-center px-2 sm:-ml-4 sm:-mt-2 sm:flex-row sm:flex-nowrap md:px-12"
          className="flex flex-row justify-between w-full h-full"
        >
          <div className="ml-3 w-[50%]">
            <Link
              to={`${
                user && user.rol_id === 2
                  ? "/home-instructor"
                  : user && user.rol_id === 3
                  ? "/home-aprendiz"
                  : localStorage.getItem("invitado")
                  ? "/home-invitado"
                  : user && user.rol_id === 1
                  ? "/home-gestor"
                  : "/"
              }`}
            >
              <img src="../../public/logoSena.png" width={70} height={60} />
            </Link>
          </div>
          <div className="w-[50%] 2xl:w-[20%] xl:w-[25%] lg:w-[30%] flex flex-row items-center justify-end">
            <NavLink
              to="/reglamento"
              className="w-2/6 hidden text-lg 2xl:flex xl:flex lg:flex md:flex sm:flex flex-col items-center justify-center text-center font-medium text-gray-900 border-b-2 border-transparent hover:border-blue-800 transition duration-200 ease-in-out mx-3 relative"
            >
              <BsJournalBookmarkFill className="w-10 h-10 text-black" />
              <div className="w-32 text-xs font-bold hover:border-blue-800 transition duration-200 ease-in-out">
                Reglamento
              </div>
            </NavLink>
            <div className="w-2/6  hidden 2xl:flex xl:flex lg:flex md:flex sm:flex flex-col items-center justify-center text-center mr-10 border-b-2 border-transparent hover:border-blue-800 transition duration-200 ease-in-out mx-3 relative">
              <BsFillPersonFill className="w-10 h-10 text-black" />
              <div className="w-32 text-xs font-bold hover:border-blue-800 transition duration-200 ease-in-out">
                {userName && userName ? userName : "Sin nombre"}
              </div>
            </div>
            <Popover className="w-1/3 relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={`
                ${open ? "" : "text-opacity-90"}
                focus:ring-none focus:outline-none`}
                  >
                    {open ? (
                      <GiCancel className="w-10 h-10 mr-1" />
                    ) : (
                      <SlMenu className="w-10 h-10 mr-1" />
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
                    <Popover.Panel className="absolute z-10 mt-6 w-screen max-w-md -translate-x-64 sm:-translate-x-[300px] transform">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 ">
                        <div className="relative grid grid-cols-1 gap-4 bg-white p-7 overflow-y-auto max-h-[400px] sm:max-h-[500px]">
                          {(user && user.rol_id === 2) ||
                          (user && user.rol_id === 1) ? (
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
                              user && user.rol_id === 1
                                ? "admin"
                                : user && user.rol_id === 2
                                ? "instructor"
                                : user && user.rol_id === 3
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
                          {/* <NavLink
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
                          </NavLink> */}
                          {user && user.rol_id === 1 ? (
                            <NavLink
                              to="/fichas"
                              className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-transparent hover:border-blue-800 transition duration-200 ease-in-out mx-3"
                            >
                              <div className="flex h-10 w-10 shrink-0 items-center justify-center shadow-lg border-2 rounded-lg text-gray-100 sm:h-12 sm:w-12">
                                <MdClass className="max-w-xs text-5xl text-blue-800 flex flex-col items-center justify-center" />
                              </div>
                              <div className="ml-4">
                                <p className="text-sm font-medium text-gray-900">
                                  Fichas
                                </p>
                                <p className="text-sm text-gray-500">
                                  Fichas descripción
                                </p>
                              </div>
                            </NavLink>
                          ) : (
                            <></>
                          )}
                          <NavLink
                            to="/reglamento"
                            className="text-lg inline-flex sm:hidden font-medium leading-6 text-gray-900 border-b-2 border-transparent hover:border-blue-800 transition duration-200 ease-in-out mx-3"
                          >
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center shadow-lg border-2 rounded-lg text-gray-100 sm:h-12 sm:w-12">
                              <BsJournalBookmarkFill className="max-w-xs text-5xl text-blue-800 flex flex-col items-center justify-center" />
                            </div>
                            <div className="ml-4">
                              <p className="text-sm font-medium text-gray-900">
                                Reglamento
                              </p>
                              <p className="text-sm text-gray-500">
                                Reglamento SENA
                              </p>
                            </div>
                          </NavLink>
                          {(user && user.rol_id === 2) ||
                          (user && user.rol_id === 1) ? (
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
                          <div className="text-lg inline-flex 2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden font-medium leading-6 text-gray-900 border-b-2 border-transparent hover:border-blue-800 transition duration-200 ease-in-out mx-3">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center shadow-lg border-2 rounded-lg text-gray-100 sm:h-12 sm:w-12">
                              <BsFillPersonFill className="max-w-xs text-5xl text-blue-800 flex flex-col items-center justify-center" />
                            </div>
                            <div className="ml-4">
                              <p className="text-sm font-bold text-gray-900">
                                {userName && userName ? userName : "Sin nombre"}
                              </p>
                              <p className="text-sm text-gray-500">
                                Usuario Logueado
                              </p>
                            </div>
                          </div>
                          {user && user.rol_id === 1 ? (
                            <>
                              <NavLink
                                to="/roles"
                                className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-transparent hover:border-blue-800 transition duration-200 ease-in-out mx-3"
                              >
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                                  <BsFillPersonFill className="max-w-xs text-5xl text-blue-800 flex flex-col items-center justify-center" />
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
                              <NavLink
                                to="/home-gestor"
                                className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-transparent hover:border-blue-800 transition duration-200 ease-in-out mx-3"
                              >
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                                  <div>
                                    <AiOutlineContacts className="max-w-xs text-5xl text-blue-800 flex flex-col items-center justify-center" />
                                  </div>
                                  {/* <div>
                                    <SiGoogleclassroom className="max-w-xs text-3xl text-blue-800 flex flex-col items-center justify-center" />
                                  </div> */}
                                </div>
                                <div className="ml-4">
                                  <p className="text-sm font-medium text-gray-900">
                                    Comites
                                  </p>
                                  <p className="text-sm text-gray-500">
                                    procesos de comites
                                  </p>
                                </div>
                              </NavLink>
                            </>
                          ) : (
                            <></>
                          )}
                        </div>
                        <div className="bg-gray-50 p-4 flex justify-start items-start">
                          <button
                            onClick={() => handleClick()}
                            className="ml-3 relative inline-flex items-center rounded-md border border-transparent bg-blue-800 px-10 py-2 text-lg font-bold text-white shadow-xl transition duration-300 ease-in-out hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2"
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
