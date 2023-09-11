// import XLSX from 'xlsx';
import { useState,useEffect } from "react";
import { handleFileUpload } from "../../execelJson/xlsxJson";
// import axios from "axios";

const Prueba = () => {
  const [excelData, setExcelData] = useState([]); // Estado para almacenar los datos del archivo Excel
<<<<<<< HEAD
  console.log(excelData)
  const onFileUpload = async (event) => {
    const data = await handleFileUpload(event); // Llama a la función handleFileUpload
    setExcelData(data);
    console.log(excelData)
  };
  console.log(excelData)
=======
>>>>>>> 7adfa1f4271ed595f9992cc8267eb4f89c2722b8

  
  const onFileUpload = (event) => {
    const data = handleFileUpload(event);
    console.log(data);
    setExcelData(data);
  }
  return (
    <div>
      <input type="file" accept=".xlsx" onChange={(e) =>onFileUpload(e)} />
      <pre>{JSON.stringify(excelData[0], null, 2)}</pre>

    </div>
  );
};

export default Prueba;
