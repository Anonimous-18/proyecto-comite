import { SlMenu } from "react-icons/sl";
import { GiCancel } from "react-icons/gi";
import { Popover, Transition } from "@headlessui/react";
import { BsFillPersonFill } from "react-icons/bs";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";

import PulseLoader from "react-spinners/PulseLoader";

import hooks from "../hooks/useFunction";

export const NavBar = () => {
  const [loading, setLoading] = useState(true);
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

  const solutions = [
    {
      name: "Reglamento",
      description: "Measure actions your users take",
      href: "/reglamento",
      icon: IconOne,
    },
    {
      name: "Nosotros",
      description: "Keep track of your growth",
      href: "/nosotros",
      icon: IconThree,
    },
    {
      name: "Carreras",
      description: "Keep track of your growth",
      href: "/carreras",
      icon: IconThree,
    },
    {
      name: "Blog",
      description: "Keep track of your growth",
      href: "/blog",
      icon: IconThree,
    },
    {
      name: "Contacto",
      description: "Keep track of your growth",
      href: "/contacto",
      icon: IconThree,
    },
  ];

  return (
    // Con id queremos identificar cada vez que hacemos scroll

    <nav
      id="navbar"
      className="w-full py-4 top-0 z-40 fixed shadow-xl bg-gradient-to-t from-white via-white to-blue-100 "
    >
      <div className="px-4 sm:px-6 ">
        {/* Con esto hacemos que el navbar sea responsive ver tailwind.config.js (screen) */}
        <div className="-ml-4 -mt-2 hidden lg:flex flex-wrap items-center justify-between sm:flex-nowrap md:px-12 px-2 ">
          <div className="ml-4 mt-2">
            <Link to="/home">
              <img
                src="https://tenor.com/es-419/view/tired-sleepy-gif-27609170.gif"
                width={70}
                height={60}
              />
            </Link>
          </div>
          <div className="ml-4 mt-2 flex-shrink-0">
            <NavLink
              to="/reglamento"
              className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-transparent hover:border-blue-800 transition duration-200 ease-in-out mx-3"
            >
              Reglamento
            </NavLink>
            {localStorage.getItem("admin") ? (
              <NavLink
                to="/roles"
                className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-transparent hover:border-blue-800 transition duration-200 ease-in-out mx-3"
              >
                Roles
              </NavLink>
            ) : (
              <></>
            )}
            <NavLink
              to="/"
              className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-transparent hover:border-blue-800 transition duration-200 ease-in-out mx-3"
            >
              Instructores
            </NavLink>
            <NavLink
              to="/"
              className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-transparent hover:border-blue-800 transition duration-200 ease-in-out mx-3"
            >
              Permisos
            </NavLink>
            <NavLink
              to="/"
              className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-transparent hover:border-blue-800 transition duration-200 ease-in-out mx-3"
            >
              Apredices
            </NavLink>
            <div className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-transparent hover:border-blue-800 transition duration-200 ease-in-out mx-3">
              <div className="flex flex-col items-center justify-center">
                <BsFillPersonFill className=" w-10 h-10  text-black" />
                <div>{userName && userName ? userName : "Sin nombre"}</div>
              </div>
            </div>
            <button
              onClick={() => handleClick()}
              // Transicion transition duration-300 ease-in-out ...
              className="ml-3 relative inline-flex items-center rounded-md border border-transparent bg-blue-700 px-10 py-2 text-lg font-bold text-white shadow-xl transition duration-300 ease-in-out hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2"
            >
              Cerrar sesion
              <PulseLoader
                className="ml-3"
                loading={loading}
                size={5}
                color="#ffffff"
              />
            </button>
          </div>
        </div>

        {/* Este es el navLink cuando el de arriba se esconde */}
        <div className="-ml-4 -mt-2 lg:hidden flex flex-wrap items-center justify-between sm:flex-nowrap md:px-12 px-2">
          <div className="ml-4 mt-2">
            <Link to="/home">
              {/* src={logo} */}
              <img
                // src="https://media.tenor.com/9xx5jJaHPpIAAAAd/fat-guy.gif"
                src="https://tenor.com/es-419/view/tired-sleepy-gif-27609170.gif"
                // src="https://placekitten.com/100/100"
                width={70}
                height={60}
              />
            </Link>
          </div>
          <div className="ml-4 mt-2 flex-shrink-0">
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={`
                ${open ? "" : "text-opacity-90"}
                focus:ring-none focus:outline-none`}
                  >
                    {open ? (
                      <GiCancel className="text-4xl" />
                    ) : (
                      <SlMenu className="text-4xl" />
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
                    <Popover.Panel className="absolute -left-20 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                          {solutions.map((item) => (
                            <NavLink
                              key={item.name}
                              to={item.href}
                              className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                            >
                              <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                                <item.icon aria-hidden="true" />
                              </div>
                              <div className="ml-4">
                                <p className="text-sm font-medium text-gray-900">
                                  {item.name}
                                </p>
                                <p className="text-sm text-gray-500">
                                  {item.description}
                                </p>
                              </div>
                            </NavLink>
                          ))}
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
                            className="ml-3 relative inline-flex items-center rounded-md border border-transparent bg-black px-10 py-2 text-lg font-bold text-white shadow-xl transition duration-300 ease-in-out hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2"
                          >
                            Cerrar sesion
                            <PulseLoader
                              className="ml-3"
                              loading={loading}
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

function IconTwo() {
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
        d="M28.0413 20L23.9998 13L19.9585 20M32.0828 27.0001L36.1242 34H28.0415M19.9585 34H11.8755L15.9171 27"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.804 30H29.1963L24.0001 21L18.804 30Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  );
}

function IconThree() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <rect x="13" y="32" width="2" height="4" fill="#FDBA74" />
      <rect x="17" y="28" width="2" height="8" fill="#FDBA74" />
      <rect x="21" y="24" width="2" height="12" fill="#FDBA74" />
      <rect x="25" y="20" width="2" height="16" fill="#FDBA74" />
      <rect x="29" y="16" width="2" height="20" fill="#FB923C" />
      <rect x="33" y="12" width="2" height="24" fill="#FB923C" />
    </svg>
  );
}

<NavLink
  to="/reglamento"
  className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-transparent hover:border-white transition duration-200 ease-in-out mx-3"
>
  reglamento
</NavLink>;
