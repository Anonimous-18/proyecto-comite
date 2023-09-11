// import XLSX from 'xlsx';
import { useState,useEffect } from "react";
import { handleFileUpload } from "../../execelJson/xlsxJson";
// import axios from "axios";

const Prueba = () => {
  const camposIniciales = {
    nombres: "",
    apellidos: "",
    documento: "",
  };
  const [persona, setPersona] = useState(camposIniciales);
  const [excelData, setExcelData] = useState([]); // Estado para almacenar los datos del archivo Excel
  const onFileUpload = (event) => {
    const data = handleFileUpload(event);
    console.log(data);
    setExcelData(data);
    
  }
  return (
    <div>
      <input type="file" accept=".xlsx" onChange={(e) =>onFileUpload(e)} />
      <pre>{JSON.stringify(excelData , null, 2)}</pre>

    </div>
  );
};

export default Prueba;
