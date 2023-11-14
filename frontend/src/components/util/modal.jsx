import { useEffect, useState } from "react";
import { PiWarningBold } from "react-icons/pi";

export const Modal = ({ isOpen, aceptar = true }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  return (
    <div
      className={`fixed z-50 inset-0 flex items-center justify-center ${
        open ? "" : "hidden"
      }`}>
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="fixed z-60 w-[95%] inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div className="sm:flex sm:items-start">
            <div className={`mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full ${aceptar ? 'bg-yellow-100' : 'bg-red-100' }  sm:mx-0 sm:h-10 sm:w-10 `}>
              <PiWarningBold className={`${aceptar ? 'text-yellow-600 text-2xl' : 'text-red-600 text-2xl'}`}/>
            </div>
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3
                className="text-lg leading-6 font-medium text-gray-900"
                id="modal-headline">
                {" "}
                { aceptar ? 'Aceptar': 'Rechazar' } Comite{" "}
              </h3>
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  {" "}
                  Se <span className="font-bold"> {aceptar ? 'Aceptara' : 'Rechazara'} el Comite</span> ¿Te
                  encuentras segur@ de la accion?{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button
            type="button"
            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-500 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
            {" "}
            {aceptar ? 'Aceptar' : 'Rechazar'}{" "}
          </button>
          <button
            type="button"
            className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            onClick={() => setOpen(false)}>
            {" "}
            Cancelar{" "}
          </button>
        </div>
      </div>
    </div>
  );
};
