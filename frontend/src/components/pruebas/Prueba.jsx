import { useState, useEffect } from "react";
import { handleFileUpload } from "../../execelJson/xlsxJson";
import axios from 'axios'; 
const Prueba = () => {
  const [excelData, setExcelData] = useState([]); // Estado para almacenar los datos del archivo Excel // Estado para almacenar los datos del archivo Excel
  const [forceRenderKey, setForceRenderKey] = useState(0);

  const onFileUpload = (event) => {
    const data = handleFileUpload(event);
    setExcelData(data);
  };

  const enviarUsuarios = async()=>{
    await axios.post('http://localhost:5000/api/register/users', {
      data: excelData[0],
      cargo: 'Aprendiz'
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  
  }

  const forceRender = () => {
    setForceRenderKey((prevKey) => prevKey + 1);
  };
  return (
    <div>
      
      <label
        htmlFor="archivo"
        className="cursor-pointer flex items-center justify-center w-full md:w-64 h-12 md:h-16 px-4 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:bg-blue-600 text-2xl"
      >
        <span>Seleccionar archivo</span>
      </label>
      {/* Elemento de entrada oculto para seleccionar archivos */}
      <input
        type="file"
        id="archivo"
        name="archivo"
        accept=".xlsx"
        className="hidden"
        onChange={(e) => onFileUpload(e)}
      />
      <pre>{JSON.stringify(excelData[0], null, 2)}</pre>
      <button onClick={()=>{ forceRender();enviarUsuarios(); }}>Enviar</button>
    </div>
    
  );
};

export default Prueba;