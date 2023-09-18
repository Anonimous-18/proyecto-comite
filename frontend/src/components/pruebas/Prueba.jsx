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
      <input type="file" accept=".xlsx" onChange={(e) => onFileUpload(e)} />
      <pre>{JSON.stringify(excelData[0], null, 2)}</pre>
      <button onClick={()=>{ forceRender();enviarUsuarios(); }}>Enviar</button>
    </div>
  );
};

export default Prueba;