// import XLSX from 'xlsx';
import { useState } from "react";
import { handleFileUpload } from "../../execelJson/xlsxJson";
// import axios from "axios";

const Prueba = () => {
  const [excelData, setExcelData] = useState([]); // Estado para almacenar los datos del archivo Excel
  console.log(excelData)
  const onFileUpload = (event) => {
    const data =  handleFileUpload(event); // Llama a la función handleFileUpload
    setExcelData(data);
    console.log(excelData)
  };
  console.log(excelData)

  return (
    <div>
      <input type="file" accept=".xlsx" onChange={(e) =>onFileUpload(e)} />
      <pre>{JSON.stringify(excelData, null, 2)}</pre>
    </div>
  );
};

export default Prueba;
