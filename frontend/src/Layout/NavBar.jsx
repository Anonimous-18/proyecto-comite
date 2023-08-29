import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";

// ver https://www.npmjs.com/package/react-spinners | https://www.davidhu.io/react-spinners/
import PulseLoader from "react-spinners/PulseLoader"; // ...

export const NavBar = () => {
  const [loading, setLoading] = useState(true);

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
      name: "Casos",
      description: "Measure actions your users take",
      href: "/casos",
      icon: IconOne,
    },
    {
      name: "Servicios",
      description: "Create your own targeted content",
      href: "/servicios",
      icon: IconTwo,
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

    <nav id="navbar" className="bg-gradient-to-r from-blue-800 from-10% via-sky-400 via-30% to-blue-700 to-90% h-20">
      <div className="px-4 sm:px-6">
        {/* Con esto hacemos que el navbar sea responsive ver tailwind.config.js (screen) */}
        <div className="-ml-4 -mt-2 hidden lg:flex  flex flex-wrap items-center justify-between sm:flex-nowrap md:px-12 px-2">
          <div className="ml-4 mt-2">
            <Link to="/">
              <img
                src="https://media.tenor.com/9xx5jJaHPpIAAAAd/fat-guy.gif"
                width={70}
                height={60}
                // src="https://placekitten.com/100/100"
              />
            </Link>
          </div>
          <div className="ml-4 mt-2 flex-shrink-0">
            <NavLink
              to="/"
              className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-transparent hover:border-purple-800 transition duration-200 ease-in-out mx-3">
              Casos
            </NavLink>
            <NavLink
              to="/"
              className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-transparent hover:border-purple-800 transition duration-200 ease-in-out mx-3">
              Servicios
            </NavLink>
            <NavLink
              to="/"
              className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-transparent hover:border-purple-800 transition duration-200 ease-in-out mx-3">
              Nosotros
            </NavLink>
            <NavLink
              to="/"
              className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-transparent hover:border-purple-800 transition duration-200 ease-in-out mx-3">
              Carreras
            </NavLink>
            <NavLink
              to="/"
              className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-transparent hover:border-purple-800 transition duration-200 ease-in-out mx-3">
              Blog
            </NavLink>
            <NavLink
              to="/"
              className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-transparent hover:border-purple-800 transition duration-200 ease-in-out mx-3">
              Contacto
            </NavLink>
            <button
              to="/register"
                    type="submit"
                    className=" text-lg inline-flex font-medium leading-6 place-items-center flex flex-col items-center justify-center p-0.5 overflow-hidden  text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-400 to-blue-600 group-hover:from-cyan-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-sky-500 dark:focus:ring-blue-800">
                    <span className="relative px-8 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Cerrar Sesion
                      <PulseLoader
                    className="ml-3"
                    loading={loading}
                    size={5}
                    color="#000000"
                    />
                    </span>
                  </button>
          </div>
        </div>

        {/* Este es el navLink cuando el de arriba se esconde */}
        <div className="-ml-4 -mt-2 lg:hidden flex  flex flex-wrap items-center justify-between sm:flex-nowrap md:px-12 px-2">
          <div className="ml-4 mt-2">
            <Link to="/">
              {/* src={logo} */}
              <img
                src="https://media.tenor.com/9xx5jJaHPpIAAAAd/fat-guy.gif"
                width={70}
                height={60}
                // src="data:image/png;base64,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"
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
                focus:ring-none focus:outline-none`}>
                    {open ? (
                      <i className="bx bx-x text-4xl"></i>
                    ) : (
                      <i className="bx bx-menu text-4xl"></i>
                    )}
                  </Popover.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1">
                    <Popover.Panel className="absolute -left-20 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                          {solutions.map((item) => (
                            <NavLink
                              key={item.name}
                              to={item.href}
                              className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50">
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
                        </div>
                        <div className="bg-gray-50 p-4">
                          <Link
                            to="/contacto"
                            className="ml-3 relative inline-flex items-center rounded-md border border-transparent bg-black px-10 py-2 text-lg font-bold text-white shadow-xl transition duration-300 ease-in-out hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2">
                            Hire us
                            <PulseLoader
                              className="ml-3"
                              loading={loading}
                              size={5}
                              color="#ffffff"
                            />
                          </Link>
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
      xmlns="http://www.w3.org/2000/svg">
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
      xmlns="http://www.w3.org/2000/svg">
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
      xmlns="http://www.w3.org/2000/svg">
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
