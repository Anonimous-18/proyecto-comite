import { useState, useEffect } from "react";
import { handleFileUpload } from "../../execelJson/xlsxJson";

const Prueba = () => {
  const [excelData, setExcelData] = useState([]); // Estado para almacenar los datos del archivo Excel // Estado para almacenar los datos del archivo Excel
  const [forceRenderKey, setForceRenderKey] = useState(0);

  const onFileUpload = (event) => {
    const data = handleFileUpload(event);
    setExcelData(data);
  };

  useEffect(() => {
    // Esta función se ejecutará después de la actualización del estado.
    if (excelData.length > 0) {
      console.log("La longitud de excelData es:", excelData.length);
    }
  }, [excelData]);

  const forceRender = () => {
    // Incrementa la clave para forzar la renderización
    setForceRenderKey((prevKey) => prevKey + 1);
  };
  return (
    <div>
      <input type="file" accept=".xlsx" onChange={(e) => onFileUpload(e)} />
      <pre>{JSON.stringify(excelData[0], null, 2)}</pre>
      <button onClick={forceRender}>Forzar Renderización</button>
    </div>
  );
};

export default Prueba;