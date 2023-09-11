// import XLSX from 'xlsx';
import { useState,useEffect } from "react";
import { handleFileUpload } from "../../execelJson/xlsxJson";
// import axios from "axios";

const Prueba = () => {
  const [excelData, setExcelData] = useState([]); // Estado para almacenar los datos del archivo Excel

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
