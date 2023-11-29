export const Example = () => {
  return (
    <div className="flex flex-col space-y-4 min-w-screen h-screen animated fadeIn faster fixed left-0 top-0 justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-gray-900">
      <div className="flex flex-col p-8 bg-white shadow-md hover:shodow-lg rounded-2xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-16 h-16 rounded-2xl p-3 border border-blue-100 text-blue-400 bg-blue-50"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <div className="flex flex-col ml-3">
              <div className="font-medium leading-none">
                Delete Your Acccount ?
              </div>
              <p className="text-sm text-gray-600 leading-none mt-1">
                By deleting your account you will lose your all data
              </p>
            </div>
          </div>
          <button className="flex-no-shrink bg-red-500 px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-red-500 text-white rounded-full">
            Delete
          </button>
        </div>
      </div>
      <div className="flex flex-col p-8 bg-gray-800 shadow-md hover:shodow-lg rounded-2xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-16 h-16 rounded-2xl p-3 border border-gray-800 text-blue-400 bg-gray-900"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <div className="flex flex-col ml-3">
              <div className="font-medium leading-none text-gray-100">
                Delete Your Acccount ?
              </div>
              <p className="text-sm text-gray-500 leading-none mt-1">
                By deleting your account you will lose your all data
              </p>
            </div>
          </div>
          <button className="flex-no-shrink bg-red-500 px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-red-500 text-white rounded-full">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
  // return (
  //   <main className="max-w-full h-full flex flex-col items-center justify-center">
  //       <article className="w-full h-full flex flex-row items-center justify-start">
  //         <h1 className="text-white text-center p-4 cursor-pointer bg-black rounded-bl-2xl">
  //           RECIBIDOS
  //         </h1>
  //       </article>
  //       <figure className="bg-transparent border border-black shadow shadow-black rounded-l-xl rounded-tr-xl flex flex-col 2xl:flex-row xl:flex-row lg:flex-row md:flex-col items-center justify-center w-full h-full">
  //         <div className="rounded-xl bg-gray-200 flex flex-col items-center justify-center text-center text-black w-32 2xl:w-72 xl:w-72 lg:w-72 md:w-72 sm:w-44 h-full">
  //           <BiSolidUser className="w-20 h-20 2xl:w-36 2xl:h-36 xl:w-36 xl:h-36 lg:w-36 lg:h-36 md:w-36 md:h-36 sm:w-24 sm:h-24" />
  //           <h1>nombre</h1>
  //         </div>

  //         {/* <div className="h-40 w-4/5 relative overflow-x-auto"> */}
  //         <div className="h-40 w-full relative overflow-x-auto">
  //           <p className="text-base p-11 w-30 text-black ">Sin mensajes...</p>
  //         </div>
  //       </figure>
  //       <div className="flex flex-row gap-3 items-start justify-start w-full h-16 mt-11">
  //         <Link
  //           to={`${
  //             localStorage.getItem("instructor")
  //               ? "/home-instructor"
  //               : localStorage.getItem("aprendiz")
  //               ? "/home-aprendiz"
  //               : localStorage.getItem("invitado")
  //               ? "/home-invitado"
  //               : localStorage.getItem("admin")
  //               ? "/home-admin"
  //               : "/"
  //           }`}
  //         >
  //           <button className="relative inline-flex items-center rounded-md border border-transparent bg-blue-700 px-10 py-2 font-bold text-white shadow-xl transition duration-300 ease-in-out hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2">
  //             Volver
  //           </button>
  //         </Link>
  //       </div>
  //     </main>
  // );
};
