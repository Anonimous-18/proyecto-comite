import { useEffect, useState } from "react";

export const Modal = ({ isOpen }) => {
  const [open, setOpen] = useState(false)

  useEffect(()=>{
    setOpen(isOpen);
  },[isOpen])

    return (
      <div className={`fixed z-50 inset-0 flex items-center justify-center ${open ? '' : 'hidden'}`}>
        <div className="fixed inset-0 bg-black opacity-50"></div>
        <div className="fixed z-60 bg-white rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Modal Title</h2>
          <p className="mb-4">Modal content goes here...</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={ ()=> setOpen(false) }>
            Close
          </button>
        </div>
      </div>
    );
  };
  
   