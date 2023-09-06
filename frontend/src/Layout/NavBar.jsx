import { Fragment, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { NavLink, Link, useNavigate } from "react-router-dom";

// ver https://www.npmjs.com/package/react-spinners | https://www.davidhu.io/react-spinners/
import PulseLoader from "react-spinners/PulseLoader"; // ...

export const NavBar = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("ANTES ", localStorage.getItem("newToken"));
    localStorage.removeItem("newToken");
    console.log("DESPUES", localStorage.getItem("newToken"));
    navigate(`/`);
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
    // Con id queremos identificar cada vez que hacemos scroll

    <nav
      id="navbar"
      className="w-full py-4 top-0 z-40 fixed bg-blue-800 border-2 border-blue-900"
    >
      <div className="px-4 sm:px-6">
        {/* Con esto hacemos que el navbar sea responsive ver tailwind.config.js (screen) */}
        <div className="-ml-4 -mt-2 hidden lg:flex flex-wrap items-center justify-between sm:flex-nowrap md:px-12 px-2">
          <div className="ml-4 mt-2">
            <Link to="/home">
              <img
                src={`../../img/logo-sena-negro-png-2022.png`}
                className=" w-10 h-9"
                height={60}
                // src="https://placekitten.com/100/100"
              />
            </Link>
          </div>
          <div className="ml-4 mt-2 flex-shrink-0">
            <NavLink
              to="/reglamento"
              className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-transparent hover:border-white transition duration-200 ease-in-out mx-3"
            >
              reglamento
            </NavLink>
            <NavLink
              to="/"
              className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-transparent hover:border-white transition duration-200 ease-in-out mx-3 col-auto"
            >
              <div className="text-center">
                <div className="mb-2">
                  <img
                    src={`../../img/logo-sena-negro-png-2022.png`}
                    className=" w-10 h-9"
                  />

                  <i className="fas fa-icon text-4xl text-blue-500"></i>
                </div>
                <p className="text-gray-600">Tu párrafo aquí</p>
              </div>
              Nombre de usuario
            </NavLink>
            <button
              onClick={() => handleClick()}
              // Transicion transition duration-300 ease-in-out ...
              className="ml-3 relative inline-flex items-center rounded-md border border-transparent bg-black px-10 py-2 text-lg font-bold text-white hover:text-black shadow-xl transition duration-300 ease-in-out hover:bg-white focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2"
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
        <div className="ml-4 -mt-2 lg:hidden flex flex-wrap items-center justify-between sm:flex-nowrap md:px-12 px-2">
          <div className="ml-4 mt-2">
            <Link to="/home">
              {/* src={logo} */}
              <img
                src="https://media.tenor.com/9xx5jJaHPpIAAAAd/fat-guy.gif"
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
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute -left-20 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                          <NavLink
                            to={`/home`}
                            className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                          >
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                              icono
                            </div>
                            <div className="ml-4">
                              <p className="text-sm font-medium text-gray-900">
                                nombre ejemplo
                              </p>
                              <p className="text-sm text-gray-500">
                                descripcion ejemplo
                              </p>
                            </div>
                          </NavLink>
                        </div>
                        <div className="bg-gray-50 p-4">
                          <button
                            onClick={() => handleClick()}
                            // Transicion transition duration-300 ease-in-out ...
                            className="ml-3 relative inline-flex items-center rounded-md border border-transparent bg-black px-10 py-2 text-lg font-bold text-white hover:text-black shadow-xl transition duration-300 ease-in-out hover:bg-white focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2"
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
